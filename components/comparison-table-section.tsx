import { SectionBadge } from "@/components/section-badge"
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

export interface ComparisonTableData {
  badge?: string
  title?: string
  columns: string[]
  rows: { criterion: string; values: string[] }[]
}

const icons = [CheckCircle2, MinusCircle, XCircle]
const iconColors = ["text-blue-400", "text-slate-500", "text-red-400"]

export function ComparisonTableSection({
  comparison,
  className,
}: {
  comparison: ComparisonTableData
  className?: string
}) {
  const badge = comparison.badge ?? "Porównanie"

  return (
    <section
      className={cn(
        "relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-16 text-slate-300 sm:py-20 md:py-28",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        <Reveal as="header" className="mb-12 text-center sm:mb-16">
          <div className="mb-4 flex justify-center">
            <SectionBadge>{badge}</SectionBadge>
          </div>
          <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            {comparison.title}
          </h2>
        </Reveal>

        {/* Desktop: tabela */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-x-6 border-b border-slate-800 pb-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Kryterium
            </div>
            {comparison.columns.map((col, i) => (
              <div
                key={i}
                className={cn(
                  "text-sm font-bold leading-snug",
                  i === 0 ? "text-blue-400" : "text-slate-200"
                )}
              >
                {col}
              </div>
            ))}
          </div>

          {comparison.rows.map((row, ri) => (
            <Reveal
              key={ri}
              delay={ri * 0.05}
              className="grid grid-cols-4 gap-x-6 border-b border-slate-800/70 py-5"
            >
              <div className="text-sm font-bold text-white">
                {row.criterion}
              </div>
              {row.values.map((value, vi) => {
                const Icon = icons[vi % icons.length]
                return (
                  <div key={vi} className="flex items-start gap-2">
                    <Icon
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        iconColors[vi % iconColors.length]
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm leading-relaxed",
                        vi === 0 ? "text-slate-200" : "text-slate-400"
                      )}
                    >
                      {value}
                    </span>
                  </div>
                )
              })}
            </Reveal>
          ))}
        </div>

        {/* Mobile: stacked per kryterium */}
        <div className="md:hidden">
          {comparison.rows.map((row, ri) => (
            <Reveal
              key={ri}
              className="border-t border-slate-800 py-6 first:border-t-0 first:pt-0"
            >
              <h3 className="mb-4 text-base font-bold text-white">
                {row.criterion}
              </h3>
              <div className="space-y-4">
                {comparison.columns.map((col, ci) => {
                  const Icon = icons[ci % icons.length]
                  return (
                    <div key={ci} className="flex items-start gap-3">
                      <Icon
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          iconColors[ci % iconColors.length]
                        )}
                      />
                      <div className="min-w-0">
                        <div
                          className={cn(
                            "text-[10px] font-bold uppercase tracking-wider",
                            ci === 0 ? "text-blue-400" : "text-slate-500"
                          )}
                        >
                          {col}
                        </div>
                        <p
                          className={cn(
                            "text-sm leading-relaxed",
                            ci === 0 ? "text-slate-200" : "text-slate-400"
                          )}
                        >
                          {row.values[ci]}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
