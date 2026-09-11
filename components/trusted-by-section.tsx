import { ShieldCheck } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"
import { Reveal } from "@/components/reveal"

export function TrustedBySection() {
  const { trustedBy } = content

  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-20 text-muted-foreground md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Header - Mobile First */}
        <Reveal as="header" className="mb-10 sm:mb-14 text-center">
          <div className="mb-4">
            <SectionBadge variant="emerald">
            <ShieldCheck className="h-4 w-4" />
            <span>{trustedBy.badge}</span>
          </SectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight max-w-3xl mx-auto">
            {trustedBy.title}
          </h2>
        </Reveal>

        {/* Bridge of Trust - First-person quote, Mobile First */}
        <Reveal as="blockquote" className="relative max-w-3xl mx-auto mb-10 sm:mb-14">
          <span aria-hidden="true" className="absolute -top-6 -left-2 sm:-left-6 text-6xl sm:text-7xl leading-none text-primary/15 font-serif select-none">
            &ldquo;
          </span>
          <div className="space-y-4 sm:space-y-5">
            {trustedBy.quote.map((paragraph, i) => (
              <p key={i} className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <footer className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-primary/50"></span>
            <cite className="not-italic text-xs sm:text-sm font-semibold text-muted-foreground">
              {trustedBy.quote_author}
            </cite>
          </footer>
        </Reveal>
      </div>

      {/* Full-bleed wordmark strip - borderless, no boxes */}
      <Reveal className="relative z-10 border-y border-border bg-muted/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 py-8 sm:gap-y-10 md:flex md:flex-row md:items-center md:py-10 md:divide-x md:divide-border">
            {trustedBy.logos.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center px-2 text-center min-w-0 md:flex-1 md:justify-center"
              >
                <p className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-foreground">
                  {company.name}
                </p>
                <p className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-widest text-muted-foreground leading-snug">
                  {company.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
