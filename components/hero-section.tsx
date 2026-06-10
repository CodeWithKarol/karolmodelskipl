import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Zap, Handshake } from "lucide-react"
import { content } from "@/lib/content"

export function HeroSection() {
  const { hero } = content;
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-50 min-h-[100dvh] flex items-center justify-center selection:bg-blue-500/30">
      {/* Tło - subtelniejsze i bardziej "biznesowe" */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full mix-blend-screen opacity-60"></div>
      
      {/* Delikatny grid technologiczny */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-30"></div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16 md:py-32 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          
          {/* Główny Nagłówek - Skupiony na strategicznej budowie i skalowaniu */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.05] text-balance">
            <span className="opacity-90">{hero.h1_part1}</span>
            <br className="hidden sm:block" />
            <span className="opacity-90"> {hero.h1_part2} </span>
            <span className="block mt-2 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-gradient-x pb-2">
              {hero.h1_highlight}
            </span>
          </h1>
          
          {/* Podnagłówek - Wyjaśniający natychmiast wartość */}
          <p className="text-[15px] sm:text-base md:text-xl lg:text-2xl leading-relaxed text-slate-300 text-balance max-w-3xl font-light">
            {hero.subheading}
          </p>
          
          {/* Przyciski i Call To Action */}
          <div className="w-full sm:max-w-lg md:max-w-xl mx-auto pt-4 md:pt-8 flex flex-col items-center space-y-4">
            <a 
              href="#kontakt" 
              className="w-full group"
            >
              <div className="relative w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 group-hover:duration-200"></div>
                <Button 
                  size="lg" 
                  className="relative w-full h-auto min-h-[3.5rem] sm:min-h-[4rem] py-4 text-[15px] sm:text-[17px] md:text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-2xl shadow-xl transition-all flex flex-row items-center justify-center gap-2.5 sm:gap-3 border border-blue-400/20 whitespace-normal sm:whitespace-nowrap text-center leading-snug px-5 sm:px-8"
                >
                  <span className="flex-1 sm:flex-none text-center">{hero.cta}</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mt-3 sm:mt-2 text-center">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400/80 shrink-0" />
                {hero.click_trigger_part1}
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span>{hero.click_trigger_part2}</span>
            </p>
          </div>
          
          {/* Wskaźniki Wartości / Trust signals z nową ikoną Handshake */}
          <div className="mt-10 md:mt-24 pt-6 sm:pt-8 border-t border-slate-800/80 w-full max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-8">
              {hero.indicators.map((ind, i) => {
                const Icon = i === 0 ? Zap : i === 1 ? ShieldCheck : Handshake;
                return (
                  <div key={i} className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-slate-300 bg-slate-900/50 sm:bg-transparent border border-slate-800/60 sm:border-none rounded-2xl sm:rounded-full w-full sm:w-auto px-4 py-3 sm:p-0">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-6 text-blue-400 shrink-0" />
                    <span className="text-[14px] sm:text-base font-medium">{ind.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
