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

All open deployment values are centralized in `src/lib/site-config.ts` and
read from the `NEXT_PUBLIC_*` variables documented in `.env.example`.
Unconfigured footer links are omitted. An unconfigured form is visibly marked
as a preview and never discards a submission silently.

The root route remains `noindex, nofollow` until the canonical URL, form
endpoint, privacy URL, terms URL, and `NEXT_PUBLIC_ANALYTICS_READY=true` are all
configured. Analytics integration should subscribe to the
`layers:landing-event` browser event; the website emits event names and coarse
context only, never form values or contact details.

For Vercel, use the repository root as the source and `website` as the project
root. Enable source files outside the project root for the build because the
canonical token import intentionally resolves from `design-system/`. Configure
every production value before the final deployment review.
