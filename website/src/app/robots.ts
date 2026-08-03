import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site-config"

export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.releaseReady || !siteConfig.canonicalUrl) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    }
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: siteConfig.canonicalUrl,
    sitemap: new URL("/sitemap.xml", siteConfig.canonicalUrl).toString(),
  }
}
