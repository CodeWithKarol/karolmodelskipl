import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import { BlogHero } from "@/components/blog-hero"
import { BlogPageLayout } from "@/components/blog-page-layout"
import { SectionHeader } from "@/components/section-header"
import { FeaturedPosts } from "@/components/featured-posts"
import { BlogPostGrid } from "@/components/blog-post-grid"
import { siteConfig } from "@/lib/site-config"
import { buildCollectionPageJsonLd } from "@/lib/seo/json-ld"
import type { BlogSiloPageConfig } from "@/lib/blog-silo-pages"

export function buildBlogSiloMetadata(config: BlogSiloPageConfig): Metadata {
  return {
    title: config.metadata.title,
    description: config.metadata.description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${config.slug}`,
    },
  }
}

export function BlogCategoryPage({ config }: { config: BlogSiloPageConfig }) {
  const posts = getAllPosts().filter((post) => post.silo === config.silo)
  const jsonLd = buildCollectionPageJsonLd({
    path: `/blog/${config.slug}`,
    name: config.jsonLd.name,
    description: config.jsonLd.description,
  })

  return (
    <BlogPageLayout
      jsonLd={jsonLd}
      cta={config.ctaContent}
      hero={
        <BlogHero
          badge={config.hero.badge}
          title={config.hero.title}
          description={config.hero.description}
          indicators={config.hero.indicators}
          callout={config.hero.callout}
        />
      }
    >
      <SectionHeader title={config.gridTitle} />

      <FeaturedPosts
        posts={posts.slice(0, 3).map((post) => ({
          slug: post.slug,
          title: post.title,
          desc: post.excerpt,
          cta: "Przeczytaj artykuł",
          readingTime: post.readingTime,
          date: post.date,
        }))}
        className={posts.length > 3 ? "mb-10 sm:mb-16" : "mb-20"}
      />
      {posts.length > 3 && (
        <BlogPostGrid posts={posts.slice(3)} className="mb-20" />
      )}
    </BlogPageLayout>
  )
}
