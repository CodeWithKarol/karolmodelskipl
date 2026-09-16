# karolmodelski.pl

Marketing site for Karol Modelski — independent technology partner for SMBs.
Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and shadcn/ui.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command                | Description                        |
| ---------------------- | ---------------------------------- |
| `npm run dev`          | Start the dev server               |
| `npm run build`        | Production build                   |
| `npm run start`        | Serve the production build         |
| `npm run lint`         | Run ESLint                         |
| `npm run typecheck`    | Run TypeScript (`tsc --noEmit`)    |
| `npm run format`       | Format with Prettier               |
| `npm run format:check` | Verify formatting (used by CI)     |

## Project structure

- `app/` — routes (App Router): landing pages, qualification funnels and the blog.
- `components/` — section and shared components; `components/ui` holds shadcn/ui primitives.
- `components/mdx/` — MDX renderers for blog articles (tables, heading anchors, TOC).
- `lib/content/` — page copy and data. Shared section types live in `lib/content/types.ts`.
- `lib/seo/json-ld.ts` — schema.org structured data builders.
- `lib/site-config.ts` — company data (URL, contact, socials, booking link).
- `content/blog/` — Markdown (MDX) articles rendered by `app/blog/[slug]`.

## Analytics

Google Tag Manager is loaded in `app/layout.tsx` (`beforeInteractive`) and manages the
GA4 tag, so no direct `gtag` snippet is added to the codebase.
