import { ShieldAlert, ShieldCheck, ArrowRight, ArrowDown } from "lucide-react"
import { content } from "@/lib/content"

export function ContrastSection() {
  const { contrast } = content;

  return (
    <section id="porownanie" className="relative py-20 md:py-32 bg-slate-950 text-slate-300 border-t border-slate-900/80 overflow-hidden">
      {/* Bardziej dramatyczne oświetlenie - lewa/prawa */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjg1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        
        {/* Nagłówek Sekcji */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight text-balance mb-4 md:mb-6">
            {contrast.title_part1} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {contrast.title_highlight}
            </span>
          </h2>
        </div>

        {/* Wspólne nagłówki kolumn - widoczne tylko na desktopie */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-6 relative">
           <div className="text-center">
             <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-red-500/20 shadow-sm backdrop-blur-sm">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-wider">{contrast.red_ocean_title}</span>
             </div>
           </div>
           <div className="text-center">
             <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">{contrast.blue_ocean_title}</span>
             </div>
           </div>
           
           {/* Linia oddzielająca między nagłówkami */}
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center z-10">
              <span className="text-[10px] font-black text-slate-300">VS</span>
           </div>
        </div>

        {/* Tabela porównawcza */}
        <div className="flex flex-col gap-6 lg:gap-5 relative">
          {/* Pionowa linia na desktopie */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-800/0 via-slate-800 to-slate-800/0 -translate-x-1/2"></div>

          {contrast.comparisons.map((item, i) => (
            <div key={i} className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 relative group">
              
              {/* Opcja RED (Problem) */}
              <div className="relative p-6 sm:p-8 rounded-[1.5rem] bg-slate-900/40 border border-slate-800/80 group-hover:border-red-900/30 transition-colors duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full pointer-events-none"></div>
                
                {/* Etykieta na mobile */}
                <div className="lg:hidden flex items-center gap-2 mb-5 pb-4 border-b border-slate-800/80">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-[10px] font-bold text-red-300/80 uppercase tracking-wider">{contrast.red_ocean_title}</span>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-slate-300 font-bold text-base sm:text-xl mb-3 leading-snug group-hover:text-red-300 transition-colors duration-300">
                    {item.red.title}
                  </h3>
                  <p className="text-[14px] sm:text-base text-slate-500 leading-relaxed">
                    {item.red.desc}
                  </p>
                </div>
              </div>

              {/* Strzałka na mobile (VS) / Desktop (Arrow) */}
              <div className="lg:hidden flex justify-center -my-3 relative z-20">
                <div className="bg-slate-950 p-2 rounded-full border border-slate-800 shadow-md">
                  <ArrowDown className="w-4 h-4 text-slate-600" />
                </div>
              </div>
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                 <div className="bg-slate-950 p-1.5 rounded-full border border-slate-800 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                 </div>
              </div>

              {/* Opcja BLUE (Rozwiązanie) */}
              <div className="relative p-6 sm:p-8 rounded-[1.5rem] bg-blue-900/5 border border-blue-500/20 group-hover:bg-blue-900/10 group-hover:border-blue-500/40 shadow-[0_0_30px_-5px_rgba(59,130,246,0.05)] transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Etykieta na mobile */}
                <div className="lg:hidden flex items-center gap-2 mb-5 pb-4 border-b border-blue-500/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{contrast.blue_ocean_title}</span>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-base sm:text-xl mb-3 leading-snug">
                    {item.blue.title}
                  </h3>
                  <p className="text-[14px] sm:text-[17px] text-slate-300 leading-relaxed font-light">
                    {item.blue.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
