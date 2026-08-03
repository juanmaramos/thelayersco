import {
  escapeHtml,
  getEmailDeliveryConfig,
  isSameOriginRequest,
  requestBodyIsTooLarge,
  sendEmail,
} from "@/lib/server/email"
import {
  normalizeWorkflowForm,
  validateWorkflowForm,
  type PracticeInterest,
  type WorkflowFormValues,
} from "@/lib/workflow-form"

export const runtime = "nodejs"

const practiceInterests = new Set<PracticeInterest>([
  "general",
  "people-workforce",
  "professional-services",
])

function readString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.slice(0, maxLength) : ""
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

  const practiceInterest = readString(body.practiceInterest, 40)
  const values: WorkflowFormValues = {
    email: readString(body.email, 254),
    workflow: readString(body.workflow, 4_000),
    organization: readString(body.organization, 200),
    role: readString(body.role, 200),
    practiceInterest: practiceInterests.has(practiceInterest as PracticeInterest)
      ? (practiceInterest as PracticeInterest)
      : "general",
  }
  const errors = validateWorkflowForm(values)

  if (Object.keys(errors).length > 0) {
    return Response.json({ error: "Check the required fields." }, { status: 400 })
  }

  const config = getEmailDeliveryConfig()

  if (!config) {
    return Response.json({ error: "Email delivery is not configured." }, { status: 503 })
  }

  const normalized = normalizeWorkflowForm(values)
  const organizationLabel = normalized.organization || "Not provided"
  const roleLabel = normalized.role || "Not provided"
  const subjectOrganization = normalized.organization
    ? ` — ${normalized.organization.replace(/[\r\n]+/g, " ").slice(0, 80)}`
    : ""
  const text = [
    "New Layers workflow inquiry",
    "",
    `Email: ${normalized.email}`,
    `Organization: ${organizationLabel}`,
    `Role: ${roleLabel}`,
    `Practice interest: ${normalized.practiceInterest}`,
    "",
    "Workflow:",
    normalized.workflow,
  ].join("\n")
  const html = `
    <h1>New Layers workflow inquiry</h1>
    <p><strong>Email:</strong> ${escapeHtml(normalized.email)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(organizationLabel)}</p>
    <p><strong>Role:</strong> ${escapeHtml(roleLabel)}</p>
    <p><strong>Practice interest:</strong> ${escapeHtml(normalized.practiceInterest)}</p>
    <h2>Workflow</h2>
    <p>${escapeHtml(normalized.workflow).replaceAll("\n", "<br />")}</p>
  `

  try {
    await sendEmail(config, {
      html,
      replyTo: normalized.email,
      subject: `New Layers workflow inquiry${subjectOrganization}`,
      text,
      to: config.internalRecipient,
    })
  } catch {
    return Response.json({ error: "Email could not be delivered." }, { status: 502 })
  }

  return Response.json({ ok: true })
}
