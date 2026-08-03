# The Layers Co.

This repository contains the Layers marketing website and its supporting design
documentation.

## Repository structure

```text
website/        Deployable Next.js application
design-system/  Canonical design tokens, handover, and visual references
docs/           Supporting company-context pointer and design direction
```

The repository is self-contained: production code may consume files elsewhere
in this checkout, but it does not depend on files from another repository or the
developer machine. Private company strategy remains in LayerOS and is not a
build dependency.

## Development

Run application commands from `website/`:

```bash
cd website
npm install
npm run dev
```

See [`website/README.md`](./website/README.md) for configuration, verification,
and release instructions.

## Deployment

Vercel is connected to this GitHub repository with `website/` as the project
root and monorepo source inclusion enabled for `design-system/`. Pull requests
receive preview deployments; merges to `main` deploy to production
automatically. Dashboard redeploys are not part of the release path.
