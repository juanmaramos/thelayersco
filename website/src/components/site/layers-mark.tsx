import type { SVGProps } from "react"

type LayersMarkVariant = "negative" | "positive"

type LayersMarkProps = SVGProps<SVGSVGElement> & {
  innerColor?: string
  middleColor?: string
  outerColor?: string
  variant?: LayersMarkVariant
}

const variantColors: Record<
  LayersMarkVariant,
  { inner: string; middle: string; outer: string }
> = {
  positive: {
    inner: "var(--signal)",
    middle: "var(--signal-strong)",
    outer: "var(--ink)",
  },
  negative: {
    inner: "var(--signal-soft)",
    middle: "var(--signal)",
    outer: "var(--on-ink)",
  },
}

export function LayersMark({
  innerColor,
  middleColor,
  outerColor,
  variant = "positive",
  ...props
}: LayersMarkProps) {
  const colors = variantColors[variant]

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      shapeRendering="geometricPrecision"
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M8 8h12v36h36v12H8V8Z" fill={outerColor ?? colors.outer} />
      <path d="M24 8h12v20h20v12H24V8Z" fill={middleColor ?? colors.middle} />
      <path d="M40 8h16v16H40z" fill={innerColor ?? colors.inner} />
    </svg>
  )
}
