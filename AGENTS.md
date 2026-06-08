# Repository Guidelines

- **Framework:** Next.js 16 (App Router) + Tailwind CSS v4 + React 19.
- **Components:** Managed via `shadcn/ui`. Use `npx shadcn@latest add <component>` to add new UI components. Components reside in `components/ui`.
- **Imports:** Always use `@/` alias (e.g., `import { Button } from "@/components/ui/button"`).
- **Verification Commands:**
    - Lint: `npm run lint`
    - Typecheck: `npm run typecheck`
    - Format: `npm run format`
- **Build/Dev:**
    - Dev server: `npm run dev`
    - Build: `npm run build`
