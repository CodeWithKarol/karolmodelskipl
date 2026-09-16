import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface FeaturedPostItem {
  slug: string
  title: string
  desc: string
  cta?: string
  readingTime?: string
  date?: string
}

interface FeaturedPostsProps {
  posts: FeaturedPostItem[]
  className?: string
}

const BADGE = "Najczęściej czytany"

function formatDate(d?: string) {
  if (!d) return ""
  return new Date(d).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function metaOf(item: FeaturedPostItem) {
  return [item.readingTime, item.date && formatDate(item.date)]
    .filter(Boolean)
    .join(" • ")
}

export function FeaturedPosts({ posts, className }: FeaturedPostsProps) {
  const hero = posts[0]
  if (!hero) return null

  return (
    <div className={cn("grid gap-4 sm:gap-6 lg:grid-cols-5", className)}>
      <Link href={`/blog/${hero.slug}`} className="group block lg:col-span-3">
        <article className="relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden rounded-3xl bg-muted/40 p-5 ring-1 ring-border transition-all duration-300 group-hover:shadow-[0_0_60px_-25px_color-mix(in_srgb,var(--glow-accent)_45%,transparent)] hover:ring-primary/30 sm:min-h-[320px] sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--glow)_20%,transparent),transparent_60%)]"></div>
          <div className="pointer-events-none absolute top-4 right-5 text-5xl font-semibold tracking-tighter text-foreground/5 transition-colors select-none group-hover:text-primary/10 sm:top-6 sm:right-8 sm:text-8xl">
            01
          </div>
          <div className="relative z-10">
            <span className="text-[10px] font-medium text-primary sm:text-xs">
              {BADGE}
            </span>
            <h3 className="mt-3 text-xl leading-snug font-semibold text-balance break-words text-foreground transition-colors group-hover:text-primary sm:text-2xl lg:text-3xl">
              {hero.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-pretty break-words text-muted-foreground sm:text-base">
              {hero.desc}
            </p>
            {metaOf(hero) && (
              <div className="mt-5 text-xs text-muted-foreground sm:text-sm">
                {metaOf(hero)}
              </div>
            )}
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary sm:text-base">
              <span>{hero.cta ?? "Przeczytaj artykuł"}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </article>
      </Link>

      {posts.length > 1 && (
        <div className="flex flex-col divide-y divide-border lg:col-span-2">
          {posts.slice(1).map((item, i) => {
            const num = String(i + 2).padStart(2, "0")
            const meta = metaOf(item)
            return (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group block flex-1"
              >
                <article className="flex h-full flex-col justify-center py-5 sm:py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-3xl font-semibold tracking-tighter text-foreground/5 transition-colors group-hover:text-primary/15 sm:text-4xl">
                      {num}
                    </span>
                    {meta && (
                      <span className="text-[10px] text-muted-foreground sm:text-xs">
                        {meta}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg leading-snug font-semibold break-words text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed break-words text-muted-foreground">
                    {item.desc}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary">
                    <span>{item.cta ?? "Przeczytaj artykuł"}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
