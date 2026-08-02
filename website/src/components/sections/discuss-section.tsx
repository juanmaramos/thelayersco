import { WorkflowForm } from "@/components/forms/workflow-form"

type DiscussSectionProps = {
  contactEmail: string | null
  formEndpoint: string | null
  schedulingUrl: string | null
}

export function DiscussSection({
  contactEmail,
  formEndpoint,
  schedulingUrl,
}: DiscussSectionProps) {
  return (
    <section className="section-anchor bg-ink text-on-ink" id="discuss">
      <div className="section-shell grid gap-0 py-20 sm:py-24 md:grid-cols-12 lg:py-28">
        <div className="flex flex-col justify-between gap-12 border border-ink-line p-6 sm:p-9 md:col-span-5 md:border-r-0 lg:p-12">
          <div className="flex flex-col gap-7">
            <p className="operational-label text-signal">Discuss a workflow</p>
            <h2 className="max-w-[15ch] text-[clamp(2.7rem,4.1vw,3.9rem)] leading-[0.96] font-semibold tracking-[-0.05em]">
              Bring the workflow your experts should not have to rebuild every
              time.
            </h2>
            <p className="max-w-[52ch] text-base leading-7 text-on-ink-muted">
              A useful first conversation has an owner, representative data, a
              repeated burden, and an output that can be checked.
            </p>
          </div>
          <p className="border-t border-ink-line pt-6 font-mono text-[0.6875rem] leading-5 tracking-[0.05em] text-on-ink-muted">
            ONE WORKFLOW → ONE BOUNDED START
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
  )
}
