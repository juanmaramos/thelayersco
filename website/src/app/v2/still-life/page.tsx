import type { Metadata } from "next"

import { VersionTwoRoute } from "@/components/version-two/version-two-route"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `${siteConfig.companyName} — Archived still-life comparison`,
  description: "Archived visual comparison route for the stale still-life direction.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function VersionTwoStillLife() {
  return <VersionTwoRoute heroBackground="still-life" />
}
