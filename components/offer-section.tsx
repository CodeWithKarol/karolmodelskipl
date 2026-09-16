import {
  Workflow,
  Rocket,
  RefreshCw,
  Gauge,
  Layers,
  ArrowRight,
} from "lucide-react"
import { content } from "@/lib/content"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import type { OfferContent } from "@/lib/content/types"

interface OfferSectionProps {
  offer?: OfferContent
  badge?: string
  mdColumns?: "2" | "3"
  sectionId?: string
  className?: string
}

export function OfferSection({
  offer: customOffer,
  badge = "Zwrotnica problemów",
  mdColumns = "2",
  sectionId = "oferta",
  className,
}: OfferSectionProps = {}) {
  const offer = (customOffer ?? content.offer) as OfferContent
  const icons = [Workflow, Rocket, RefreshCw, Gauge]
  const threeColumns = mdColumns === "3"

  return (
    <section
      id={sectionId}
      className={cn(
        "relative overflow-hidden border-t border-border bg-background py-20 text-muted-foreground md:py-32",
        className
      )}
    >
      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        {/* Header - Mobile First */}
        <SectionHeader
          badge={
            <>
              <Layers className="h-4 w-4" />
              <span>{badge}</span>
            </>
          }
          title={offer.title}
          description={offer.subheading}
        />

        {threeColumns ? (
          <div className="grid gap-y-10 sm:gap-y-12 md:grid-cols-3 md:gap-y-0">
            {offer.paths.map((path, i) => {
              const Icon = icons[i % icons.length]
              return (
                <Reveal
                  key={i}
                  delay={i * 0.05}
                  className={cn(
                    "h-full border-t border-border pt-6 pb-2 sm:pt-7 sm:pb-3 md:border-t-0 md:px-8 md:pt-0 md:pb-0",
                    i > 0 && "md:border-l"
                  )}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="text-xs font-medium text-primary">
                          {path.title}
                        </p>
                      </div>
                      <h3 className="mb-3 text-lg leading-snug font-semibold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                        {path.situation}
                      </h3>
                      {path.subtitle && (
                        <p className="mb-3 text-sm leading-snug font-medium text-muted-foreground sm:text-base">
                          {path.subtitle}
                        </p>
                      )}
                      {path.desc && (
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {path.desc}
                        </p>
                      )}
                    </div>
                    {path.result && (
                      <div className="mt-6 border-t border-border pt-4 text-[11px] font-medium text-muted-foreground md:min-h-[4.25rem]">
                        {path.result}
                      </div>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        ) : (
          <div className="border-t border-border">
            {offer.paths.map((path, i) => {
              const Icon = icons[i % icons.length]
              const rowClassName =
                "group relative flex flex-col gap-3 border-b border-border py-6 transition-colors hover:bg-muted sm:flex-row sm:items-start sm:gap-6 sm:py-8"
              const contentNode = (
                <>
                  <span className="flex shrink-0 items-start text-primary sm:pt-0.5">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="mb-1.5 text-[11px] font-medium text-primary sm:text-xs">
                      {path.title}
                    </p>
                    <h3 className="mb-2 text-base leading-snug font-semibold text-foreground sm:text-xl">
                      {path.situation}
                    </h3>
                    {path.subtitle && (
                      <p className="mb-2 text-sm leading-snug font-medium text-muted-foreground sm:text-base">
                        {path.subtitle}
                      </p>
                    )}
                    {path.desc && (
                      <p className="max-w-prose text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {path.desc}
                      </p>
                    )}
                    {path.result && (
                      <div className="mt-4 border-t border-border pt-3 text-[11px] font-medium text-muted-foreground sm:mt-5 sm:pt-4">
                        {path.result}
                      </div>
                    )}
                    {path.href && (
                      <span className="mt-4 inline-block text-sm font-semibold text-primary transition-colors group-hover:text-primary sm:mt-5">
                        {path.link}
                        <ArrowRight className="ml-1 inline h-4 w-4 align-middle transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </div>
                </>
              )
              return (
                <Reveal key={i} delay={i * 0.05}>
                  {path.href ? (
                    <Link href={path.href} className={rowClassName}>
                      {contentNode}
                    </Link>
                  ) : (
                    <div className={rowClassName}>{contentNode}</div>
                  )}
                </Reveal>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
