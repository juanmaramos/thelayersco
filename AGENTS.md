# Repository guidance

## Canonical company context

LayerOS is the canonical operating repository for Layers. Before strategy, positioning, product, commercial, website, operating-model, delivery, or go-to-market work, read [`../layer-os/AGENTS.md`](../layer-os/AGENTS.md) and [`../layer-os/company/core.md`](../layer-os/company/core.md). Use the LayerOS index to load only the additional context required for the task.

[`docs/company-context.md`](./docs/company-context.md) is a compatibility pointer, not a second source of truth. Apply LayerOS instructions and constraints unless the user explicitly supersedes them. When new information conflicts with them, call out the conflict and ask for or record a decision rather than silently changing direction.

## Keeping context current

Record durable decisions in `../layer-os/company/decisions/` and update `../layer-os/company/core.md` only when the current direction changes. Keep this file limited to navigation and repository-wide instructions; do not copy company strategy into it.

## Repository map and reading order

Keep the repository root limited to canonical entry points and application-level configuration. Design-system implementation assets belong under `design-system/`.

For website and interface work, read sources in this order:

1. [`../layer-os/company/core.md`](../layer-os/company/core.md) — current company direction and evidence constraints.
2. [`../layer-os/company/positioning.md`](../layer-os/company/positioning.md) — approved working narrative and claims boundaries.
3. [`docs/design.md`](./docs/design.md) — visual source of truth, tokens, layout, components, and responsive behavior.
4. [`design-system/handover/README.md`](./design-system/handover/README.md) — Tailwind v4 and shadcn implementation contract.
5. [`design-system/illustrations/README.md`](./design-system/illustrations/README.md) — required only when creating or changing Operational Casefile SVG artwork.

Directory responsibilities:

- `design-system/index.html`, `styles.css`, and `script.js` are the static visual preview. They are not production application files and their CSS must not be copied wholesale.
- `design-system/handover/tokens.css` is the only canonical token-value file.
- `design-system/handover/globals.css` is the copy-and-merge Tailwind v4 theme bridge.
- `design-system/illustrations/` owns the illustration manual, QA lab, and lab-only styles.
- Production application code must use the framework's standard source directories, not `design-system/`.

When tokens change, update `tokens.css` and `docs/design.md`; the preview consumes the same token file. Keep generated build output, screenshots, and temporary files out of the repository.

## Committing code

Never use Codex or Claude in branch names or README descriptions.
