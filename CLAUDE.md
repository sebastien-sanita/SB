# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro 5 static site with React integration, Tailwind CSS v3, and TypeScript strict mode. Deployment target: Cloudflare Pages.

## Commands

- `npm run dev` — Start dev server on localhost:4321
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- `npm run astro check` — Run TypeScript and Astro diagnostics

## Architecture

- **`src/pages/`** — File-based routing. Each `.astro` file becomes a route.
- **`src/layouts/`** — Reusable page layouts wrapping page content via `<slot />`.
- **`src/components/ui/`** — Base reusable components (buttons, cards, etc.).
- **`src/components/sections/`** — Page section components (hero, footer, etc.).
- **`src/components/react/`** — Interactive React components (use `client:*` directives).
- **`src/styles/`** — Global CSS and Tailwind directives.
- **`src/utils/`** — Helpers and custom hooks.
- **`src/content/`** — Data files (projects, etc.).
- **`public/images/`** — Static images. **`public/fonts/`** — Custom font files.

## Path Aliases

Configured in `tsconfig.json`:
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@utils/*` → `src/utils/*`
- `@styles/*` → `src/styles/*`

## Key Conventions

- `.astro` files use a frontmatter script block (between `---` fences) for server-side logic, followed by an HTML-like template.
- Astro components render to static HTML by default (zero JS shipped). Use `client:*` directives to hydrate React components.
- Tailwind: use `font-display` for Playfair Display, `font-body` for Inter.
- Image optimization: use the built-in `<Image />` component from `astro:assets`.
- Animations: use `framer-motion` in React components.
- Validation: use `zod` schemas.
- Conditional classes: use `clsx()`.
