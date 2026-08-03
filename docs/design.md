# Design System Direction

**Status:** Canonical production direction
**Direction:** Operational Casefile
**Company source of truth:** [`company-context.md`](./company-context.md)
**Implementation handover:** [`design-system/handover/README.md`](../design-system/handover/README.md)
**Illustration manual:** [`design-system/illustrations/README.md`](../design-system/illustrations/README.md)

## 1. Purpose

This system is for an AI-native workflow transformation and implementation partner. It must help a COO, People or Workforce leader, or professional-services leader understand three things quickly:

1. the company redesigns a complete operating workflow, not a software feature;
2. the work begins with one bounded process and a measurable baseline;
3. evidence, exceptions, and accountable human judgment remain visible.

The website leads with the business result:

> Turn manual workflows into production systems.

It must not lead with model names, agents, prompts, developer tooling, or invented proof.

### Scan-first marketing rule

The landing page is a decision interface, not a complete company brief. A transformation leader must be able to understand the offer by scanning headings, short labels, and outcomes.

- Give each viewport one job.
- Let the headings tell the complete story.
- Use no more than one short lead paragraph per major section.
- Prefer three or four concrete items over exhaustive taxonomies.
- Keep architecture, evaluation detail, and implementation nuance behind progressive disclosure or in sales collateral.
- Use visuals only when they make the workflow, control model, or evidence easier to understand.
- Do not compensate for missing customer proof with decorative diagrams, invented metrics, or generic AI imagery.

The intended impression is **operational editorialism**: the product clarity of a strong infrastructure company, the restraint of a well-edited business publication, and the delivery confidence of a senior specialist firm.

## 2. Creative direction: Operational Casefile

Operational Casefile treats the page as a clear working dossier rather than a gallery of abstract diagrams. It uses literal source artifacts, policy or method fragments, handoffs, exceptions, review notes, and approved outputs to demonstrate how work changes.

### Reference synthesis

The approved references contribute a small number of durable patterns:

- full-field cobalt used as a meaningful chapter, not a decorative accent;
- assertive sans typography that can become page architecture;
- rigid editorial grids, visible seams, numbered rails, and asymmetric compositions;
- strong light/dark chapter changes instead of repeated pale sections;
- material, data, and document imagery with a recognizable subject;
- one dominant visual per chapter rather than many equal cards.

Do not borrow category signals, logos, customers, metrics, photographic subjects, crypto or developer aesthetics, lime accents, or faux product dashboards from the references. No reference is evidence about this company.

### Tone

- Direct, senior, and operational.
- Specific enough to sound experienced without implying unverified experience.
- Editorial in proportion; industrial in structure.
- Calm about technology and exact about accountability.
- Visually confident without spectacle.

### The memorable device

The recurring device is the **casefile seam**: a visible route that connects a source, an applied rule or method, an exception, a human action, and an approved output. IDs and labels make the relationship inspectable. Blue means linked or active evidence. Ochre means accountable human review.

### Companion language: operational ASCII notation

Operational ASCII notation is used once on the landing page, inside the Control chapter, to summarize provenance and state:

```text
ILLUSTRATIVE_TRACE
├─ SOURCE ........ EVIDENCE
├─ RULE .......... APPLIED
├─ EXCEPTION ..... REVIEW
└─ OUTPUT ........ APPROVED
```

It is selectable text in IBM Plex Mono. It is not a terminal aesthetic, hero device, texture, or animation.

### Avoid

- abstract axonometric diamonds, orbital meshes, contour clouds, and generic network diagrams;
- the repeated formula of tiny eyebrow, large serif heading, faint line art, and excessive empty space;
- equal card grids that make every claim look equally important;
- fake product UI, fake customer material, unverified metrics, or placeholder logos;
- generic AI imagery, gradients, glow, glass, robots, brains, sparkles, and “magic” language;
- ASCII as a brand-wide or developer-facing motif;
- photography until original, rights-cleared process or material imagery is available.

## 3. Design principles

### Show the work

Every major visual names recognizable inputs and an output. A document should read as a document; a table as a table; a review as an annotation or decision. Geometry never substitutes for subject matter.

### One concrete example, only when it helps

A representative casefile may support the narrative when it makes the operating change easier to understand. It is not required in the hero or on the landing page. Until original, commissioned, or purpose-built imagery is available, a clear type-led composition is preferable to generic stock or an elaborate synthetic demonstration. Purpose-built synthetic imagery is atmosphere, not evidence, and must not imply a client, result, or proprietary product.

