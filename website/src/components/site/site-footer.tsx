import { LayersMark } from "@/components/site/layers-mark"

type SiteFooterProps = {
  companyName: string
  contactEmail: string | null
  location?: string
  navigationLinks?: ReadonlyArray<{ href: string; label: string }>
  privacyUrl: string | null
  termsUrl: string | null
  description?: string
}

export function SiteFooter({
  companyName,
  contactEmail,
  location,
  navigationLinks = [],
  privacyUrl,
  termsUrl,
  description = "Workflow transformation and implementation for People, Workforce, and professional-services teams.",
}: SiteFooterProps) {
  const hasLinks = Boolean(
    navigationLinks.length > 0 || contactEmail || privacyUrl || termsUrl
  )
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t border-ink-line bg-ink text-on-ink"
      data-theme="ink"
    >
      <div className="section-shell flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex max-w-xl flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <LayersMark className="size-7 shrink-0" variant="negative" />
            <p className="text-base font-semibold">{companyName}</p>
          </div>
          <p className="text-sm leading-6 text-on-ink-muted">
            {description}
          </p>
          {location ? (
            <p className="text-xs leading-5 text-on-ink-muted">{location}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          {hasLinks ? (
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-on-ink-muted">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="inline-flex min-h-11 items-center hover:text-on-ink"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {contactEmail ? (
                  <li>
                    <a
                      className="inline-flex min-h-11 items-center hover:text-on-ink"
                      href={`mailto:${contactEmail}`}
                    >
                      {contactEmail}
                    </a>
                  </li>
                ) : null}
                {privacyUrl ? (
                  <li>
                    <a
                      className="inline-flex min-h-11 items-center hover:text-on-ink"
                      href={privacyUrl}
                    >
                      Privacy
                    </a>
                  </li>
                ) : null}
                {termsUrl ? (
                  <li>
                    <a
                      className="inline-flex min-h-11 items-center hover:text-on-ink"
                      href={termsUrl}
                    >
                      Terms
                    </a>
                  </li>
                ) : null}
              </ul>
            </nav>
          ) : null}
          <p className="text-xs text-on-ink-muted">
            © {currentYear} - The Layers Co.
          </p>
        </div>
      </div>
    </footer>
  )
}
