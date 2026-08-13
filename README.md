# AquaBuddy — Project Showcase

A case-study website for [AquaBuddy](https://github.com/Bithyakter/aqua-buddy), a desktop
hydration companion for Windows. Built to present the project in a portfolio, not as a product
landing page — every feature, tech-stack entry, and engineering note on the page maps to real
code in the AquaBuddy repository, not aspirational copy.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens, see `app/globals.css`)
- **Framer Motion** for scroll reveals and micro-interactions
- **lucide-react** for icons

## Structure

```
app/            routes, layout, metadata, sitemap.ts, robots.ts, opengraph-image.tsx
components/     one component per page section, plus components/ui/ primitives
data/           real content — features, tech stack, engineering notes, future ideas, nav
lib/site.ts     single source of truth for site name/URL/description used across metadata
public/images/  real AquaBuddy logo + character sprites, copied from the app's own assets
```

Content lives in `data/*.ts` rather than hardcoded in components, so copy can be updated without
touching JSX.

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build
npm run lint     # ESLint
```

## Deploying

Push to a Git repo and import it in Vercel — no environment variables or extra configuration
required. After attaching a custom domain, update `site.url` in `lib/site.ts` (it currently
points at a Vercel preview URL placeholder) so metadata, the sitemap, and Open Graph tags resolve
to the real domain.
