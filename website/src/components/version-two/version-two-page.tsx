import Image from "next/image"
import { IconArrowNarrowRight } from "@tabler/icons-react"

import { WorkflowForm } from "@/components/forms/workflow-form"
import {
  GovernedWorkflowObject,
  MeasurementDecisionObject,
} from "@/components/illustrations/editorial-system-objects"
import { PracticeInterestLink } from "@/components/site/practice-interest-link"
import { TrackedAnchor } from "@/components/site/tracked-anchor"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const outcomes = [
  {
    name: "Faster cycle time",
    description: "From intake to approved output.",
  },
  {
    name: "More expert capacity",
    description: "Less preparation and repeat handling.",
  },
  {
    name: "Higher throughput",
    description: "More approved work with the same team.",
  },
  {
    name: "Stronger unit economics",
    description: "Lower unit cost or improved delivery margin.",
  },
] as const

const deliverables = [
  {
    name: "Operating method, codified",
    description:
      "Your sources, terminology, rules, exceptions, and quality bar made executable.",
  },
  {
    name: "Governed production workflow",
    description:
      "AI, deterministic software, systems, handoffs, and approvals working as one controlled flow.",
  },
  {
    name: "Measured results",
    description:
      "A baseline and scorecard for the operating outcome that matters.",
  },
  {
    name: "Ownership and handover",
    description:
      "Evaluation, documentation, controls, and a clear operating owner.",
  },
] as const

const peopleWorkflows = [
  "Employee-service and HR operations",
  "Workforce, job, role, and skills data",
  "Policy, rewards, talent, and workforce-analysis preparation",
  "HCM-adjacent workflows crossing existing systems",
] as const

const professionalServicesWorkflows = [
  "Methodology execution, document, and evidence analysis",
  "Research, deliverable production, recurring reporting, review, and approval",
] as const

const engagementSteps = [
  {
    number: "01",
    title: "Baseline and validate",
    description:
      "Measure the current workflow and test the redesigned flow on representative work before a larger production commitment.",
    decision: "Is the result measurable and the quality threshold credible?",
  },
  {
    number: "02",
    title: "Implement the production workflow",
    description:
      "Implement the operating context, software, integrations, controls, and human review.",
    decision: "Can the workflow run safely in its target environment?",
  },
  {
    number: "03",
    title: "Measure, correct, and expand only when justified",
    description:
      "Track the agreed result, correct failure modes, and transfer ownership to the operating team.",
    decision: "Should the business expand, change, or stop?",
  },
] as const

const portabilityPaths = [
  {
    title: "Use the client-approved environment",
    description:
      "Deploy into the client-approved environment where possible and connect only the systems the bounded workflow requires.",
  },
  {
    title: "Keep the workflow portable",
    description:
      "Keep the operating method, deterministic rules, evaluations, and human controls independent from one model or interface.",
  },
  {
    title: "Keep control visible",
    description:
      "Deterministic rules, source evidence, exceptions, human approvals, and evaluation stay part of the production workflow.",
  },
] as const

const faqItems = [
  {
    question: "What is a good first workflow?",
    answer:
      "Choose recurring work with a clear owner, representative data, repeated preparation or review, and an output that can be checked. It should carry a measurable burden in time, capacity, quality, or cost.",
  },
  {
    question: "Do we need to replace our existing platforms?",
    answer:
      "No. We prefer to deploy into the client-approved environment and connect the systems the bounded workflow requires. The implementation route is validated before a larger production commitment.",
  },
  {
    question: "What remains under human control?",
    answer:
      "People approve material employment, legal, regulated, financial, and commercial decisions. AI can prepare evidence, analyze, draft, and route; accountable people retain the consequential judgment.",
  },
  {
    question: "How do you prove the result?",
    answer:
      "Before implementation, we agree the unit of work, one operating measure, the quality threshold, and the evidence source. The same scorecard measures the workflow after release.",
  },
  {
    question: "What happens before a production commitment?",
    answer:
      "We establish the baseline and validate the target workflow on representative material. Production follows only when the result, quality, deployment route, and operating owner are credible.",
  },
] as const

export type VersionTwoHeroBackground = "still-life" | "colorflow"

type VersionTwoPageProps = {
  contactEmail: string | null
  formEndpoint: string | null
  heroBackground?: VersionTwoHeroBackground
  schedulingUrl: string | null
}

