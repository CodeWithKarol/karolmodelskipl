"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface TocHeading {
  level: number
  text: string
  id: string
}

export function ArticleToc({ headings }: { headings: TocHeading[] }) {
  const [active, setActive] = React.useState(headings[0]?.id ?? "")

  React.useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [headings])

  return (
    <nav>
      <ul className="space-y-0.5">
        {headings.map((heading) => {
          const isActive = active === heading.id
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "block border-l-2 py-1 text-[13px] leading-snug transition-colors",
                  heading.level === 2 ? "pl-3" : "pl-6",
                  isActive
                    ? "border-primary font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                )}
              >
                {heading.text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
