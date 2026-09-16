# Repository Guidelines

- **Framework:** Next.js 16 (App Router) + Tailwind CSS v4 + React 19.
- **Components:** Managed via `shadcn/ui`. Use `npx shadcn@latest add <component>` to add new UI components. Components reside in `components/ui`.
- **Imports:** Always use `@/` alias (e.g., `import { Button } from "@/components/ui/button"`).
- **Content:** Page copy/data lives in `lib/content`; annotate exports with the shared types from `lib/content/types.ts` using `satisfies`. Blog articles are Markdown in `content/blog`.
- **Site data:** Company URL, contact details and socials go in `lib/site-config.ts`. Structured data (schema.org) goes in `lib/seo/json-ld.ts`.
- **Verification Commands:**
    - Lint: `npm run lint`
    - Typecheck: `npm run typecheck`
    - Format: `npm run format`
    - Format check (CI): `npm run format:check`
- **Build/Dev:**
    - Dev server: `npm run dev`
    - Build: `npm run build`
