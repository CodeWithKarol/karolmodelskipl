import {
  CalendarDays,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"
import { content } from "@/lib/content"
import { siteConfig } from "@/lib/site-config"
import { Button } from "./ui/button"

export function CtaSection() {
  const { cta } = content

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-slate-900 bg-slate-950 py-16 text-slate-300 sm:py-20 md:py-32"
    >
      {/* Tło przypominające sekcję Hero - spina projekt w klamrę */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      {/* Delikatny grid technologiczny przypominający fundamenty */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:4rem_4rem] opacity-30"></div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Lewa kolumna: Obietnica i powód zapisu */}
          <div className="space-y-5 text-center sm:space-y-8 lg:sticky lg:top-24 lg:col-span-5 lg:text-left">
            <div className="mx-auto inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400 sm:text-sm lg:mx-0 lg:justify-start">
              <MessageSquare className="h-4 w-4" />
              <span>Darmowa Mapa Drogowa</span>
            </div>

            <h2 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-balance text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              {cta.title_part1}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {cta.title_highlight}
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed font-light text-balance text-slate-400 sm:text-lg lg:mx-0 lg:text-xl">
              {cta.subtitle}
            </p>

            {/* Cytat / Wstęp do korzyści z mocnym, wizualnym akcentem */}
            <div className="group relative mx-auto mt-4 max-w-2xl rounded-[1.5rem] border border-slate-800 bg-slate-900/60 p-5 shadow-inner sm:rounded-3xl sm:p-8 lg:mx-0">
              <div className="absolute top-10 bottom-10 -left-px hidden w-1 rounded-r-full bg-gradient-to-b from-blue-500 to-cyan-400 opacity-70 transition-opacity group-hover:opacity-100 sm:block"></div>
              <p className="text-[15px] leading-relaxed font-medium text-slate-300 sm:text-lg">
                {cta.meeting_intro}
              </p>
            </div>
          </div>

          {/* Prawa kolumna: Value Stack i Formularz (Potężna Karta) */}
          <div className="group relative mt-4 lg:col-span-7 lg:mt-0">
            <div className="absolute -inset-1 hidden rounded-[2.5rem] bg-gradient-to-r from-blue-600/30 to-cyan-500/30 opacity-50 blur-xl transition duration-500 group-hover:opacity-70 sm:block"></div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/50 bg-slate-900 p-5 shadow-2xl backdrop-blur-sm sm:p-10 md:p-12">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

              <div className="relative z-10 flex h-full flex-col">
                {/* Nagłówek stosu wartości */}
                <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10 lg:justify-start">
                  <div className="hidden rounded-xl border border-blue-500/20 bg-blue-500/10 p-2.5 sm:block">
                    <ShieldCheck className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-left">
                    {cta.meeting_bullets_title}
                  </h3>
                </div>

                {/* Checklista Wartości (Value Stack) */}
                <div className="mb-10 space-y-3 sm:mb-12 sm:space-y-5">
                  {cta.bullets.map((item, idx) => (
                    <div
                      key={idx}
                      className="group/item flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-sm transition-colors hover:border-blue-500/40 sm:gap-5 sm:rounded-[1.5rem] sm:p-6"
                    >
                      <div className="mt-0.5 shrink-0 rounded-full bg-blue-500/10 p-1 transition-colors group-hover/item:bg-blue-500/20">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <h4 className="mb-1 text-[15px] leading-snug font-bold text-white sm:mb-1.5 sm:text-lg">
                          {item.title}
                        </h4>
                        <p className="text-[13px] leading-relaxed text-slate-400 sm:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Przycisk CTA */}
                <div className="mt-auto border-t border-slate-800/60 pt-4">
                  <div className="flex flex-col items-center">
                    <a
                      href={siteConfig.calendlyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative w-full"
                    >
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-40 blur transition duration-300 group-hover/btn:opacity-70"></div>
                      <Button
                        size="lg"
                        className="relative flex h-auto min-h-[3.5rem] w-full flex-row items-center justify-center gap-2 rounded-2xl border border-blue-400/30 bg-blue-600 px-3 py-3.5 text-[15px] font-extrabold tracking-tight text-white shadow-xl transition-all hover:bg-blue-500 sm:min-h-[4.5rem] sm:py-4 sm:text-[17px] xl:gap-4 xl:px-8 xl:text-[21px]"
                      >
                        <CalendarDays className="hidden h-5 w-5 shrink-0 text-blue-100 sm:block xl:h-7 xl:w-7" />
                        <span className="text-center leading-snug whitespace-normal xl:whitespace-nowrap">
                          {cta.button}
                        </span>
                        <ArrowRight className="hidden h-5 w-5 shrink-0 text-blue-200 transition-all group-hover/btn:translate-x-1.5 sm:block xl:h-7 xl:w-7" />
                      </Button>
                    </a>

                    <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
                      <p className="text-xs font-medium tracking-wide text-slate-400 sm:text-sm">
                        Wybierz dogodny termin
                      </p>
                      <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-700 sm:block"></span>
                      <p className="text-xs font-medium tracking-wide text-slate-400 sm:text-sm">
                        Rozmowa przez Google Meet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
