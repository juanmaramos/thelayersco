export type LandingEventName =
  | "cta_click"
  | "calculator_start"
  | "practice_interest"
  | "form_start"
  | "validation_error"
  | "submit_success"
  | "submit_failure"
  | "scheduling_click"

type LandingEventProperties = Record<string, string | number | boolean>

declare global {
  interface Window {
    umami?: {
      track: (
        name: LandingEventName,
        properties?: LandingEventProperties
      ) => void
    }
  }
}

export function trackLandingEvent(
  name: LandingEventName,
  properties: LandingEventProperties = {}
) {
  if (typeof window === "undefined") {
    return
  }

  window.dispatchEvent(
    new CustomEvent("layers:landing-event", {
      detail: { name, properties },
    })
  )
  window.umami?.track(name, properties)
}
