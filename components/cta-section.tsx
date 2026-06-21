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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Lewa kolumna: Obietnica i powód zapisu */}
          <div className="lg:col-span-5 lg:sticky lg:top-20">
            <div className="mb-5 flex items-center gap-2 sm:gap-3">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="text-[11px] sm:text-sm font-bold tracking-wider text-blue-400 uppercase">
                Darmowa Mapa Drogowa
              </span>
            </div>

            <h2 className="mb-4 sm:mb-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-[1.15]">
              {cta.title_part1}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {cta.title_highlight}
              </span>
            </h2>

            <p className="mb-6 sm:mb-8 text-[15px] sm:text-lg leading-relaxed text-slate-300">
              {cta.subtitle}
            </p>

            <div className="relative pl-5 sm:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
              <p className="text-[15px] sm:text-xl font-medium leading-[1.6] text-white">
                {cta.meeting_intro}
              </p>
            </div>
          </div>

          {/* Prawa kolumna: Value Stack bez ciężkiej ramki */}
          <div className="lg:col-span-7 flex flex-col">
            
            <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-white text-center sm:text-left">
              {cta.meeting_bullets_title}
            </h3>

            <div className="mb-10 sm:mb-12 flex flex-col gap-6 sm:gap-6">
              {cta.bullets.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-5">
                  <div className="mt-1 shrink-0 rounded-full bg-blue-500/10 p-1.5">
                    <CheckCircle2 className="h-5 w-5 sm:h-5 sm:w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="mb-1 sm:mb-2 text-[15px] sm:text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-[14px] sm:text-base leading-relaxed text-slate-300">
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
                  className="relative flex h-auto min-h-[3.5rem] w-full flex-row items-center justify-center gap-2 sm:gap-3 rounded-xl bg-blue-600 px-4 py-3 sm:px-8 sm:py-5 text-[14px] sm:text-lg font-bold text-white shadow-xl transition-all hover:bg-blue-500"
                >
                  <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
                  <span className="whitespace-normal text-center leading-snug sm:whitespace-nowrap">{cta.button}</span>
                  <ArrowRight className="hidden sm:block h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <div className="mt-5 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-4 text-[12px] sm:text-sm font-medium text-slate-400">
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
