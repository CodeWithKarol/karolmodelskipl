import { SectionBadge } from "@/components/section-badge"
import { ShieldCheck, CheckCircle2, XCircle } from "lucide-react"
import { content } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

export interface ContrastRow {
  area?: string
  blue: string
  red: string
  blueTitle?: string
  redTitle?: string
}

interface ContrastData {
  badge?: string
  title?: string
  blue_title?: string
  red_title?: string
  blue_ocean_title?: string
  red_ocean_title?: string
  rows?: ContrastRow[]
  comparisons?: {
    red: { title: string; desc: string }
    blue: { title: string; desc: string }
  }[]
}

interface ContrastSectionProps {
  contrast?: ContrastData
  className?: string
}

export function ContrastSection({ contrast: customContrast, className }: ContrastSectionProps = {}) {
  const contrast = (customContrast ?? content.contrast) as ContrastData

  const badge = contrast.badge ?? "Porównanie modeli"
  const title = contrast.title ?? ""
  const blueLabel = contrast.blue_title ?? contrast.blue_ocean_title ?? ""
  const redLabel = contrast.red_title ?? contrast.red_ocean_title ?? ""

  const rows: ContrastRow[] = contrast.rows
    ? contrast.rows.map((row) => ({
        area: row.area,
        blue: row.blue,
        red: row.red,
      }))
    : (contrast.comparisons ?? []).map((item) => ({
        blueTitle: item.blue.title,
        blue: item.blue.desc,
        redTitle: item.red.title,
        red: item.red.desc,
      }))

  return (
    <section
      id="porownanie"
      className={cn(
        "relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        {/* Nagłówek */}
        <Reveal as="header" className="mb-12 sm:mb-16 text-center">
          <div className="mb-4">
            <SectionBadge>
              <ShieldCheck className="h-4 w-4" />
              <span>{badge}</span>
            </SectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            {title}
          </h2>
        </Reveal>

        {/* Comparison table - borderless, hairline dividers, no cards */}
        <div>
          {rows.map((row, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className="border-t border-slate-800 first:border-t-0 py-6 sm:py-8"
            >
              {row.area && (
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-4 sm:mb-5">
                  {row.area}
                </h3>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* BEZPOŚREDNIA WSPÓŁPRACA (Rozwiązanie) */}
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    {blueLabel && (
                      <div className="text-blue-400 mb-1 font-bold text-[10px] uppercase tracking-widest">
                        {blueLabel}
                      </div>
                    )}
                    {row.blueTitle && (
                      <div className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">
                        {row.blueTitle}
                      </div>
                    )}
                    <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                      {row.blue}
                    </p>
                  </div>
                </div>

                {/* TRADYCYJNA AGENCJA (Problem) */}
                <div className="flex items-start gap-3 md:border-l md:border-slate-800 md:pl-6">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    {redLabel && (
                      <div className="text-red-400 mb-1 font-bold text-[10px] uppercase tracking-widest">
                        {redLabel}
                      </div>
                    )}
                    {row.redTitle && (
                      <div className="text-sm sm:text-base font-bold text-slate-200 mb-1 leading-snug">
                        {row.redTitle}
                      </div>
                    )}
                    <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                      {row.red}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
