import type { ReactNode } from "react"
import { Reveal } from "@/components/reveal"
import { SectionBadge } from "@/components/section-badge"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: ReactNode
  title: ReactNode
  description?: ReactNode
  descriptionHtml?: string
  revealClassName?: string
  badgeWrapperClassName?: string
  badgeClassName?: string
  badgeVariant?: "blue" | "neutral"
  titleClassName?: string
  descriptionClassName?: string
}

const DEFAULT_TITLE =
  "mx-auto mb-6 max-w-3xl text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl"

const DEFAULT_DESCRIPTION =
  "mx-auto max-w-2xl text-base leading-relaxed font-normal text-muted-foreground sm:text-lg"

export function SectionHeader({
  badge,
  title,
  description,
  descriptionHtml,
  revealClassName = "mb-12 sm:mb-16",
  badgeWrapperClassName = "mb-4",
  badgeClassName,
  badgeVariant,
  titleClassName = DEFAULT_TITLE,
  descriptionClassName = DEFAULT_DESCRIPTION,
}: SectionHeaderProps) {
  return (
    <Reveal as="header" className={cn("text-center", revealClassName)}>
      {badge && (
        <div className={badgeWrapperClassName}>
          <SectionBadge variant={badgeVariant} className={badgeClassName}>
            {badge}
          </SectionBadge>
        </div>
      )}
      <h2 className={titleClassName}>{title}</h2>
      {descriptionHtml !== undefined ? (
        <p
          className={descriptionClassName}
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      ) : (
        description && <p className={descriptionClassName}>{description}</p>
      )}
    </Reveal>
  )
}
