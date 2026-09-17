import { ShieldCheck } from "lucide-react"
import { content } from "@/lib/content"
import { SectionHeader } from "@/components/section-header"
import { Reveal } from "@/components/reveal"

export function TrustedBySection() {
  const { trustedBy } = content

  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-20 text-muted-foreground md:py-32">
      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        {/* Header - Mobile First */}
        <SectionHeader
          revealClassName="mb-10 sm:mb-14"
          badge={
            <>
              <ShieldCheck className="h-4 w-4" />
              <span>{trustedBy.badge}</span>
            </>
          }
          title={trustedBy.title}
        />

        {/* Bridge of Trust - First-person quote, Mobile First */}
        <Reveal
          as="blockquote"
          className="relative mb-10 max-w-3xl sm:mb-14 lg:mx-auto"
        >
          <span
            aria-hidden="true"
            className="absolute -top-6 -left-2 font-serif text-6xl leading-none text-primary/15 select-none sm:text-7xl lg:-left-6"
          >
            &ldquo;
          </span>
          <div className="space-y-4 sm:space-y-5">
            {trustedBy.quote.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed font-normal text-muted-foreground sm:text-lg md:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <footer className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-primary/50"></span>
            <cite className="text-xs font-semibold text-muted-foreground not-italic sm:text-sm">
              {trustedBy.quote_author}
            </cite>
          </footer>
        </Reveal>
      </div>

      {/* Full-bleed wordmark strip - borderless, no boxes */}
      <Reveal className="relative z-10 border-y border-border bg-muted/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 py-8 sm:gap-y-10 md:flex md:flex-row md:items-center md:divide-x md:divide-border md:py-10">
            {trustedBy.logos.map((company) => (
              <div
                key={company.name}
                className="flex min-w-0 flex-col items-center px-2 text-center md:flex-1 md:justify-center"
              >
                <p className="text-base font-semibold tracking-tight text-foreground sm:text-lg md:text-xl">
                  {company.name}
                </p>
                <p className="mt-1 text-[10px] leading-snug text-muted-foreground sm:text-[11px]">
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
