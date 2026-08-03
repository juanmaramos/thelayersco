import type { Metadata } from "next"
import Link from "next/link"

import {
  LegalContactDetails,
  LegalPageShell,
  LegalSection,
} from "@/components/site/legal-page-shell"
import { legalEntity } from "@/lib/legal"
import { siteConfig } from "@/lib/site-config"

const canonicalUrl = new URL("/terms", siteConfig.metadataBaseUrl).toString()

export const metadata: Metadata = {
  title: `Terms of Use | ${siteConfig.companyName}`,
  description: "Terms for using the Layers website and workflow opportunity estimate.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: `Terms of Use | ${siteConfig.companyName}`,
    description: "Terms for using the Layers website and workflow opportunity estimate.",
    type: "website",
    url: canonicalUrl,
  },
}

const summary = [
  {
    label: "Operator",
    value: `${legalEntity.legalName}, operating under the Layers brand`,
  },
  {
    label: "Website",
    value: "Business information, inquiry forms, and an illustrative workflow estimate",
  },
  {
    label: "Client work",
    value: "Begins only under a separate written agreement signed by the parties",
  },
  {
    label: "Governing law",
    value: "Wyoming law, subject to any mandatory law that applies where you live",
  },
] as const

export default function TermsPage() {
  return (
    <LegalPageShell
      eyebrow="Terms of use"
      summary={summary}
      title="Clear terms for this site."
    >
      <LegalSection id="acceptance" title="1. Acceptance">
        <p>
          These Terms of Use govern your access to the Layers website, including
          its forms and workflow opportunity estimate. By using the site, you
          agree to these terms. If you do not agree, do not use the site.
        </p>
        <p>
          The site is operated by {legalEntity.legalName} under the Layers brand.
          “Layers,” “we,” “us,” and “our” refer to {legalEntity.legalName}.
        </p>
      </LegalSection>

      <LegalSection id="information" title="2. Website information">
        <p>
          The site provides general information about our services and working
          approach. It is not legal, financial, employment, tax, security, or
          other regulated professional advice. You remain responsible for the
          decisions you make using information from the site.
        </p>
        <p>
          We may change, correct, suspend, or remove site content and features at
          any time. We do not promise that every description, example, or feature
          will remain available.
        </p>
      </LegalSection>

      <LegalSection id="calculator" title="3. Workflow opportunity estimate">
        <p>
          Calculator results are illustrative planning estimates based on the
          inputs you provide and the modeling assumptions shown beside the
          calculation. They estimate potential capacity value, not guaranteed
          cash savings, profit, headcount reduction, implementation cost, model
          cost, or return on investment.
        </p>
        <p>
          Actual results depend on workflow design, data quality, adoption,
          technical constraints, controls, and other factors that the public
          calculator cannot evaluate. Do not make a hiring, investment, or other
          material decision solely from a calculator result.
        </p>
      </LegalSection>

      <LegalSection id="inquiries" title="4. Inquiries and client work">
        <p>
          Sending a form, receiving an estimate, or speaking with us does not
          create a client, advisory, fiduciary, employment, partnership, or other
          professional relationship. Client work begins only under a separate
          written agreement signed by the parties.
        </p>
        <p>
          Public forms are for initial business inquiries. Do not submit trade
          secrets, personal records, credentials, regulated data, client-confidential
          material, or anything you are not authorized to share. We do not agree
          to confidentiality through a website submission alone.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="5. Acceptable use">
        <p>You must not:</p>
        <ul>
          <li>use the site unlawfully or infringe another person’s rights;</li>
          <li>submit false, harmful, abusive, or unauthorized information;</li>
          <li>attempt to bypass security, interfere with operation, or probe the site for vulnerabilities without written authorization;</li>
          <li>use automated systems to overload forms, send unsolicited messages, or impose unreasonable demand on the service; or</li>
          <li>misrepresent calculator results or site content as a guarantee or professional opinion from Layers.</li>
        </ul>
        <p>We may restrict access when reasonably necessary to protect the site, users, or our rights.</p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="6. Intellectual property">
        <p>
          The site’s design, text, graphics, branding, software, and other content
          are owned by us or used with permission and are protected by applicable
          intellectual-property laws. These terms give you a limited, revocable,
          non-exclusive right to access the site for your own lawful business use.
        </p>
        <p>
          You may not copy, publish, sell, license, or create derivative works
          from substantial site content without written permission, except where
          applicable law expressly allows it.
        </p>
      </LegalSection>

      <LegalSection id="links" title="7. Third-party services and links">
        <p>
          The site may use or link to services operated by other companies. We do
          not control their sites, availability, security, or content. Their own
          terms and privacy notices apply when you use them.
        </p>
      </LegalSection>

      <LegalSection id="disclaimer" title="8. Disclaimer">
        <p>
          To the fullest extent permitted by law, the site is provided “as is”
          and “as available.” We disclaim implied warranties of merchantability,
          fitness for a particular purpose, title, non-infringement, and any
          warranty that the site will be uninterrupted, error-free, or suitable
          for a particular business decision.
        </p>
        <p>
          Nothing in these terms excludes a warranty or responsibility that
          applicable law does not allow us to exclude.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="9. Limitation of liability">
        <p>
          To the fullest extent permitted by law, {legalEntity.legalName} and its
          members, personnel, and service providers will not be liable for
          indirect, incidental, special, consequential, exemplary, or punitive
          damages, or for lost profits, revenue, data, goodwill, or business
          opportunity arising from use of the public site.
        </p>
        <p>
          To the fullest extent permitted by law, our total liability arising
          from the public site will not exceed one hundred U.S. dollars (US
          $100). This limit does not apply where applicable law prohibits it.
        </p>
      </LegalSection>

      <LegalSection id="law" title="10. Governing law">
        <p>
          These terms are governed by the laws of the State of Wyoming, without
          regard to conflict-of-law rules. Any dispute concerning the public site
          must be brought in a court with jurisdiction in Sheridan County,
          Wyoming, unless mandatory law gives you another right or forum.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes and severability">
        <p>
          We may update these terms by posting a revised version and changing the
          effective date. Continued use after the update means you accept the
          revised terms. If a provision is unenforceable, the remaining
          provisions continue to apply.
        </p>
      </LegalSection>

      <LegalSection id="privacy" title="12. Privacy and contact">
        <p>
          Our <a href="/privacy">Privacy Notice</a> explains how we handle
          information collected through the site. Use our{" "}
          <Link href="/#discuss">contact form</Link> for questions about these terms,
          or write to:
        </p>
        <LegalContactDetails />
      </LegalSection>
    </LegalPageShell>
  )
}