### Evidence before assertion

The Control chapter exposes source, rule, missing evidence, reviewer action, and approved output. If a claim cannot be shown or supported, reduce it rather than illustrating it abstractly.

### Accent carries state

Cobalt may occupy a full chapter, but within an artifact it still has a semantic job: active path, evidence link, or approved state. Ochre marks one human-review intervention. Green remains reserved for confirmed success.

### Hierarchy through contrast

Use a purposeful rhythm of cobalt, canvas, surface, and ink. Vary section density and scale. Avoid giving every chapter the same heading size, grid, or vertical padding.

### Fewer, larger artifacts

The page should contain no more visual inventory than needed to explain the argument. A small number of large, legible artifacts is preferable to repeated decorative SVGs.

## 4. Tokens

`design-system/handover/tokens.css` is the only canonical token-value source. Production imports it; no application file may redefine token values.

### Color roles

- `--ink`: primary text, key rules, and the darkest chapter.
- `--canvas`: quiet page ground.
- `--surface`: document and working surfaces.
- `--surface-muted`: source fragments and secondary panes.
- `--signal-strong`: full cobalt fields and accessible blue text.
- `--signal`: active evidence, selected state, and focused detail.
- `--signal-soft`: selected evidence surface.
- `--human`: accountable human review.
- `--success`: confirmed success only.
- `--error`: errors and invalid states only.

The previous five-percent cap on blue is retired. Cobalt may form one or two full page chapters when it creates hierarchy. Within light artifacts, blue and ochre remain sparse and semantic. Primary actions use ink on light or surface on cobalt; do not create a second brand color.

### Typography

- **Primary and display:** Instrument Sans. Use for navigation, body, controls, H1/H2, functional titles, and oversized editorial type.
- **Editorial counterpoint:** Instrument Serif. Use only for one short statement, quote-like transition, or rare emphasis. It is never the default H1/H2 treatment.
- **Operational:** IBM Plex Mono. Use for case IDs, stage labels, provenance, ASCII, and measurements.

Key roles:

| Role | Size / line height | Weight | Notes |
| --- | --- | --- | --- |
| Hero | `clamp(3.5rem, 8vw, 7rem) / .9` | 600 | Tight, descriptive, max 12 words when practical |
| Major chapter | `clamp(2.75rem, 5.5vw, 5rem) / .96` | 600 | Sans-led; may span the grid |
| Section title | `clamp(2.25rem, 4vw, 3.75rem) / 1` | 600 | Do not repeat identical scale everywhere |
| Lead | `clamp(1.125rem, 1.6vw, 1.375rem) / 1.45` | 430 | 45–68 characters per line |
| Body | `1rem / 1.55` | 430 | Plain, concrete language |
| Operational | `.6875rem / 1.25` | 500 | Uppercase, `.12em` tracking |

Avoid ornamental display type, all-caps body copy, and mono paragraphs. Use tabular numerals for IDs and sequences.

### Layout and spacing

- Maximum content width: 1240px.
- Page gutters: 20px mobile, 32px tablet, 48px desktop.
- Use a 12-column desktop grid and visible one-pixel seams where artifacts meet.
- Default section spacing: 72–88px mobile and 96–128px desktop.
- A full chapter may use more space only when its visual justifies it.
- Minimum interactive target: 44×44px.
- Avoid large blank areas that do not create a deliberate pause or support a dominant visual.

### Surfaces, radii, and borders

- Structural frames and casefile cells are square.
- Product controls use the token control radius.
- Marketing CTAs use the sharper CTA radius.
- Default border is one pixel using `--line`; strong seams use `--line-strong` or appropriate on-color opacity.
- Casefiles have no decorative shadow. Depth comes from layer order, contrast, and a small physical offset only when it communicates a stack.

### Motion

Motion is optional and never required to understand the case. Use opacity or small transforms to reveal one route or state. No continuous line drawing, blinking ASCII, parallax, cursor effects, or particle motion. Honor `prefers-reduced-motion` and keep the complete static state visible.

## 5. Page narrative

The production landing page uses this order:

