import { Building, Globe, Cpu, ShoppingCart, ShieldCheck } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"

export function TrustedBySection() {
  const { trustedBy } = content
  const icons = [Building, Globe, Cpu, ShoppingCart]

  return (
    <section className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Header - Mobile First */}
        <div className="mb-10 sm:mb-14 text-center">
          <div className="mb-4">
            <SectionBadge variant="emerald">
            <ShieldCheck className="h-4 w-4" />
            <span>{trustedBy.badge}</span>
          </SectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            {trustedBy.title}
          </h2>
        </div>

        {/* Bridge of Trust - First-person quote, Mobile First */}
        <blockquote className="relative max-w-3xl mx-auto mb-10 sm:mb-14">
          <span aria-hidden="true" className="absolute -top-6 -left-2 sm:-left-6 text-6xl sm:text-7xl leading-none text-blue-500/15 font-serif select-none">
            &ldquo;
          </span>
          <div className="space-y-4 sm:space-y-5">
            {trustedBy.quote.map((paragraph, i) => (
              <p key={i} className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <footer className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500/50"></span>
            <cite className="not-italic text-xs sm:text-sm font-semibold text-slate-400">
              {trustedBy.quote_author}
            </cite>
          </footer>
        </blockquote>

        {/* Grounded logo strip - Mobile: 1 col full width, Tablet+: 2 col, Desktop: 4 col */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
          {trustedBy.logos.map((company, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={company.name}
                className="group flex items-center justify-start gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 transition-colors hover:border-slate-700 sm:justify-center"
              >
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-slate-500 transition-colors group-hover:text-blue-400">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-white">
                    {company.name}
                  </p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500">
                    {company.category}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
