import { ShieldCheck, Building, Globe, Cpu, ShoppingCart } from "lucide-react"
import { content } from "@/lib/content"

export function TrustedBySection() {
  const { trustedBy } = content;

  // Ikonki dopasowane do branż wymienionych w content.ts
  const icons = [Building, Globe, Cpu, ShoppingCart];

  return (
    <section className="relative py-16 md:py-28 bg-slate-950 border-t border-slate-900/80 overflow-hidden">
      {/* Subtelne tło z gradientem nawiązującym do bezpieczeństwa */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/5 via-slate-950 to-slate-950"></div>
      
      {/* Delikatna tekstura */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjg1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')] opacity-[0.03] mix-blend-overlay"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
              {trustedBy.badge}
            </span>
          </div>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 text-balance tracking-tight">
            {trustedBy.title}
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl text-slate-400 font-light max-w-3xl text-balance mx-auto leading-relaxed">
            {trustedBy.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustedBy.logos.map((company, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={company.name} 
                className="flex flex-col p-6 xl:p-8 bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/30 rounded-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Górny gradient przy najechniu */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex-1 flex flex-col h-full">
                  {/* Ikona Branży */}
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-300">
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <span className="text-xl sm:text-2xl font-bold text-slate-200 group-hover:text-white transition-colors duration-300 tracking-tight mb-1">
                    {company.name}
                  </span>
                  
                  <span className="text-[10px] xl:text-[11px] text-blue-400/80 font-semibold uppercase tracking-[0.1em] mb-4 xl:mb-5 group-hover:text-blue-400 transition-colors duration-300">
                    {company.category}
                  </span>
                  
                  <p className="text-[13px] xl:text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mt-auto">
                    {company.context}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
