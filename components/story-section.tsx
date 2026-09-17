import { Flame } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"
import type { StoryPoint } from "@/lib/content/types"

interface StorySectionProps {
  title?: string
  intro?: string
  context?: string
  points?: StoryPoint[]
  stripPointPrefix?: boolean
  className?: string
}

const BADGE = "Diagnoza problemu"

export function StorySection({
  title,
  intro,
  context,
  points,
  stripPointPrefix = false,
  className,
}: StorySectionProps) {
  const story = content.story

  return (
    <section
      id="problem"
      className={cn(
        "relative overflow-hidden bg-background py-20 text-muted-foreground md:py-32",
        className
      )}
    >
      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        {/* Header - Mobile First */}
        <Reveal as="header" className="mb-16 text-left lg:text-center">
          <div className="mb-4">
            <SectionBadge variant="neutral">
              <Flame className="h-4 w-4" />
              <span>{BADGE}</span>
            </SectionBadge>
          </div>
          <h2 className="mb-6 max-w-3xl text-2xl leading-tight font-semibold tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl lg:mx-auto">
            {title ?? story.title}
          </h2>
          {(intro ?? story.intro) && (
            <p
              className="mb-4 max-w-2xl text-base leading-relaxed font-normal text-muted-foreground sm:text-lg lg:mx-auto [&_em]:font-medium [&_em]:text-foreground [&_em]:not-italic [&_strong]:font-medium [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: intro ?? story.intro }}
            />
          )}
          {(context ?? story.context) && (
            <p
              className="max-w-2xl text-base leading-relaxed font-normal text-muted-foreground sm:text-lg lg:mx-auto [&_em]:font-medium [&_em]:text-foreground [&_em]:italic [&_strong]:font-medium [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: context ?? story.context }}
            />
          )}
        </Reveal>

        {/* Manifesto list - borderless, hairline dividers, no cards */}
        <div className="grid gap-x-10 sm:gap-x-12 md:grid-cols-2">
          {(points ?? story.points).map((point, idx) => {
            const cleanTitle = stripPointPrefix
              ? point.title.replace(/^Objaw\s+\d+:\s*/, "")
              : point.title

            return (
              <Reveal
                key={idx}
                delay={idx * 0.05}
                className="group flex flex-col gap-3 border-t border-border pt-6 pb-8 sm:gap-4 sm:pt-7 sm:pb-10 md:flex-row md:items-start md:gap-6"
              >
                <div
                  className="shrink-0 text-2xl leading-none font-semibold text-muted-foreground/40 transition-colors group-hover:text-primary sm:text-4xl"
                  aria-hidden="true"
                >
                  0{idx + 1}
                </div>
                <div className="min-w-0">
                  <h3
                    className="mb-2 text-base font-semibold text-foreground sm:text-lg [&_strong]:font-semibold [&_strong]:text-foreground"
                    dangerouslySetInnerHTML={{ __html: cleanTitle }}
                  />
                  <p
                    className="text-xs leading-relaxed text-muted-foreground sm:text-sm [&_em]:font-normal [&_em]:text-muted-foreground [&_em]:not-italic [&_strong]:font-normal [&_strong]:text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: point.desc }}
                  />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
