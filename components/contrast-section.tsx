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

export function ContrastSection({
  contrast: customContrast,
  className,
}: ContrastSectionProps = {}) {
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
        "relative overflow-hidden border-t border-border bg-background py-20 text-muted-foreground md:py-32",
        className
      )}
    >
      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        {/* Nagłówek */}
        <Reveal as="header" className="mb-12 text-center sm:mb-16">
          <div className="mb-4">
            <SectionBadge>
              <ShieldCheck className="h-4 w-4" />
              <span>{badge}</span>
            </SectionBadge>
          </div>
          <h2 className="mx-auto mb-6 max-w-3xl text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {title}
          </h2>
        </Reveal>

        {/* Comparison table - borderless, hairline dividers, no cards */}
        <div>
          {rows.map((row, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className="border-t border-border py-6 first:border-t-0 sm:py-8"
            >
              {row.area && (
                <h3 className="mb-4 text-base leading-snug font-semibold text-foreground sm:mb-5 sm:text-lg">
                  {row.area}
                </h3>
              )}

              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                {/* BEZPOŚREDNIA WSPÓŁPRACA (Rozwiązanie) */}
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary md:mt-0.5" />
                  <div className="min-w-0">
                    {blueLabel && (
                      <div className="mb-1 text-[11px] font-medium text-primary">
                        {blueLabel}
                      </div>
                    )}
                    {row.blueTitle && (
                      <div className="mb-1 text-sm leading-snug font-semibold text-foreground sm:text-base">
                        {row.blueTitle}
                      </div>
                    )}
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {row.blue}
                    </p>
                  </div>
                </div>

                {/* TRADYCYJNA AGENCJA (Problem) */}
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-3 md:border-l md:border-border md:pl-6">
                  <XCircle className="h-5 w-5 shrink-0 text-destructive md:mt-0.5" />
                  <div className="min-w-0">
                    {redLabel && (
                      <div className="mb-1 text-[11px] font-medium text-destructive">
                        {redLabel}
                      </div>
                    )}
                    {row.redTitle && (
                      <div className="mb-1 text-sm leading-snug font-semibold text-foreground sm:text-base">
                        {row.redTitle}
                      </div>
                    )}
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
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
