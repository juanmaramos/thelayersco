# Landing-page implementation handover

This folder converts the approved **Operational Casefile** direction into a production contract for the Next.js, Tailwind v4, and shadcn application.

## Source precedence

1. `docs/company-context.md` — pointer to the private company source of truth.
2. `docs/design.md` — visual system, hierarchy, and responsive intent.
3. `design-system/illustrations/README.md` — editable SVG construction and QA.
4. `design-system/handover/tokens.css` — the only canonical token values.
5. `design-system/handover/globals.css` — Tailwind v4 theme bridge.

The static design previews are comparison and QA material. They do not override these written sources, and their CSS must not be copied into production.

## Scaffold contract

- Next.js App Router with strict TypeScript.
- Tailwind CSS v4.
- shadcn preset `b77BzJ2fAo` using the project-detected Base UI configuration.
- Framework-standard `website/src` architecture described in `docs/design.md`.
- Server Components by default; client components only for the mobile sheet, accordion, tracked links, and form behavior.

The initialized project must report the intended preset and aliases through `npx shadcn@latest info --json`. Add primitives through the shadcn CLI rather than hand-copying another component system.

## Token contract

`tokens.css` is the only place token values may live. The application keeps `website/src/app/tokens.css` as an import bridge to that file. Do not paste or redefine token values in the app.

`globals.css` maps tokens to Tailwind and may contain structural recipes such as the page shell, operational labels, focus treatment, casefile SVG classes, and reduced-motion rules. It may not introduce one-off colors or a second design system.

## Typography

- Instrument Sans: all H1/H2 headings, body, navigation, controls, and functional titles.
- Instrument Serif: rare editorial counterpoint only; never the default section-heading treatment.
- IBM Plex Mono: case IDs, evidence states, measurements, and the single Operational Trace readout.

All fonts are self-hosted with Fontsource. Do not depend on Google Fonts at runtime.

## shadcn ownership

Use generated shadcn components for reusable interface behavior:

| Need | Primitive | Contract |
| --- | --- | --- |
| Actions | `Button`, `buttonVariants` | Primary action is ink; add one reusable inverse treatment for cobalt/ink chapters if required. |
| State | `Badge` | Color is paired with text; blue is active/evidence, ochre is review, green is confirmed success. |
| Form | `Field`, `Label`, `Input`, `Textarea` | Visible labels, connected descriptions/errors, invalid and disabled states. |
| FAQ | `Accordion` | Native keyboard behavior, visible focus, no custom imitation. |
| Mobile navigation | `Sheet` | Correct accessible title and focus handling. |
| Rules | `Separator` | Semantic separators; casefile grids may use CSS borders. |

Marketing casefiles and SVG illustrations are original compositions, not generic shadcn Cards.

## Component architecture

- `app/`: route composition, metadata, global stylesheet imports.
- `components/ui/`: CLI-generated registry primitives only.
- `components/site/`: shared site chrome and navigation behavior.
- `components/sections/`: semantic sections; one file per page chapter.
- `components/illustrations/`: inline, editable Operational Casefile SVGs.
- `components/forms/`: qualification form and UI states.
- `lib/`: site configuration, analytics, form validation, and utilities.

Do not extract a component merely because two blocks look similar. Extract when meaning, behavior, and visual contract repeat. Keep section-specific composition close to its section.

## Composition rules

- The hero is a full cobalt chapter with a descriptive sans headline and an SVG-first representative casefile.
- Use a visible 12-column editorial grid and square seams.
- Use light, cobalt, and ink chapters to establish hierarchy; avoid a uniform stack of pale sections.
- Use fewer, larger artifacts. Never repeat an abstract flow diagram to fill space.
- Casefile labels, IDs, and semantic endpoints remain readable at production sizes.
- People and Workforce receives the dominant practice composition; professional-services delivery is a compact translation.
- Control is the central evidence dossier and appears before Practices.
- Method is a compact four-gate band, not a large abstract systems diagram.
- Do not render the retired commitment strip or unsupported accountable-team section.

## Illustration contract

Production artwork is editable inline SVG. It depicts recognizable documents, tables, policy or method fragments, exceptions, annotations, review actions, and outputs. Follow `design-system/illustrations/README.md`.

Do not use raster generation, gradients, filters, glows, 3D, free-perspective scenes, abstract orbital geometry, or icon-library glyphs as brand illustration. Canvas UI ASCII Object is omitted from the initial release; it adds no value to the selected casefile route.

## Interaction and accessibility

- Minimum interactive target: 44×44px.
- Visible `:focus-visible` treatment on every interactive surface.
- `scroll-margin-top` on sticky-header destinations.
- Correct heading hierarchy and landmarks.
- Meaning is not conveyed by color alone.
- Form submission either reaches a configured endpoint or clearly reports that the development form is not connected.
- Respect `prefers-reduced-motion`; the complete static state remains available.
- At 390px, 768px, 1024px, 1440px, and 200% zoom, no content clips or creates horizontal page overflow.

## Acceptance checklist

- Offer and value are clear above the fold.
- Hero shows source-to-approved-output work and is labelled representative/not customer data.
- Exact single Operational Trace readout is present in Control only.
- Source, rule, exception, review, and output are visible in Control.
- All CTA targets and anchor offsets work.
- Mobile navigation, keyboard order, focus, errors, reduced motion, and contrast pass.
- No browser or console errors.
- Typecheck, lint, relevant tests, and production build pass.
- Preview remains available locally for visual approval; do not deploy without approval.
