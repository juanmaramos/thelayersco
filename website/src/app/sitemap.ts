import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.releaseReady || !siteConfig.canonicalUrl) {
    return []
  }

  return [
    {
      url: siteConfig.canonicalUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/workflow-launch", siteConfig.canonicalUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/privacy", siteConfig.canonicalUrl).toString(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: new URL("/terms", siteConfig.canonicalUrl).toString(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
