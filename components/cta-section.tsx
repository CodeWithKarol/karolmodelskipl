import { content } from "@/lib/content"
import { siteConfig } from "@/lib/site-config"
import { CtaButton } from "@/components/cta-button"
import { Sparkles, Target, ShieldCheck, Map } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Reveal } from "@/components/reveal"
import type { CtaContent } from "@/lib/content/types"

type CtaSectionProps = {
  content?: CtaContent
  ctaHref?: string
}

export function CtaSection({
  content: pageContent,
  ctaHref,
}: CtaSectionProps = {}) {
  const cta = pageContent ?? content.cta
  const href = ctaHref ?? siteConfig.calendlyLink
  const isExternal = href.startsWith("http")

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-border bg-background py-14 text-muted-foreground sm:py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        <SectionHeader
          revealClassName="mb-8 sm:mb-16"
          badge={
            <>
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              {cta.badge}
            </>
          }
          title={cta.title}
          titleClassName="mb-3 max-w-3xl text-2xl leading-snug font-semibold tracking-tight text-balance text-foreground sm:mb-6 sm:text-3xl sm:leading-tight md:text-4xl lg:mx-auto"
          descriptionHtml={cta.description}
          descriptionClassName="max-w-2xl text-sm leading-relaxed font-normal text-pretty text-muted-foreground sm:text-base md:text-lg lg:mx-auto"
        />

        <Reveal className="max-w-2xl lg:mx-auto">
          <div className="mb-6 sm:mb-8">
            <p className="mb-4 text-left text-xs font-medium text-foreground sm:mb-5 sm:text-sm lg:text-center">
              {cta.package_title}
            </p>
            <div className="divide-y divide-border border-y border-border">
              {cta.offer_items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 py-3.5 text-left sm:flex-row sm:items-start sm:gap-3 sm:py-4"
                >
                  <span className="flex h-[1.625em] shrink-0 items-center text-xs text-primary sm:text-sm">
                    {i === 0 && (
                      <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    )}
                    {i === 1 && (
                      <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    )}
                    {i === 2 && <Map className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
                  </span>
                  <span className="min-w-0 text-xs leading-relaxed text-pretty text-muted-foreground sm:text-sm">
                    {item.desc ? (
                      <>
                        <strong className="font-medium text-foreground">
                          {item.title}
                        </strong>{" "}
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
            <div className="mb-5 text-left text-xs leading-relaxed whitespace-pre-line text-muted-foreground sm:mb-6 sm:text-sm lg:text-center">
              {cta.format}
            </div>
          ) : (
            <div className="mb-5 text-left text-xs leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm lg:text-center">
              100% bezpłatnie • Rozmowa wideo 1-na-1 • Zero sprzedaży i zero
              technicznego żargonu
            </div>
          )}

          <div className="flex flex-col items-start lg:items-center">
            <a
              href={href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { role: "button" })}
              className="w-full max-w-md"
            >
              <CtaButton className="w-full">{cta.button}</CtaButton>
            </a>
            {cta.note ? (
              <p className="mt-3 text-left text-xs leading-relaxed font-medium text-pretty text-muted-foreground sm:text-sm lg:text-center">
                {cta.note}
              </p>
            ) : (
              <p className="mt-3 text-left text-xs leading-relaxed font-medium text-pretty text-muted-foreground sm:text-sm lg:text-center">
                🔒 Po pozytywnej weryfikacji danych w ankiecie otrzymasz
                natychmiastowy dostęp do kalendarza rezerwacji.
              </p>
            )}
            {cta.availability && (
              <p className="mt-2 text-left text-xs font-medium tracking-wide text-primary uppercase lg:text-center">
                {cta.availability}
              </p>
            )}
            {cta.footer && (
              <p className="mt-2 text-left text-xs leading-relaxed font-medium text-pretty text-muted-foreground sm:text-sm lg:text-center">
                {cta.footer}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
