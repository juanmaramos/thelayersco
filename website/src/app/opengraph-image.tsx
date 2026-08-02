import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/site-config"

export const alt = "Layers — Turn manual workflows into production systems"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

function tokenValue(css: string, name: string) {
  const match = css.match(new RegExp(`--${name}:\\s*([^;]+);`))

  if (!match?.[1]) {
    throw new Error(`Missing canonical design token: ${name}`)
  }

  return match[1].trim()
}

export default async function OpenGraphImage() {
  const tokenCss = await readFile(
    path.resolve(
      process.cwd(),
      "../design-system/handover/tokens.css"
    ),
    "utf8"
  )
  const ink = tokenValue(tokenCss, "ink")
  const muted = tokenValue(tokenCss, "text-muted")
  const surface = tokenValue(tokenCss, "surface")
  const canvas = tokenValue(tokenCss, "canvas")
  const line = tokenValue(tokenCss, "line")
  const signal = tokenValue(tokenCss, "signal")
  const signalSoft = tokenValue(tokenCss, "signal-soft")
  const human = tokenValue(tokenCss, "human")

  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: surface,
        color: ink,
        display: "flex",
        fontFamily: "sans-serif",
        height: "100%",
        padding: 64,
        width: "100%",
      }}
    >
      <div
        style={{
          border: `1px solid ${line}`,
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
          <div style={{ display: "flex", fontSize: 24, fontWeight: 600 }}>
            {siteConfig.companyName}
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
                color: muted,
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
            background: canvas,
            borderLeft: `1px solid ${line}`,
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "42%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: 38,
            }}
          >
            <div style={{ display: "flex", gap: 18 }}>
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  style={{
                    background: surface,
                    border: `1px solid ${line}`,
                    display: "flex",
                    height: 58,
                    width: 74,
                  }}
                />
              ))}
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                gap: 24,
              }}
            >
              <div
                style={{
                  background: signalSoft,
                  border: `1px solid ${signal}`,
                  display: "flex",
                  height: 116,
                  transform: "rotate(30deg) skewX(-30deg) scaleY(0.86)",
                  width: 116,
                }}
              />
              <div
                style={{
                  background: human,
                  borderRadius: 999,
                  display: "flex",
                  height: 34,
                  width: 34,
                }}
              />
              <div
                style={{
                  background: signal,
                  display: "flex",
                  height: 72,
                  width: 90,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    size
  )
}
