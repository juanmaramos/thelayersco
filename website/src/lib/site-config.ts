const readValue = (value: string | undefined) => value?.trim() || null

const readUrl = (value: string | undefined) => {
  const candidate = readValue(value)

  if (!candidate) {
    return null
  }

  try {
    return new URL(candidate).toString()
  } catch {
    return null
  }
}

const readHref = (value: string | undefined) => {
  const candidate = readValue(value)

  if (!candidate) {
    return null
  }

  return candidate.startsWith("/") ? candidate : readUrl(candidate)
}

const readDeploymentUrl = (value: string | undefined) => {
  const hostname = readValue(value)

  if (!hostname) {
    return null
  }

  return readUrl(
    hostname.startsWith("http://") || hostname.startsWith("https://")
      ? hostname
      : `https://${hostname}`
  )
}

const configuredCompanyName = readValue(
  process.env.NEXT_PUBLIC_COMPANY_NAME
)
const configuredCanonicalUrl = readUrl(
  process.env.NEXT_PUBLIC_CANONICAL_URL
)
const configuredFormEndpoint = readHref(
  process.env.NEXT_PUBLIC_FORM_ENDPOINT
)
const configuredEstimateEndpoint = readHref(
  process.env.NEXT_PUBLIC_ESTIMATE_ENDPOINT
)
const configuredPrivacyUrl = readHref(
  process.env.NEXT_PUBLIC_PRIVACY_URL
)
const configuredTermsUrl = readHref(
  process.env.NEXT_PUBLIC_TERMS_URL
)
const configuredAnalyticsReady =
  readValue(process.env.NEXT_PUBLIC_ANALYTICS_READY) === "true"
const deploymentUrl =
  readDeploymentUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  readDeploymentUrl(process.env.VERCEL_URL)
const emailDeliveryReady = Boolean(
  readValue(process.env.RESEND_API_KEY) &&
    readValue(process.env.EMAIL_FROM) &&
    readValue(process.env.CONTACT_TO_EMAIL)
)

export const siteConfig = {
  companyName: configuredCompanyName ?? "Layers",
  companyNameIsFallback: configuredCompanyName === null,
  publicLocation: "Sheridan, Wyoming, United States",
  contactEmail: readValue(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  formEndpoint:
    configuredFormEndpoint ?? (emailDeliveryReady ? "/api/contact" : null),
  estimateEndpoint:
    configuredEstimateEndpoint ?? (emailDeliveryReady ? "/api/estimate" : null),
  privacyUrl: configuredPrivacyUrl ?? "/privacy",
  termsUrl: configuredTermsUrl ?? "/terms",
  schedulingUrl: readUrl(process.env.NEXT_PUBLIC_SCHEDULING_URL),
  canonicalUrl: configuredCanonicalUrl,
  analyticsReady: configuredAnalyticsReady,
  metadataBaseUrl:
    configuredCanonicalUrl ?? deploymentUrl ?? "http://localhost:3000",
  releaseReady: Boolean(
    configuredCanonicalUrl &&
      (configuredFormEndpoint || emailDeliveryReady) &&
      configuredAnalyticsReady
  ),
} as const

export const siteDescription =
  "Layers redesigns recurring business workflows and builds AI-enabled systems that teams can control and measure."
