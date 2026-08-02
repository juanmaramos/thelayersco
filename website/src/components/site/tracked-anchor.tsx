"use client"

import { useCallback, type AnchorHTMLAttributes, type MouseEvent } from "react"

import {
  trackLandingEvent,
  type LandingEventName,
} from "@/lib/analytics"

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: LandingEventName
  eventProperties?: Record<string, string | number | boolean>
}

export function TrackedAnchor({
  eventName,
  eventProperties,
  onClick,
  ...props
}: TrackedAnchorProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event)

      if (!event.defaultPrevented) {
        trackLandingEvent(eventName, eventProperties)
      }
    },
    [eventName, eventProperties, onClick]
  )

  return <a {...props} onClick={handleClick} />
}
