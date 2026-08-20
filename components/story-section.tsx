import { Flame } from "lucide-react"
import { content } from "@/lib/content"
import { SectionBadge } from "@/components/section-badge"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export interface StoryPoint {
  title: string
  desc: string
}

interface StorySectionProps {
  badge?: string
  title?: string
  intro?: string
  context?: string
  points?: StoryPoint[]
  stripPointPrefix?: boolean
  className?: string
}

export function StorySection({
  badge = "Diagnoza problemu",
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
        "relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Header - Mobile First */}
        <Reveal as="header" className="mb-16 text-center">
          <div className="mb-4">
            <SectionBadge variant="red">
            <Flame className="h-4 w-4" />
            <span>{badge}</span>
          </SectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
            {title ?? story.title}
          </h2>
          {(intro ?? story.intro) && (
            <p
              className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg mb-4 [&_em]:text-slate-200 [&_em]:not-italic [&_em]:font-medium"
              dangerouslySetInnerHTML={{ __html: intro ?? story.intro }}
            />
          )}
          {(context ?? story.context) && (
            <p
              className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg [&_em]:italic [&_em]:text-slate-200"
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
                className="group flex items-start gap-5 sm:gap-6 border-t border-slate-800 pt-6 pb-8 sm:pt-7 sm:pb-10"
              >
                <div
                  className="text-red-400 font-black text-3xl sm:text-4xl leading-none shrink-0 group-hover:text-blue-400 transition-colors"
                  aria-hidden="true"
                >
                  0{idx + 1}
                </div>
                <div>
                  <h3
                    className="text-base sm:text-lg font-bold text-white mb-2 [&_strong]:text-white"
                    dangerouslySetInnerHTML={{ __html: cleanTitle }}
                  />
                  <p
                    className="text-slate-400 leading-relaxed text-xs sm:text-sm [&_em]:text-slate-300 [&_em]:not-italic [&_em]:font-medium"
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
