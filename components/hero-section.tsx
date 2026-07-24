import { Button } from "@/components/ui/button"
import { ShieldCheck, Zap, User } from "lucide-react"
import { content } from "@/lib/content"

export function HeroSection() {
  const { hero } = content
  
  return (
    <section className="relative w-full flex flex-col bg-slate-950 text-slate-50 pt-16 pb-16 lg:pb-12 lg:min-h-screen">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-0"></div>
      <div className="absolute top-0 right-0 w-full h-1/2 bg-[linear-gradient(to_bottom,rgba(30,58,138,0.05),transparent)] pointer-events-none lg:block"></div>

      <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-6 lg:gap-20">
        
        {/* Content Column */}
        <div className="flex-1 w-full max-w-2xl text-left pt-4 sm:pt-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter text-white mb-5 sm:mb-6 leading-[1.1]">
            {hero.h1}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 mb-5 sm:mb-8 leading-relaxed max-w-xl">
            {hero.subheading}
          </p>

          {/* Mobile CTA — above the fold */}
          <div className="mb-5 sm:mb-6 lg:hidden">
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
            <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">{hero.cta_sub}</p>
          </div>

          {/* Indicators - Inline value props */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
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

        {/* Promo Card Column — details + CTA (desktop only) */}
        <div className="hidden w-full max-w-md lg:max-w-sm flex-shrink-0 lg:mt-8 lg:block">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 shadow-2xl">
            <h2 className="text-lg font-bold text-white mb-3 leading-snug">{hero.pilot_program.title}</h2>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: hero.pilot_program.description }} />
            
            <p className="text-xs font-semibold text-white mb-2.5">{hero.pilot_program.package_title}</p>
            <ul className="space-y-1.5 mb-4">
              {hero.offer_items.map((item, i) => (
                <li key={i} className="text-xs text-slate-300 leading-snug">
                  {item.title}
                </li>
              ))}
            </ul>

            <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full py-5 text-sm font-bold rounded-xl shadow-lg transition-all whitespace-normal h-auto leading-tight">
                {hero.pilot_program.cta}
              </Button>
            </a>
            <p className="text-[10px] text-slate-400 text-center mt-3 uppercase tracking-widest font-semibold">{hero.cta_sub}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
