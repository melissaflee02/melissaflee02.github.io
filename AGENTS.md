# AGENTS.md

## Setup

- Node >= 22.12.0 (see `.nvmrc`). Install deps: `npm install`
- Dev server: `npm run dev` (http://localhost:4321)
- Build: `npm run build` (outputs `./dist/`)
- Preview production build: `npm run preview`
- Type/template diagnostics: `npm run check` (`astro check`)
- Formatting: `npm run format` / `npm run format:check` (Prettier)

## Project structure

- `src/pages/index.astro` — single landing page
- `src/pages/404.astro` — not-found page (rendered by GitHub Pages, `noindex`)
- `src/layouts/Layout.astro` — page shell, fonts, SEO/OG meta, JSON-LD, skip link
- `src/components/` — Astro section components
- `src/data/site.ts` — name, role, description, contact links, OG image path
- `src/data/{experience,projects}.ts` — typed content arrays
- `src/styles/global.css` — Tailwind v4 theme tokens and global styles
- `public/` — static assets: `Melissa_Lee_Resume.pdf`, `og.png`, `robots.txt`, favicons
- `.github/workflows/` — `ci.yml` (PR checks) and `deploy.yml` (Pages deploy)

## Content rules

- Shared identity/contact strings live in `src/data/site.ts` — reference them instead of
  hardcoding the name, description, email, or social URLs in components.
- Add roles in `src/data/experience.ts` using the `Experience` interface.
- Add projects in `src/data/projects.ts` using the `Project` interface. `href` is the
  primary link; set `linkLabel` when it isn't a GitHub repo (defaults to "View on GitHub").
- Update `public/Melissa_Lee_Resume.pdf` by replacing the file, not changing paths.
- Keep copy warm, concise, and first-person professional.

## Styling rules

- Tailwind v4 with custom theme in `src/styles/global.css` under `@theme`.
- Use the semantic tokens: `bg-canvas`, `bg-surface`, `text-ink`, `text-accent`,
  `text-accent-muted`, `font-display`, `font-body`. The palette is deep navy with a
  single gold accent; there are no per-item accent colors.
- Add new colors only under `@theme` in `global.css`; do not add new fonts without approval.
- External links must include `target="_blank" rel="noopener noreferrer"`.

## Code conventions

- Astro components are `.astro` files with TypeScript frontmatter where needed.
- Prefer static content; keep client-side JS minimal (currently only the mobile nav toggle).
- Interactive elements need accessible names and keyboard support; don't remove the
  skip link, `main#main`, or the global `:focus-visible` outline.
- Use `npm` (not `pnpm` or `yarn`) for this repo.

## Before finishing a change

1. Run `npm run format`, `npm run check`, and `npm run build`; all must exit 0
   (CI runs `format:check`, `check`, and `build` on every PR).
2. Do not commit `dist/`, `node_modules`, or `.astro/` — Pages builds from source
   via `.github/workflows/deploy.yml` on push to `main`.
