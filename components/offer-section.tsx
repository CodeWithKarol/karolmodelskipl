import { Blocks, CheckCircle2, LockKeyhole, ArrowRight, Zap, TrendingUp } from "lucide-react"
import { content } from "@/lib/content"

export function OfferSection() {
  const { offer } = content;
  
  // Zaktualizowane ikony idealnie pasujące do nowych korzyści biznesowych
  const icons = [Blocks, Zap, LockKeyhole, TrendingUp, CheckCircle2];

  return (
    <section id="oferta" className="relative py-16 md:py-32 bg-slate-950 text-slate-300 border-t border-slate-900/50 overflow-hidden">
      {/* Świetlne akcenty w tle dla efektu Premium / Blue Ocean */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        
        {/* Nagłówek Sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight text-balance mb-6">
            {offer.title_part1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{offer.title_highlight}</span> {offer.title_part2}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-light text-balance px-2 sm:px-0">
            {offer.subheading}
          </p>
        </div>

        {/* Value Stack - Lista elementów */}
        <div className="space-y-4 sm:space-y-6 relative">
          
          {/* Subtelna linia łącząca na desktopie - wizualnie "stos" */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0"></div>

          {offer.stack.map((item, i) => {
            const Icon = icons[i];
            return (
              <div 
                key={i} 
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-slate-900/80 transition-all duration-300 hover:border-blue-500/30 flex flex-col md:flex-row gap-4 sm:gap-6 items-start md:items-center overflow-hidden"
              >
                {/* Efekt podświetlenia karty */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-transparent group-hover:from-blue-500/5 transition-colors duration-500 pointer-events-none"></div>

                {/* Ikona */}
                <div className="shrink-0 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-500">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                </div>

                {/* Tekst */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                
                {/* Mały akcent na desktopie sugerujący "Stack" */}
                <div className="hidden lg:flex items-center justify-center shrink-0 w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                  <ArrowRight className="w-6 h-6 text-blue-500/50" />
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  )
}
