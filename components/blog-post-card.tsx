import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog"
import { cn } from "@/lib/utils"

interface BlogPostCardProps {
  post: BlogPost
  index?: number
  showBadge?: boolean
  className?: string
}

export function BlogPostCard({
  post,
  index,
  showBadge = false,
  className,
}: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("group block", className)}
    >
      <article className="relative flex h-full flex-col justify-between pt-6 sm:pt-7">
        <div className="absolute top-0 left-0 h-px w-full bg-slate-800 transition-colors group-hover:bg-blue-500"></div>

        <div>
          <div className="flex items-baseline justify-between gap-4">
            {typeof index === "number" && (
              <span className="pointer-events-none select-none text-3xl sm:text-4xl font-extrabold tracking-tighter text-white/5 transition-colors group-hover:text-blue-500/15">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <span className="text-[10px] sm:text-xs text-slate-500">
              {post.readingTime} czytania
            </span>
          </div>

          {showBadge && (
            <span className="mt-3 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-blue-400 uppercase sm:text-[10px]">
              {post.silo}
            </span>
          )}

          <h3 className="mt-2.5 text-sm leading-snug font-bold text-white transition-colors group-hover:text-blue-400 sm:text-lg">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-slate-400 sm:text-sm">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-400 transition-colors group-hover:text-blue-300 sm:text-sm">
          <span>Przeczytaj artykuł</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  )
}
