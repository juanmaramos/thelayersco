import Image from "next/image"
import { IconArrowNarrowRight } from "@tabler/icons-react"

import { WorkflowOpportunityCalculator } from "@/components/calculator/workflow-opportunity-calculator"
import { WorkflowForm } from "@/components/forms/workflow-form"
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
    name: "Less waiting",
    description: "Move work through review and approval sooner.",
  },
  {
    name: "More time for judgment",
    description: "Take preparation and repeat handling off experts' plates.",
  },
  {
    name: "Room for more work",
    description: "Increase output without adding more manual coordination.",
  },
  {
    name: "Lower effort per case",
    description: "Reduce the work behind each completed case or deliverable.",
  },
] as const

const deliverables = [
  {
    name: "Your method, built in",
    description:
      "The system follows the rules, exceptions, and standards your experts already use.",
  },
  {
    name: "AI and software, each with a role",
    description:
      "AI handles language and context. Software handles calculations and hard rules.",
  },
  {
    name: "A clear before-and-after",
    description:
      "One scorecard shows how the workflow performs before and after launch.",
  },
  {
    name: "Your team, ready to run it",
    description:
      "Your team gets the checks, controls, and documentation needed to run it.",
  },
] as const

const workflowPatterns = [
  {
    name: "Intake and case handling",
    description:
      "Requests arrive through email, forms, and documents. We turn them into complete cases and send each one to the right owner. Everyone can see what is still open.",
    layout: "md:col-span-7",
  },
  {
    name: "Data preparation and reconciliation",
    description:
      "We bring spreadsheet and system data into one place. Then we apply the business rules and send gaps back to the owner before anyone relies on the data.",
    layout: "md:col-span-5",
  },
  {
    name: "Document and evidence analysis",
    description:
      "We pull the relevant evidence from source material and send uncertain cases to the expert responsible.",
    layout: "md:col-span-4",
  },
  {
    name: "Deliverable production and approval",
    description:
      "We turn a repeatable method into a production flow for reports, assessments, proposals, or other client deliverables. Review stays part of the process.",
    layout: "md:col-span-4",
  },
  {
    name: "Reporting and monitoring",
    description:
      "We collect updates and calculate the measures people use. When a change needs a decision, we flag it before the next review.",
    layout: "md:col-span-4",
  },
] as const

const engagementSteps = [
  {
    number: "01",
    title: "Measure and test",
    description:
      "We record what happens today, then run the new flow on real examples.",
    decision: "Did it improve the result without lowering quality?",
  },
  {
    number: "02",
    title: "Make it ready for production",
    description:
      "We connect the systems and handle exceptions. Human review stays where the work needs it.",
    decision: "Can your team use it safely in the real environment?",
  },
  {
    number: "03",
    title: "See how it holds up",
    description:
      "Once it is running, we watch the agreed measure and fix what breaks. Your team then takes over.",
    decision: "Is it worth expanding?",
  },
] as const

const portabilityPaths = [
  {
    title: "Use the systems you already approve",
    description:
      "We connect only what the workflow needs and deploy in your environment where possible.",
  },
  {
    title: "Pay for more capability only when the work needs it",
    description:
      "When the work can be separated and measured, routine steps can run on smaller or open-weight models. Harder cases move to frontier models only when the extra capability improves the result.",
  },
  {
    title: "Know who made the call",
    description:
      "Evidence, exceptions, and approvals stay visible, including the person responsible.",
  },
] as const

const faqItems = [
  {
    question: "What do you mean by an AI workflow?",
    answer:
      "AI is one part of the workflow. It reads documents and prepares work that depends on language or context. Deterministic software handles calculations, permissions, and hard rules. People still make consequential decisions. Depending on where the team works, we may deliver it as an application or through custom Claude and Codex skills and plugins.",
  },
  {
    question: "What is a good first workflow?",
    answer:
      "Look for work that comes up often, has one clear owner, and produces an output people can judge. You should also be able to see the cost of the current process, whether in time, delay, rework, or capacity.",
  },
  {
    question: "Do we need to replace our existing platforms?",
    answer:
      "Usually not. We try to work inside your approved environment and connect only what the workflow needs. We confirm that path before production.",
  },
  {
    question: "What remains under human control?",
    answer:
      "People remain responsible for employment, legal, financial, regulated, and commercial decisions. The system can prepare evidence or draft the work, but the accountable person makes the call.",
  },
  {
    question: "How do you prove the result?",
    answer:
      "Before we build, we agree on one unit of work and how to judge it. We use the same scorecard before and after launch.",
  },
  {
    question: "What happens before production?",
    answer:
      "We measure the current process and test the new one on real examples. Production starts only when the result, quality bar, deployment path, and owner are clear.",
  },
] as const

