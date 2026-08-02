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
    description: "Move work from intake to approval sooner.",
  },
  {
    name: "More expert capacity",
    description: "Give experts less prep and repeat work.",
  },
  {
    name: "Higher throughput",
    description: "Handle more work with the same team.",
  },
  {
    name: "Better delivery economics",
    description: "Reduce unit cost or protect delivery margin.",
  },
] as const

const deliverables = [
  {
    name: "Your method, built in",
    description:
      "We turn the sources, rules, exceptions, and standards your experts use into the workflow itself.",
  },
  {
    name: "A production workflow",
    description:
      "AI, software, systems, handoffs, and approvals work together in one controlled process.",
  },
  {
    name: "A clear scorecard",
    description:
      "The same measure used for the baseline tracks performance after launch.",
  },
  {
    name: "A team ready to run it",
    description:
      "Your team gets the checks, documentation, and controls needed to take over.",
  },
] as const

const peopleWorkflows = [
  "HR service requests and employee operations",
  "Job, role, skills, and workforce data",
  "Policy, rewards, talent, and workforce analysis",
  "Work that spans HCM and surrounding tools",
] as const

const professionalServicesWorkflows = [
  "Document and evidence analysis",
  "Research, reporting, deliverable production, and review",
] as const

const engagementSteps = [
  {
    number: "01",
    title: "Baseline and test",
    description:
      "Measure how the workflow performs today, then test the redesign on real examples.",
    decision: "Does it improve the result without lowering quality?",
  },
  {
    number: "02",
    title: "Build for production",
    description:
      "Connect the right software and systems, then add controls and human review.",
    decision: "Can it run safely where your team works?",
  },
  {
    number: "03",
    title: "Measure and decide what comes next",
    description:
      "Track the agreed result, fix what fails, and hand the workflow to the operating team.",
    decision: "Expand it, change it, or stop?",
  },
] as const

const portabilityPaths = [
  {
    title: "Run it in your environment",
    description:
      "Where possible, we deploy in your approved environment and connect only the systems this workflow needs.",
  },
  {
    title: "Avoid model lock-in",
    description:
      "The method, rules, checks, and human controls stay independent of any one model or interface.",
  },
  {
    title: "Keep decisions visible",
    description:
      "Source evidence, exceptions, approvals, and the person making the call remain part of the workflow.",
  },
] as const

const faqItems = [
  {
    question: "What is a good first workflow?",
    answer:
      "Start with recurring work that has a clear owner, enough examples to test, and an output people can judge. The pain should show up in time, cost, capacity, or quality.",
  },
  {
    question: "Do we need to replace our existing platforms?",
    answer:
      "Usually not. We aim to work inside your approved environment and connect only the systems the workflow needs. We confirm that route before production.",
  },
  {
    question: "What remains under human control?",
    answer:
      "People keep control of consequential employment, legal, regulated, financial, and commercial decisions. AI can gather evidence, analyze, draft, and route work; the people responsible make the call.",
  },
  {
    question: "How do you prove the result?",
    answer:
      "We agree what counts as one unit of work, how we will measure it, and what quality must hold. The same scorecard compares production with the baseline.",
  },
  {
    question: "What happens before production?",
    answer:
      "We first measure today’s workflow and test the redesign on real examples. We move to production only when the result, quality, technical route, and owner are clear.",
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
              AI can speed up a task without fixing the workflow around it. We redesign one recurring workflow, put it into production with the right controls, and measure the result against today’s baseline.
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
              Work gets stuck between documents, spreadsheets, email, core systems, and rounds of review. Fixing one task leaves the rest of the workflow untouched.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-l border-line-strong md:grid-cols-3 lg:mt-20">
            <li className="flex min-h-56 flex-col justify-between border-r border-b border-line-strong p-6 lg:p-8">
              <span className="font-mono text-xs text-signal-strong">01</span>
              <p className="max-w-[30ch] text-base leading-7 font-medium">
                AI may speed up one task while the same handoffs and delays remain.
              </p>
            </li>
            <li className="flex min-h-56 flex-col justify-between border-r border-b border-line-strong p-6 lg:p-8">
              <span className="font-mono text-xs text-signal-strong">02</span>
              <p className="max-w-[30ch] text-base leading-7 font-medium">
                Data, exceptions, quality checks, and ownership stay scattered across the process.
              </p>
            </li>
            <li className="flex min-h-56 flex-col justify-between border-r border-b border-line-strong bg-canvas p-6 lg:p-8">
              <span className="font-mono text-xs text-signal-strong">03</span>
              <p className="max-w-[30ch] text-base leading-7 font-semibold">
                Layers redesigns the workflow first, then applies AI and software where they help.
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
                One workflow, ready for production.
              </h2>
              <p className="mt-7 max-w-[44ch] text-base leading-7 text-muted-foreground">
                The work ends in production, with clear controls and a team ready to run it.
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
                People and Workforce first. Professional services next.
              </h2>
            </div>
            <p className="max-w-[42ch] self-end text-base leading-7 text-muted-foreground md:col-span-4">
              We start with repeatable work that absorbs expert time and has a result we can measure.
            </p>
          </div>

          <div className="mt-14 grid border-t border-l border-line-strong md:grid-cols-12 lg:mt-20">
            <article className="flex flex-col border-r border-b border-line-strong bg-background p-6 sm:p-8 md:col-span-7 lg:p-10">
              <p className="operational-label text-signal-strong">Primary practice</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
                People and Workforce
              </h3>
              <p className="mt-5 max-w-[58ch] text-base leading-7 text-muted-foreground">
                People and Workforce work rarely lives in one system. It moves between HCM platforms, spreadsheets, shared inboxes, policies, and expert review.
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
                We focus on repeatable delivery work where experts spend too much time gathering evidence, preparing outputs, and chasing reviews.
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
                Prove the workflow before you scale it.
              </h2>
              <p className="mt-7 max-w-[32ch] text-base leading-7 text-muted-foreground">
                We test the redesigned workflow on real examples before you make a larger commitment.
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
              Build once. Run it where your people work.
            </h2>
            <p className="mt-7 max-w-[48ch] text-base leading-7 text-on-ink">
              Where possible, we deploy in your approved environment. The method, rules, checks, and human controls stay independent of any one model or interface.
            </p>
            <p className="mt-7 max-w-[44ch] border-l-2 border-white/70 pl-4 text-sm leading-6 font-semibold text-on-ink">
              Once the result is clear, portability lowers the risk of putting the workflow into production.
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
            <p className="operational-label text-signal-strong">Before we talk</p>
            <h2 className="mt-6 max-w-[10ch] font-editorial text-[clamp(3rem,5.6vw,5.5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
              Straight answers before we start.
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
                Tell us where the work repeats, who owns it, and what it costs in time, capacity, quality, or delay. A few real examples help.
              </p>
            </div>
            <p className="border-t border-ink-line pt-6 font-mono text-[0.6875rem] leading-5 tracking-[0.05em] text-on-ink-muted">
              START WITH ONE WORKFLOW. PROVE WHAT CHANGED.
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
