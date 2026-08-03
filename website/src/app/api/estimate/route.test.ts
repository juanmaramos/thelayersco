import { afterEach, describe, expect, it, vi } from "vitest"

import { POST } from "./route"

const deliveryResponse = () =>
  new Response(JSON.stringify({ id: "email_123" }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  })

function request(body: Record<string, unknown>) {
  return new Request("https://thelayersco.com/api/estimate", {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      origin: "https://thelayersco.com",
    },
    method: "POST",
  })
}

describe("POST /api/estimate", () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
  })

  it("sends the estimate and a private consent record", async () => {
    vi.stubEnv("RESEND_API_KEY", "test-key")
    vi.stubEnv("EMAIL_FROM", "Layers <hello@thelayersco.com>")
    vi.stubEnv("CONTACT_TO_EMAIL", "owner@example.com")
    vi.stubEnv("NEXT_PUBLIC_CANONICAL_URL", "https://thelayersco.com")
    const fetchMock = vi.fn().mockResolvedValue(deliveryResponse())
    vi.stubGlobal("fetch", fetchMock)

    const response = await POST(
      request({
        annualEmploymentCost: 100_000,
        capacityReturnPercent: 50,
        consent: true,
        currency: "USD",
        email: "operator@example.com",
        hoursPerPersonPerWeek: 10,
        name: "Ada",
        people: 6,
        website: "",
      })
    )

    expect(response.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledTimes(2)
    const recipientBodies = fetchMock.mock.calls.map((call) =>
      JSON.parse(String(call[1].body))
    )
    expect(recipientBodies.map((body) => body.to)).toEqual([
      "operator@example.com",
      "owner@example.com",
    ])
    expect(recipientBodies[0].text).toContain("$75,000")
    expect(recipientBodies[0].text).toContain("Expected (50%")
    expect(recipientBodies[0].text).toContain("Talk through your estimate")
    expect(recipientBodies[0].html).toContain(
      "Turn the number into a workflow decision."
    )
    expect(recipientBodies[0].html).toContain(
      "utm_content=primary_cta#discuss"
    )
    expect(recipientBodies[0].html).toContain('role="presentation"')
    expect(recipientBodies[0].html).toContain("reply with “unsubscribe.”")
    expect(recipientBodies[1].text).toContain(
      "Marketing preference accepted: yes"
    )
  })

  it("does not send when the required preference is unchecked", async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal("fetch", fetchMock)

    const response = await POST(
      request({
        annualEmploymentCost: 100_000,
        capacityReturnPercent: 50,
        consent: false,
        currency: "USD",
        email: "operator@example.com",
        hoursPerPersonPerWeek: 10,
        people: 6,
        website: "",
      })
    )

    expect(response.status).toBe(400)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it("rejects unsupported capacity assumptions", async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal("fetch", fetchMock)

    const response = await POST(
      request({
        annualEmploymentCost: 100_000,
        capacityReturnPercent: 45,
        consent: true,
        currency: "USD",
        email: "operator@example.com",
        hoursPerPersonPerWeek: 10,
        people: 6,
        website: "",
      })
    )

    expect(response.status).toBe(400)
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