export type VersionTwoHeroBackground = "still-life" | "colorflow"

type VersionTwoPageProps = {
  contactEmail: string | null
  estimateEndpoint: string | null
  formEndpoint: string | null
  heroBackground?: VersionTwoHeroBackground
  schedulingUrl: string | null
}

export function VersionTwoPage({
  contactEmail,
  estimateEndpoint,
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
              className="pointer-events-none absolute inset-0 hidden h-full w-full border-0 motion-safe:block"
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
                AI-native workflow transformation
              </p>
              <h1 className="mt-7 max-w-[11ch] font-editorial text-[clamp(3.75rem,8vw,7.25rem)] leading-[0.88] font-normal tracking-[-0.055em]">
                Turn manual workflows into production systems.
              </h1>
            </div>
            <p className="max-w-[26ch] pb-1 text-lg leading-8 text-on-ink md:col-span-3 md:ml-auto md:bg-ink/90 md:p-5 lg:text-xl lg:leading-9">
              Move work faster. Give experts more time for judgment.
            </p>
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/55 pt-7 md:grid-cols-12 md:gap-6 lg:mt-24">
            <p className="max-w-[52ch] text-lg leading-8 text-on-ink md:col-span-7 lg:text-xl">
              We redesign the workflow, build the production system, and show the difference in day-to-day work.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <TrackedAnchor
                className={buttonVariants({ size: "cta", variant: "inverse" })}
                eventName="cta_click"
                eventProperties={{ location: "hero" }}
                href="#discuss"
              >
                Talk through a workflow
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
              <p className="operational-label text-signal-strong">Close to the work</p>
              <h2 className="mt-6 max-w-[13ch] font-editorial text-[clamp(3rem,5.8vw,5.75rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                The work tells us what to build.
              </h2>
            </div>
            <p className="max-w-[42ch] self-end text-lg leading-8 text-muted-foreground md:col-span-5">
              We work directly with the people who run the process. Their real cases show us where it breaks and what the new system has to handle.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-l border-line-strong md:grid-cols-3 lg:mt-20">
            <li className="flex min-h-56 flex-col justify-between border-r border-b border-line-strong p-6 lg:p-8">
              <span className="font-mono text-xs text-signal-strong">01</span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.025em]">See the work as it runs</h3>
                <p className="mt-4 max-w-[34ch] text-sm leading-6 text-muted-foreground">
                  We follow a case from request to decision and watch where it slows down. The real process often lives in workarounds that no document captured.
                </p>
              </div>
            </li>
            <li className="flex min-h-56 flex-col justify-between border-r border-b border-line-strong p-6 lg:p-8">
              <span className="font-mono text-xs text-signal-strong">02</span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.025em]">Build for the difficult cases</h3>
                <p className="mt-4 max-w-[34ch] text-sm leading-6 text-muted-foreground">
                  We use the systems and policies already in place. Exceptions are part of the test from the beginning.
                </p>
              </div>
            </li>
            <li className="flex min-h-56 flex-col justify-between border-r border-b border-line-strong bg-canvas p-6 lg:p-8">
              <span className="font-mono text-xs text-signal-strong">03</span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.025em]">Carry it into use</h3>
                <p className="mt-4 max-w-[34ch] text-sm leading-6 text-muted-foreground">
                  The team that learns the workflow also builds it and proves it in use. Handover includes the checks and documentation your team needs.
                </p>
              </div>
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
                Working systems your team can take over.
              </h2>
              <p className="mt-7 max-w-[44ch] text-base leading-7 text-muted-foreground">
                The work includes everything needed to move from today&apos;s process to a system your team can own.
              </p>
            </div>
            <div className="artwork-drift relative min-h-56 self-center sm:min-h-64 md:col-span-4 md:min-h-80">
              <Image
                alt=""
                aria-hidden="true"
                className="object-contain md:translate-x-3 md:scale-110"
                fill
                loading="eager"
                sizes="(min-width: 768px) 33vw, 100vw"
                src="/images/layers-glass-fold.webp"
              />
            </div>
          </div>

          <div className="mt-14 grid border-t border-l border-line-strong sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {deliverables.map((item, index) => (
              <article className="flex min-h-64 flex-col border-r border-b border-line-strong p-6 lg:min-h-72 lg:p-8" key={item.name}>
                <span className="font-mono text-xs text-signal-strong">{String(index + 1).padStart(2, "0")}</span>
                <div className="mt-14">
                  <h3 className="min-h-14 max-w-[16ch] text-xl leading-7 font-semibold tracking-[-0.025em]">{item.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-anchor border-y border-line bg-canvas" id="patterns">
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <p className="operational-label text-signal-strong">Where this applies</p>
              <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.6vw,5.5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                The same problems show up in very different work.
              </h2>
            </div>
            <p className="max-w-[42ch] self-end text-base leading-7 text-muted-foreground md:col-span-4">
              An intake queue and a monthly report may look unrelated. Both can break when information is missing, rules live in someone&apos;s head, or approval has no clear owner.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-l border-line-strong md:grid-cols-12 lg:mt-20">
            {workflowPatterns.map((pattern, index) => (
              <li
                className={cn(
                  "flex min-h-64 flex-col justify-between border-r border-b border-line-strong p-6 sm:p-8 lg:min-h-72 lg:p-10",
                  index % 2 === 0 ? "bg-background" : "bg-surface-muted",
                  pattern.layout
                )}
                key={pattern.name}
              >
                <span className="font-mono text-xs text-signal-strong">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="max-w-[18ch] text-2xl leading-8 font-semibold tracking-[-0.03em]">
                    {pattern.name}
                  </h3>
                  <p className="mt-5 max-w-[58ch] text-sm leading-6 text-muted-foreground">
                    {pattern.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-line-strong pt-7 sm:flex-row sm:items-center">
            <p className="max-w-[68ch] text-base leading-7 text-muted-foreground">
              We fit the workflow to the way your business already operates.
            </p>
            <TrackedAnchor
              className={cn(buttonVariants({ size: "text", variant: "link" }), "shrink-0")}
              eventName="cta_click"
              eventProperties={{ location: "workflow_patterns" }}
              href="#discuss"
            >
              Talk through your workflow
              <IconArrowNarrowRight className="text-action-arrow" data-icon="inline-end" />
            </TrackedAnchor>
          </div>
        </div>
      </section>

      <section
        className="section-anchor border-b border-ink-line bg-ink text-on-ink"
        data-theme="ink"
        id="estimate"
      >
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <p className="operational-label text-signal">Workflow opportunity estimate</p>
              <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.6vw,5.5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                Put a number on the opportunity.
              </h2>
            </div>
            <div className="self-end md:col-span-4">
              <p className="max-w-[42ch] text-base leading-7 text-on-ink-muted">
                Three inputs show how much team capacity a well-suited workflow could return each year.
              </p>
              <p className="mt-5 font-mono text-[0.6875rem] leading-5 tracking-[0.05em] text-on-ink-muted uppercase">
                No contact details required
              </p>
            </div>
          </div>

          <div className="mt-14 border border-ink-line lg:mt-20">
            <WorkflowOpportunityCalculator emailEndpoint={estimateEndpoint} />
          </div>
        </div>
      </section>

      <section className="section-anchor" id="approach">
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <p className="operational-label text-signal-strong">How we work</p>
              <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.8vw,5.75rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                Prove the result before expanding the work.
              </h2>
              <p className="mt-7 max-w-[32ch] text-base leading-7 text-muted-foreground">
                We establish the baseline first, then measure what changes. The evidence tells us where further investment will pay off.
              </p>
            </div>
            <div className="artwork-drift w-full max-w-sm self-center md:col-span-4 md:ml-auto">
              <div className="relative aspect-square w-full max-w-96">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="object-contain"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  src="/images/layers-gradient-cube.png"
                />
              </div>
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
            <p className="operational-label text-on-ink">Built to stay portable</p>
            <h2 className="mt-6 max-w-[11ch] font-editorial text-[clamp(3rem,5.8vw,5.75rem)] leading-[0.92] font-normal tracking-[-0.045em]">
              Your workflow should not depend on one model.
            </h2>
            <p className="mt-7 max-w-[48ch] text-base leading-7 text-on-ink">
              When your approved environment supports the workflow, we deploy there. Your operating method and controls stay separate from the model or interface running them.
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
            <p className="operational-label text-signal-strong">Before we start</p>
            <h2 className="mt-6 max-w-[10ch] font-editorial text-[clamp(3rem,5.6vw,5.5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
              Questions worth asking up front.
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
              <p className="operational-label text-signal">Tell us about the work</p>
              <h2 className="mt-6 max-w-[10ch] font-editorial text-[clamp(3rem,5.2vw,5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                Show us the work you want to improve.
              </h2>
              <p className="mt-7 max-w-[42ch] text-base leading-7 text-on-ink-muted">
                Tell us how it runs today, who owns it, and what a better result looks like. A few real examples are enough to see where AI or software can help.
              </p>
            </div>
            <p className="border-t border-ink-line pt-6 font-mono text-[0.6875rem] leading-5 tracking-[0.05em] text-on-ink-muted">
              START WITH THE WORK. THEN DECIDE WHAT TO BUILD.
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
