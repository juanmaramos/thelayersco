import { ImageResponse } from "next/og"

import { LayersMark } from "@/components/site/layers-mark"
import { readDesignTokens } from "@/lib/design-tokens"
import { siteConfig } from "@/lib/site-config"

export const alt = "Layers — Turn manual workflows into production systems"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const tokens = await readDesignTokens([
    "canvas",
    "ink",
    "line",
    "text-muted",
    "signal",
    "signal-strong",
    "surface",
  ] as const)

  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: tokens.surface,
        color: tokens.ink,
        display: "flex",
        fontFamily: "sans-serif",
        height: "100%",
        padding: 64,
        width: "100%",
      }}
    >
      <div
        style={{
          border: `1px solid ${tokens.line}`,
          display: "flex",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 54,
            width: "58%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 24,
              fontWeight: 600,
              gap: 14,
            }}
          >
            <LayersMark
              innerColor={tokens.signal}
              middleColor={tokens["signal-strong"]}
              outerColor={tokens.ink}
              style={{ height: 42, width: 42 }}
            />
            <div style={{ display: "flex" }}>{siteConfig.companyName}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <div
              style={{
                display: "flex",
                fontSize: 66,
                fontWeight: 500,
                letterSpacing: -3,
                lineHeight: 1.02,
              }}
            >
              Turn manual workflows into production systems.
            </div>
            <div
              style={{
                color: tokens["text-muted"],
                display: "flex",
                fontSize: 24,
                lineHeight: 1.4,
              }}
            >
              Workflow transformation and implementation.
            </div>
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            background: tokens.canvas,
            borderLeft: `1px solid ${tokens.line}`,
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "42%",
          }}
        >
          <LayersMark
            innerColor={tokens.signal}
            middleColor={tokens["signal-strong"]}
            outerColor={tokens.ink}
            style={{ height: 250, width: 250 }}
          />
        </div>
      </div>
    </div>,
    size
  )
}
