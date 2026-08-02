import { IconArrowNarrowRight } from "@tabler/icons-react"

import { TrackedAnchor } from "@/components/site/tracked-anchor"
import { buttonVariants } from "@/components/ui/button"

const gates = [
  {
    number: "01",
    title: "Baseline",
    body: "Map the current workflow, owners, burden, exceptions, and agreed baseline.",
    output: "CURRENT WORKFLOW + BASELINE",
  },
  {
    number: "02",
    title: "Validate",
    body: "Test representative work against an explicit evaluation and make a go/no-go decision.",
    output: "EVALUATION + GO / NO-GO",
  },
  {
    number: "03",
    title: "Implement",
    body: "Build the production workflow, required integrations, controls, and operating ownership.",
    output: "WORKING PRODUCTION SYSTEM",
  },
  {
    number: "04",
    title: "Improve",
    body: "Measure the agreed result, inspect failures, and correct the operating system.",
    output: "MEASUREMENT + CORRECTION",
  },
]

export function MethodSection() {
  return (
    <section className="section-anchor bg-background" id="method">
      <div className="section-shell flex flex-col gap-12 py-20 sm:py-24 lg:py-28">
        <div className="grid gap-8 md:grid-cols-12 md:gap-6">
          <div className="flex flex-col gap-5 md:col-span-7">
            <p className="operational-label text-signal-strong">Bounded engagement</p>
            <h2 className="max-w-[13ch] text-[clamp(2.75rem,5vw,4.75rem)] leading-[0.96] font-semibold tracking-[-0.05em]">
              Four gates. One production decision.
            </h2>
          </div>
          <p className="max-w-[54ch] self-end text-base leading-7 text-muted-foreground md:col-span-5">
            Each stage produces something the workflow owner can inspect before
            the engagement advances.
          </p>
        </div>

        <ol className="grid border-t border-l border-line-strong sm:grid-cols-2 lg:grid-cols-4">
          {gates.map((gate) => (
            <li
              className="flex min-h-[20rem] flex-col border-r border-b border-line-strong p-6 sm:p-7"
              key={gate.number}
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="font-mono text-xs text-signal-strong">{gate.number}</span>
                <span aria-hidden="true" className="size-2 border border-line-strong" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">
                {gate.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{gate.body}</p>
              <p className="mt-auto border-t border-border pt-4 font-mono text-[0.625rem] leading-5 tracking-[0.06em] text-foreground">
                {gate.output}
              </p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col items-start gap-5 border-t border-line-strong pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs leading-5 text-muted-foreground">
            Production follows evidence, not a demonstration alone.
          </p>
          <TrackedAnchor
            className={buttonVariants({ size: "cta" })}
            eventName="cta_click"
            eventProperties={{ location: "method" }}
            href="#discuss"
          >
            Discuss a workflow
            <IconArrowNarrowRight data-icon="inline-end" />
          </TrackedAnchor>
        </div>
      </div>
    </section>
  )
}
