"use client"

import { useCallback } from "react"
import { IconArrowNarrowRight } from "@tabler/icons-react"

import { buttonVariants } from "@/components/ui/button"
import { trackLandingEvent } from "@/lib/analytics"
import type { PracticeInterest } from "@/lib/workflow-form"
import { cn } from "@/lib/utils"

type PracticeInterestLinkProps = {
  interest: Exclude<PracticeInterest, "general">
  children: React.ReactNode
}

export function PracticeInterestLink({
  interest,
  children,
}: PracticeInterestLinkProps) {
  const handleClick = useCallback(
    () => {
      window.dispatchEvent(
        new CustomEvent<PracticeInterest>("layers:practice-interest", {
          detail: interest,
        })
      )
      trackLandingEvent("practice_interest", { interest })

      window.requestAnimationFrame(() => {
        document
          .querySelector<HTMLTextAreaElement>('[name="workflow"]')
          ?.focus({ preventScroll: true })
      })
    },
    [interest]
  )

  return (
    <a
      className={cn(
        buttonVariants({ variant: "link", size: "text" }),
        "group w-fit"
      )}
      href="#discuss"
      onClick={handleClick}
    >
      {children}
      <IconArrowNarrowRight
        className="text-action-arrow"
        data-icon="inline-end"
      />
    </a>
  )
}
