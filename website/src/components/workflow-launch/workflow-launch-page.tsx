import { IconArrowNarrowRight } from "@tabler/icons-react"

import { WorkflowForm } from "@/components/forms/workflow-form"
import { PlatformLogoStrip } from "@/components/site/platform-logo-strip"
import { TrackedAnchor } from "@/components/site/tracked-anchor"
import { PlatformWorkflowDemo } from "@/components/workflow-launch/platform-workflow-demo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const currentWorkSteps = [
  {
    number: "01",
    title: "Define the result",
    description:
      "We agree what the work should improve and record how it performs today.",
  },
  {
    number: "02",
    title: "Follow the real work",
    description:
      "We trace a real case through its sources, decisions, handoffs, exceptions, tools, and risks.",
  },
  {
    number: "03",
    title: "Redesign the flow",
    description:
      "We decide what AI can prepare, what software must control, and where people make the call.",
  },
] as const

const buildOptions = [
  {
    number: "01",
    name: "Skill",
    description:
      "Package the methodology, templates, examples, and review rules as a reusable skill inside an approved AI workspace.",
  },
  {
    number: "02",
    name: "Plugin",
    description:
      "Connect the skill to the approved files and systems it needs. Calculations, permissions, and other exact steps run in deterministic software.",
  },
  {
    number: "03",
    name: "Application",
    description:
      "Build dedicated software only when several teams need shared queues, persistent records, complex permissions, or external access.",
  },
] as const

const workflowExamples = [
  {
    name: "Analysis to client deliverable",
    description:
      "Verify calculations, draft the report, build the presentation, and prepare the review notes.",
  },
  {
    name: "Research to evidence pack",
    description:
      "Work from approved sources, structure the findings, preserve citations, and flag missing evidence.",
  },
  {
    name: "Proposal and RFP production",
    description:
      "Apply approved methodology, assemble the response, check the requirements, and send commercial decisions to the owner.",
  },
  {
    name: "Recurring reporting",
    description:
      "Reconcile inputs, calculate the measures, draft the commentary, and flag changes that need review.",
  },
] as const

const deliverables = [
  "The workflow, owner, and success measure documented",
  "A tested, client-owned skill, plugin, or application package",
  "Source code for calculations, validation, and integrations",
  "Only the system connections the workflow needs",
  "Representative test cases and acceptance criteria",
  "Human review and escalation rules",
  "Decision log, source ownership, and freshness expectations",
  "Release history and a named internal maintainer",
  "Versioned documentation and operating instructions",
] as const

const launchSteps = [
  {
    number: "01",
    name: "Frame the outcome",
    description:
      "Choose one workstream, name the business result, and record the current measure.",
  },
  {
    number: "02",
    name: "Discover the work",
    description:
      "Map the decisions, exceptions, data, tools, risks, and judgment hidden inside real cases.",
  },
  {
    number: "03",
    name: "Redesign and build",
    description:
      "Redesign the sequence, then build the chosen skill, plugin, or application with its checks, permissions, and review points.",
  },
  {
    number: "04",
    name: "Prove and transfer",
    description:
      "Test representative and edge cases, measure the result, train the owner, and transfer the complete package.",
  },
] as const

const faqItems = [
  {
    question: "Do we need to replace our existing tools?",
    answer:
      "No—not by default. We build inside the tools your team has approved and connect only the files, systems, and actions the workflow needs. We recommend a new application only when the existing environment cannot run the work reliably.",
  },
  {
    question: "How quickly can a first version be tested?",
    answer:
      "A first version can be tested in as little as two weeks. Timing depends on the workflow, data, integrations, and approvals.",
  },
  {
    question: "Is a skill reliable enough for real work?",
    answer:
      "Yes, when its role is clearly bounded and tested. The skill carries the methodology, examples, templates, and review instructions. Deterministic software handles calculations, validation, permissions, and other hard rules. We test both against representative cases before handover.",
  },
  {
    question: "When does this need a full application?",
    answer:
      "We recommend a dedicated application when several teams share a queue, the workflow must preserve state between runs, permissions are complex, or external users need access. Otherwise, a skill or plugin is the faster first build.",
  },
  {
    question: "Are we tied to one model?",
    answer:
      "No. Run it in Amplio or your approved AI environment. Important instructions, tests, decision rules, and data boundaries stay documented so they can move where the target environment supports them.",
  },
  {
    question: "Who owns the skills, plugins, and code?",
    answer:
      "You own the client-specific package: skills, plugins, configurations, source code, tests, decision log, release history, and documentation. A named internal maintainer owns the operating handover. Third-party platforms and open-source components remain governed by their existing terms and licenses.",
  },
  {
    question: "How do you work with IT, security, and compliance?",
    answer:
      "The business owner remains accountable for the workflow. With your technical teams, we agree the data boundary, access, controls, and risk review before production. The scrutiny matches the risk.",
  },
] as const

