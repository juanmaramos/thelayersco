import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type IllustrationProps = ComponentProps<"svg">

export function HeroWorkflowCasefile({
  className,
  ...props
}: IllustrationProps) {
  return (
    <svg
      aria-labelledby="hero-casefile-title hero-casefile-description"
      className={cn("casefile-svg", className)}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      viewBox="0 0 720 560"
      {...props}
    >
      <title id="hero-casefile-title">
        Representative People and Workforce casefile
      </title>
      <desc id="hero-casefile-description">
        An HCM export, policy, and case notes become a case brief. Missing
        supporting evidence routes the brief to expert review before approved
        preparation.
      </desc>

      <rect className="cf-on-signal-frame" height="528" width="688" x="16" y="16" />
      <path className="cf-on-signal-rule-soft" d="M16 64h688M252 64v480" />
      <text className="cf-label-on-signal" x="36" y="45">
        REPRESENTATIVE CASEFILE / P&amp;W-01
      </text>
      <text className="cf-label-on-signal-muted" textAnchor="end" x="684" y="45">
        NOT CUSTOMER DATA
      </text>

      <text className="cf-label-on-signal-muted" x="36" y="92">
        01 / SOURCE PACKAGE
      </text>

      <g>
        <rect className="cf-paper" height="88" width="168" x="52" y="112" />
        <path className="cf-rule" d="M52 137h168M84 137v63M122 137v63" />
        <text className="cf-label-ink" x="68" y="130">HCM EXPORT</text>
        <path className="cf-rule-soft" d="M64 154h144M64 169h144M64 184h144" />
        <rect className="cf-surface-signal" height="14" width="34" x="84" y="170" />
      </g>

      <g>
        <rect className="cf-paper" height="76" width="142" x="36" y="224" />
        <path className="cf-rule-soft" d="M52 252h110M52 267h94M52 282h102" />
        <text className="cf-label-ink" x="52" y="244">POLICY / P-08</text>
      </g>

      <g>
        <rect className="cf-paper" height="76" width="142" x="76" y="316" />
        <path className="cf-rule-soft" d="M92 344h110M92 359h88M92 374h104" />
        <text className="cf-label-ink" x="92" y="336">CASE NOTES / N-14</text>
      </g>

      <path className="cf-on-signal-rule" d="M220 156h52" />
      <path className="cf-on-signal-rule" d="m264 150 8 6-8 6" />

      <text className="cf-label-on-signal-muted" x="284" y="92">
        02 / PREPARED ARTIFACT
      </text>
      <g>
        <rect className="cf-paper" height="168" width="196" x="284" y="112" />
        <path className="cf-rule" d="M284 144h196M328 144v136" />
        <text className="cf-label-ink" x="300" y="133">CASE BRIEF / BR-06</text>
        <text className="cf-label-muted" x="298" y="167">01</text>
        <text className="cf-label-muted" x="298" y="197">02</text>
        <text className="cf-label-muted" x="298" y="227">03</text>
        <text className="cf-label-muted" x="298" y="257">04</text>
        <path className="cf-rule-soft" d="M344 166h116M344 181h92M344 196h116M344 211h104M344 226h116M344 241h74M344 256h96" />
        <rect className="cf-surface-signal" height="18" width="116" x="344" y="219" />
      </g>

      <text className="cf-label-on-signal-muted" x="508" y="92">
        PROVENANCE
      </text>
      <g>
        <rect className="cf-on-signal-surface" height="168" width="164" x="508" y="112" />
        <path className="cf-on-signal-rule-soft" d="M508 144h164M524 176h132M524 208h132M524 240h132" />
        <text className="cf-label-on-signal" x="524" y="133">LINKED MATERIAL</text>
        <text className="cf-label-on-signal-muted" x="524" y="166">SRC-04 / HCM</text>
        <text className="cf-label-on-signal-muted" x="524" y="198">P-08 / POLICY</text>
        <text className="cf-label-on-signal-muted" x="524" y="230">N-14 / NOTES</text>
        <circle className="cf-dot-on-signal" cx="644" cy="163" r="3" />
        <circle className="cf-dot-on-signal" cx="644" cy="195" r="3" />
        <circle className="cf-dot-on-signal" cx="644" cy="227" r="3" />
      </g>

      <path className="cf-on-signal-rule-dashed" d="M382 280v36h74" />
      <path className="cf-on-signal-rule-dashed" d="m448 310 8 6-8 6" />

      <g>
        <rect className="cf-exception-surface" height="66" width="220" x="284" y="316" />
        <text className="cf-label-error" x="300" y="338">03 / EXCEPTION / EX-03</text>
        <text className="cf-body-ink" x="300" y="362">SUPPORTING EVIDENCE MISSING</text>
        <path className="cf-rule-error" d="M480 327l12 12m0-12-12 12" />
      </g>

      <g>
        <rect className="cf-on-signal-surface" height="98" width="148" x="524" y="308" />
        <text className="cf-label-on-signal-muted" x="540" y="330">04 / HUMAN CONTROL</text>
        <text className="cf-body-on-signal" x="540" y="356">EXPERT REVIEW</text>
        <path className="cf-rule-human" d="M540 374c22 18 57 18 92-2" />
        <circle className="cf-human-fill" cx="641" cy="374" r="6" />
      </g>

      <path className="cf-on-signal-rule" d="M504 350h20" />
      <path className="cf-on-signal-rule" d="M598 406v36H472" />
      <path className="cf-on-signal-rule" d="m480 436-8 6 8 6" />

      <g>
        <rect className="cf-paper" height="74" width="388" x="284" y="442" />
        <path className="cf-rule-signal" d="M284 442h388" />
        <text className="cf-label-muted" x="304" y="468">05 / OUTPUT / OUT-07</text>
        <text className="cf-body-ink" x="304" y="494">APPROVED PREPARATION</text>
        <rect className="cf-signal-fill" height="30" width="104" x="548" y="464" />
        <text className="cf-label-on-signal" textAnchor="middle" x="600" y="484">APPROVED</text>
      </g>
    </svg>
  )
}

