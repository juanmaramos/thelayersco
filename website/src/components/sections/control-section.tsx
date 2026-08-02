const commitments = [
  "Material decisions remain under human control.",
  "Quality is measured against an agreed workflow evaluation.",
  "Scope, assumptions, exceptions, and acceptance criteria stay explicit.",
]

function OperationalTraceReadout() {
  return (
    <pre
      aria-hidden="true"
      className="overflow-x-auto font-mono text-[0.6875rem] leading-[1.9] tracking-[-0.01em] text-on-ink-muted select-text sm:text-xs"
    >
      <span className="text-on-ink">ILLUSTRATIVE_TRACE</span>{"\n"}
      {"├─ SOURCE ........ "}<span className="text-signal">EVIDENCE</span>{"\n"}
      {"├─ RULE .......... "}<span className="text-signal">APPLIED</span>{"\n"}
      {"├─ EXCEPTION ..... "}<span className="text-review">REVIEW</span>{"\n"}
      {"└─ OUTPUT ........ "}<span className="text-signal">APPROVED</span>
    </pre>
  )
}

function EvidenceDossier() {
  return (
    <article
      aria-label="Representative workflow evidence dossier"
      className="border border-ink bg-background text-foreground"
    >
      <header className="flex flex-col gap-2 border-b border-ink px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p className="operational-label text-foreground">
          Casefile / P&amp;W-01 / Evidence dossier
        </p>
        <p className="font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase">
          Representative · Not customer data
        </p>
      </header>

      <ol className="grid md:grid-cols-12">
        <li className="min-w-0 border-b border-ink p-5 md:col-span-4 md:border-r md:p-6">
          <p className="operational-label text-muted-foreground">01 / Source / SRC-04</p>
          <blockquote className="mt-8 border-l-2 border-signal-strong pl-4 text-sm leading-6">
            Case preparation requires the employee record, applicable policy,
            and supporting case evidence.
          </blockquote>
          <p className="mt-8 font-mono text-[0.625rem] leading-5 text-muted-foreground">
            LINKED: HCM_EXPORT · POLICY_P-08 · NOTES_N-14
          </p>
        </li>

        <li className="min-w-0 border-b border-ink p-5 md:col-span-4 md:border-r md:p-6">
          <p className="operational-label text-muted-foreground">02 / Rule / R-12</p>
          <p className="mt-8 text-lg leading-7 font-semibold">
            Prepare the case brief only from linked source material.
          </p>
          <div className="mt-8 border-t border-border pt-4 font-mono text-[0.625rem] leading-5 text-signal-strong">
            RULE APPLIED → BR-06
          </div>
        </li>

        <li className="min-w-0 border-b border-ink bg-[color-mix(in_oklab,var(--error)_7%,var(--surface))] p-5 md:col-span-4 md:p-6">
          <p className="operational-label text-error">03 / Exception / EX-03</p>
          <p className="mt-8 text-lg leading-7 font-semibold">
            Supporting evidence is missing for one prepared field.
          </p>
          <p className="mt-8 font-mono text-[0.625rem] leading-5 text-error">
            STOP → ROUTE TO EXPERT REVIEW
          </p>
        </li>

        <li className="relative min-w-0 border-b border-ink p-5 md:col-span-6 md:border-r md:border-b-0 md:p-6">
          <span
            aria-hidden="true"
            className="absolute top-0 left-8 h-8 -translate-y-full border-l border-dashed border-ink"
          />
          <p className="operational-label text-review">04 / Review / RV-02</p>
          <p className="mt-6 text-lg leading-7 font-semibold">
            The accountable expert records the missing evidence, corrects the
            brief, and approves the preparation route.
          </p>
          <div className="mt-7 h-8 border-b-2 border-review" aria-hidden="true" />
        </li>

        <li className="min-w-0 bg-signal-soft p-5 md:col-span-6 md:p-6">
          <p className="operational-label text-signal-strong">05 / Output / OUT-07</p>
          <p className="mt-6 text-2xl leading-8 font-semibold tracking-[-0.03em]">
            Approved preparation
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Source, rule, exception, and review action remain connected to the
            output.
          </p>
        </li>
      </ol>
    </article>
  )
}

export function ControlSection() {
  return (
    <section className="section-anchor bg-ink text-on-ink" id="control">
      <div className="section-shell flex flex-col gap-12 py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <div className="flex flex-col gap-6 md:col-span-7">
            <p className="operational-label text-signal">
              Representative evidence dossier
            </p>
            <h2 className="max-w-[15ch] text-[clamp(2.75rem,5vw,4.75rem)] leading-[0.96] font-semibold tracking-[-0.05em]">
              A production decision should be supported by visible evidence.
            </h2>
          </div>
          <p className="max-w-[60ch] self-end text-base leading-7 text-on-ink-muted md:col-span-5">
            The workflow keeps the source, applied rule, exception, reviewer
            action, and approved output connected. That makes quality
            inspectable and keeps material judgment with the accountable expert.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
          <div className="flex min-w-0 flex-col justify-between gap-10 border border-ink-line p-5 sm:p-7">
            <p className="operational-label text-on-ink-muted">Provenance spine</p>
            <OperationalTraceReadout />
            <p className="border-t border-ink-line pt-5 text-xs leading-5 text-on-ink-muted">
              The trace summarizes the semantic dossier beside it; it is not a
              live log or customer record.
            </p>
          </div>
          <EvidenceDossier />
        </div>

        <ul className="grid border-t border-ink-line md:grid-cols-3">
          {commitments.map((commitment, index) => (
            <li
              className="flex min-h-28 gap-4 border-b border-ink-line py-6 text-sm leading-6 md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-r-0"
              key={commitment}
            >
              <span className="font-mono text-[0.625rem] text-signal">0{index + 1}</span>
              <span>{commitment}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
