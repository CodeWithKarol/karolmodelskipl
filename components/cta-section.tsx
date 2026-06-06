import { CalendarDays, CheckCircle2, ShieldCheck, Target } from "lucide-react"
import { content } from "@/lib/content"
import { Button } from "./ui/button"

export function CtaSection() {
  const { cta } = content;

  return (
    <section id="kontakt" className="relative py-20 md:py-32 bg-slate-950 text-slate-300 border-t border-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-blue-600/10 blur-[120px] rounded-[100%] opacity-50 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

          <div className="relative z-10">
            {/* Header karty */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-5">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight text-balance mb-4">
                {cta.title_part1} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{cta.title_highlight}</span>
              </h2>
              <p className="text-sm sm:text-lg text-slate-400 leading-relaxed font-light text-balance max-w-xl mx-auto px-1">
                {cta.subtitle}
              </p>
            </div>

            {/* Value Proposition List */}
            <div className="mb-6 sm:mb-8">
              <p className="text-white font-medium text-sm sm:text-lg mb-4 sm:mb-6">{cta.meeting_intro}</p>
              <div className="space-y-3 sm:space-y-4">
                {cta.bullets.map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 sm:gap-3 text-left items-start">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-white text-xs sm:text-base mb-0.5">{item.title}</h3>
                        <p className="text-slate-400 text-[11px] sm:text-sm leading-relaxed">{item.desc}</p>
                      </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gwarancja */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-5 mb-10 flex items-start sm:items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-slate-500 shrink-0 hidden sm:block" />
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed italic">
                {cta.guarantee}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center">
              <a 
                href="https://calendly.com/kontakt-karolmodelski/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  className="h-auto py-3 px-3 sm:py-4 sm:px-6 text-[10px] sm:text-sm md:text-base lg:text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl sm:rounded-2xl w-full sm:w-auto shadow-[0_0_50px_-10px_rgba(37,99,235,0.6)] transition-all hover:scale-[1.02] flex items-center justify-center gap-1.5"
                >
                  <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="text-center leading-[1.2] whitespace-normal">{cta.button}</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
