import { BlogPostCard } from "@/components/blog-post-card"
import type { BlogPost } from "@/lib/blog"
import { cn } from "@/lib/utils"

interface BlogPostGridProps {
  posts: BlogPost[]
  showBadge?: boolean
  className?: string
}

export function BlogPostGrid({ posts, showBadge = false, className }: BlogPostGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {posts.map((post, i) => (
        <BlogPostCard
          key={post.slug}
          post={post}
          index={i}
          showBadge={showBadge}
        />
      ))}
    </div>
  )
}
