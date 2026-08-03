import { ImageResponse } from "next/og"

import { LayersMark } from "@/components/site/layers-mark"
import { readDesignTokens } from "@/lib/design-tokens"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
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
        style={{ height: 144, width: 144 }}
      />
    </div>,
    size
  )
}
