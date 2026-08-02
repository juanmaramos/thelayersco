import { IconArrowNarrowRight } from "@tabler/icons-react"

import { HeroWorkflowCasefile } from "@/components/illustrations/casefile-illustrations"
import { TrackedAnchor } from "@/components/site/tracked-anchor"
import { buttonVariants } from "@/components/ui/button"

const promise = [
  "One workflow",
  "One baseline",
  "One accountable team",
  "One measurable result",
]

export function HeroSection() {
  return (
    <section
      className="section-anchor bg-signal-strong text-on-ink"
      data-theme="signal"
      id="top"
    >
      <div className="section-shell">
        <div className="grid min-h-[calc(100svh-4.5rem)] border-x border-white/25 md:grid-cols-12">
          <div className="hero-enter flex flex-col justify-center gap-10 border-b border-white/25 px-5 py-14 sm:px-8 sm:py-16 md:col-span-6 md:border-r md:border-b-0 md:px-10 md:py-16 lg:col-span-7 lg:px-12">
            <div className="flex max-w-3xl flex-col gap-7">
              <p className="operational-label text-on-ink">
                Workflow transformation + implementation
              </p>
              <h1 className="max-w-[14ch] text-[clamp(3.25rem,5.2vw,4.75rem)] leading-[0.92] font-semibold tracking-[-0.06em]">
                Reduce the time and expert effort behind complex workflows.
              </h1>
              <p className="max-w-[58ch] text-lead tracking-[-0.015em] text-on-ink">
                We select one recurring People, Workforce, or
                professional-services process, redesign how work moves from
                source to approved output, and implement the production system
                required to run it.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p className="max-w-[62ch] border-l border-white/50 pl-4 text-sm leading-6 text-on-ink sm:text-base">
                <span className="font-semibold text-on-ink">Initial focus:</span>{" "}
                People and Workforce operations, with professional-services
                delivery as a second application.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <TrackedAnchor
                  className={buttonVariants({ size: "cta" })}
                  eventName="cta_click"
                  eventProperties={{ location: "hero" }}
                  href="#discuss"
                >
                  Discuss a workflow
                  <IconArrowNarrowRight data-icon="inline-end" />
                </TrackedAnchor>
                <TrackedAnchor
                  className={buttonVariants({ variant: "inverseOutline", size: "cta" })}
                  eventName="cta_click"
                  eventProperties={{ location: "hero_secondary" }}
                  href="#control"
                >
                  See a representative case
                </TrackedAnchor>
              </div>
            </div>
          </div>

          <div className="hero-enter-delayed flex min-w-0 items-center px-4 py-10 sm:px-8 md:col-span-6 md:px-6 md:py-16 lg:col-span-5 lg:px-8">
            <div className="w-full">
              <HeroWorkflowCasefile className="mx-auto max-h-[43rem] max-w-[46rem]" />
              <p className="mt-5 border-t border-white/30 pt-4 font-mono text-[0.625rem] leading-5 tracking-[0.06em] text-on-ink sm:hidden">
                SOURCE PACKAGE → CASE BRIEF → EXPERT REVIEW → APPROVED PREPARATION
              </p>
            </div>
          </div>
        </div>

        <div className="border-x border-t border-white/25">
          <p className="sr-only">
            One workflow, one baseline, one accountable implementation team,
            and one measurable result.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4" aria-hidden="true">
            {promise.map((item, index) => (
              <li
                className="border-b border-white/25 px-5 py-5 font-mono text-[0.6875rem] leading-5 tracking-[0.12em] uppercase last:border-b-0 sm:px-8 sm:[&:nth-child(odd)]:border-r lg:border-r lg:border-b-0 lg:last:border-r-0"
                key={item}
              >
                <span className="mr-3 text-on-ink">0{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
