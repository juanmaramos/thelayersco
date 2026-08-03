import { afterEach, describe, expect, it, vi } from "vitest"

import { POST } from "./route"

const deliveryResponse = () =>
  new Response(JSON.stringify({ id: "email_123" }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  })

function request(body: Record<string, unknown>, origin = "https://thelayersco.com") {
  return new Request(`${origin}/api/contact`, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      origin,
    },
    method: "POST",
  })
}

describe("POST /api/contact", () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
  })

  it("sends a validated inquiry only to the internal recipient", async () => {
    vi.stubEnv("RESEND_API_KEY", "test-key")
    vi.stubEnv("EMAIL_FROM", "Layers <hello@thelayersco.com>")
    vi.stubEnv("CONTACT_TO_EMAIL", "owner@example.com")
    const fetchMock = vi.fn().mockResolvedValue(deliveryResponse())
    vi.stubGlobal("fetch", fetchMock)

    const response = await POST(
      request({
        email: "operator@example.com",
        organization: "Example Co",
        practiceInterest: "general",
        role: "COO",
        workflow: "Prepare a recurring operating report.",
        website: "",
      })
    )

    expect(response.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledOnce()
    const resendRequest = fetchMock.mock.calls[0][1]
    const resendBody = JSON.parse(String(resendRequest.body))
    expect(resendBody.to).toBe("owner@example.com")
    expect(resendBody.reply_to).toBe("operator@example.com")
  })

  it("rejects a request from another origin", async () => {
    const response = await POST(
      new Request("https://thelayersco.com/api/contact", {
        body: "{}",
        headers: {
          "Content-Type": "application/json",
          origin: "https://example.com",
        },
        method: "POST",
      })
    )

    expect(response.status).toBe(403)
  })
})
