const resendEndpoint = "https://api.resend.com/emails"

export type EmailDeliveryConfig = {
  apiKey: string
  from: string
  internalRecipient: string
}

export type EmailMessage = {
  bcc?: string | string[]
  html: string
  replyTo?: string
  subject: string
  text: string
  to: string | string[]
}

const readValue = (value: string | undefined) => value?.trim() || null

export function getEmailDeliveryConfig(): EmailDeliveryConfig | null {
  const apiKey = readValue(process.env.RESEND_API_KEY)
  const from = readValue(process.env.EMAIL_FROM)
  const internalRecipient = readValue(process.env.CONTACT_TO_EMAIL)

  if (!apiKey || !from || !internalRecipient) {
    return null
  }

  return { apiKey, from, internalRecipient }
}

export async function sendEmail(
  config: EmailDeliveryConfig,
  message: EmailMessage
) {
  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.from,
      to: message.to,
      bcc: message.bcc,
      reply_to: message.replyTo,
      subject: message.subject,
      html: message.html,
      text: message.text,
    }),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Email provider returned ${response.status}`)
  }
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export function isSameOriginRequest(request: Request) {
  const origin = request.headers.get("origin")

  if (!origin) {
    return false
  }

  return origin === new URL(request.url).origin
}

export function requestBodyIsTooLarge(request: Request, maxBytes = 24_000) {
  const contentLength = Number(request.headers.get("content-length"))
  return Number.isFinite(contentLength) && contentLength > maxBytes
}
