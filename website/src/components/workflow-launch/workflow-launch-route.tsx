import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { WorkflowLaunchPage } from "@/components/workflow-launch/workflow-launch-page"
import { siteConfig } from "@/lib/site-config"

export function WorkflowLaunchRoute() {
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
      />
      <WorkflowLaunchPage
        contactEmail={siteConfig.contactEmail}
        formEndpoint={siteConfig.formEndpoint}
        schedulingUrl={siteConfig.schedulingUrl}
      />
      <SiteFooter
        companyName={siteConfig.companyName}
        contactEmail={siteConfig.contactEmail}
        description="We redesign slow, manual workflows and build the systems that run them."
        location={siteConfig.publicLocation}
        navigationLinks={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/workflow-launch#faq" },
        ]}
        privacyUrl={siteConfig.privacyUrl}
        termsUrl={siteConfig.termsUrl}
      />
    </>
  )
}
