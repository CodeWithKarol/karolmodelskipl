import {
  CalendarDays,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
} from "lucide-react"
import { content } from "@/lib/content"
import { siteConfig } from "@/lib/site-config"
import { Button } from "./ui/button"

export function CtaSection() {
  const { cta } = content

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Header - Mobile First */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
            <MessageSquare className="h-4 w-4" />
            <span>Darmowa Mapa Drogowa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            {cta.title_part1} {cta.title_highlight}
          </h2>
          <p
            className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg mb-8"
            dangerouslySetInnerHTML={{ __html: cta.subtitle }}
          />
        </div>

        {/* Promise Card - Mobile First */}
        <div className="group relative bg-slate-900/40 border border-slate-800 p-6 sm:p-10 rounded-3xl mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 text-center sm:text-left">
            {cta.meeting_bullets_title}
          </h3>
          
          <div className="space-y-6">
            {cta.bullets.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 shrink-0 rounded-full bg-emerald-500/10 p-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center">
          <a
            href={siteConfig.calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md"
          >
            <Button
              size="lg"
              className="relative flex h-auto min-h-[3.5rem] w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-5 px-3 text-xs sm:text-sm font-bold shadow-lg transition-all whitespace-normal text-center leading-tight"
            >
              <CalendarDays className="h-5 w-5 shrink-0" />
              {cta.button}
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Button>
          </a>
          <p
            className="mt-4 text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold text-center"
            dangerouslySetInnerHTML={{ __html: cta.footer }}
          />
        </div>
      </div>
    </section>
  )
}