export function VersionTwoPage({
  contactEmail,
  formEndpoint,
  heroBackground = "still-life",
  schedulingUrl,
}: VersionTwoPageProps) {
  const usesColorflow = heroBackground === "colorflow"

  return (
    <main id="main-content">
      <section
        className="section-anchor relative overflow-hidden border-b border-line bg-signal-strong text-on-ink"
        data-theme="signal"
        id="top"
      >
        {usesColorflow ? (
          <>
            <div
              aria-hidden="true"
              className="colorflow-static-fallback absolute inset-0"
            />
            <iframe
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden h-full w-full border-0 motion-safe:md:block"
              height="1200"
              loading="eager"
              referrerPolicy="no-referrer"
              sandbox="allow-same-origin allow-scripts"
              src="https://colorflow-embed.b-cdn.net/embed.html#e=upk8sqkz"
              tabIndex={-1}
              title="Decorative animated Colorflow background"
              width="1600"
            />
          </>
        ) : (
          <Image
            alt=""
            aria-hidden="true"
            className="hidden object-cover object-center md:block"
            fill
            priority
            sizes="100vw"
            src="/images/hero-operational-still-life-2x.webp"
          />
        )}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0",
            usesColorflow ? "bg-ink/35" : "bg-ink/25"
          )}
        />

        <div className="section-shell relative z-10 flex flex-col justify-between py-16 sm:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-6">
            <div className="md:col-span-9">
              <p className="operational-label text-on-ink">
                Workflow transformation and implementation
              </p>
              <h1 className="mt-7 max-w-[11ch] font-editorial text-[clamp(3.75rem,8vw,7.25rem)] leading-[0.88] font-normal tracking-[-0.055em]">
                Turn manual workflows into production systems.
              </h1>
            </div>
            <p className="max-w-[26ch] pb-1 text-lg leading-8 text-on-ink md:col-span-3 md:ml-auto md:bg-ink/90 md:p-5 lg:text-xl lg:leading-9">
              Shorter cycle time. More expert capacity. Better delivery economics.
            </p>
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/55 pt-7 md:grid-cols-12 md:gap-6 lg:mt-24">
            <p className="max-w-[52ch] text-lg leading-8 text-on-ink md:col-span-7 lg:text-xl">
              Adding AI to a fragmented workflow does not repair the process underneath it. We redesign one document-, data-, and judgment-heavy workflow, build the governed production system, and measure the result against the baseline.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <TrackedAnchor
                className={buttonVariants({ size: "cta", variant: "inverse" })}
                eventName="cta_click"
                eventProperties={{ location: "hero" }}
                href="#discuss"
              >
                Discuss a workflow
                <IconArrowNarrowRight data-icon="inline-end" />
              </TrackedAnchor>
              <TrackedAnchor
                className={cn(
                  buttonVariants({ size: "cta", variant: "inverseOutline" }),
                  usesColorflow && "bg-ink/35"
                )}
                eventName="cta_click"
                eventProperties={{ location: "hero_secondary" }}
                href="#deliverable"
              >
                See what you get
              </TrackedAnchor>
            </div>
          </div>

          <dl className="mt-12 grid border-t border-l border-line text-foreground sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {outcomes.map((outcome) => (
              <div className="border-r border-b border-line bg-background p-5 sm:p-6" key={outcome.name}>
                <dt className="text-base font-semibold">{outcome.name}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground">{outcome.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-anchor border-b border-line bg-background" id="problem">
        <div className="section-shell py-20 sm:py-24 lg:py-28">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-7">
              <p className="operational-label text-signal-strong">The operating problem</p>
              <h2 className="mt-6 max-w-[13ch] font-editorial text-[clamp(3rem,5.8vw,5.75rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                AI does not repair a broken workflow by itself.
              </h2>
            </div>
            <p className="max-w-[42ch] self-end text-lg leading-8 text-muted-foreground md:col-span-5">
              Important work crosses documents, spreadsheets, email, core systems, preparation, review, and approval. The operating result depends on the whole bounded flow.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-l border-line-strong md:grid-cols-3 lg:mt-20">
            <li className="flex min-h-56 flex-col justify-between border-r border-b border-line-strong p-6 lg:p-8">
              <span className="font-mono text-xs text-signal-strong">01</span>
              <p className="max-w-[30ch] text-base leading-7 font-medium">
                A point AI feature may accelerate one task while the surrounding handoffs stay unchanged.
              </p>
            </li>
            <li className="flex min-h-56 flex-col justify-between border-r border-b border-line-strong p-6 lg:p-8">
              <span className="font-mono text-xs text-signal-strong">02</span>
              <p className="max-w-[30ch] text-base leading-7 font-medium">
                Data, quality, exceptions, and accountability remain fragmented across the process.
              </p>
            </li>
            <li className="flex min-h-56 flex-col justify-between border-r border-b border-line-strong bg-canvas p-6 lg:p-8">
              <span className="font-mono text-xs text-signal-strong">03</span>
              <p className="max-w-[30ch] text-base leading-7 font-semibold">
                Layers redesigns the full bounded flow before implementing AI and software.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section-anchor" id="deliverable">
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <p className="operational-label text-signal-strong">What you get</p>
              <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.8vw,5.75rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                Working systems for valuable workflows.
              </h2>
              <p className="mt-7 max-w-[44ch] text-base leading-7 text-muted-foreground">
                Not a strategy deck, prompt library, generic chatbot, or open-ended transformation programme.
              </p>
            </div>
            <div className="flex min-h-56 items-center self-center bg-canvas p-4 sm:min-h-64 sm:p-6 md:col-span-4 md:min-h-80">
              <GovernedWorkflowObject className="mx-auto w-full max-w-80" />
            </div>
          </div>

          <div className="mt-14 grid border-t border-l border-line-strong sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {deliverables.map((item, index) => (
              <article className="flex min-h-64 flex-col justify-between border-r border-b border-line-strong p-6 lg:min-h-72 lg:p-8" key={item.name}>
                <span className="font-mono text-xs text-signal-strong">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="max-w-[14ch] text-xl leading-7 font-semibold tracking-[-0.025em]">{item.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-anchor border-y border-line bg-canvas" id="practices">
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <p className="operational-label text-signal-strong">Initial practice areas</p>
              <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.6vw,5.5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                One operating model. Two initial applications.
              </h2>
            </div>
            <p className="max-w-[42ch] self-end text-base leading-7 text-muted-foreground md:col-span-4">
              We begin where workflows are repeated, expert-heavy, measurable, and feasible for one accountable implementation team.
            </p>
          </div>

          <div className="mt-14 grid border-t border-l border-line-strong md:grid-cols-12 lg:mt-20">
            <article className="flex flex-col border-r border-b border-line-strong bg-background p-6 sm:p-8 md:col-span-7 lg:p-10">
              <p className="operational-label text-signal-strong">Primary practice</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                People and Workforce
              </h3>
              <p className="mt-5 max-w-[58ch] text-base leading-7 text-muted-foreground">
                Recurring operations that cross HCM platforms, documents, spreadsheets, shared mailboxes, policies, data preparation, and expert review.
              </p>
              <ul className="mt-8 border-t border-line">
                {peopleWorkflows.map((workflow) => (
                  <li className="grid grid-cols-[2rem_1fr] gap-3 border-b border-line py-4 text-sm leading-6" key={workflow}>
                    <span aria-hidden="true" className="font-mono text-xs text-signal-strong">→</span>
                    <span>{workflow}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PracticeInterestLink interest="people-workforce">
                  Discuss a People and Workforce workflow
                </PracticeInterestLink>
              </div>
            </article>

            <article className="flex flex-col border-r border-b border-line-strong bg-surface-muted p-6 sm:p-8 md:col-span-5 lg:p-10">
              <p className="operational-label text-muted-foreground">Second application</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                Professional-services delivery
              </h3>
              <p className="mt-5 max-w-[48ch] text-base leading-7 text-muted-foreground">
                Repeatable delivery methods where experts spend too much time assembling evidence, preparing outputs, and coordinating review.
              </p>
              <ul className="mt-8 border-t border-line">
                {professionalServicesWorkflows.map((workflow) => (
                  <li className="grid grid-cols-[2rem_1fr] gap-3 border-b border-line py-4 text-sm leading-6" key={workflow}>
                    <span aria-hidden="true" className="font-mono text-xs text-signal-strong">→</span>
                    <span>{workflow}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 md:mt-auto md:pt-8">
                <PracticeInterestLink interest="professional-services">
                  Discuss a delivery workflow
                </PracticeInterestLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-anchor" id="approach">
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <p className="operational-label text-signal-strong">How we work</p>
              <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.8vw,5.75rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                From manual work to production in three decisions.
              </h2>
              <p className="mt-7 max-w-[32ch] text-base leading-7 text-muted-foreground">
                Representative validation comes before a larger production commitment.
              </p>
            </div>
            <div className="flex min-h-56 items-center self-center bg-canvas p-4 sm:p-6 md:col-span-4 md:ml-auto md:min-h-72 md:w-full">
              <MeasurementDecisionObject className="mx-auto w-full max-w-80" />
            </div>
          </div>

          <ol className="mt-14 grid border-t border-l border-line-strong md:grid-cols-3 lg:mt-20">
            {engagementSteps.map((step) => (
              <li className="flex min-h-80 flex-col justify-between border-r border-b border-line-strong p-6 lg:min-h-96 lg:p-8" key={step.number}>
                <span className="font-mono text-xs text-signal-strong">{step.number}</span>
                <div>
                  <h3 className="max-w-[15ch] text-2xl leading-7 font-semibold tracking-[-0.03em]">{step.title}</h3>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  <p className="mt-6 border-t border-line pt-4 text-sm leading-6 font-medium">{step.decision}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="section-anchor bg-signal-strong text-on-ink"
        data-theme="signal"
        id="portability"
      >
        <div className="section-shell grid gap-14 py-20 sm:py-24 md:grid-cols-12 md:gap-6 lg:py-32">
          <div className="md:col-span-6 md:pr-10">
            <p className="operational-label text-on-ink">Portable by design</p>
            <h2 className="mt-6 max-w-[11ch] font-editorial text-[clamp(3rem,5.8vw,5.75rem)] leading-[0.92] font-normal tracking-[-0.045em]">
              Build the workflow once. Run it where your people already work.
            </h2>
            <p className="mt-7 max-w-[48ch] text-base leading-7 text-on-ink">
              Deploy into the client-approved environment where possible. Keep the workflow method, deterministic rules, evaluations, and human controls independent from one model or interface.
            </p>
            <p className="mt-7 max-w-[44ch] border-l-2 border-white/70 pl-4 text-sm leading-6 font-semibold text-on-ink">
              Portability reduces implementation risk after the business result and production path are clear.
            </p>
          </div>

          <div className="border-t border-white/45 md:col-span-6">
            {portabilityPaths.map((item) => (
              <article className="border-b border-white/35 py-7 sm:py-8" key={item.title}>
                <h3 className="text-xl leading-7 font-semibold tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-3 max-w-[58ch] text-sm leading-6 text-on-ink">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-anchor" id="faq">
        <div className="section-shell grid gap-12 py-20 sm:py-24 md:grid-cols-12 md:gap-6 lg:py-32">
          <div className="md:col-span-5 md:pr-10">
            <p className="operational-label text-signal-strong">Before a call</p>
            <h2 className="mt-6 max-w-[10ch] font-editorial text-[clamp(3rem,5.6vw,5.5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
              The essential questions, answered.
            </h2>
          </div>

          <div className="border-t border-line-strong md:col-span-7">
            <Accordion>
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`v2-faq-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section
        className="section-anchor bg-ink text-on-ink"
        data-theme="ink"
        id="discuss"
      >
        <div className="section-shell grid py-20 sm:py-24 md:grid-cols-12 lg:py-32">
          <div className="flex flex-col justify-between gap-12 border border-ink-line p-6 sm:p-9 md:col-span-5 md:border-r-0 lg:p-12">
            <div>
              <p className="operational-label text-signal">Discuss a workflow</p>
              <h2 className="mt-6 max-w-[10ch] font-editorial text-[clamp(3rem,5.2vw,5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                Bring us a workflow worth improving.
              </h2>
              <p className="mt-7 max-w-[42ch] text-base leading-7 text-on-ink-muted">
                Bring us one recurring workflow with a clear owner, representative data, current volume, and a measurable burden in time, cost, capacity, quality, or delay.
              </p>
            </div>
            <p className="border-t border-ink-line pt-6 font-mono text-[0.6875rem] leading-5 tracking-[0.05em] text-on-ink-muted">
              ONE WORKFLOW → ONE BASELINE → ONE PRODUCTION DECISION
            </p>
          </div>

          <div className="border border-ink-line bg-background text-foreground md:col-span-7">
            <WorkflowForm
              contactEmail={contactEmail}
              formEndpoint={formEndpoint}
              schedulingUrl={schedulingUrl}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
