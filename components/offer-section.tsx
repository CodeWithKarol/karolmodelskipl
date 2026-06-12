import { Rocket, RefreshCw, Layers, Gauge, CheckCircle2 } from "lucide-react"
import { content } from "@/lib/content"

export function OfferSection() {
  const { offer } = content;
  
  // Nowoczesne ikony premium
  const icons = [Rocket, RefreshCw, Layers, Gauge];

  return (
    <section id="oferta" className="relative py-20 md:py-32 bg-slate-950 text-slate-300 border-t border-slate-900/80 overflow-hidden">
      {/* Świetlne akcenty w tle dopasowane do Hero */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjg1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        
        {/* Nagłówek Sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight text-balance mb-6">
            {offer.title_part1} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {offer.title_highlight}
            </span>{" "}
            {offer.title_part2}
          </h2>
          <p className="text-[15px] sm:text-lg md:text-xl text-slate-400 leading-relaxed font-light text-balance px-2 sm:px-0 mx-auto max-w-2xl">
            {offer.subheading}
          </p>
        </div>

        {/* Value Grid - Nowoczesny Bento Grid zamiast prostej listy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 relative">
          
          {offer.stack.map((item, i) => {
            const Icon = icons[i];
            const anchorId = i === 0 ? "mvp" : i === 1 ? "modernizacja" : undefined;
            return (
              <div 
                key={i} 
                id={anchorId}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 rounded-[2rem] p-8 sm:p-10 hover:bg-slate-900/80 transition-all duration-500 hover:border-blue-500/30 overflow-hidden scroll-mt-24 flex flex-col h-full"
              >
                {/* Efekt podświetlenia karty od góry (Premium) */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-0"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Ikona w stylu "App Icon" */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/50 shadow-inner flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-[15px] sm:text-[17px] text-slate-400 leading-relaxed font-light mt-auto">
                    {item.desc}
                  </p>
                  
                  {/* Mikro wskaźnik potwierdzenia (Trust marker) */}
                  <div className="mt-8 pt-6 border-t border-slate-800/50 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-emerald-500/70 transition-colors">
                      Rozwiązanie Enterprise
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  )
}
