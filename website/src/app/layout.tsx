import type { Metadata } from "next"
import Script from "next/script"

import { siteConfig, siteDescription } from "@/lib/site-config"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.metadataBaseUrl),
  title: `${siteConfig.companyName} — Turn manual workflows into production systems`,
  description: siteDescription,
  alternates: siteConfig.canonicalUrl
    ? { canonical: siteConfig.canonicalUrl }
    : undefined,
  openGraph: {
    title: `${siteConfig.companyName} — Turn manual workflows into production systems`,
    description: siteDescription,
    siteName: siteConfig.companyName,
    type: "website",
    url: siteConfig.canonicalUrl ?? undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.companyName} — Turn manual workflows into production systems`,
    description: siteDescription,
  },
  robots: siteConfig.releaseReady
    ? { index: true, follow: true }
    : { index: false, follow: false },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full font-sans antialiased">
      <body className="flex min-h-full flex-col">
        {children}
        {siteConfig.analyticsReady &&
        siteConfig.analyticsHost &&
        siteConfig.analyticsWebsiteId ? (
          <Script
            data-domains={new URL(siteConfig.metadataBaseUrl).hostname}
            data-exclude-hash="true"
            data-website-id={siteConfig.analyticsWebsiteId}
            src={new URL("/script.js", siteConfig.analyticsHost).toString()}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  )
}
