import { Banknote, CalendarCheck, KeyRound } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { SectionBadge } from "@/components/section-badge"
import { TrustLogos } from "@/components/trust-logos"
import type { HeroContent } from "@/lib/content/types"

const PEG_ICONS = [Banknote, CalendarCheck, KeyRound]

export function ServiceHero({
  hero,
  ctaHref,
}: {
  hero: HeroContent
  ctaHref: string
}) {
  return (
    <section className="relative flex w-full flex-col bg-background pt-20 pb-16 text-foreground sm:pt-24 lg:min-h-screen lg:pb-12">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <div className="relative z-10 container mx-auto flex flex-1 flex-col items-center justify-center px-4 pt-4 text-center sm:pt-8">
        <div className="mx-auto w-full max-w-3xl pt-4 sm:pt-8">
          <div className="mb-5 flex animate-[fade-up_0.7s_ease-out_both] justify-center sm:mb-7">
            <SectionBadge
              variant="neutral"
              className="text-center text-[10px] sm:text-xs"
            >
              {hero.badge}
            </SectionBadge>
          </div>
          <h1 className="mb-4 animate-[fade-up_0.7s_ease-out_0.1s_both] text-4xl leading-[1.12] font-semibold tracking-tight text-balance text-foreground sm:mb-5 sm:text-5xl sm:leading-[1.1] lg:text-6xl">
            {hero.title}
            {hero.title_highlight && (
              <span className="mt-3 block text-lg leading-relaxed font-medium text-muted-foreground sm:mt-4 sm:text-xl lg:text-2xl lg:leading-snug">
                {hero.title_highlight}
              </span>
            )}
          </h1>

          <p className="mx-auto mb-7 max-w-2xl animate-[fade-up_0.7s_ease-out_0.2s_both] text-base leading-relaxed text-muted-foreground sm:mb-9 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mb-6 animate-[fade-up_0.7s_ease-out_0.25s_both] sm:mb-8">
            <CtaButton
              render={<a href={ctaHref} />}
              nativeButton={false}
              className="mx-auto w-full max-w-md"
            >
              {hero.qualification.cta_line1}
            </CtaButton>
            <p className="mt-2.5 text-center text-[11px] leading-relaxed font-medium text-muted-foreground sm:text-xs">
              {hero.cta_sub}
            </p>
            <TrustLogos
              label={hero.qualification.trust_label}
              logos={hero.qualification.trust_logos}
            />
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-4xl animate-[fade-up_0.7s_ease-out_0.35s_both] text-left sm:mt-14">
          <div className="grid gap-y-6 sm:grid-cols-3 sm:gap-y-0">
            {hero.pegs.map((peg, i) => {
              const Icon = PEG_ICONS[i % PEG_ICONS.length]
              const isLast = i === hero.pegs.length - 1
              const cellClass = [
                i > 0
                  ? "border-t border-border pt-5 sm:mt-0 sm:border-t-0 sm:pt-0 sm:border-l"
                  : "",
                !isLast ? "sm:pr-8" : "",
                i > 0 ? "sm:pl-8" : "",
              ]
                .filter(Boolean)
                .join(" ")
              return (
                <div key={peg.title} className={cellClass}>
                  <Icon className="mb-3 h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  <p className="mb-1.5 text-sm leading-snug font-semibold text-foreground">
                    {peg.title}
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {peg.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
