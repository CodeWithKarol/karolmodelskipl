import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Handshake,
  Code2,
  LineChart,
  Lock,
  CheckCircle2,
  Server,
} from "lucide-react"
import { content } from "@/lib/content"

export function HeroSection() {
  const { hero } = content
  return (
    <section className="relative flex min-h-[calc(100dvh-64px)] items-center overflow-hidden bg-slate-950 py-4 sm:py-8 text-slate-50 selection:bg-blue-500/30">
      {/* Dynamiczne Tło i Gradienty */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
      <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 opacity-60 mix-blend-screen blur-[120px] lg:h-[800px] lg:w-[800px]"></div>
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-600/5 opacity-60 mix-blend-screen blur-[120px]"></div>

      {/* Delikatny grid technologiczny */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-25"></div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Kolumna Lewa - Treść i CTA */}
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 lg:col-span-6 lg:items-start lg:space-y-8 lg:text-left xl:col-span-6">
            {/* Główny Nagłówek */}
            <h1 className="text-4xl leading-[1.15] font-extrabold tracking-tight text-balance text-white sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-[3.5rem] xl:text-[4rem] xl:leading-[1.05]">
              <span className="text-slate-100">{hero.h1_part1}</span>
              <span className="text-slate-100"> {hero.h1_part2} </span>
              <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text pb-2 text-transparent">
                {hero.h1_highlight}
              </span>
            </h1>

            {/* Podnagłówek */}
            <p className="mx-auto max-w-2xl px-1 text-[14px] leading-snug font-light text-balance text-slate-300 sm:px-0 sm:text-lg sm:leading-relaxed lg:mx-0 lg:text-[1rem] xl:text-xl">
              {hero.subheading}
            </p>

            {/* Przyciski i Call To Action */}
            <div className="flex w-full flex-col items-center space-y-3 px-1 pt-0 sm:w-auto sm:space-y-4 sm:px-0 sm:pt-2 lg:items-start">
              <a href="#kontakt" className="group w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 blur transition duration-500 group-hover:opacity-60 group-hover:duration-200"></div>
                  <Button
                    size="lg"
                    className="relative flex h-auto min-h-[3.25rem] w-full flex-row items-center justify-center gap-2 rounded-xl border border-blue-400/20 bg-blue-600 px-4 py-2.5 text-[13px] font-bold text-white shadow-xl transition-all hover:bg-blue-500 sm:min-h-[3.5rem] sm:w-auto sm:gap-3 sm:rounded-2xl sm:px-8 sm:py-3 sm:text-[17px] lg:h-12 lg:rounded-xl lg:px-6 lg:py-2 lg:text-[15px]"
                  >
                    <span className="whitespace-normal text-center text-balance leading-tight">{hero.cta}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </a>

              {/* Trust triggers pod przyciskiem */}
              <div className="flex w-full flex-col items-center justify-center gap-1 text-[11px] font-medium text-slate-400 sm:flex-row sm:gap-3 sm:text-sm lg:justify-start">
                <div className="flex items-center gap-1.5 rounded-md border border-slate-800/60 bg-slate-900/50 px-2 py-1">
                  <ShieldCheck className="h-3 w-3 shrink-0 text-emerald-400 sm:h-4 sm:w-4" />
                  <span className="whitespace-nowrap text-slate-300">
                    {hero.click_trigger_part1}
                  </span>
                </div>
                <span className="hidden text-slate-600 sm:block">|</span>
                <span className="whitespace-nowrap text-slate-400">
                  {hero.click_trigger_part2}
                </span>
              </div>
            </div>

            {/* Wskaźniki Wartości / Trust signals */}
            <div className="mx-auto mt-5 w-full max-w-2xl border-t border-slate-800/80 pt-4 sm:mt-10 sm:pt-6 lg:mx-0">
              <div className="flex flex-col flex-wrap items-center justify-center gap-2.5 sm:flex-row sm:items-start sm:gap-6 lg:justify-start">
                {hero.indicators.map((ind, i) => {
                  const Icon = i === 0 ? Zap : i === 1 ? Lock : Server
                  return (
                    <div
                      key={i}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-800/50 bg-slate-900/30 py-1.5 text-slate-300 sm:w-auto sm:justify-start sm:rounded-none sm:border-none sm:bg-transparent sm:py-0"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 sm:h-8 sm:w-8">
                        <Icon className="h-3 w-3 text-blue-400 sm:h-4 sm:w-4" />
                      </div>
                      <span className="text-[12px] font-medium sm:text-sm">
                        {ind.text}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Kolumna Prawa - Wizualizacja (Bento Box / SaaS UI) */}
          <div className="relative mx-auto hidden h-[450px] w-full max-w-[480px] lg:col-span-6 lg:block xl:col-span-6 xl:mx-auto xl:h-[600px] xl:max-w-[550px]">
            {/* Dekoracyjne okręgi i blury z tyłu */}
            <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite] rounded-full border border-blue-500/10 bg-blue-900/10 backdrop-blur-3xl xl:h-[400px] xl:w-[400px]"></div>
            <div className="absolute top-1/2 left-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse] rounded-full border border-cyan-500/10 bg-cyan-900/10 xl:h-[300px] xl:w-[300px]"></div>

            {/* Główna karta reprezentująca "Architekturę" */}
            <div className="absolute top-[2%] left-0 z-10 w-[90%] rounded-2xl border border-slate-700/60 bg-slate-900/80 p-1 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 lg:top-[5%] xl:top-[10%] xl:left-[2%] xl:w-[85%]">
              <div className="rounded-xl border border-slate-800/50 bg-slate-950/50 p-4 xl:p-5">
                <div className="mb-4 flex items-center justify-between xl:mb-6">
                  <div className="flex items-center gap-2 xl:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/20 xl:h-10 xl:w-10">
                      <Code2 className="h-4 w-4 text-blue-400 xl:h-5 xl:w-5" />
                    </div>
                    <div>
                      <h2 className="text-[13px] font-semibold text-slate-200 xl:text-sm">
                        Nowoczesna Platforma Webowa
                      </h2>
                      <p className="text-[11px] text-slate-500 xl:text-xs">
                        Bez technologicznego długu
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-400 xl:px-2.5 xl:text-xs">
                    <CheckCircle2 className="h-3 w-3" />{" "}
                    <span className="hidden xl:inline">Stabilna</span>
                  </div>
                </div>

                <div className="space-y-2.5 xl:space-y-3">
                  <div className="flex items-center gap-2.5 rounded-lg border border-slate-800/50 bg-slate-800/30 p-2.5 xl:gap-3 xl:p-3">
                    <Zap className="h-3.5 w-3.5 shrink-0 text-amber-400 xl:h-4 xl:w-4" />
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800 xl:h-2">
                      <div className="h-full w-[90%] bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 xl:text-xs">
                      90%
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg border border-slate-800/50 bg-slate-800/30 p-2.5 xl:gap-3 xl:p-3">
                    <Server className="h-3.5 w-3.5 shrink-0 text-indigo-400 xl:h-4 xl:w-4" />
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800 xl:h-2">
                      <div className="h-full w-[99%] bg-gradient-to-r from-indigo-500 to-purple-400"></div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 xl:text-xs">
                      99%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Karta 2 - Bezpieczeństwo i ROI */}
            <div className="absolute top-[45%] right-[5%] z-20 w-[85%] rounded-2xl border border-slate-700/60 bg-slate-900/90 p-3 shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 lg:top-[48%] xl:top-[48%] xl:right-[-5%] xl:w-[75%] xl:p-4">
              <div className="flex items-start gap-3 xl:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 xl:h-12 xl:w-12">
                  <Lock className="h-5 w-5 text-emerald-400 xl:h-6 xl:w-6" />
                </div>
                <div>
                  <h2 className="mb-0.5 text-[13px] font-semibold text-slate-200 xl:mb-1 xl:text-sm">
                    {hero.indicators[1].text}
                  </h2>
                  <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-400 xl:text-xs">
                    Infrastruktura przygotowana na gigantyczne obciążenia i
                    ochronę danych.
                  </p>
                </div>
              </div>
            </div>

            {/* Karta 3 - Wzrost biznesowy */}
            <div className="absolute bottom-[5%] left-[2%] z-30 w-[70%] rounded-2xl border border-slate-700/60 bg-slate-900/90 p-3 shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 lg:bottom-[8%] xl:bottom-[8%] xl:left-[8%] xl:w-[65%] xl:p-4">
              <div className="mb-2.5 flex items-center gap-2.5 xl:mb-3 xl:gap-3">
                <LineChart className="h-4 w-4 shrink-0 text-blue-400 xl:h-5 xl:w-5" />
                <span className="text-[13px] font-semibold text-slate-200 xl:text-sm">
                  Skalowalność zysków
                </span>
              </div>
              <div className="flex h-10 items-end gap-1.5 xl:h-12 xl:gap-2">
                <div className="h-[30%] w-1/4 rounded-t-sm bg-slate-800"></div>
                <div className="h-[50%] w-1/4 rounded-t-sm bg-slate-700"></div>
                <div className="h-[75%] w-1/4 rounded-t-sm border-t border-blue-400 bg-blue-500/50"></div>
                <div className="relative h-[100%] w-1/4 rounded-t-sm border-t border-cyan-300 bg-gradient-to-t from-blue-600 to-cyan-400">
                  <div className="absolute -top-1.5 -right-1 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_#fff] xl:-top-2 xl:h-2 xl:w-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
