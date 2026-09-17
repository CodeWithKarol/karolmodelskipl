import { ShieldCheck, Shield, FileCode, Headphones } from "lucide-react"
import { content } from "@/lib/content"
import { SectionHeader } from "@/components/section-header"
import { Reveal } from "@/components/reveal"
import type { GuaranteeContent } from "@/lib/content/types"

interface GuaranteeSectionProps {
  guarantee?: GuaranteeContent
}

const icons = [ShieldCheck, Shield, FileCode, Headphones]

export function GuaranteeSection({
  guarantee: customGuarantee,
}: GuaranteeSectionProps = {}) {
  const { guarantee: defaultGuarantee } = content
  const guarantee: GuaranteeContent = customGuarantee || defaultGuarantee

  return (
    <section
      id="gwarancje"
      className="relative overflow-hidden border-t border-border bg-background py-12 text-muted-foreground sm:py-20 md:py-32"
    >
      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        {/* Header - Mobile First */}
        <SectionHeader
          revealClassName="mb-8 sm:mb-16"
          badgeWrapperClassName="mb-3 sm:mb-4"
          badge={
            <>
              <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{guarantee.badge}</span>
            </>
          }
          title={guarantee.title}
          titleClassName="mb-3 max-w-3xl text-2xl leading-snug font-semibold tracking-tight text-foreground sm:mb-6 sm:text-3xl sm:leading-tight md:text-4xl lg:mx-auto"
          description={guarantee.subtitle}
          descriptionClassName="max-w-2xl text-xs leading-relaxed font-normal text-muted-foreground sm:text-base md:text-lg lg:mx-auto"
        />

        {/* Lista - Mobile: kolumna (icon nad treścią), Desktop: icon obok treści */}
        <div className="max-w-3xl lg:mx-auto">
          {guarantee.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex flex-col gap-2.5 border-t border-border py-6 sm:flex-row sm:items-start sm:gap-5 sm:py-8">
                  <Icon className="h-5 w-5 shrink-0 text-primary sm:mt-1" />
                  <div className="min-w-0">
                    <h3 className="text-base leading-snug font-semibold text-foreground sm:text-xl">
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="mt-2 max-w-prose text-sm leading-relaxed whitespace-pre-line text-muted-foreground sm:text-[15px]">
                        {item.desc}
                      </p>
                    )}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="mt-3 space-y-2.5">
                        {item.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.note && (
                      <p className="mt-3 text-sm font-medium text-foreground sm:text-[15px]">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
