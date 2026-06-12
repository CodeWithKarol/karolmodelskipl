import { CalendarDays, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react"
import { content } from "@/lib/content"
import { Button } from "./ui/button"

export function CtaSection() {
  const { cta } = content;

  return (
    <section id="kontakt" className="relative py-16 sm:py-20 md:py-32 bg-slate-950 text-slate-300 border-t border-slate-900 overflow-hidden">
      {/* Tło przypominające sekcję Hero - spina projekt w klamrę */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
      
      {/* Delikatny grid technologiczny przypominający fundamenty */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-30"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Lewa kolumna: Obietnica i powód zapisu */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-5 sm:space-y-8 lg:sticky lg:top-24">
            
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mx-auto lg:mx-0">
              <MessageSquare className="w-4 h-4" />
              <span>Darmowa Mapa Drogowa</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.15] lg:leading-[1.1] tracking-tight text-balance">
              {cta.title_part1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {cta.title_highlight}
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed font-light text-balance max-w-2xl mx-auto lg:mx-0">
              {cta.subtitle}
            </p>
            
            {/* Cytat / Wstęp do korzyści z mocnym, wizualnym akcentem */}
            <div className="relative p-5 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-[1.5rem] sm:rounded-3xl mt-4 max-w-2xl mx-auto lg:mx-0 shadow-inner group">
              <div className="absolute -left-px top-10 bottom-10 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-full hidden sm:block opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-[15px] sm:text-lg text-slate-300 leading-relaxed font-medium">
                {cta.meeting_intro}
              </p>
            </div>

          </div>

          {/* Prawa kolumna: Value Stack i Formularz (Potężna Karta) */}
          <div className="lg:col-span-7 relative group mt-4 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-70 transition duration-500 hidden sm:block"></div>
            
            <div className="bg-slate-900 border border-slate-700/50 rounded-[2rem] p-5 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Nagłówek stosu wartości */}
                <div className="flex items-center gap-3 mb-8 sm:mb-10 justify-center lg:justify-start">
                  <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl hidden sm:block">
                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl sm:text-2xl text-center lg:text-left">
                    {cta.meeting_bullets_title}
                  </h3>
                </div>
                
                {/* Checklista Wartości (Value Stack) */}
                <div className="space-y-3 sm:space-y-5 mb-10 sm:mb-12">
                  {cta.bullets.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex gap-3 sm:gap-5 items-start bg-slate-950/60 border border-slate-800/80 p-4 sm:p-6 rounded-2xl sm:rounded-[1.5rem] hover:border-blue-500/40 transition-colors shadow-sm group/item"
                    >
                      <div className="bg-blue-500/10 rounded-full p-1 mt-0.5 group-hover/item:bg-blue-500/20 transition-colors shrink-0">
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-[15px] sm:text-lg mb-1 sm:mb-1.5 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-[13px] sm:text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Przycisk CTA */}
                <div className="mt-auto pt-4 border-t border-slate-800/60">
                  <div className="flex flex-col items-center">
                    <a 
                      href="https://calendly.com/kontakt-karolmodelski/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full relative group/btn"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-40 group-hover/btn:opacity-70 transition duration-300"></div>
                      <Button 
                        size="lg" 
                        className="relative w-full h-auto min-h-[3.5rem] sm:min-h-[4.5rem] py-3.5 sm:py-4 text-[15px] sm:text-[17px] xl:text-[21px] font-extrabold tracking-tight bg-blue-600 hover:bg-blue-500 text-white rounded-2xl shadow-xl transition-all flex flex-row items-center justify-center gap-2 xl:gap-4 border border-blue-400/30 px-3 xl:px-8"
                      >
                        <CalendarDays className="hidden sm:block w-5 h-5 xl:w-7 xl:h-7 shrink-0 text-blue-100" />
                        <span className="text-center whitespace-normal xl:whitespace-nowrap leading-snug">
                          {cta.button}
                        </span>
                        <ArrowRight className="hidden sm:block w-5 h-5 xl:w-7 xl:h-7 shrink-0 text-blue-200 group-hover/btn:translate-x-1.5 transition-all" />
                      </Button>
                    </a>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-6">
                      <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                        Wybierz dogodny termin
                      </p>
                      <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                        Rozmowa przez Google Meet
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