1. **Hero — outcome.** State the workflow transformation and the operating value above the fold.
2. **What you get — deliverables.** Show four concrete outputs in plain language.
3. **Workflows — recognizable starting points.** Use a short set of examples that demonstrate range without becoming a service catalogue.
4. **Method — three decisions.** Prove, Build, Measure and expand.
5. **Portability — deployment choice.** Existing approved environment first; WorkRun only when a governed runtime is needed.
6. **FAQ — purchase friction.** Answer only the questions required before a qualified call.
7. **Discuss — qualified next step.** Ask for one repeated workflow and keep unresolved integration states honest.

Do not include a long measurement lesson, duplicate workflow diagrams, exhaustive service inventories, invented proof, or detailed technical architecture on the landing page.

V2 uses at most two compact editorial system objects: one governed-system stack in What You Get and one three-stage decision instrument in How We Work. Both are deterministic inline SVGs with a centered 320 × 220 artboard, non-scaling hairlines, shallow isometric construction, three opacity tiers, minimal surface fill, and one signal accent. They contain no text, arrows, process-map explanation, invented data, filters, gradients, or perpetual motion. The objects remain subordinate to the headings and must not expand into decorative art on every card.

For the V2 hero, use **Production systems for knowledge work** as the category eyebrow. Use plural language for the company promise and singular language only for the first engagement or call to action. Do not repeat the category or add consulting language.

## 6. Casefile content rules

The initial synthetic case uses a People and Workforce operating sequence because that is the lead market:

1. HCM export, policy, and case notes enter as a source package.
2. The system prepares a case brief from available evidence.
3. A missing supporting-evidence condition creates an explicit exception.
4. An expert reviews the exception and records an action.
5. The output becomes approved preparation, not an autonomous final judgment.

Required labels:

- `REPRESENTATIVE CASEFILE`
- `NOT CUSTOMER DATA`
- stable case and artifact IDs;
- explicit `EXPERT REVIEW` and `APPROVED` states;
- no names, employers, metrics, dates, or outcomes that could be mistaken for proof.

## 7. Components and architecture

Use framework-standard folders under `website/src/`:

- `app/` for routes, metadata, and global imports;
- `components/ui/` for shadcn-generated primitives only;
- `components/site/` for header, footer, and cross-section navigation behavior;
- `components/sections/` for one semantic landing-page chapter per file;
- `components/illustrations/` for editable inline SVG casefile artifacts;
- `components/forms/` for the qualification form;
- `lib/` for configuration, analytics, validation, and utilities.

Do not introduce a generic `Card` abstraction for single-use marketing compositions. Extract only a repeated, semantically stable pattern. Keep Server Components as the default and add client boundaries only for interaction.

## 8. Accessibility and responsive behavior

- One H1; logical heading order; every section has an accessible name.
- SVGs use `role="img"`, a concise title, and useful description, or are hidden when adjacent semantic content duplicates them.
- Artifact labels remain professionally legible; move detail into HTML at compact sizes rather than shrinking it into texture.
- Cobalt chapters use tested on-color tokens; never use faint blue-on-blue text for necessary content.
- Focus indicators remain visible on light, cobalt, and ink surfaces.
- Sticky-header anchors include adequate scroll margin.
- At 390px, casefile cells stack in reading order and preserve source → rule → exception → review → output.
- At 200% zoom, no text or control is clipped, overlapped, or made horizontally scrollable.
- Form errors are connected programmatically and no unresolved endpoint can fail silently.

## 9. Release gate

Before release, confirm:

- the offer and value are understandable without scrolling;
- every section can be understood from its heading and primary labels;
- all demonstration material is clearly representative;
- no fake proof, metrics, clients, biographies, prices, timelines, legal, security, or deployment claims appear;
- navigation, mobile sheet, form states, keyboard use, reduced motion, contrast, and zoom pass;
- no horizontal overflow, browser errors, hydration errors, or missing assets remain;
- typecheck, lint, relevant tests, and the production build pass.

## 10. Direction changes recorded 2026-08-01

This version retires **Operational Blueprint as a page-wide axonometric aesthetic**. Blueprint remains a useful idea—explicit inputs, rules, decisions, and outputs—but its visual expression is now the more literal Operational Casefile system. It also resolves the prior source conflict by making Instrument Sans the display default, reducing repeated section spacing, moving Control earlier, and unlocking copy that was too abstract to explain the offer.

The later scan-first refinement removes the requirement for a casefile-led hero and treats Operational Casefile as a supporting evidence device rather than the landing page’s protagonist. It prioritizes outcome-led headings, shorter sections, visible deliverables, and a three-decision engagement story.
