import { legalEntity } from "@/lib/legal"
import {
  escapeHtml,
  getEmailDeliveryConfig,
  isSameOriginRequest,
  requestBodyIsTooLarge,
  sendEmail,
} from "@/lib/server/email"
import {
  calculateWorkflowOpportunity,
  getCapacityReturnScenario,
  HOURS_PER_WORKWEEK,
  isCapacityReturnPercent,
  WORKING_WEEKS_PER_YEAR,
} from "@/lib/workflow-opportunity"

export const runtime = "nodejs"

const currencies = new Set(["USD", "EUR", "GBP"])
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function readString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

function readNumber(value: unknown) {
  const parsed = typeof value === "number" ? value : Number(value)
  return Number.isFinite(parsed) ? parsed : Number.NaN
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return Response.json({ error: "Request origin was not accepted." }, { status: 403 })
  }

  if (requestBodyIsTooLarge(request)) {
    return Response.json({ error: "Request is too large." }, { status: 413 })
  }

  let body: Record<string, unknown>

  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return Response.json({ error: "Request body is invalid." }, { status: 400 })
  }

  if (readString(body.website, 200)) {
    return Response.json({ ok: true })
  }

  const name = readString(body.name, 120)
  const email = readString(body.email, 254).toLowerCase()
  const currency = readString(body.currency, 3).toUpperCase()
  const people = readNumber(body.people)
  const hoursPerPersonPerWeek = readNumber(body.hoursPerPersonPerWeek)
  const annualEmploymentCost = readNumber(body.annualEmploymentCost)
  const capacityReturnPercent = readNumber(body.capacityReturnPercent)
  const consent = body.consent === true

  if (
    !emailPattern.test(email) ||
    !currencies.has(currency) ||
    !Number.isFinite(people) ||
    people < 1 ||
    people > 500 ||
    !Number.isFinite(hoursPerPersonPerWeek) ||
    hoursPerPersonPerWeek < 0.5 ||
    hoursPerPersonPerWeek > 40 ||
    !Number.isFinite(annualEmploymentCost) ||
    annualEmploymentCost < 0 ||
    annualEmploymentCost > 1_000_000 ||
    !isCapacityReturnPercent(capacityReturnPercent) ||
    !consent
  ) {
    return Response.json({ error: "Check the estimate and email fields." }, { status: 400 })
  }

  const config = getEmailDeliveryConfig()

  if (!config) {
    return Response.json({ error: "Email delivery is not configured." }, { status: 503 })
  }

  const result = calculateWorkflowOpportunity({
    people,
    hoursPerPersonPerWeek,
    annualEmploymentCost,
    capacityReturnPercent,
  })
  const capacityReturnScenario = getCapacityReturnScenario(
    capacityReturnPercent
  )
  const currencyFormatter = new Intl.NumberFormat("en", {
    currency,
    maximumFractionDigits: 0,
    style: "currency",
  })
  const numberFormatter = new Intl.NumberFormat("en", {
    maximumFractionDigits: 0,
  })
  const greeting = name ? `Hi ${name},` : "Hello,"
  const privacyUrl = process.env.NEXT_PUBLIC_CANONICAL_URL
    ? new URL("/privacy", process.env.NEXT_PUBLIC_CANONICAL_URL).toString()
    : null
  const address = legalEntity.mailingAddress.join(", ")
  const resultText = [
    greeting,
    "",
    "Here is your Layers workflow opportunity estimate.",
    "",
    `Estimated annual capacity value: ${currencyFormatter.format(result.returnedCapacityValue)}`,
    `Hours returned: ${numberFormatter.format(result.returnedHours)}`,
    `Working weeks returned: ${numberFormatter.format(result.returnedHours / HOURS_PER_WORKWEEK)}`,
    `Current workflow value: ${currencyFormatter.format(result.currentAnnualEffortValue)}`,
    "",
    `Inputs: ${people} people × ${hoursPerPersonPerWeek} hours per person each week × ${currencyFormatter.format(annualEmploymentCost)} annual employment cost.`,
    `Capacity assumption: ${capacityReturnScenario.label} (${capacityReturnPercent}% of repeat effort returned).`,
    `Method: ${WORKING_WEEKS_PER_YEAR} working weeks for a suitable recurring workflow redesigned end to end.`,
    "",
    "This is a capacity estimate, not guaranteed cash or headcount savings. It excludes implementation and model costs.",
    "",
    `Layers is operated by ${legalEntity.legalName}.`,
    address,
  ].join("\n")
  const resultHtml = `
    <p>${escapeHtml(greeting)}</p>
    <p>Here is your Layers workflow opportunity estimate.</p>
    <h1>${escapeHtml(currencyFormatter.format(result.returnedCapacityValue))}</h1>
    <p><strong>Estimated annual capacity value</strong></p>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;border:1px solid #d8dce5">
      <tr><td>Hours returned</td><td><strong>${escapeHtml(numberFormatter.format(result.returnedHours))}</strong></td></tr>
      <tr><td>Working weeks returned</td><td><strong>${escapeHtml(numberFormatter.format(result.returnedHours / HOURS_PER_WORKWEEK))}</strong></td></tr>
      <tr><td>Current workflow value</td><td><strong>${escapeHtml(currencyFormatter.format(result.currentAnnualEffortValue))}</strong></td></tr>
    </table>
    <p><strong>Inputs:</strong> ${people} people × ${hoursPerPersonPerWeek} hours per person each week × ${escapeHtml(currencyFormatter.format(annualEmploymentCost))} annual employment cost.</p>
    <p><strong>Capacity assumption:</strong> ${capacityReturnScenario.label} (${capacityReturnPercent}% of repeat effort returned).</p>
    <p><strong>Method:</strong> ${WORKING_WEEKS_PER_YEAR} working weeks for a suitable recurring workflow redesigned end to end.</p>
    <p>This is a capacity estimate, not guaranteed cash or headcount savings. It excludes implementation and model costs.</p>
    <hr />
    <p style="color:#5b6474;font-size:12px">Layers is operated by ${legalEntity.legalName}. ${escapeHtml(address)}${privacyUrl ? ` · <a href="${escapeHtml(privacyUrl)}">Privacy</a>` : ""}</p>
  `
  const consentTimestamp = new Date().toISOString()
  const internalText = [
    "Workflow estimate email requested",
    "",
    `Name: ${name || "Not provided"}`,
    `Email: ${email}`,
    `Marketing preference accepted: yes`,
    `Recorded at: ${consentTimestamp}`,
    "",
    resultText,
  ].join("\n")
  const internalHtml = `
    <h1>Workflow estimate email requested</h1>
    <p><strong>Name:</strong> ${escapeHtml(name || "Not provided")}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Marketing preference accepted:</strong> yes</p>
    <p><strong>Recorded at:</strong> ${escapeHtml(consentTimestamp)}</p>
    <hr />
    ${resultHtml}
  `

  try {
    await Promise.all([
      sendEmail(config, {
        html: resultHtml,
        subject: "Your Layers workflow opportunity estimate",
        text: resultText,
        to: email,
      }),
      sendEmail(config, {
        html: internalHtml,
        replyTo: email,
        subject: "Workflow estimate email requested",
        text: internalText,
        to: config.internalRecipient,
      }),
    ])
  } catch {
    return Response.json({ error: "Email could not be delivered." }, { status: 502 })
  }

  return Response.json({ ok: true })
}
