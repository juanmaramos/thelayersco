import type { ReactNode } from "react"

import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { legalEntity } from "@/lib/legal"
import { siteConfig } from "@/lib/site-config"

type LegalPageShellProps = {
  children: ReactNode
  eyebrow: string
  summary: ReadonlyArray<{ label: string; value: string }>
  title: string
}

export function LegalPageShell({
  children,
  eyebrow,
  summary,
  title,
}: LegalPageShellProps) {
  return (
    <>
      <a
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader
        brandHref="/"
        companyName={siteConfig.companyName}
        ctaHref="/#discuss"
      />
      <main id="main-content">
        <section
          className="border-b border-line-strong bg-canvas"
          id="top"
        >
          <div className="section-shell grid gap-10 py-16 sm:py-20 md:grid-cols-12 md:gap-6 lg:py-24">
            <div className="md:col-span-8">
              <p className="operational-label text-signal-strong">{eyebrow}</p>
              <h1 className="mt-6 max-w-[11ch] text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.9] font-semibold tracking-[-0.055em]">
                {title}
              </h1>
            </div>
            <div className="self-end border-t border-line-strong pt-5 md:col-span-4">
              <p className="text-sm leading-6 text-muted-foreground">
                Effective {legalEntity.effectiveDate}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {legalEntity.legalName} operates this site under the Layers brand.
              </p>
            </div>
          </div>
        </section>

        <div className="section-shell grid gap-12 py-16 sm:py-20 md:grid-cols-12 md:gap-6 lg:py-28">
          <aside className="self-start border-t border-line-strong md:col-span-4 md:sticky md:top-28">
            <dl>
              {summary.map((item) => (
                <div
                  className="border-b border-line py-5"
                  key={item.label}
                >
                  <dt className="font-mono text-[0.6875rem] leading-5 tracking-[0.08em] text-signal-strong uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-2 max-w-[34ch] text-sm leading-6 text-muted-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          <article className="min-w-0 md:col-span-7 md:col-start-6">
            {children}
          </article>
        </div>
      </main>
      <SiteFooter
        companyName={siteConfig.companyName}
        contactEmail={siteConfig.contactEmail}
        description="We redesign slow, manual workflows and build the systems that run them."
        location={siteConfig.publicLocation}
        navigationLinks={[{ label: "FAQ", href: "/#faq" }]}
        privacyUrl={siteConfig.privacyUrl}
        termsUrl={siteConfig.termsUrl}
      />
    </>
  )
}

type LegalSectionProps = {
  children: ReactNode
  id: string
  title: string
}

export function LegalSection({ children, id, title }: LegalSectionProps) {
  return (
    <section className="border-t border-line-strong py-8 first:border-t-0 first:pt-0 sm:py-10" id={id}>
      <h2 className="text-2xl leading-8 font-semibold tracking-[-0.03em] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-base leading-7 text-muted-foreground [&_a]:font-semibold [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-2 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-3">
        {children}
      </div>
    </section>
  )
}

export function LegalContactDetails() {
  return (
    <address className="not-italic">
      <strong>{legalEntity.legalName}</strong>
      <br />
      {legalEntity.mailingAddress.map((line) => (
        <span key={line}>
          {line}
          <br />
        </span>
      ))}
    </address>
  )
}