export function CurrentStateSourcePackage({
  className,
  ...props
}: IllustrationProps) {
  return (
    <svg
      aria-labelledby="source-package-title source-package-description"
      className={cn("casefile-svg", className)}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      viewBox="0 0 720 420"
      {...props}
    >
      <title id="source-package-title">Representative current-state source package</title>
      <desc id="source-package-description">
        HCM rows, policy documents, and case notes move through manual
        reconciliation, a missing field, and a review queue.
      </desc>

      <rect className="cf-frame" height="388" width="688" x="16" y="16" />
      <path className="cf-rule" d="M16 62h688" />
      <text className="cf-label-ink" x="34" y="44">REPRESENTATIVE CURRENT STATE / CS-01</text>
      <text className="cf-label-muted" textAnchor="end" x="686" y="44">NOT CUSTOMER DATA</text>

      <path className="cf-rule-soft" d="M250 62v342M502 62v342" />
      <text className="cf-label-muted" x="34" y="90">SOURCE MATERIAL</text>
      <text className="cf-label-muted" x="270" y="90">MANUAL RECONCILIATION</text>
      <text className="cf-label-muted" x="522" y="90">REVIEW QUEUE</text>

      <g>
        <rect className="cf-surface" height="92" width="174" x="34" y="112" />
        <path className="cf-rule" d="M34 138h174M72 138v66" />
        <text className="cf-label-ink" x="48" y="130">HCM_ROWS.CSV</text>
        <path className="cf-rule-soft" d="M48 157h146M48 173h146M48 189h146" />
      </g>
      <g>
        <rect className="cf-surface" height="70" width="150" x="72" y="224" />
        <text className="cf-label-ink" x="88" y="246">POLICY.PDF</text>
        <path className="cf-rule-soft" d="M88 262h118M88 278h88" />
      </g>
      <g>
        <rect className="cf-surface" height="70" width="150" x="38" y="314" />
        <text className="cf-label-ink" x="54" y="336">CASE_NOTES.DOC</text>
        <path className="cf-rule-soft" d="M54 352h118M54 368h96" />
      </g>

      <path className="cf-rule" d="M208 158h42M222 258h28M188 348h62" />
      <g>
        <rect className="cf-surface-muted" height="236" width="212" x="270" y="112" />
        <text className="cf-label-ink" x="290" y="138">WORKING_SHEET / V6</text>
        <path className="cf-rule" d="M270 152h212M318 152v196M400 152v196" />
        <path className="cf-rule-soft" d="M270 184h212M270 216h212M270 248h212M270 280h212M270 312h212" />
        <rect className="cf-surface-signal" height="31" width="80" x="319" y="185" />
        <rect className="cf-exception-surface" height="31" width="80" x="401" y="249" />
        <path className="cf-rule-error" d="m432 258 16 14m0-14-16 14" />
        <text className="cf-label-error" x="290" y="374">FIELD MISSING / REOPEN SOURCE</text>
      </g>

      <path className="cf-rule-dashed" d="M482 264h40" />
      <path className="cf-rule-dashed" d="m514 258 8 6-8 6" />
      <g>
        <rect className="cf-surface" height="72" width="148" x="522" y="112" />
        <text className="cf-label-muted" x="538" y="136">QUEUE / 01</text>
        <text className="cf-body-ink" x="538" y="160">CHECK POLICY</text>
      </g>
      <g>
        <rect className="cf-exception-surface" height="72" width="148" x="538" y="204" />
        <text className="cf-label-error" x="554" y="228">QUEUE / 02</text>
        <text className="cf-body-ink" x="554" y="252">FIND EVIDENCE</text>
      </g>
      <g>
        <rect className="cf-surface" height="72" width="148" x="522" y="296" />
        <text className="cf-label-muted" x="538" y="320">QUEUE / 03</text>
        <text className="cf-body-ink" x="538" y="344">PREPARE BRIEF</text>
      </g>
      <path className="cf-rule-human" d="M674 196c-20-16-46-17-72-4" />
      <circle className="cf-human-fill" cx="675" cy="196" r="5" />
    </svg>
  )
}

