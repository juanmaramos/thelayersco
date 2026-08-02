import { CurrentStateSourcePackage } from "@/components/illustrations/casefile-illustrations"

export function WorkflowsSection() {
  return (
    <section className="section-anchor bg-background" id="workflows">
      <div className="section-shell grid gap-14 py-20 sm:py-24 md:grid-cols-12 md:gap-6 lg:py-28">
        <div className="flex flex-col gap-7 md:col-span-5 md:pr-8">
          <p className="operational-label text-signal-strong">
            The work around the work
          </p>
          <h2 className="max-w-[17ch] text-[clamp(2.7rem,4.1vw,4.1rem)] leading-[0.96] font-semibold tracking-[-0.05em]">
            The expensive part is often everything between source data and an
            approved output.
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:col-span-7">
          <div className="grid gap-6 border-l border-line-strong pl-5 sm:grid-cols-2 sm:pl-8">
            <p className="text-base leading-7 text-muted-foreground sm:col-span-2 sm:text-lg sm:leading-8">
              An HR operations team may open an HCM export, find the right
              policy, read case notes, reconcile missing fields, prepare a
              brief, and route it for review. Core systems store pieces of the
              work; experts still assemble the path.
            </p>
            <p className="border-t border-border pt-5 text-base leading-7 font-semibold sm:col-span-2">
              We redesign that complete path, then implement the system that
              runs it.
            </p>
          </div>

          <div className="bg-canvas p-3 sm:p-5">
            <CurrentStateSourcePackage />
          </div>
        </div>
      </div>
    </section>
  )
}
