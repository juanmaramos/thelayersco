import { cn } from "@/lib/utils"

type EditorialSystemObjectProps = {
  className?: string
}

export function GovernedWorkflowObject({
  className,
}: EditorialSystemObjectProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("system-object-svg", className)}
      focusable="false"
      viewBox="0 0 320 220"
    >
      <g>
        <path className="so-line-soft" d="M54 70h74l24 14h114" />
        <path className="so-line-soft" d="M54 110h84l22 14h106" />
        <path className="so-line-soft" d="M54 150h70l28 14h114" />

        <path className="so-surface-muted" d="m42 58 70 0 18 10-70 0Z" />
        <path className="so-surface" d="m42 98 82 0 18 10-82 0Z" />
        <path className="so-surface-muted" d="m42 138 66 0 18 10-66 0Z" />

        <path className="so-frame" d="m144 72 76 0 26 15-76 0Z" />
        <path className="so-surface" d="m170 87 76 0v70h-76Z" />
        <path className="so-line" d="m170 111 76 0M170 135h76" />
        <path className="so-signal" d="m184 98 34 0 12 7-34 0Z" />
        <path className="so-review" d="m226 127 10 6-10 6-10-6Z" />
        <path className="so-line" d="M246 157l-26 15h-76l26-15" />
      </g>
    </svg>
  )
}

export function MeasurementDecisionObject({
  className,
}: EditorialSystemObjectProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("system-object-svg", className)}
      focusable="false"
      viewBox="0 0 320 220"
    >
      <g>
        <path className="so-line-soft" d="M44 56h232M44 164h232" />
        <path className="so-surface-muted" d="m48 76 64 0 22 13-64 0Z" />
        <path className="so-surface" d="m128 76 64 0 22 13-64 0Z" />
        <path className="so-surface-muted" d="m208 76 64 0 22 13-64 0Z" />
        <path className="so-line-soft" d="M70 89v52M150 89v52M230 89v52" />
        <path className="so-frame" d="m54 141 64 0 16 9-64 0Z" />
        <path className="so-frame" d="m134 141 64 0 16 9-64 0Z" />
        <path className="so-signal" d="m214 141 64 0 16 9-64 0Z" />
        <path className="so-line" d="M118 145h16M198 145h16" />
        <circle className="so-review" cx="150" cy="110" r="7" />
        <path className="so-line" d="m145 110 4 4 8-10" />
      </g>
    </svg>
  )
}
