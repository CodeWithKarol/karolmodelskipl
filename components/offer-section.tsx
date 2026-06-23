import {
  Rocket,
  RefreshCw,
  Layers,
  Gauge,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { content } from "@/lib/content"
import Link from "next/link"

export function OfferSection() {
  const { offer } = content

  // Nowoczesne ikony premium
  const icons = [Rocket, RefreshCw, Layers, Gauge]

  return (
    <section
      id="oferta"
      className="relative overflow-hidden border-t border-slate-900/80 bg-slate-950 py-20 text-slate-300 md:py-32"
    >
      {/* Świetlne akcenty w tle dopasowane do Hero */}
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-600/5 blur-[120px]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjg1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')] opacity-[0.02] mix-blend-overlay"></div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        {/* Nagłówek Sekcji */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <h2 className="mb-6 text-[2rem] leading-[1.15] font-extrabold tracking-tight text-balance text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {offer.title_part1} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {offer.title_highlight}
            </span>{" "}
            {offer.title_part2}
          </h2>
          <p className="mx-auto max-w-2xl px-2 text-[15px] leading-relaxed font-light text-balance text-slate-400 sm:px-0 sm:text-lg md:text-xl">
            {offer.subheading}
          </p>
        </div>

        {/* Value Grid - Nowoczesny Bento Grid zamiast prostej listy */}
        <div className="relative grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {offer.stack.map((item, i) => {
            const Icon = icons[i]
            const anchorId =
              i === 0 ? "mvp" : i === 1 ? "modernizacja" : undefined
            return (
              <div
                key={i}
                id={anchorId}
                className="group relative flex h-full scroll-mt-24 flex-col overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-900/80 sm:p-10"
              >
                {/* Efekt podświetlenia karty od góry (Premium) */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition-all duration-500 group-hover:via-blue-500/50"></div>
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-[50px] transition-opacity group-hover:opacity-100"></div>

                <div className="relative z-10 flex h-full flex-col">
                  {/* Ikona w stylu "App Icon" */}
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-950 shadow-inner transition-transform duration-500 group-hover:scale-105 sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 text-blue-400 transition-colors group-hover:text-cyan-300 sm:h-8 sm:w-8" />
                  </div>

                  <h3 className="mb-4 text-xl leading-snug font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <div
                    className="mt-auto text-[15px] leading-relaxed font-light text-slate-400 sm:text-[17px] [&_a]:font-medium [&_a]:text-blue-400 [&_a]:transition-colors [&_a:hover]:text-blue-300 [&_a:hover]:underline"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />

                  {/* Mikro wskaźnik potwierdzenia (Trust marker) - usunięty zgodnie z prośbą */}
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action - dodane zgodnie z instrukcją */}
        <div className="mt-16 text-center md:mt-24">
          <Link
            href="/aplikacje-internetowe-dla-firm"
            className="inline-flex items-center gap-2 text-center text-[14px] leading-snug font-semibold text-blue-400 transition-all hover:gap-3 hover:text-white sm:text-[15px] md:text-lg"
          >
            Zobacz, jak krok po kroku projektuję dedykowane aplikacje
            internetowe dla firm
            <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
