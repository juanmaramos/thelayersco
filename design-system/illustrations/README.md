# Operational Casefile illustration system

**Status:** Production construction and QA standard
**Parent direction:** [`design.md`](../../docs/design.md)
**Canonical tokens:** [`../handover/tokens.css`](../handover/tokens.css)

## 1. Purpose

This manual governs editable inline SVG artwork for the Operational Casefile direction. Illustrations show recognizable operating material moving from source to prepared artifact, exception, accountable review, and approved output. They are synthetic demonstrations, never customer evidence.

The previous axonometric Operational Blueprint grammar is retired for evidence-bearing casefile compositions. Do not use diamonds, raised blocks, orbital meshes, contour fields, or abstract network diagrams as substitutes for subject matter inside a casefile.

### V2 editorial system objects

V2 has one narrow exception for non-evidentiary section support. Up to two isolated editorial system objects may use a centered `320 × 220` artboard, non-scaling hairlines, shallow isometric construction, three opacity tiers, minimal surface fill, and one signal accent. These objects are visual metaphors, not workflow diagrams or evidence, and contain no data, claims, people, customer material, explanatory labels, arrows, filters, gradients, or perpetual motion. They use the shared `.system-object-svg` and `.so-*` classes backed by canonical tokens, remain subordinate to the adjacent heading, and are hidden from assistive technology when the HTML supplies the full meaning.

This exception does not permit a return to dense blueprint scenes, decorative icon sets, animated meshes, or axonometric casefile narratives.

## 2. Non-negotiable rules

- Production artwork is deterministic inline SVG.
- Every major object is a recognizable artifact: document, export, table, policy, note, brief, review mark, decision, or output.
- Text inside SVG is limited to short, readable labels and IDs. Critical meaning is repeated in adjacent semantic HTML at compact sizes.
- Every case is labelled `REPRESENTATIVE` and `NOT CUSTOMER DATA`.
- Every connector attaches to an object or ends with an explicit semantic terminal.
- Blue means linked evidence, active route, or approved state. Ochre means a human-review intervention. Green means confirmed success only.
- No gradients, shadows, filters, raster images, stock art, decorative icons, local color values, fabricated metrics, names, dates, customers, or outcomes.

## 3. Artboards and grid

| Use | View box | Safe area |
| --- | --- | --- |
| Hero casefile | `720 × 560` | 32 units |
| Wide current-state artifact | `720 × 420` | 28 units |
| Practice artifact | `480 × 320` | 24 units |
| Compact evidence fragment | `320 × 220` | 20 units |

Use a 4-unit construction grid and an 8-unit spacing rhythm. The artwork is orthographic: vertical and horizontal edges form the structural grid. Small physical offsets may show a document stack, but do not create perspective scenes.

## 4. Stroke and surface system

- One CSS-pixel stroke with `vector-effect="non-scaling-stroke"`.
- Square or lightly rounded line joins; round caps only for annotations or human marks.
- Apply all colors through shared semantic CSS classes backed by canonical tokens.
- Structural seams use strong ink or on-color opacity.
- Context lines recede but remain legible at the smallest production size.
- Document fields use surface and surface-muted fills; approved evidence may use signal-soft.
- Human annotations use one ochre treatment per composition.

Recommended classes:

- `.casefile-svg`: base typography and rendering.
- `.cf-frame`: primary structural boundary.
- `.cf-rule`: normal seam or connector.
- `.cf-rule-soft`: contextual divider.
- `.cf-rule-signal`: linked or active evidence.
- `.cf-rule-human`: reviewer annotation.
- `.cf-surface`, `.cf-surface-muted`, `.cf-surface-signal`: artifact surfaces.
- `.cf-label`, `.cf-label-muted`, `.cf-label-on-signal`: operational text roles.

Do not add a class for one illustration-only color or stroke width.

## 5. Semantic devices

