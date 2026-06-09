import { CalendarDays, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react"
import { content } from "@/lib/content"
import { Button } from "./ui/button"

export function CtaSection() {
  const { cta } = content;

  return (
    <section id="kontakt" className="relative py-20 md:py-32 bg-slate-950 text-slate-300 border-t border-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Lewa kolumna z tekstem i argumentacją */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mx-auto lg:mx-0">
              <MessageSquare className="w-4 h-4" />
              <span>Bezpłatna Konsultacja</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight text-balance">
              {cta.title_part1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{cta.title_highlight}</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-light text-balance">
              {cta.subtitle}
            </p>
            
            <div className="p-5 sm:p-6 bg-slate-900/50 border border-slate-800 rounded-2xl border-l-4 border-l-blue-500">
              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                {cta.meeting_intro}
              </p>
            </div>
          </div>

          {/* Prawa kolumna z listą wartości i przyciskiem (Karta) */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
            <div className="bg-slate-900 border border-slate-700/50 rounded-[2rem] p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

              <div className="relative z-10">
                <h3 className="text-white font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-center sm:text-left">
                  {cta.meeting_bullets_title}
                </h3>
                
                <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                  {cta.bullets.map((item, idx) => (
                    <div key={idx} className="flex gap-3 sm:gap-4 items-start bg-slate-950/40 border border-slate-800/80 p-4 sm:p-5 rounded-2xl hover:border-blue-500/30 transition-colors">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-[13px] sm:text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center">
                  <a 
                    href="https://calendly.com/kontakt-karolmodelski/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full relative group/btn"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-40 group-hover/btn:opacity-70 transition duration-300"></div>
                    <Button 
                      size="lg" 
                      className="relative h-14 sm:h-16 text-[15px] sm:text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-2xl w-full shadow-xl transition-all flex flex-row items-center justify-center gap-2 sm:gap-3 border border-blue-400/20 px-4 sm:px-8"
                    >
                      <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                      <span className="flex-1 sm:flex-none text-center whitespace-normal leading-snug">
                        {cta.button}
                      </span>
                      <ArrowRight className="hidden sm:block w-5 h-5 shrink-0 opacity-50 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 transition-all" />
                    </Button>
                  </a>
                  <p className="text-xs text-slate-500 mt-4 font-medium uppercase tracking-wider text-center">
                    Spotkanie odbywa się online
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