export function PeopleWorkflowArtifact({
  className,
  ...props
}: IllustrationProps) {
  return (
    <svg
      aria-labelledby="people-artifact-title people-artifact-description"
      className={cn("casefile-svg", className)}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      viewBox="0 0 480 320"
      {...props}
    >
      <title id="people-artifact-title">People and Workforce operating artifact</title>
      <desc id="people-artifact-description">
        Structured workforce rows and policy evidence become a prepared case
        record with an explicit human review mark.
      </desc>
      <rect className="cf-frame" height="288" width="448" x="16" y="16" />
      <path className="cf-rule" d="M16 58h448M302 58v246" />
      <text className="cf-label-ink" x="32" y="42">P&amp;W ARTIFACT / P-01</text>
      <text className="cf-label-muted" x="32" y="82">WORKFORCE DATA</text>
      <rect className="cf-surface" height="104" width="238" x="32" y="98" />
      <path className="cf-rule" d="M32 124h238M76 124v78M154 124v78" />
      <path className="cf-rule-soft" d="M32 150h238M32 176h238" />
      <rect className="cf-surface-signal" height="25" width="77" x="77" y="151" />
      <text className="cf-label-muted" x="32" y="228">POLICY EVIDENCE</text>
      <path className="cf-rule-soft" d="M32 246h222M32 266h184M32 286h206" />
      <text className="cf-label-muted" x="322" y="82">PREPARED CASE</text>
      <rect className="cf-surface-signal" height="144" width="126" x="322" y="98" />
      <path className="cf-rule-signal" d="M338 130h94M338 154h72M338 178h94M338 202h80" />
      <rect className="cf-signal-fill" height="28" width="94" x="338" y="258" />
      <text className="cf-label-on-signal" textAnchor="middle" x="385" y="277">REVIEW READY</text>
      <path className="cf-rule-human" d="M344 226c24 12 52 12 84-3" />
    </svg>
  )
}

export function ServicesDeliveryArtifact({
  className,
  ...props
}: IllustrationProps) {
  return (
    <svg
      aria-labelledby="services-artifact-title services-artifact-description"
      className={cn("casefile-svg", className)}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      viewBox="0 0 480 320"
      {...props}
    >
      <title id="services-artifact-title">Professional-services delivery artifact</title>
      <desc id="services-artifact-description">
        Evidence fragments are checked against a delivery method and assembled
        into a review-ready deliverable.
      </desc>
      <rect className="cf-frame" height="288" width="448" x="16" y="16" />
      <path className="cf-rule" d="M16 58h448" />
      <text className="cf-label-ink" x="32" y="42">DELIVERY ARTIFACT / D-01</text>
      <text className="cf-label-muted" x="32" y="84">EVIDENCE</text>
      <rect className="cf-surface" height="56" width="120" x="32" y="102" />
      <rect className="cf-surface" height="56" width="120" x="44" y="172" />
      <path className="cf-rule-soft" d="M48 124h88M48 140h68M60 194h88M60 210h62" />
      <path className="cf-rule" d="M164 132h44M164 200h44" />
      <text className="cf-label-muted" x="208" y="84">METHOD</text>
      <rect className="cf-surface-muted" height="160" width="88" x="208" y="102" />
      <text className="cf-label-ink" x="224" y="128">01</text>
      <text className="cf-label-ink" x="224" y="164">02</text>
      <text className="cf-label-ink" x="224" y="200">03</text>
      <path className="cf-rule-soft" d="M208 140h88M208 176h88M208 212h88" />
      <rect className="cf-signal-fill" height="34" width="4" x="292" y="177" />
      <path className="cf-rule" d="M296 182h34" />
      <text className="cf-label-muted" x="330" y="84">DELIVERABLE</text>
      <rect className="cf-surface-signal" height="160" width="118" x="330" y="102" />
      <path className="cf-rule-signal" d="M346 132h86M346 152h64M346 184h86M346 204h76M346 224h86" />
      <path className="cf-rule-human" d="M350 244c21 10 47 9 78-4" />
      <text className="cf-label-muted" x="32" y="286">SOURCE → METHOD → REVIEW-READY OUTPUT</text>
    </svg>
  )
}
