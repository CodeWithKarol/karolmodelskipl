import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Zap, Handshake, Code2, LineChart, Lock, CheckCircle2, Server } from "lucide-react"
import { content } from "@/lib/content"

export function HeroSection() {
  const { hero } = content;
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-50 min-h-[100dvh] flex items-center pt-16 pb-8 sm:pt-24 sm:pb-16 selection:bg-blue-500/30">
      {/* Dynamiczne Tło i Gradienty */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full mix-blend-screen opacity-60"></div>
      
      {/* Delikatny grid technologiczny */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-25"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Kolumna Lewa - Treść i CTA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-6 lg:space-y-8">
            
            {/* Główny Nagłówek */}
            <h1 className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-[3.25rem] xl:text-[4rem] font-extrabold tracking-tight text-white sm:leading-[1.05] text-balance">
              <span className="text-slate-100">{hero.h1_part1}</span>
              <br className="hidden sm:block" />
              <span className="text-slate-100"> {hero.h1_part2} </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 pb-2">
                {hero.h1_highlight}
              </span>
            </h1>
            
            {/* Podnagłówek */}
            <p className="text-[14px] sm:text-lg lg:text-[1.1rem] xl:text-xl leading-snug sm:leading-relaxed text-slate-300 text-balance max-w-2xl mx-auto lg:mx-0 font-light px-1 sm:px-0">
              {hero.subheading}
            </p>
            
            {/* Przyciski i Call To Action */}
            <div className="w-full sm:w-auto pt-0 sm:pt-2 flex flex-col items-center lg:items-start space-y-3 sm:space-y-4 px-1 sm:px-0">
              <a 
                href="#kontakt" 
                className="w-full sm:w-auto group"
              >
                <div className="relative w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 group-hover:duration-200"></div>
                  <Button 
                    size="lg" 
                    className="relative w-full sm:w-auto h-auto min-h-[3.25rem] sm:min-h-[4rem] py-2.5 sm:py-3 text-[13px] sm:text-[17px] font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-xl sm:rounded-2xl shadow-xl transition-all flex flex-row items-center justify-center gap-2 sm:gap-3 border border-blue-400/20 px-4 sm:px-8"
                  >
                    <span className="text-balance">{hero.cta}</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </a>
              
              {/* Trust triggers pod przyciskiem */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1 sm:gap-3 text-[11px] sm:text-sm text-slate-400 font-medium w-full">
                <div className="flex items-center gap-1.5 bg-slate-900/50 px-2 py-1 rounded-md border border-slate-800/60">
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 whitespace-nowrap">{hero.click_trigger_part1}</span>
                </div>
                <span className="text-slate-600 hidden sm:block">|</span>
                <span className="text-slate-400 whitespace-nowrap">{hero.click_trigger_part2}</span>
              </div>
            </div>

            {/* Wskaźniki Wartości / Trust signals */}
            <div className="mt-5 sm:mt-10 pt-4 sm:pt-6 border-t border-slate-800/80 w-full max-w-2xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start justify-center lg:justify-start gap-2.5 sm:gap-6">
                {hero.indicators.map((ind, i) => {
                  const Icon = i === 0 ? Zap : i === 1 ? Lock : Server;
                  return (
                    <div key={i} className="flex items-center gap-2 text-slate-300 w-full sm:w-auto justify-center sm:justify-start bg-slate-900/30 sm:bg-transparent py-1.5 sm:py-0 rounded-lg sm:rounded-none border border-slate-800/50 sm:border-none">
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-800/50 border border-slate-700/50 shrink-0">
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                      </div>
                      <span className="text-[12px] sm:text-sm font-medium">{ind.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Kolumna Prawa - Wizualizacja (Bento Box / SaaS UI) */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6 relative h-[450px] lg:h-[500px] xl:h-[600px] w-full max-w-[480px] xl:max-w-[550px] mx-auto xl:mx-auto">
            {/* Dekoracyjne okręgi i blury z tyłu */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] xl:w-[400px] xl:h-[400px] rounded-full border border-blue-500/10 bg-blue-900/10 backdrop-blur-3xl animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] rounded-full border border-cyan-500/10 bg-cyan-900/10 animate-[spin_40s_linear_infinite_reverse]"></div>
            
            {/* Główna karta reprezentująca "Architekturę" */}
            <div className="absolute top-[2%] lg:top-[5%] xl:top-[10%] left-0 xl:left-[2%] w-[90%] xl:w-[85%] bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 p-1 rounded-2xl shadow-2xl hover:-translate-y-2 transition-transform duration-500 z-10">
              <div className="bg-slate-950/50 rounded-xl p-4 xl:p-5 border border-slate-800/50">
                <div className="flex items-center justify-between mb-4 xl:mb-6">
                  <div className="flex items-center gap-2 xl:gap-3">
                    <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
                      <Code2 className="w-4 h-4 xl:w-5 xl:h-5 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-slate-200 font-semibold text-[13px] xl:text-sm">Nowoczesna Platforma Webowa</h2>
                      <p className="text-slate-500 text-[11px] xl:text-xs">Bez technologicznego długu</p>
                    </div>
                  </div>
                  <div className="px-2 py-1 xl:px-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] xl:text-xs font-medium flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3 h-3" /> <span className="hidden xl:inline">Stabilna</span>
                  </div>
                </div>

                <div className="space-y-2.5 xl:space-y-3">
                  <div className="flex items-center gap-2.5 xl:gap-3 p-2.5 xl:p-3 rounded-lg bg-slate-800/30 border border-slate-800/50">
                    <Zap className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-amber-400 shrink-0" />
                    <div className="h-1.5 xl:h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[90%]"></div>
                    </div>
                    <span className="text-[11px] xl:text-xs font-medium text-slate-400">90%</span>
                  </div>
                  <div className="flex items-center gap-2.5 xl:gap-3 p-2.5 xl:p-3 rounded-lg bg-slate-800/30 border border-slate-800/50">
                    <Server className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-indigo-400 shrink-0" />
                    <div className="h-1.5 xl:h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 w-[99%]"></div>
                    </div>
                    <span className="text-[11px] xl:text-xs font-medium text-slate-400">99%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Karta 2 - Bezpieczeństwo i ROI */}
            <div className="absolute top-[45%] lg:top-[48%] xl:top-[48%] right-[5%] xl:right-[-5%] w-[85%] xl:w-[75%] bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 p-3 xl:p-4 rounded-2xl shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-transform duration-500 z-20">
              <div className="flex items-start gap-3 xl:gap-4">
                <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                  <Lock className="w-5 h-5 xl:w-6 xl:h-6 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-slate-200 font-semibold text-[13px] xl:text-sm mb-0.5 xl:mb-1">{hero.indicators[1].text}</h2>
                  <p className="text-slate-400 text-[11px] xl:text-xs leading-relaxed line-clamp-2">
                    Infrastruktura przygotowana na gigantyczne obciążenia i ochronę danych.
                  </p>
                </div>
              </div>
            </div>

            {/* Karta 3 - Wzrost biznesowy */}
            <div className="absolute bottom-[5%] lg:bottom-[8%] xl:bottom-[8%] left-[2%] xl:left-[8%] w-[70%] xl:w-[65%] bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 p-3 xl:p-4 rounded-2xl shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-transform duration-500 z-30">
               <div className="flex items-center gap-2.5 xl:gap-3 mb-2.5 xl:mb-3">
                 <LineChart className="w-4 h-4 xl:w-5 xl:h-5 text-blue-400 shrink-0" />
                 <span className="text-slate-200 font-semibold text-[13px] xl:text-sm">Skalowalność zysków</span>
               </div>
               <div className="flex items-end gap-1.5 xl:gap-2 h-10 xl:h-12">
                 <div className="w-1/4 bg-slate-800 rounded-t-sm h-[30%]"></div>
                 <div className="w-1/4 bg-slate-700 rounded-t-sm h-[50%]"></div>
                 <div className="w-1/4 bg-blue-500/50 rounded-t-sm h-[75%] border-t border-blue-400"></div>
                 <div className="w-1/4 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm h-[100%] border-t border-cyan-300 relative">
                    <div className="absolute -top-1.5 xl:-top-2 -right-1 w-1.5 h-1.5 xl:w-2 xl:h-2 rounded-full bg-white shadow-[0_0_10px_#fff]"></div>
                 </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
