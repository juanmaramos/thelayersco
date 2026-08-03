import { afterEach, describe, expect, it, vi } from "vitest"

afterEach(() => {
  vi.unstubAllEnvs()
  vi.resetModules()
})

describe("siteConfig", () => {
  it("allows a release when the canonical URL and both email flows are ready", async () => {
    vi.stubEnv("NEXT_PUBLIC_CANONICAL_URL", "https://thelayersco.com")
    vi.stubEnv("RESEND_API_KEY", "test-key")
    vi.stubEnv("EMAIL_FROM", "Layers <hello@thelayersco.com>")
    vi.stubEnv("CONTACT_TO_EMAIL", "inbox@thelayersco.com")

    const { siteConfig } = await import("./site-config")

    expect(siteConfig.formEndpoint).toBe("/api/contact")
    expect(siteConfig.estimateEndpoint).toBe("/api/estimate")
    expect(siteConfig.releaseReady).toBe(true)
    expect(siteConfig.analyticsReady).toBe(false)
  })

  it("enables analytics only when the Umami host and website ID are present", async () => {
    vi.stubEnv("NEXT_PUBLIC_UMAMI_HOST", "https://cloud.umami.is")
    vi.stubEnv("NEXT_PUBLIC_UMAMI_WEBSITE_ID", "website-id")

    const { siteConfig } = await import("./site-config")

    expect(siteConfig.analyticsReady).toBe(true)
    expect(siteConfig.analyticsHost).toBe("https://cloud.umami.is/")
    expect(siteConfig.analyticsWebsiteId).toBe("website-id")
  })

  it("keeps an incomplete email configuration out of release mode", async () => {
    vi.stubEnv("NEXT_PUBLIC_CANONICAL_URL", "https://thelayersco.com")
    vi.stubEnv("RESEND_API_KEY", "test-key")
    vi.stubEnv("EMAIL_FROM", "Layers <hello@thelayersco.com>")

    const { siteConfig } = await import("./site-config")

    expect(siteConfig.releaseReady).toBe(false)
  })
})
