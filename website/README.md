# Layers website

Production marketing site for Layers. The application uses the Next.js App
Router, strict TypeScript, Tailwind CSS v4, and shadcn with Base UI.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The default preview is available at <http://localhost:3000>.

## Project boundaries

```text
src/
  app/             Route composition, metadata, and global theme bridge
  components/
    forms/         Stateful form composition
    illustrations/ Editable Operational Casefile SVGs
    sections/      Semantic landing-page chapters
    site/          Header, footer, and shared site behavior
    ui/            shadcn-generated interface primitives
  lib/             Configuration, analytics boundary, validation, utilities
```

Keep route files small and compose them from semantic sections. Keep reusable
interface behavior in `components/ui`, page-specific layout in sections, and
non-visual logic in `lib`. Do not introduce a second component system.

`src/app/tokens.css` imports the repository-level canonical token file at
`design-system/handover/tokens.css`. Token values must be changed there, not
duplicated in application code. The preview-only CSS under `design-system/`
is not a production dependency.

## Verification

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Production configuration

All deployment values are centralized in `src/lib/site-config.ts` and
documented in `.env.example`. Privacy and Terms use the internal `/privacy` and
`/terms` routes unless an external URL is configured. An unconfigured form is
visibly marked as a preview and never discards a submission silently.

Email delivery uses server-only Vercel environment variables:

- `RESEND_API_KEY` — Resend credential;
- `EMAIL_FROM` — verified sender, for example `Layers <hello@example.com>`;
- `CONTACT_TO_EMAIL` — private inbox for workflow inquiries and calculator lead records.

Set `NEXT_PUBLIC_FORM_ENDPOINT=/api/contact` and
`NEXT_PUBLIC_ESTIMATE_ENDPOINT=/api/estimate` in Vercel Production to enable
the statically generated form controls. The API routes still require all three
server-only email variables above. Set `CONTACT_TO_EMAIL` to the private inbox
that should receive submissions. Leave `NEXT_PUBLIC_CONTACT_EMAIL` unset when
the address should not be printed on the public site; legal requests are routed
through the contact form.

The root route remains `noindex, nofollow` until the canonical URL, working
email delivery, and `NEXT_PUBLIC_ANALYTICS_READY=true` are configured.
Analytics integration should subscribe to the
`layers:landing-event` browser event; the website emits event names and coarse
context only, never form values or contact details.

For Vercel, connect the whole repository and set `website` as the project root.
The app imports canonical tokens from the sibling `design-system/` directory,
which is part of the same repository, so enable Vercel's monorepo setting that
includes source files outside the app root during the build. Configure every
production value before the final deployment review.

## Release workflow

Production releases always move through GitHub:

1. Create a named branch from `main` and make the scoped changes there.
2. Run lint, typecheck, tests, and the production build.
3. Commit and push the branch, then open a pull request into `main`.
4. Merge the pull request only after the checks pass.
5. Let the Vercel Git integration deploy the merged `main` commit.
6. Verify the immutable deployment, production aliases, key UI flows, API
   validation boundaries, and runtime errors.

Dashboard redeploys only rebuild an existing remote artifact. They must not be
used to publish uncommitted local work.
