import { ImageResponse } from "next/og"

import { LayersMark } from "@/components/site/layers-mark"
import { readDesignTokens } from "@/lib/design-tokens"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default async function Icon() {
  const tokens = await readDesignTokens([
    "ink",
    "signal",
    "signal-strong",
    "surface",
  ] as const)

  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: tokens.surface,
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <LayersMark
        innerColor={tokens.signal}
        middleColor={tokens["signal-strong"]}
        outerColor={tokens.ink}
        style={{ height: 64, width: 64 }}
      />
    </div>,
    size
  )
}
