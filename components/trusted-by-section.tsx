import { ShieldCheck } from "lucide-react"
import { content } from "@/lib/content"

export function TrustedBySection() {
  const { trustedBy } = content;

  return (
    <section className="relative py-16 md:py-24 bg-slate-950 border-t border-slate-900/50 overflow-hidden">
      {/* Subtelne tło z gradientem skupiającym wzrok na środku */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-300">
              {trustedBy.badge}
            </span>
          </div>
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            {trustedBy.title}
          </h3>
          <p className="text-center text-[15px] sm:text-lg md:text-xl text-slate-400 font-light max-w-3xl text-balance mx-auto leading-relaxed">
            {trustedBy.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
          {trustedBy.logos.map((company, index) => (
            <div 
              key={company.name} 
              className="flex flex-col p-6 xl:p-8 bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/60 hover:border-blue-500/30 rounded-2xl xl:rounded-3xl transition-all duration-300 group backdrop-blur-sm relative overflow-hidden"
            >
              {/* Dekoracyjny numer akcentujący proces/elementy */}
              <div className="absolute -top-3 -right-3 xl:-top-4 xl:-right-4 text-7xl xl:text-8xl font-black text-slate-800/20 group-hover:text-blue-500/10 transition-colors duration-300 pointer-events-none select-none">
                0{index + 1}
              </div>

              <div className="relative z-10 flex-1 flex flex-col h-full">
                <span className="text-xl sm:text-2xl font-bold text-slate-200 group-hover:text-white transition-colors duration-300 tracking-tight mb-0.5 xl:mb-1">
                  {company.name}
                </span>
                
                <span className="text-[10px] xl:text-[11px] text-slate-400/80 font-semibold uppercase tracking-[0.15em] mb-4 xl:mb-5 group-hover:text-blue-400 transition-colors duration-300">
                  {company.category}
                </span>
                
                <p className="text-[13px] xl:text-[14px] leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mt-auto pt-4 border-t border-slate-800/50">
                  {company.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
