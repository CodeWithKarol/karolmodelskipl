import { Workflow, Rocket, RefreshCw, Gauge, Layers, ArrowRight } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"
import Link from "next/link"

export function OfferSection() {
  const { offer } = content
  const icons = [Workflow, Rocket, RefreshCw, Gauge]

  return (
    <section
      id="oferta"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Header - Mobile First */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="mb-4">
            <SectionBadge>
            <Layers className="h-4 w-4" />
            <span>Zwrotnica problemów</span>
          </SectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            {offer.title}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg">
            {offer.subheading}
          </p>
        </div>

        {/* Paths Grid - Mobile First: 1 col, Tablet+: 2 col */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
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
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                    {path.title}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                    {path.situation}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-xs sm:text-sm mb-6">
                    {path.desc}
                  </p>
                </div>
                
                <Link
                  href={path.href}
                  className="inline text-sm sm:text-sm font-bold text-blue-400 transition-colors hover:text-blue-300 after:absolute after:inset-0 after:content-['']"
                >
                  {path.link}
                  <ArrowRight className="ml-1.5 inline h-3.5 w-3.5 align-middle transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
