# melissaflee02.github.io

Personal website of Melissa Lee — live at <https://melissaflee02.github.io>.

Built with [Astro](https://astro.build) (static output) and [Tailwind CSS v4](https://tailwindcss.com), deployed to GitHub Pages by GitHub Actions.

## Local development

Requires Node `>=22.12.0` (see `.nvmrc`).

```sh
npm ci
npm run dev      # http://localhost:4321
```

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm run dev`          | Dev server with hot reload                        |
| `npm run build`        | Production build to `dist/`                       |
| `npm run preview`      | Serve the production build locally                |
| `npm run check`        | `astro check` — TypeScript / template diagnostics |
| `npm run format`       | Format with Prettier                              |
| `npm run format:check` | Verify formatting (runs in CI)                    |

## Editing content

Content lives in typed data modules, separate from markup:

- `src/data/site.ts` — name, role, description, contact links, OG image
- `src/data/experience.ts` — experience timeline entries
- `src/data/projects.ts` — project cards
- `public/Melissa_Lee_Resume.pdf` — resume linked from the contact section

Prose sections (hero copy, about) live in `src/components/`. Page shell, meta
tags, and JSON-LD structured data live in `src/layouts/Layout.astro`.

## Structure

```text
public/            static assets (favicon, og.png, robots.txt, resume)
src/components/    page sections
src/data/          typed content
src/layouts/       HTML shell, SEO + social meta, JSON-LD
src/pages/         index.astro, 404.astro
src/styles/        Tailwind theme tokens and global styles
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages. This requires **Settings → Pages →
Source: GitHub Actions** in the repository settings.

Pull requests run `.github/workflows/ci.yml` (format check, `astro check`, build).
