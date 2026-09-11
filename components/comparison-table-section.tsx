import { SectionBadge } from "@/components/section-badge"
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface ComparisonTableData {
  badge?: string
  title?: string
  columns: string[]
  rows: { criterion: string; values: string[] }[]
}

const icons = [CheckCircle2, MinusCircle, XCircle]
const iconColors = ["text-primary", "text-muted-foreground", "text-destructive"]

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
        "relative overflow-hidden border-t border-border bg-background py-16 text-muted-foreground sm:py-20 md:py-28",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        <Reveal as="header" className="mb-12 text-center sm:mb-16">
          <div className="mb-4 flex justify-center">
            <SectionBadge>{badge}</SectionBadge>
          </div>
          <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {comparison.title}
          </h2>
        </Reveal>

        {/* Desktop: tabela */}
        <Reveal className="hidden border-b border-border md:block">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="h-auto px-0 pb-4 pr-6 align-top text-xs font-semibold uppercase tracking-wider whitespace-normal text-muted-foreground last:pr-0">
                  Kryterium
                </TableHead>
                {comparison.columns.map((col, i) => (
                  <TableHead
                    key={i}
                    className={cn(
                      "h-auto px-0 pb-4 pr-6 align-top text-sm font-bold leading-snug whitespace-normal last:pr-0",
                      i === 0 ? "text-primary" : "text-foreground"
                    )}
                  >
                    {col}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.rows.map((row, ri) => (
                <TableRow key={ri} className="border-border hover:bg-transparent">
                  <TableCell className="px-0 py-5 pr-6 align-top text-sm font-bold whitespace-normal text-foreground last:pr-0">
                    {row.criterion}
                  </TableCell>
                  {row.values.map((value, vi) => {
                    const Icon = icons[vi % icons.length]
                    return (
                      <TableCell
                        key={vi}
                        className="px-0 py-5 pr-6 align-top whitespace-normal last:pr-0"
                      >
                        <div className="flex items-start gap-2">
                          <Icon
                            className={cn(
                              "mt-0.5 h-4 w-4 shrink-0",
                              iconColors[vi % iconColors.length]
                            )}
                          />
                          <span
                            className={cn(
                              "text-sm leading-relaxed",
                              vi === 0 ? "text-foreground" : "text-muted-foreground"
                            )}
                          >
                            {value}
                          </span>
                        </div>
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Reveal>

        {/* Mobile: stacked per kryterium */}
        <div className="md:hidden">
          {comparison.rows.map((row, ri) => (
            <Reveal
              key={ri}
              className="border-t border-border py-6 first:border-t-0 first:pt-0"
            >
              <h3 className="mb-4 text-base font-bold text-foreground">
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
                            ci === 0 ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          {col}
                        </div>
                        <p
                          className={cn(
                            "text-sm leading-relaxed",
                            ci === 0 ? "text-foreground" : "text-muted-foreground"
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
