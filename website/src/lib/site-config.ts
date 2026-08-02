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
const configuredFormEndpoint = readUrl(
  process.env.NEXT_PUBLIC_FORM_ENDPOINT
)
const configuredPrivacyUrl = readUrl(
  process.env.NEXT_PUBLIC_PRIVACY_URL
)
const configuredTermsUrl = readUrl(
  process.env.NEXT_PUBLIC_TERMS_URL
)
const configuredAnalyticsReady =
  readValue(process.env.NEXT_PUBLIC_ANALYTICS_READY) === "true"
const deploymentUrl =
  readDeploymentUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  readDeploymentUrl(process.env.VERCEL_URL)

export const siteConfig = {
  companyName: configuredCompanyName ?? "Layers",
  companyNameIsFallback: configuredCompanyName === null,
  contactEmail: readValue(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  formEndpoint: configuredFormEndpoint,
  privacyUrl: configuredPrivacyUrl,
  termsUrl: configuredTermsUrl,
  schedulingUrl: readUrl(process.env.NEXT_PUBLIC_SCHEDULING_URL),
  canonicalUrl: configuredCanonicalUrl,
  analyticsReady: configuredAnalyticsReady,
  metadataBaseUrl:
    configuredCanonicalUrl ?? deploymentUrl ?? "http://localhost:3000",
  releaseReady: Boolean(
    configuredCanonicalUrl &&
      configuredFormEndpoint &&
      configuredPrivacyUrl &&
      configuredTermsUrl &&
      configuredAnalyticsReady
  ),
} as const

export const siteDescription =
  "Layers redesigns recurring workflows, puts them into production with the right controls, and measures the result against today’s baseline."
