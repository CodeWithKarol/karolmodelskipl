import { ShieldAlert, ShieldCheck, ArrowRight, ArrowDown } from "lucide-react"
import { content } from "@/lib/content"

export function ContrastSection() {
  const { contrast } = content

  return (
    <section
      id="porownanie"
      className="relative overflow-hidden border-t border-slate-900/80 bg-slate-950 py-20 text-slate-300 md:py-32"
    >
      {/* Bardziej dramatyczne oświetlenie - lewa/prawa */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 blur-[120px]"></div>
      <div className="pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/5 blur-[120px]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjg1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')] opacity-[0.02] mix-blend-overlay"></div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        {/* Nagłówek Sekcji */}
        <div className="mx-auto mb-16 max-w-4xl text-center md:mb-24">
          <h2 className="mb-4 text-[2rem] leading-[1.15] font-extrabold tracking-tight text-balance text-white sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
            {contrast.title_part1} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {contrast.title_highlight}
            </span>
          </h2>
        </div>

        {/* Wspólne nagłówki kolumn - widoczne tylko na desktopie */}
        <div className="relative mb-6 hidden gap-8 lg:grid lg:grid-cols-2">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-red-500/20 bg-slate-900/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <ShieldAlert className="h-4 w-4 text-red-400" />
              <span className="text-xs font-bold tracking-wider text-red-300 uppercase">
                {contrast.red_ocean_title}
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span className="text-xs font-bold tracking-wider text-blue-300 uppercase">
                {contrast.blue_ocean_title}
              </span>
            </div>
          </div>

          {/* Linia oddzielająca między nagłówkami */}
          <div className="absolute top-1/2 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
            <span className="text-[10px] font-black text-slate-300">VS</span>
          </div>
        </div>

        {/* Tabela porównawcza */}
        <div className="relative flex flex-col gap-6 lg:gap-5">
          {/* Pionowa linia na desktopie */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-slate-800/0 via-slate-800 to-slate-800/0 lg:block"></div>

          {contrast.comparisons.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8"
            >
              {/* Opcja RED (Problem) */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-800/80 bg-slate-900/40 p-6 transition-colors duration-300 group-hover:border-red-900/30 sm:p-8">
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-red-500/5 blur-[50px]"></div>

                {/* Etykieta na mobile */}
                <div className="mb-5 flex items-center gap-2 border-b border-slate-800/80 pb-4 lg:hidden">
                  <ShieldAlert className="h-3.5 w-3.5 text-red-400" />
                  <span className="text-[10px] font-bold tracking-wider text-red-300/80 uppercase">
                    {contrast.red_ocean_title}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="mb-3 text-base leading-snug font-bold text-slate-300 transition-colors duration-300 group-hover:text-red-300 sm:text-xl">
                    {item.red.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-500 sm:text-base">
                    {item.red.desc}
                  </p>
                </div>
              </div>

              {/* Strzałka na mobile (VS) / Desktop (Arrow) */}
              <div className="relative z-20 -my-3 flex justify-center lg:hidden">
                <div className="rounded-full border border-slate-800 bg-slate-950 p-2 shadow-md">
                  <ArrowDown className="h-4 w-4 text-slate-600" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex">
                <div className="-translate-x-2 rounded-full border border-slate-800 bg-slate-950 p-1.5 opacity-0 shadow-xl transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                </div>
              </div>

              {/* Opcja BLUE (Rozwiązanie) */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-blue-500/20 bg-blue-900/5 p-6 shadow-[0_0_30px_-5px_rgba(59,130,246,0.05)] transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-900/10 sm:p-8">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Etykieta na mobile */}
                <div className="mb-5 flex items-center gap-2 border-b border-blue-500/20 pb-4 lg:hidden">
                  <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                  <span className="text-[10px] font-bold tracking-wider text-blue-400 uppercase">
                    {contrast.blue_ocean_title}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="mb-3 text-base leading-snug font-bold text-white sm:text-xl">
                    {item.blue.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed font-light text-slate-300 sm:text-[17px]">
                    {item.blue.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
