import type { SVGProps } from "react"

type LayersMarkProps = SVGProps<SVGSVGElement> & {
  innerColor?: string
  middleColor?: string
  outerColor?: string
}

export function LayersMark({
  innerColor = "var(--signal)",
  middleColor = "var(--signal-strong)",
  outerColor = "var(--ink)",
  ...props
}: LayersMarkProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      shapeRendering="geometricPrecision"
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M8 8h12v36h36v12H8V8Z" fill={outerColor} />
      <path d="M24 8h12v20h20v12H24V8Z" fill={middleColor} />
      <path d="M40 8h16v16H40z" fill={innerColor} />
    </svg>
  )
}
