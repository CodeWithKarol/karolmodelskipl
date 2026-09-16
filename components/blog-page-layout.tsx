import type { ReactNode } from "react"
import { CtaSection } from "@/components/cta-section"
import type { CtaContent } from "@/lib/content/types"

export function BlogPageLayout({
  jsonLd,
  hero,
  cta,
  children,
}: {
  jsonLd: unknown
  hero: ReactNode
  cta?: CtaContent
  children: ReactNode
}) {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"></div>
      <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 opacity-50 mix-blend-screen blur-[120px]"></div>

      {hero}

      <main className="container mx-auto max-w-7xl px-4 py-12 sm:py-24">
        {children}
      </main>

      <CtaSection content={cta} />
    </div>
  )
}
