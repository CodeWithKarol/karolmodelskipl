import { Rocket, RefreshCw, Layers, Gauge, ArrowRight, Briefcase } from "lucide-react"
import { content } from "@/lib/content"
import Link from "next/link"

export function OfferSection() {
  const { offer } = content
  const icons = [Rocket, RefreshCw, Layers, Gauge]

  return (
    <section
      id="oferta"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Header - Mobile First */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
            <Briefcase className="h-4 w-4" />
            <span>Ścieżki współpracy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            {offer.title}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg">
            {offer.subheading}
          </p>
        </div>

        {/* Paths Grid - Mobile: 1 col, Tablet+: 2 col */}
        <div className="grid gap-6 md:grid-cols-2">
          {offer.paths.map((path, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={i}
                className="group relative bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl hover:border-slate-700 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex-1">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-slate-400 group-hover:text-blue-400 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {path.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-xs sm:text-sm mb-6">
                    {path.desc}
                  </p>
                </div>
                
                <Link
                  href={path.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-400 transition-all hover:gap-3 hover:text-blue-300"
                >
                  {i === 0 ? "Zobacz jak buduję dedykowane aplikacje" : 
                   i === 1 ? "Zobacz jak modernizuję systemy" :
                   i === 2 ? "Zobacz jak buduję działającą wersję startową" : 
                   "Poznaj model Bezpośredniego Partnerstwa"} 
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
