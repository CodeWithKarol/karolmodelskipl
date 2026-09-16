import type { LucideIcon } from "lucide-react"
import { ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import { SectionBadge } from "@/components/section-badge"

interface BlogHeroIndicator {
  icon: LucideIcon
  label: string
}

export function BlogHero({
  badge,
  title,
  description,
  indicators,
  callout,
}: {
  badge: string
  title: string
  description: string
  indicators: BlogHeroIndicator[]
  callout?: { question: string; href: string; label: string }
}) {
  return (
    <section className="relative flex w-full flex-col bg-background pt-24 pb-10 text-foreground sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-20">
      <div className="relative z-10 container mx-auto flex-1 px-4 text-left sm:text-center">
        <div className="mb-4 flex justify-start sm:mb-6 sm:justify-center">
          <SectionBadge>
            <BookOpen className="h-3.5 w-3.5 shrink-0" />
            {badge}
          </SectionBadge>
        </div>
        <h1 className="mb-5 max-w-4xl text-3xl leading-[1.1] font-semibold tracking-tighter text-balance text-foreground sm:mx-auto sm:mb-6 sm:text-4xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:mx-auto sm:mb-8 sm:text-lg">
          {description}
        </p>

        {callout && (
          <div className="flex w-full flex-wrap items-center justify-start gap-x-2 gap-y-1 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-muted-foreground shadow-[0_0_30px_-12px_rgba(59,130,246,0.4)] sm:inline-flex sm:w-auto sm:justify-center sm:text-base">
            <span aria-hidden className="shrink-0 text-primary">
              💡
            </span>
            <span>{callout.question}</span>
            <Link
              href={callout.href}
              className="group inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-primary"
            >
              {callout.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}

        <div className="mt-5 flex flex-col items-start gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2">
          {indicators.map((indicator) => {
            const Icon = indicator.icon
            return (
              <div
                key={indicator.label}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="shrink-0 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium sm:text-sm">
                  {indicator.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
