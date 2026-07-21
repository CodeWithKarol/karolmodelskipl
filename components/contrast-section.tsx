import { ShieldCheck } from "lucide-react"
import { content } from "@/lib/content"

export function ContrastSection() {
  const { contrast } = content

  return (
    <section
      id="porownanie"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        {/* Nagłówek */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>Porównanie modeli</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            {contrast.title_part1} {contrast.title_highlight}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg">
            {contrast.subtitle}
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contrast.comparisons.map((item, i) => (
            <div
              key={i}
              className="contents"
            >
              {/* TRADYCYJNA AGENCJA (Problem) */}
              <div className="bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col hover:border-slate-700 transition-all">
                <div className="text-red-500 mb-3 font-bold text-[10px] uppercase tracking-widest">
                  {contrast.red_ocean_title}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-300 mb-3 leading-snug">
                  {item.red.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-xs sm:text-sm">
                  {item.red.desc}
                </p>
              </div>

              {/* BEZPOŚREDNIA WSPÓŁPRACA (Rozwiązanie) */}
              <div className="bg-blue-600/10 border border-blue-500/30 p-6 sm:p-8 rounded-2xl flex flex-col hover:border-blue-500/50 transition-all">
                <div className="text-blue-400 mb-3 font-bold text-[10px] uppercase tracking-widest">
                  {contrast.blue_ocean_title}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">
                  {item.blue.title}
                </h4>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                  {item.blue.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
