import { afterEach, describe, expect, it, vi } from "vitest"

import { trackLandingEvent } from "./analytics"

afterEach(() => {
  vi.unstubAllGlobals()
})

describe("trackLandingEvent", () => {
  it("emits a coarse landing event without form values", () => {
    const dispatchEvent = vi.fn()
    vi.stubGlobal("window", { dispatchEvent })

    trackLandingEvent("cta_click", { location: "hero" })

    expect(dispatchEvent).toHaveBeenCalledOnce()
    const event = dispatchEvent.mock.calls[0]?.[0]

    expect(event).toBeInstanceOf(CustomEvent)
    expect(event.type).toBe("layers:landing-event")
    expect(event.detail).toEqual({
      name: "cta_click",
      properties: { location: "hero" },
    })
  })

  it("does nothing during server rendering", () => {
    vi.stubGlobal("window", undefined)

    expect(() => trackLandingEvent("form_start")).not.toThrow()
  })

  it("emits a calculator start without exposing its inputs", () => {
    const dispatchEvent = vi.fn()
    vi.stubGlobal("window", { dispatchEvent })

    trackLandingEvent("calculator_start")

    const event = dispatchEvent.mock.calls[0]?.[0]
    expect(event.detail).toEqual({
      name: "calculator_start",
      properties: {},
    })
  })
})
