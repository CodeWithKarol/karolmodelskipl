import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { BlogPostSummary } from "@/lib/blog"

export function RelatedPosts({
  posts,
  className,
}: {
  posts: BlogPostSummary[]
  className?: string
}) {
  return (
    <ul
      className={cn("divide-y divide-border border-y border-border", className)}
    >
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="group flex items-start justify-between gap-4 py-4"
          >
            <span className="text-sm leading-snug font-medium text-foreground transition-colors group-hover:text-primary sm:text-base">
              {post.title}
            </span>
            <span className="mt-0.5 flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
              {post.readingTime}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
