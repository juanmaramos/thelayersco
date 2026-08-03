import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import {
  VersionTwoPage,
  type VersionTwoHeroBackground,
} from "@/components/version-two/version-two-page"
import { siteConfig } from "@/lib/site-config"

const navItems = [
  { label: "What you get", href: "#deliverable" },
  { label: "Workflows", href: "#patterns" },
  { label: "How we work", href: "#approach" },
  { label: "Portability", href: "#portability" },
  { label: "FAQ", href: "#faq" },
] as const

type VersionTwoRouteProps = {
  heroBackground?: VersionTwoHeroBackground
}

export function VersionTwoRoute({
  heroBackground = "colorflow",
}: VersionTwoRouteProps) {
  return (
    <>
      <a
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader
        companyName={siteConfig.companyName}
        ctaLabel="Talk through a workflow"
        navItems={navItems}
      />
      <VersionTwoPage
        contactEmail={siteConfig.contactEmail}
        estimateEndpoint={siteConfig.estimateEndpoint}
        formEndpoint={siteConfig.formEndpoint}
        heroBackground={heroBackground}
        schedulingUrl={siteConfig.schedulingUrl}
      />
      <SiteFooter
        companyName={siteConfig.companyName}
        contactEmail={siteConfig.contactEmail}
        description="We redesign slow, manual workflows and build the systems that run them."
        privacyUrl={siteConfig.privacyUrl}
        termsUrl={siteConfig.termsUrl}
      />
    </>
  )
}
