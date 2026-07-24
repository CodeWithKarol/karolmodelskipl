import { content } from "@/lib/content"
import { siteConfig } from "@/lib/site-config"
import { Button } from "./ui/button"
import { Sparkles, Target, ShieldCheck, Map } from "lucide-react"
import { SectionBadge } from "@/components/section-badge"

export function CtaSection() {
  const { cta } = content

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-16 text-slate-300 sm:py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10 sm:mb-16">
          <div className="mb-4">
            <SectionBadge><Sparkles className="h-3.5 w-3.5 shrink-0" />{cta.badge}</SectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight max-w-3xl mx-auto">
            {cta.title}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-sm sm:text-base md:text-lg" dangerouslySetInnerHTML={{ __html: cta.description }} />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm font-semibold text-white mb-4 sm:mb-5 text-center">{cta.package_title}</p>
            <ul className="space-y-2 sm:space-y-2.5">
              {cta.offer_items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-left">
                  <span className="text-blue-400 shrink-0 mt-0.5">
                    {i === 0 && <Target className="h-3.5 w-3.5" />}
                    {i === 1 && <ShieldCheck className="h-3.5 w-3.5" />}
                    {i === 2 && <Map className="h-3.5 w-3.5" />}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-xs sm:text-sm text-slate-500 text-center mb-5 sm:mb-6 leading-relaxed">100% bezpłatnie • Rozmowa wideo w 4 oczy</div>

          <div className="flex flex-col items-center">
            <a href={siteConfig.calendlyLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-md">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg transition-all whitespace-normal h-auto leading-tight">
                {cta.button}
              </Button>
            </a>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-3 uppercase tracking-widest font-semibold">{cta.footer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
