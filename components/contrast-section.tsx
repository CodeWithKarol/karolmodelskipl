import { Check, X, ArrowDown } from "lucide-react"
import { content } from "@/lib/content"

export function ContrastSection() {
  const { contrast } = content;

  return (
    <section id="porownanie" className="relative py-16 md:py-32 bg-slate-950 text-slate-300 border-t border-slate-900/50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-[1.75rem] sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight text-balance mb-4 md:mb-6">
            {contrast.title_part1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{contrast.title_highlight}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {contrast.comparisons.map((item, i) => (
            <div key={i} className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 relative">
              
              <div className="relative p-5 sm:p-8 rounded-2xl bg-red-950/20 border border-red-800/40">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-red-900/20">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{contrast.red_ocean_title}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-red-500/10 rounded-lg shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-slate-200 font-bold text-sm sm:text-lg mb-1.5">{item.red.title}</h3>
                    <p className="text-[13px] sm:text-base text-slate-400 leading-relaxed">{item.red.desc}</p>
                  </div>
                </div>
              </div>

              <div className="md:hidden flex justify-center -my-2 relative z-20">
                <div className="bg-slate-950 p-1 rounded-full border border-slate-800">
                  <ArrowDown className="w-3 h-3 text-slate-600" />
                </div>
              </div>

              <div className="relative p-5 sm:p-8 rounded-2xl bg-blue-900/10 border border-blue-500/30 shadow-[0_0_30px_-5px_rgba(59,130,246,0.1)]">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-500/20">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{contrast.blue_ocean_title}</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg shrink-0 mt-0.5 border border-blue-500/20">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-lg mb-1.5">{item.blue.title}</h3>
                    <p className="text-[13px] sm:text-base text-slate-300 leading-relaxed">{item.blue.desc}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
