<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Conventions
- Use shadcn/ui for UI components.
- Do not add or modify functionality beyond what is requested.

## Quirks
- Tailwind CSS v4: theme/config lives in `src/app/globals.css` (no `tailwind.config`).
- `next.config.ts` enables `cacheComponents` and `partialPrefetching`; dev/build use Turbopack.
- No test suite is configured.
- Path alias `@/*` → `src/*`; routes use groups `(root)` and `(dashboard)`.
