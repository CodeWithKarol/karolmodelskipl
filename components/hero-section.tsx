import { Button } from "@/components/ui/button"
import { CheckCircle2, ShieldCheck, Zap, User } from "lucide-react"
import { content } from "@/lib/content"

export function HeroSection() {
  const { hero } = content
  
  return (
    <section className="relative w-full min-h-dvh flex flex-col bg-slate-950 text-slate-50 pt-16 pb-12 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-0"></div>
      <div className="absolute top-0 right-0 w-full h-1/2 bg-[linear-gradient(to_bottom,rgba(30,58,138,0.05),transparent)] pointer-events-none"></div>

      <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Content Column */}
        <div className="flex-1 w-full max-w-2xl text-center lg:text-left pt-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]">
            {hero.h1}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {hero.subheading}
          </p>

          {/* Indicators - Mobile: Stacked | Desktop: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {hero.indicators.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm text-left">
                <div className="text-blue-400 mb-2">
                  {i === 0 && <Zap className="h-5 w-5" />}
                  {i === 1 && <ShieldCheck className="h-5 w-5" />}
                  {i === 2 && <User className="h-5 w-5" />}
                </div>
                <h4 className="text-sm font-bold text-white mb-1 leading-tight">{item.title}</h4>
                <p className="text-[11px] text-slate-400 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Card Column */}
        <div className="w-full max-w-md lg:max-w-sm flex-shrink-0">
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 shadow-2xl relative">
            <div className="absolute -top-3 left-6">
              <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
                Program Pilotażowy
              </span>
            </div>
            
            <h2 className="text-xl font-bold text-white mb-4">{hero.pilot_program.title}</h2>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">{hero.pilot_program.description}</p>
            
            <div className="space-y-3 mb-6">
              {hero.offer_items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="text-xs font-medium">{item.title}</span>
                </div>
              ))}
            </div>

            <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6 text-xs sm:text-sm font-bold rounded-xl shadow-lg border-b-4 border-blue-800 active:border-b-0 transition-all whitespace-normal h-auto leading-tight">
                {hero.pilot_program.cta}
              </Button>
            </a>
            
            <p className="text-[10px] text-slate-500 text-center mt-4 uppercase tracking-widest font-semibold">{hero.cta_sub}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
