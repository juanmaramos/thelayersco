import type { Metadata } from "next"
import Link from "next/link"

import {
  LegalContactDetails,
  LegalPageShell,
  LegalSection,
} from "@/components/site/legal-page-shell"
import { legalEntity } from "@/lib/legal"
import { siteConfig } from "@/lib/site-config"

const canonicalUrl = new URL("/privacy", siteConfig.metadataBaseUrl).toString()

export const metadata: Metadata = {
  title: `Privacy Notice | ${siteConfig.companyName}`,
  description:
    "How RHAMS LLC collects, uses, shares, and protects information on the Layers website.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: `Privacy Notice | ${siteConfig.companyName}`,
    description:
      "How RHAMS LLC handles information submitted through the Layers website.",
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
    label: "Information",
    value: "Inquiry details, estimate inputs, email preferences, and basic request data",
  },
  {
    label: "Sale or advertising",
    value: "We do not sell personal information or share it for cross-context behavioral advertising",
  },
  {
    label: "Cookies",
    value: siteConfig.analyticsReady
      ? "Cookie-free analytics; no advertising trackers"
      : "No non-essential analytics or advertising cookies are currently used",
  },
] as const

export default function PrivacyPage() {
  return (
    <LegalPageShell
      eyebrow="Privacy"
      summary={summary}
      title="Privacy, stated plainly."
    >
      <LegalSection id="scope" title="1. Who this notice covers">
        <p>
          This notice explains how {legalEntity.legalName} collects and uses
          personal information through the Layers website, including the
          workflow inquiry form and the workflow opportunity estimate. In this
          notice, “Layers,” “we,” “us,” and “our” refer to {legalEntity.legalName}.
        </p>
        <p>
          This notice applies to the public website. A signed client agreement
          may include additional privacy, security, retention, and data-handling
          terms for client work.
        </p>
      </LegalSection>

      <LegalSection id="collection" title="2. Information we collect">
        <p><strong>Information you provide.</strong> Depending on how you use the site, this may include:</p>
        <ul>
          <li>your name and work email address;</li>
          <li>your organization and role;</li>
          <li>the workflow, business problem, or desired result you describe;</li>
          <li>calculator inputs, the resulting estimate, and your email preference; and</li>
          <li>messages and other information you send us.</li>
        </ul>
        <p>
          <strong>Information collected automatically.</strong> Our hosting and
          security providers may process basic technical information such as an
          IP address, browser and device type, requested page, referring page,
          request time, and diagnostic or security logs. The animated visual on
          the home page is delivered through a content delivery network, which
          receives the technical request needed to return that asset.
        </p>
        {siteConfig.analyticsReady ? (
          <p>
            We use privacy-focused analytics to understand aggregate page visits
            and coarse interactions such as a calculator start or successful
            form submission. The analytics service may process the page URL,
            referring source, browser and device information, approximate
            location, and the interaction name. We do not send names, email
            addresses, calculator inputs, or form text to analytics.
          </p>
        ) : null}
        <p>
          Please do not submit confidential client material, sensitive personal
          information, credentials, or production data through the public forms.
        </p>
      </LegalSection>

      <LegalSection id="use" title="3. Why we use information">
        <p>We use personal information to:</p>
        <ul>
          <li>send an estimate or respond to an inquiry you make;</li>
          <li>understand whether a workflow may be suitable for a conversation or engagement;</li>
          <li>operate, secure, troubleshoot, and improve the website;</li>
          <li>keep records of requests, permissions, and opt-outs;</li>
          <li>send business updates where you have agreed or where applicable law otherwise permits; and</li>
          <li>comply with law, protect rights, and prevent misuse.</li>
        </ul>
        <p>
          Where European or UK data-protection law applies, we rely on taking
          steps at your request before a potential contract, our legitimate
          interests in operating and protecting the business, consent where we
          ask for it, and compliance with legal obligations. You can withdraw
          consent at any time, without affecting earlier processing.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="4. When information is shared">
        <p>We disclose information only as needed to:</p>
        <ul>
          <li>
            service providers that host the website, deliver email, provide
            content delivery or analytics, or support security and operations,
            including Vercel, Resend, and Umami when analytics is enabled;
          </li>
          <li>professional advisers acting under appropriate duties of confidentiality;</li>
          <li>authorities or other parties when required by law or necessary to protect rights and safety; or</li>
          <li>a successor in a merger, financing, reorganization, or sale of the business, subject to applicable law.</li>
        </ul>
        <p>
          We do not sell personal information. We do not share personal
          information for cross-context behavioral advertising, and we do not
          use third-party advertising trackers on this site.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="5. Cookies and browser signals">
        {siteConfig.analyticsReady ? (
          <p>
            The site uses cookie-free analytics for aggregate traffic and the
            coarse interaction events described above. It does not use those
            analytics to identify visitors or track them across unrelated sites.
            We do not use advertising cookies or behavioral advertising trackers.
          </p>
        ) : (
          <p>
            The current site does not deliberately set non-essential analytics or
            advertising cookies. We do not track visitors across unrelated sites,
            and other parties do not collect information through this site for
            behavioral advertising.
          </p>
        )}
        <p>
          Hosting, security, and content-delivery providers still receive the
          technical request data needed to deliver and protect the site. If we
          later add advertising technology, cross-site tracking, or non-essential
          cookies, we will update this notice and provide choices where required.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="6. How long information is kept">
        <p>
          We keep inquiry and estimate-delivery records only for as long as
          needed to respond, assess a possible engagement, maintain business
          records, and protect the service. Our working retention period for an
          inactive inquiry is no more than 24 months after the last substantive
          interaction, unless a longer period is needed for a contract, legal
          obligation, dispute, or security matter.
        </p>
        <p>
          Marketing contact information is kept until you opt out or it is no
          longer useful. We may retain a minimal suppression record so that we
          continue to honor an opt-out. Technical logs are retained according to
          provider settings and are removed or aggregated when no longer needed.
        </p>
      </LegalSection>

      <LegalSection id="security" title="7. Security">
        <p>
          We use reasonable administrative, technical, and organizational
          safeguards appropriate to the information and the size of the service.
          No internet transmission or storage system is completely secure, so
          we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection id="transfers" title="8. International transfers">
        <p>
          We are based in the United States, and our service providers may
          process information in the United States and other countries. Where
          required, we use contractual or other recognized safeguards for these
          transfers. Privacy protections in those countries may differ from
          those where you live.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="9. Your choices and rights">
        <p>
          You may ask us to access, correct, or delete personal information we
          hold about you. You may also opt out of marketing at any time using the
          unsubscribe method in an email or by contacting us. We may need to
          verify your identity before completing a request.
        </p>
        <p>
          Depending on where you live and whether the relevant law applies to
          us, you may also have rights to restrict or object to processing,
          receive a portable copy, withdraw consent, appeal a decision, or make
          a complaint to your local data-protection authority. We will not
          discriminate against you for exercising an applicable privacy right.
        </p>
        <p>
          We do not currently sell personal information or use it for targeted
          advertising, so there is no separate sale or targeted-advertising
          opt-out to provide.
        </p>
      </LegalSection>

      <LegalSection id="children" title="10. Children">
        <p>
          This business-to-business site is not directed to children under 16,
          and we do not knowingly collect personal information from them. If you
          believe a child provided information, contact us so we can review and
          remove it where appropriate.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes to this notice">
        <p>
          We may update this notice as the site or our legal obligations change.
          We will post the updated notice here, revise its effective date, and
          provide additional notice when a material change requires it.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact and privacy requests">
        <p>
          Use our <Link href="/#discuss">contact form</Link> for privacy, security,
          or other requests. Please identify the type of request in your
          message. You may also write to the mailing address below.
        </p>
        <LegalContactDetails />
      </LegalSection>
    </LegalPageShell>
  )
}
