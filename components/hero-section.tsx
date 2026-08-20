import { Button } from "@/components/ui/button"
import { ShieldCheck, Zap, User, Gem, Target, Map } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"

export function HeroSection() {
  const { hero } = content

  return (
    <section className="relative w-full flex flex-col bg-slate-950 text-slate-50 pt-16 pb-16 lg:pb-12 lg:min-h-screen overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-0"></div>
      <div className="absolute top-0 right-0 w-full h-1/2 bg-[linear-gradient(to_bottom,rgba(30,58,138,0.05),transparent)] pointer-events-none lg:block"></div>
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-center justify-start lg:justify-between gap-10 lg:gap-8">

        {/* Content Column */}
        <div className="flex-1 w-full max-w-2xl text-left lg:pr-8">
          <div className="mb-4 sm:mb-6 animate-[fade-up_0.7s_ease-out_both]">
            <SectionBadge><Gem className="h-3.5 w-3.5 shrink-0" />{hero.badge}</SectionBadge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter text-white mb-5 sm:mb-6 leading-[1.1] animate-[fade-up_0.7s_ease-out_0.1s_both]">
            {hero.h1}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 mb-5 sm:mb-8 leading-relaxed max-w-xl animate-[fade-up_0.7s_ease-out_0.2s_both]">
            {hero.subheading}
          </p>

          {/* Mobile CTA — above the fold */}
          <div className="mb-5 sm:mb-6 lg:hidden animate-[fade-up_0.7s_ease-out_0.25s_both]">
            <a
              href="https://calendly.com/kontakt-karolmodelski/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg transition-all whitespace-normal h-auto leading-tight"
              >
                {hero.pilot_program.cta}
              </Button>
            </a>
            <p className="text-[11px] text-amber-400/90 text-center mt-2 font-semibold tracking-wide">{hero.cta_sub}</p>
          </div>

          {/* Indicators - Inline value props */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 animate-[fade-up_0.7s_ease-out_0.3s_both]">
            {hero.indicators.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <span className="text-blue-400 shrink-0">
                  {i === 0 && <Zap className="h-4 w-4" />}
                  {i === 1 && <ShieldCheck className="h-4 w-4" />}
                  {i === 2 && <User className="h-4 w-4" />}
                </span>
                <span className="text-xs sm:text-sm font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo + Promo Card — asymmetric composition (desktop only) */}
        <div className="relative hidden w-full max-w-md flex-shrink-0 lg:block lg:pr-4 lg:animate-[fade-in_0.9s_ease-out_0.15s_both]">
          {/* Photo — offset, no box, glow behind */}
          <div className="relative w-[88%] ml-auto rounded-[2rem] overflow-hidden rotate-2 translate-x-4 shadow-[0_25px_80px_-20px_rgba(37,99,235,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute -inset-6 -z-10 bg-blue-500/20 blur-3xl rounded-full"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/karol.webp"
              alt="Karol Modelski - Niezależny Partner Technologiczny"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
              <p className="text-sm font-bold text-white">Karol Modelski</p>
              <p className="text-xs text-slate-400">Niezależny Partner Technologiczny</p>
            </div>
          </div>

          {/* Floating accents */}
          <div className="absolute -top-6 -left-2 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>
          <div className="absolute top-8 -right-2 w-24 h-24 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none"></div>

          {/* Promo Card — borderless, overlapping photo */}
          <div className="relative z-20 -mt-20 -ml-6 w-[92%] rotate-1 bg-slate-900/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_25px_80px_-20px_rgba(37,99,235,0.35)] ring-1 ring-white/5">
            <h2 className="text-lg font-bold text-white mb-3 leading-snug">{hero.pilot_program.title}</h2>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: hero.pilot_program.description }} />

            <p className="text-xs font-semibold text-white mb-2.5">{hero.pilot_program.package_title}</p>
            <ul className="space-y-1.5 mb-4">
              {hero.offer_items.map((item, i) => (
                <li key={i} className="text-xs text-slate-300 leading-snug flex items-start gap-2">
                  <span className="text-blue-400 shrink-0 mt-0.5">
                    {i === 0 && <Target className="h-3.5 w-3.5" />}
                    {i === 1 && <ShieldCheck className="h-3.5 w-3.5" />}
                    {i === 2 && <Map className="h-3.5 w-3.5" />}
                  </span>
                  {item.title}
                </li>
              ))}
            </ul>

            <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full py-5 text-sm font-bold rounded-xl shadow-lg transition-all whitespace-normal h-auto leading-tight">
                {hero.pilot_program.cta}
              </Button>
            </a>
            <p className="text-[10px] text-amber-400/90 text-center mt-3 uppercase tracking-widest font-bold">{hero.cta_sub}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
