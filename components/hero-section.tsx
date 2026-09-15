import Image from "next/image"
import { CtaButton } from "@/components/cta-button"
import { ShieldCheck, UserCheck, FileCode, Gem } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"

export function HeroSection() {
  const { hero } = content

  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-background pt-24 pb-16 text-foreground sm:pt-28 lg:min-h-screen lg:pb-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-1/2 w-full bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--ambient)_5%,transparent),transparent)] lg:block"></div>
      <div className="pointer-events-none absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="relative z-10 container mx-auto flex flex-1 flex-col items-center justify-start gap-8 px-4 sm:gap-10 lg:flex-row lg:justify-between lg:gap-8">
        {/* Content Column */}
        <div className="w-full max-w-2xl flex-1 text-left lg:pr-8">
          <div className="mb-4 animate-[fade-up_0.7s_ease-out_both] sm:mb-6">
            <SectionBadge variant="neutral" className="text-[10px] sm:text-xs">
              <Gem className="h-3.5 w-3.5 shrink-0" />
              {hero.badge}
            </SectionBadge>
          </div>
          <h1 className="mb-4 animate-[rise_0.7s_ease-out_0.1s_both] text-4xl leading-[1.12] font-semibold tracking-tight text-balance text-foreground sm:mb-5 sm:text-5xl sm:leading-[1.1] lg:text-6xl">
            {hero.h1}
          </h1>
          <p className="mb-6 max-w-xl animate-[fade-up_0.7s_ease-out_0.2s_both] text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg">
            {hero.subheading}
          </p>

          {/* Indicators - Inline value props */}
          <div className="flex animate-[fade-up_0.7s_ease-out_0.3s_both] flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-6">
            {hero.indicators.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-left text-muted-foreground"
              >
                <span className="shrink-0 text-primary">
                  {i === 0 && <ShieldCheck className="h-4 w-4" />}
                  {i === 1 && <UserCheck className="h-4 w-4" />}
                  {i === 2 && <FileCode className="h-4 w-4" />}
                </span>
                <span className="text-xs leading-snug font-medium sm:text-sm">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Main CTA — below the value props */}
          <div className="mt-6 flex animate-[fade-up_0.7s_ease-out_0.35s_both] flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <a href="#zwrotnica" className="w-full sm:w-auto">
              <CtaButton className="w-full sm:w-auto">
                Wybierz wyzwanie w Twojej firmie ↓
              </CtaButton>
            </a>
            <span className="text-center text-xs text-muted-foreground sm:text-left">
              lub sprawdź doświadczenie poniżej
            </span>
          </div>
        </div>

        {/* Photo + Trust Badge — mobile (pod treścią) / desktop (prawa kolumna) */}
        <div className="relative mx-auto w-full max-w-[21rem] flex-shrink-0 animate-[fade-in_0.7s_ease-out_0.4s_both] sm:max-w-sm lg:mx-0 lg:max-w-md lg:animate-[fade-in_0.9s_ease-out_0.15s_both] lg:pr-4">
          {/* Zdjęcie */}
          <div className="relative w-full overflow-hidden rounded-[2rem] border border-border shadow-[0_25px_80px_-20px_color-mix(in_srgb,var(--glow)_25%,transparent)]">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-background/95 via-background/50 to-transparent"></div>
            <Image
              src="/karol.webp"
              alt="Karol Modelski - Niezależny Partner Technologiczny"
              width={800}
              height={800}
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 21rem"
              className="h-auto w-full object-cover"
              priority
            />

            {/* Elegancka, minimalistyczna belka na zdjęciu */}
            <div className="absolute right-0 bottom-0 left-0 z-20 p-5 sm:p-6">
              <p className="text-sm font-semibold text-foreground sm:text-base">
                Karol Modelski
              </p>
              <p className="mb-3 text-[11px] font-medium text-primary sm:text-xs">
                Architekt Oprogramowania &amp; Niezależny Partner Technologiczny
              </p>

              <div className="flex items-center justify-between gap-3 border-t border-border pt-3 text-[10px] text-muted-foreground sm:text-[11px]">
                <span className="shrink-0">Standardy bankowe:</span>
                <span className="text-right font-medium text-foreground">
                  Citibank • BNP Paribas
                </span>
              </div>
            </div>
          </div>

          {/* Tła poświaty */}
          <div className="pointer-events-none absolute -top-6 -left-2 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="pointer-events-none absolute -right-2 -bottom-6 h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