| Device | Meaning |
| --- | --- |
| Bordered sheet | Source document, policy, note, or prepared output |
| Ruled cells | Structured export or table |
| Stable artifact ID | Addressable evidence or output |
| Solid connector | Known or applied route |
| Dashed connector | Missing, pending, or exception route |
| Blue bracket or seam | Provenance link or active evidence |
| Ochre circle, underline, or note | Accountable human review action |
| Crossed field | Missing or rejected evidence with recorded reason |
| Approval bar | Approved preparation or accepted workflow output |

The same device retains the same meaning across the page.

## 6. Approved narrative compositions

### Representative casefile

Show HCM export, policy, and case notes entering a prepared case brief; a missing supporting-evidence condition branches to expert review; review resolves into approved preparation. Include stable IDs and the representative/not-customer-data label.

### Current-state handoff

Show a source package distributed across recognizable files or tools, manual reconciliation, missing fields, and a review queue. It may be busy, but all objects remain readable and all routes resolve.

### Evidence dossier

Show five stages in reading order: source excerpt, applied rule, exception reason, reviewer action, approved output. The exception must appear before review and visually branch from the prepared artifact. Approval cannot precede exception handling.

### Practice translation

People and Workforce shows policy/data/case material. Professional-services delivery shows evidence/method/deliverable material. Keep the common control grammar while changing the literal artifacts. Do not differentiate the two with generic persona icons.

## 7. Operational Trace readout

The homepage contains exactly one selectable ASCII composition, in Control:

```text
ILLUSTRATIVE_TRACE
├─ SOURCE ........ EVIDENCE
├─ RULE .......... APPLIED
├─ EXCEPTION ..... REVIEW
└─ OUTPUT ........ APPROVED
```

It uses IBM Plex Mono and serves as the dossier’s provenance spine. It is not rasterized, animated, repeated, or placed in the hero. When the adjacent semantic dossier supplies the same meaning, the decorative `pre` may be `aria-hidden="true"`.

## 8. Accessibility and responsive construction

- Use `role="img"`, `<title>`, and `<desc>` for meaningful SVGs.
- If adjacent HTML fully duplicates an illustration, use `aria-hidden="true"` instead.
- Preserve document order: source → preparation/rule → exception → review → approved output.
- At compact widths, stack or simplify the composition; never shrink operational text into illegible texture.
- Minimum internal SVG label target: approximately 11px at rendered size. Move smaller content into HTML.
- Test at 390px, 768px, 1024px, 1440px, 100%, and 200% zoom.
- No SVG may cause page-level horizontal overflow or crop a semantic endpoint.

## 9. Motion

The static frame must communicate the complete case. Optional motion may reveal one active route or review mark through opacity and small translation. No path-drawing loops, blinking cursors, glyph scrambling, parallax, glow, or perpetual animation. The reduced-motion state shows the complete final composition.

Canvas UI ASCII Object is not included in the initial landing page. The casefile is clearer and lighter without it.

## 10. Production preflight

An illustration passes only when all are true:

- A first-time viewer can name the source, direction, exception, human-control point, and output.
- The subject is recognizable without relying on metaphor in nearby copy.
- Representative/not-customer-data labeling is visible.
- All artifact IDs and labels are internally consistent.
- The exception visibly occurs before and routes into expert review.
- Approval appears only after the review branch rejoins.
- Every connector attaches or has an explicit terminal.
- Blue, ochre, green, and error colors retain their semantic roles.
- The composition remains understandable in grayscale.
- Text and strokes remain legible at the smallest production size and 200% zoom.
- SVG title and description are accurate.
- No customer, metric, result, biography, timeline, price, security, legal, or deployment claim has been invented.
- A second-person review confirms no unresolved endpoint, accidental overlap, or alignment defect remains.

## 11. Reference status

`design-system/illustrations/index.html` and its stylesheet are retained as historical QA comparison material while production moves to the casefile system. They do not define the current direction. New specimens should demonstrate the orthographic casefile rules above before the historical axonometric lab is removed.
