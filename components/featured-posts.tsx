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
  badge?: string
  className?: string
}

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

export function FeaturedPosts({
  posts,
  badge = "Najczęściej czytany",
  className,
}: FeaturedPostsProps) {
  const hero = posts[0]
  if (!hero) return null

  return (
    <div className={cn("grid gap-4 sm:gap-6 lg:grid-cols-5", className)}>
      <Link href={`/blog/${hero.slug}`} className="group block lg:col-span-3">
        <article className="relative flex h-full min-h-[240px] sm:min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl bg-slate-900/40 p-5 sm:p-8 ring-1 ring-white/5 transition-all duration-300 hover:ring-blue-500/30 group-hover:shadow-[0_0_60px_-25px_rgba(59,130,246,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.2),transparent_60%)]"></div>
          <div className="pointer-events-none absolute top-4 right-5 sm:top-6 sm:right-8 select-none text-5xl sm:text-8xl font-extrabold tracking-tighter text-white/5 transition-colors group-hover:text-blue-500/10">
            01
          </div>
          <div className="relative z-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">
              {badge}
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug group-hover:text-blue-400 transition-colors text-balance break-words">
              {hero.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed text-pretty break-words">
              {hero.desc}
            </p>
            {metaOf(hero) && (
              <div className="mt-5 text-xs sm:text-sm text-slate-500">{metaOf(hero)}</div>
            )}
            <div className="mt-6 inline-flex items-center gap-2 text-sm sm:text-base font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
              <span>{hero.cta ?? "Przeczytaj artykuł"}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </article>
      </Link>

      {posts.length > 1 && (
        <div className="flex flex-col divide-y divide-slate-800 lg:col-span-2">
          {posts.slice(1).map((item, i) => {
            const num = String(i + 2).padStart(2, "0")
            const meta = metaOf(item)
            return (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group block flex-1">
                <article className="flex h-full flex-col justify-center py-5 sm:py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white/5 transition-colors group-hover:text-blue-500/15">
                      {num}
                    </span>
                    {meta && (
                      <span className="text-[10px] sm:text-xs text-slate-500">{meta}</span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-blue-400 transition-colors break-words">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-400 leading-relaxed break-words">
                    {item.desc}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
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
