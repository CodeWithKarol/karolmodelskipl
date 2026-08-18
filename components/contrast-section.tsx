import { SectionBadge } from "@/components/section-badge"
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
        <div className="mb-12 sm:mb-16 text-center">
          <div className="mb-4">
            <SectionBadge>
              <ShieldCheck className="h-4 w-4" />
              <span>Porównanie modeli</span>
            </SectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            {contrast.title}
          </h2>
        </div>

        {/* Rows - Mobile First: 1 col stack, Desktop: 2 col per area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {contrast.rows.map((row, i) => (
            <div key={i} className="contents">
              {/* Area label - full width */}
              <h3 className="md:col-span-2 text-base sm:text-lg font-bold text-white leading-snug mt-8 md:mt-10 first:mt-0 mb-3 sm:mb-4">
                {row.area}
              </h3>

              {/* BEZPOŚREDNIA WSPÓŁPRACA (Rozwiązanie) */}
              <div className="bg-blue-600/10 border border-blue-500/30 p-6 sm:p-8 rounded-2xl flex flex-col hover:border-blue-500/50 transition-all">
                <div className="text-blue-400 mb-3 font-bold text-[10px] uppercase tracking-widest">
                  {contrast.blue_title}
                </div>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                  {row.blue}
                </p>
              </div>

              {/* TRADYCYJNA AGENCJA (Problem) */}
              <div className="bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col hover:border-slate-700 transition-all">
                <div className="text-red-400 mb-3 font-bold text-[10px] uppercase tracking-widest">
                  {contrast.red_title}
                </div>
                <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                  {row.red}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