type WorkflowLaunchPageProps = {
  contactEmail: string | null
  formEndpoint: string | null
  schedulingUrl: string | null
}

export function WorkflowLaunchPage({
  contactEmail,
  formEndpoint,
  schedulingUrl,
}: WorkflowLaunchPageProps) {
  return (
    <main id="main-content">
      <section
        className="section-anchor border-b border-line-strong bg-canvas"
        id="top"
      >
        <div className="section-shell grid gap-12 py-16 sm:py-20 md:grid-cols-12 md:gap-6 lg:py-28">
          <div className="md:col-span-8">
            <p className="operational-label text-signal-strong">
              Workflow Launch by Layers
            </p>
            <h1 className="mt-7 max-w-[11ch] font-editorial text-[clamp(3.75rem,7.7vw,7rem)] leading-[0.88] font-normal tracking-[-0.055em]">
              Turn one repeatable workstream into a working AI skill or plugin.
            </h1>
          </div>

          <div className="self-end md:col-span-4 md:pb-2">
            <p className="max-w-[38ch] text-lg leading-8 text-foreground">
              We map how the work runs today, remove unnecessary steps, and
              define what AI prepares, what software checks, and what stays
              with your experts.
            </p>
            <p className="mt-5 max-w-[38ch] text-base leading-7 text-muted-foreground">
              Then we build the smallest reliable solution in Amplio or the AI
              environment your team already uses. A dedicated application is
              the next step only when the work requires one.
            </p>
          </div>

          <div className="border-t border-line-strong pt-6 md:col-span-8">
            <p className="max-w-[54ch] text-sm leading-6 text-muted-foreground">
              A first version can be tested in as little as two weeks. Timing
              depends on the workflow, data, integrations, and approvals.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:col-span-4 md:justify-end md:border-t md:border-line-strong md:pt-6">
            <TrackedAnchor
              className={buttonVariants({ size: "cta" })}
              eventName="cta_click"
              eventProperties={{ location: "workflow_launch_hero" }}
              href="#discuss"
            >
              Discuss one workflow
              <IconArrowNarrowRight data-icon="inline-end" />
            </TrackedAnchor>
          </div>

          <div className="border-t border-line pt-5 md:col-span-12">
            <p className="font-mono text-[0.6875rem] leading-5 tracking-[0.05em] text-muted-foreground uppercase">
              Run it in Amplio or your approved AI environment. Examples
              include Claude, ChatGPT Work, Codex, Gemini, and internal assistants.
            </p>
            <PlatformLogoStrip />
          </div>
        </div>
      </section>

      <section
        className="section-anchor border-b border-ink-line bg-ink text-on-ink"
        data-theme="ink"
        id="current-work"
      >
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-7">
              <p className="operational-label text-signal">
                Process before platform
              </p>
              <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.8vw,5.75rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                Fix the flow before adding AI.
              </h2>
            </div>
            <div className="self-end md:col-span-5">
              <p className="max-w-[46ch] text-base leading-7 text-on-ink-muted">
                Process maps rarely show the email threads, spreadsheet fixes,
                judgment calls, and local workarounds that keep delivery moving.
                We work alongside an internal process champion and the people
                who run it, following real cases from request to approved output.
              </p>
              <p className="mt-5 max-w-[46ch] text-base leading-7 text-on-ink">
                The mapping is brief and practical. It shows what should change,
                what must stay under human control, and the fastest reliable way
                to put the new flow into use.
              </p>
            </div>
          </div>

          <ol className="mt-14 grid border-t border-l border-ink-line md:grid-cols-3 lg:mt-20">
            {currentWorkSteps.map((step) => (
              <li
                className="flex min-h-64 flex-col justify-between border-r border-b border-ink-line p-6 lg:min-h-72 lg:p-8"
                key={step.number}
              >
                <span className="font-mono text-xs text-signal">{step.number}</span>
                <div>
                  <h3 className="max-w-[16ch] text-2xl leading-8 font-semibold tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-[36ch] text-sm leading-6 text-on-ink-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="section-anchor bg-signal-strong text-on-ink"
        data-theme="signal"
        id="build-options"
      >
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-7">
              <p className="operational-label text-on-ink">
                Use what you already have
              </p>
              <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.8vw,5.75rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                Start with the simplest system that can run the work.
              </h2>
            </div>
            <p className="max-w-[44ch] self-end text-base leading-7 text-on-ink md:col-span-5">
              Some workflows need a new application. Many do not. We make that
              decision from the work itself.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-l border-white/45 md:grid-cols-3 lg:mt-20">
            {buildOptions.map((option) => (
              <li
                className="flex min-h-64 flex-col justify-between border-r border-b border-white/45 p-6 lg:min-h-72 lg:p-8"
                key={option.number}
              >
                <span className="font-mono text-xs text-on-ink">
                  {option.number}
                </span>
                <div>
                  <h3 className="text-3xl leading-9 font-semibold tracking-[-0.035em]">
                    {option.name}
                  </h3>
                  <p className="mt-4 max-w-[38ch] text-sm leading-6 text-on-ink">
                    {option.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="section-anchor border-b border-line-strong bg-background"
        id="workflow"
      >
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <p className="operational-label text-signal-strong">
                One workflow in familiar tools
              </p>
              <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.6vw,5.5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                Production moves. Judgment stays with experts.
              </h2>
            </div>
            <div className="self-end md:col-span-4">
              <p className="max-w-[43ch] text-base leading-7 text-muted-foreground">
                See the same delivery workflow inside Codex, Claude, and
                Gemini. It reads approved inputs, runs the checks, prepares the
                outputs, and stops uncertain work for expert review.
              </p>
              <p className="mt-5 max-w-[43ch] text-sm leading-6 text-muted-foreground">
                The interface changes. The method, controls, and human review
                points do not.
              </p>
            </div>
          </div>

          <div className="mt-14 lg:mt-20">
            <PlatformWorkflowDemo />
          </div>

          <div className="mt-8 grid border-t border-l border-line-strong sm:grid-cols-2">
            <div className="border-r border-b border-line-strong p-6 sm:p-8">
              <p className="operational-label text-muted-foreground">Today</p>
              <p className="mt-4 max-w-[48ch] text-base leading-7">
                Analysts rerun calculations, rebuild documents, format decks,
                and trace the latest version through review.
              </p>
            </div>
            <div className="border-r border-b border-line-strong bg-signal-soft p-6 sm:p-8">
              <p className="operational-label text-signal-strong">
                With Workflow Launch
              </p>
              <p className="mt-4 max-w-[48ch] text-base leading-7">
                The workflow prepares the package, records each check, and
                brings experts only the exceptions and final decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-anchor border-b border-line-strong bg-canvas"
        id="workstreams"
      >
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <p className="operational-label text-signal-strong">
                Good first workstreams
              </p>
              <h2 className="mt-6 max-w-[13ch] font-editorial text-[clamp(3rem,5.6vw,5.5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                Start where experts rebuild the same output every time.
              </h2>
              <p className="mt-6 max-w-[58ch] text-base leading-7 text-muted-foreground">
                A strong first workstream is frequent and painful, has a known
                output and clear owner, includes representative examples, and
                can receive a quick human review.
              </p>
            </div>
          </div>

          <div className="mt-14 grid border-t border-l border-line-strong md:grid-cols-2 lg:mt-20">
            {workflowExamples.map((example, index) => (
              <article
                className={cn(
                  "flex min-h-64 flex-col justify-between border-r border-b border-line-strong p-6 sm:p-8 lg:min-h-72 lg:p-10",
                  index === 0 || index === 3 ? "bg-background" : "bg-surface-muted"
                )}
                key={example.name}
              >
                <span className="font-mono text-xs text-signal-strong">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="max-w-[18ch] text-2xl leading-8 font-semibold tracking-[-0.03em]">
                    {example.name}
                  </h3>
                  <p className="mt-5 max-w-[54ch] text-sm leading-6 text-muted-foreground">
                    {example.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-anchor bg-background" id="deliverables">
        <div className="section-shell grid gap-12 py-20 sm:py-24 md:grid-cols-12 md:gap-6 lg:py-32">
          <div className="md:col-span-5 md:pr-10">
            <p className="operational-label text-signal-strong">
              What we deliver
            </p>
            <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.2vw,5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
              A workflow your team can inspect, run, and improve.
            </h2>
          </div>

          <ol className="border-t border-line-strong md:col-span-7">
            {deliverables.map((deliverable, index) => (
              <li
                className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-line-strong py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:py-6"
                key={deliverable}
              >
                <span className="font-mono text-xs text-signal-strong">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="max-w-[48ch] text-base leading-7">
                  {deliverable}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="section-anchor border-y border-line-strong bg-canvas"
        id="launch"
      >
        <div className="section-shell py-20 sm:py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-8">
              <p className="operational-label text-signal-strong">
                Workflow Launch
              </p>
              <h2 className="mt-6 max-w-[12ch] font-editorial text-[clamp(3rem,5.6vw,5.5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                From business result to working system.
              </h2>
            </div>
            <p className="max-w-[42ch] self-end text-base leading-7 text-muted-foreground md:col-span-4">
              We limit the first launch to one named workstream, one internal
              process champion, and one measurable result, then test it on real
              cases before expanding.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-l border-line-strong md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {launchSteps.map((step) => (
              <li
                className="flex min-h-72 flex-col justify-between border-r border-b border-line-strong bg-background p-6 lg:min-h-80 lg:p-8"
                key={step.number}
              >
                <span className="font-mono text-xs text-signal-strong">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl leading-8 font-semibold tracking-[-0.03em]">
                    {step.name}
                  </h3>
                  <p className="mt-4 max-w-[36ch] text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-anchor bg-background" id="faq">
        <div className="section-shell grid gap-12 py-20 sm:py-24 md:grid-cols-12 md:gap-6 lg:py-32">
          <div className="md:col-span-5 md:pr-10">
            <p className="operational-label text-signal-strong">
              Before we start
            </p>
            <h2 className="mt-6 max-w-[10ch] font-editorial text-[clamp(3rem,5.2vw,5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
              Questions worth settling up front.
            </h2>
          </div>

          <div className="border-t border-line-strong md:col-span-7">
            <Accordion>
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`workflow-launch-faq-${index + 1}`}
                >
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
              <p className="operational-label text-signal">
                Discuss one workflow
              </p>
              <h2 className="mt-6 max-w-[11ch] font-editorial text-[clamp(3rem,5.2vw,5rem)] leading-[0.92] font-normal tracking-[-0.045em]">
                Show us what your team rebuilds every time.
              </h2>
              <p className="mt-7 max-w-[42ch] text-base leading-7 text-on-ink-muted">
                A few representative inputs and outputs are enough to see
                whether the right first build is a skill, a plugin, or dedicated
                software.
              </p>
            </div>
            <p className="border-t border-ink-line pt-6 font-mono text-[0.6875rem] leading-5 tracking-[0.05em] text-on-ink-muted uppercase">
              Start with the work. Then decide what to build.
            </p>
          </div>

          <div className="border border-ink-line bg-background text-foreground md:col-span-7">
            <WorkflowForm
              contactEmail={contactEmail}
              formEndpoint={formEndpoint}
              initialPracticeInterest="professional-services"
              schedulingUrl={schedulingUrl}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
