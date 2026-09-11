import { content } from "@/lib/content"
import { siteConfig } from "@/lib/site-config"
import { Button } from "./ui/button"
import { Sparkles, Target, ShieldCheck, Map } from "lucide-react"
import { SectionBadge } from "@/components/section-badge"
import { Reveal } from "@/components/reveal"

export type CtaContent = {
  badge: string
  title: string
  description: string
  package_title: string
  offer_items: { title: string; desc?: string }[]
  button: string
  footer: string
  format?: string
  note?: string
  availability?: string
}

type CtaSectionProps = {
  content?: CtaContent
  ctaHref?: string
}

export function CtaSection({ content: pageContent, ctaHref }: CtaSectionProps = {}) {
  const cta = pageContent ?? content.cta
  const href = ctaHref ?? siteConfig.calendlyLink
  const isExternal = href.startsWith("http")

  return (
      <section
        id="kontakt"
        className="relative overflow-hidden border-t border-border bg-background py-14 text-muted-foreground sm:py-20 md:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <Reveal as="header" className="text-center mb-8 sm:mb-16">
            <div className="mb-4">
              <SectionBadge><Sparkles className="h-3.5 w-3.5 shrink-0" />{cta.badge}</SectionBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 sm:mb-6 leading-snug sm:leading-tight max-w-3xl mx-auto text-balance">
              {cta.title}
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground font-light leading-relaxed text-sm sm:text-base md:text-lg text-pretty" dangerouslySetInnerHTML={{ __html: cta.description }} />
          </Reveal>

          <Reveal className="max-w-2xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm font-semibold text-foreground mb-4 sm:mb-5 text-center">{cta.package_title}</p>
              <div className="divide-y divide-border border-y border-border">
                {cta.offer_items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 text-left py-3.5 sm:flex-row sm:items-start sm:gap-3 sm:py-4">
                    <span className="flex h-[1.625em] shrink-0 items-center text-primary text-xs sm:text-sm">
                      {i === 0 && <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                      {i === 1 && <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                      {i === 2 && <Map className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                    </span>
                    <span className="min-w-0 text-xs sm:text-sm text-muted-foreground leading-relaxed text-pretty">
                      {item.desc ? (
                        <>
                          <strong className="font-semibold text-foreground">{item.title}</strong>{" "}
                          {item.desc}
                        </>
                      ) : (
                        item.title
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {cta.format ? (
              <div className="text-xs sm:text-sm text-muted-foreground text-center mb-5 sm:mb-6 leading-relaxed whitespace-pre-line">{cta.format}</div>
            ) : (
              <div className="text-xs sm:text-sm text-muted-foreground text-center mb-5 sm:mb-6 leading-relaxed">100% bezpłatnie • Rozmowa wideo 1-na-1 • Zero sprzedaży i zero technicznego żargonu</div>
            )}

            <div className="flex flex-col items-center">
              <a
                href={href}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : { role: "button" })}
                className="w-full max-w-md"
              >
                <Button size="lg" className="w-full py-5 text-sm font-bold rounded-xl shadow-lg transition-all whitespace-normal h-auto leading-tight">
                  {cta.button}
                </Button>
              </a>
              {cta.note ? (
                <p className="text-xs sm:text-sm text-muted-foreground mt-3 font-medium text-center leading-relaxed text-pretty">{cta.note}</p>
              ) : (
                <p className="text-xs sm:text-sm text-muted-foreground mt-3 font-medium text-center leading-relaxed text-pretty">🔒 Po pozytywnej weryfikacji danych w ankiecie otrzymasz natychmiastowy dostęp do kalendarza rezerwacji.</p>
              )}
              {cta.availability && (
                <p className="text-xs text-warning/90 text-center mt-2 font-semibold tracking-wide uppercase">{cta.availability}</p>
              )}
              {cta.footer && (
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium text-center leading-relaxed text-pretty">{cta.footer}</p>
              )}
            </div>
          </Reveal>
        </div>
      </section>
  )
}
