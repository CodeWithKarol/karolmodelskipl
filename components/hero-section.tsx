import { Button } from "@/components/ui/button"
import { ShieldCheck, UserCheck, FileCode, Gem } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"

export function HeroSection() {
  const { hero } = content

  return (
    <section className="relative w-full flex flex-col bg-background text-foreground pt-24 pb-16 sm:pt-28 lg:pb-12 lg:min-h-screen overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-0"></div>
      <div className="absolute top-0 right-0 w-full h-1/2 bg-[linear-gradient(to_bottom,rgba(30,58,138,0.05),transparent)] pointer-events-none lg:block"></div>
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-8 sm:gap-10 lg:gap-8">

        {/* Content Column */}
        <div className="flex-1 w-full max-w-2xl text-left lg:pr-8">
          <div className="mb-4 sm:mb-6 animate-[fade-up_0.7s_ease-out_both]">
            <SectionBadge variant="neutral" className="text-[10px] sm:text-xs">
              <Gem className="h-3.5 w-3.5 shrink-0" />
              {hero.badge}
            </SectionBadge>
          </div>
          <h1 className="text-4xl leading-[1.12] tracking-tight text-balance text-foreground mb-4 sm:mb-5 animate-[fade-up_0.7s_ease-out_0.1s_both] sm:text-5xl sm:leading-[1.1] lg:text-6xl">
            {hero.h1}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-xl animate-[fade-up_0.7s_ease-out_0.2s_both]">
            {hero.subheading}
          </p>

          {/* Indicators - Inline value props */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-6 animate-[fade-up_0.7s_ease-out_0.3s_both]">
            {hero.indicators.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-left text-muted-foreground">
                <span className="text-primary shrink-0">
                  {i === 0 && <ShieldCheck className="h-4 w-4" />}
                  {i === 1 && <UserCheck className="h-4 w-4" />}
                  {i === 2 && <FileCode className="h-4 w-4" />}
                </span>
                <span className="text-xs sm:text-sm font-medium leading-snug">{item.title}</span>
              </div>
            ))}
          </div>

          {/* Main CTA — below the value props */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 animate-[fade-up_0.7s_ease-out_0.35s_both]">
            <a href="#zwrotnica" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-8 py-4 text-sm font-bold rounded-xl shadow-lg transition-all whitespace-normal h-auto leading-tight">
                Wybierz wyzwanie w Twojej firmie ↓
              </Button>
            </a>
            <span className="text-xs text-muted-foreground text-center sm:text-left">lub sprawdź doświadczenie poniżej</span>
          </div>
        </div>

        {/* Photo + Trust Badge — mobile (pod treścią) / desktop (prawa kolumna) */}
        <div className="relative w-full max-w-[21rem] sm:max-w-sm lg:max-w-md flex-shrink-0 mx-auto lg:mx-0 lg:pr-4 animate-[fade-in_0.7s_ease-out_0.4s_both] lg:animate-[fade-in_0.9s_ease-out_0.15s_both]">
          {/* Zdjęcie */}
          <div className="relative w-full rounded-[2rem] overflow-hidden shadow-[0_25px_80px_-20px_rgba(37,99,235,0.25)] border border-border">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 pointer-events-none"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/karol.webp"
              alt="Karol Modelski - Niezależny Partner Technologiczny"
              className="w-full h-auto object-cover"
            />

            {/* Elegancka, minimalistyczna belka na zdjęciu */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6">
              <p className="text-sm sm:text-base font-bold text-foreground">Karol Modelski</p>
              <p className="text-[11px] sm:text-xs text-primary font-medium mb-3">Architekt Oprogramowania &amp; Niezależny Partner Technologiczny</p>

              <div className="pt-3 border-t border-border flex items-center justify-between gap-3 text-[10px] sm:text-[11px] text-muted-foreground">
                <span className="shrink-0">Standardy bankowe:</span>
                <span className="font-semibold text-foreground text-right">Citibank • BNP Paribas</span>
              </div>
            </div>
          </div>

          {/* Tła poświaty */}
          <div className="absolute -top-6 -left-2 w-40 h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-6 -right-2 w-32 h-32 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
