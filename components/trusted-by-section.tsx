import { Building, Globe, Cpu, ShoppingCart, ShieldCheck } from "lucide-react"
import { content } from "@/lib/content"

export function TrustedBySection() {
  const { trustedBy } = content
  const icons = [Building, Globe, Cpu, ShoppingCart]

  return (
    <section className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header - Mobile First */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>{trustedBy.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            {trustedBy.title}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg">
            {trustedBy.subtitle}
          </p>
        </div>

        {/* Grid - Mobile: 1 col, Tablet/Desktop: 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {trustedBy.logos.map((company, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={company.name}
                className="group relative bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-slate-400 group-hover:text-blue-400 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {company.name}
                    </h4>
                    <span className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                      {company.category}
                    </span>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {company.context}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
