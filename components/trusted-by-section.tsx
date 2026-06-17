import { ShieldCheck, Building, Globe, Cpu, ShoppingCart } from "lucide-react"
import { content } from "@/lib/content"

export function TrustedBySection() {
  const { trustedBy } = content

  // Ikonki dopasowane do branż wymienionych w content.ts
  const icons = [Building, Globe, Cpu, ShoppingCart]

  return (
    <section className="relative overflow-hidden border-t border-slate-900/80 bg-slate-950 py-16 md:py-28">
      {/* Subtelne tło z gradientem nawiązującym do bezpieczeństwa */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/5 via-slate-950 to-slate-950"></div>

      {/* Delikatna tekstura */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjg1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')] opacity-[0.03] mix-blend-overlay"></div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="mb-16 flex flex-col items-center md:mb-20">
          <div className="mb-6 flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="text-[11px] font-semibold tracking-wider text-slate-300 uppercase sm:text-xs">
              {trustedBy.badge}
            </span>
          </div>
          <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
            {trustedBy.title}
          </h2>
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed font-light text-balance text-slate-400 sm:text-lg md:text-xl">
            {trustedBy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustedBy.logos.map((company, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={company.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-900/80 xl:p-8"
              >
                {/* Górny gradient przy najechniu */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10 flex h-full flex-1 flex-col">
                  {/* Ikona Branży */}
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/30">
                    <Icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-blue-400" />
                  </div>

                  <span className="mb-1 text-xl font-bold tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-white sm:text-2xl">
                    {company.name}
                  </span>

                  <span className="mb-4 text-[10px] font-semibold tracking-[0.1em] text-blue-400/80 uppercase transition-colors duration-300 group-hover:text-blue-400 xl:mb-5 xl:text-[11px]">
                    {company.category}
                  </span>

                  <p className="mt-auto text-[13px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300 xl:text-sm">
                    {company.context}
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
