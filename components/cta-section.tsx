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
      className="relative overflow-hidden border-t border-slate-900 bg-slate-950 py-16 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Lewa kolumna: Obietnica i powód zapisu */}
          <div className="lg:sticky lg:top-20 lg:col-span-5">
            <div className="mb-5 flex items-center gap-2 sm:gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 sm:h-10 sm:w-10">
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-[11px] font-bold tracking-wider text-blue-400 uppercase sm:text-sm">
                Darmowa Mapa Drogowa
              </span>
            </div>

            <h2 className="mb-4 text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:mb-5 sm:text-4xl">
              {cta.title_part1}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {cta.title_highlight}
              </span>
            </h2>

            <p className="mb-6 text-[15px] leading-relaxed text-slate-300 sm:mb-8 sm:text-lg">
              {cta.subtitle}
            </p>

            <div className="relative pl-5 sm:pl-8">
              <div className="absolute top-0 bottom-0 left-0 w-1 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
              <p className="text-[15px] leading-[1.6] font-medium text-white sm:text-xl">
                {cta.meeting_intro}
              </p>
            </div>
          </div>

          {/* Prawa kolumna: Value Stack bez ciężkiej ramki */}
          <div className="flex flex-col lg:col-span-7">
            <h3 className="mb-6 text-center text-xl font-bold text-white sm:mb-8 sm:text-left sm:text-2xl">
              {cta.meeting_bullets_title}
            </h3>

            <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:gap-6">
              {cta.bullets.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-5">
                  <div className="mt-1 shrink-0 rounded-full bg-blue-500/10 p-1.5">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[15px] font-bold text-white sm:mb-2 sm:text-lg">
                      {item.title}
                    </h4>
                    <p className="text-[14px] leading-relaxed text-slate-300 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Przycisk CTA */}
            <div className="mt-auto border-t border-slate-800/60 pt-6 sm:pt-8">
              <a
                href={siteConfig.calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-30 blur transition duration-300 group-hover:opacity-50"></div>
                <Button
                  size="lg"
                  className="relative flex h-auto min-h-[3.5rem] w-full flex-row items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-[14px] font-bold text-white shadow-xl transition-all hover:bg-blue-500 sm:gap-3 sm:px-8 sm:py-5 sm:text-lg"
                >
                  <CalendarDays className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                  <span className="text-center leading-snug whitespace-normal sm:whitespace-nowrap">
                    {cta.button}
                  </span>
                  <ArrowRight className="hidden h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 sm:block sm:h-6 sm:w-6" />
                </Button>
              </a>

              <div className="mt-5 flex flex-col items-center justify-center gap-1 text-[12px] font-medium text-slate-400 sm:flex-row sm:gap-4 sm:text-sm">
                <span>Wybierz dogodny termin</span>
                <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-700 sm:block"></span>
                <span>Rozmowa przez Google Meet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
