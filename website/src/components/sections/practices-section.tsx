import {
  PeopleWorkflowArtifact,
  ServicesDeliveryArtifact,
} from "@/components/illustrations/casefile-illustrations"
import { PracticeInterestLink } from "@/components/site/practice-interest-link"

function WorkflowItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-3 border-t border-border py-3 text-sm leading-6 text-muted-foreground">
      <span aria-hidden="true" className="font-mono text-[0.625rem] text-signal-strong">
        →
      </span>
      <span>{children}</span>
    </li>
  )
}

export function PracticesSection() {
  return (
    <section className="section-anchor bg-canvas" id="practices">
      <div className="section-shell flex flex-col gap-12 py-20 sm:py-24 lg:py-28">
        <div className="grid gap-8 md:grid-cols-12 md:gap-6">
          <p className="operational-label text-signal-strong md:col-span-4">
            Where we begin
          </p>
          <h2 className="max-w-[18ch] text-[clamp(2.75rem,5vw,4.75rem)] leading-[0.96] font-semibold tracking-[-0.05em] md:col-span-8">
            Start where expert effort is visible and the output can be checked.
          </h2>
        </div>

        <div className="grid border border-line-strong bg-background md:grid-cols-12">
          <article className="flex min-w-0 flex-col md:col-span-7 md:border-r md:border-border">
            <div className="flex h-72 items-center border-b border-border bg-surface p-4 sm:h-80 sm:p-6 lg:h-[22rem] lg:p-8">
              <PeopleWorkflowArtifact className="h-full w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-7 p-6 sm:p-8">
              <div className="flex flex-col gap-3">
                <p className="operational-label text-signal-strong">Primary practice</p>
                <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                  People and Workforce
                </h3>
                <p className="max-w-[62ch] text-base leading-7 text-muted-foreground">
                  For recurring work that crosses HCM data, spreadsheets,
                  policy, documents, case tools, and expert review.
                </p>
              </div>
              <ul>
                <WorkflowItem>Employee-service case preparation</WorkflowItem>
                <WorkflowItem>Pay-transparency data preparation</WorkflowItem>
                <WorkflowItem>Job, role, and skills transformation</WorkflowItem>
              </ul>
              <div className="mt-auto">
                <PracticeInterestLink interest="people-workforce">
                  Discuss a People and Workforce workflow
                </PracticeInterestLink>
              </div>
            </div>
          </article>

          <article className="flex min-w-0 flex-col border-t border-border md:col-span-5 md:border-t-0">
            <div className="flex h-72 items-center border-b border-border bg-surface-muted p-4 sm:h-80 sm:p-6 lg:h-[22rem] lg:p-8">
              <ServicesDeliveryArtifact className="h-full w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-7 p-6 sm:p-8">
              <div className="flex flex-col gap-3">
                <p className="operational-label text-muted-foreground">Method translation</p>
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                  Professional-services delivery
                </h3>
                <p className="text-base leading-7 text-muted-foreground">
                  For repeatable methodologies where experts spend too much time
                  assembling evidence, producing first drafts, and coordinating
                  quality review.
                </p>
              </div>
              <ul>
                <WorkflowItem>Evidence and research assembly</WorkflowItem>
                <WorkflowItem>Methodology-to-deliverable production</WorkflowItem>
                <WorkflowItem>Recurring reporting and quality review</WorkflowItem>
              </ul>
              <div className="mt-auto">
                <PracticeInterestLink interest="professional-services">
                  Discuss a delivery workflow
                </PracticeInterestLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
