import type { Metadata } from "next"

import { WorkflowLaunchRoute } from "@/components/workflow-launch/workflow-launch-route"
import { siteConfig } from "@/lib/site-config"

const title = "Workflow Launch — Skills and plugins for high-value work"
const description =
  "Turn one repeatable workstream into a working AI skill or plugin. Your team keeps its tools and owns the client-specific package we hand over."
const canonicalUrl = siteConfig.canonicalUrl
  ? new URL("/workflow-launch", siteConfig.canonicalUrl).toString()
  : undefined

export const metadata: Metadata = {
  title,
  description,
  alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  openGraph: {
    title,
    description,
    siteName: siteConfig.companyName,
    type: "website",
    url: canonicalUrl,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function WorkflowLaunch() {
  return <WorkflowLaunchRoute />
}
