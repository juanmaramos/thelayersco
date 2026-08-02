export type LandingEventName =
  | "cta_click"
  | "practice_interest"
  | "form_start"
  | "validation_error"
  | "submit_success"
  | "submit_failure"
  | "scheduling_click"

type LandingEventProperties = Record<string, string | number | boolean>

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
}
