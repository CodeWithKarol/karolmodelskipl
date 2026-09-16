import { Metadata } from "next"
import Link from "next/link"
import { Lightbulb, ShieldCheck, TrendingUp } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { siloLabel } from "@/lib/blog-silos"
import { BlogHero } from "@/components/blog-hero"
import { BlogPageLayout } from "@/components/blog-page-layout"
import { SectionHeader } from "@/components/section-header"
import { OfferSection } from "@/components/offer-section"
import {
  FeaturedPosts,
  type FeaturedPostItem,
} from "@/components/featured-posts"
import { BlogArticles } from "@/components/blog-articles"
import { content } from "@/lib/content"
import { siteConfig } from "@/lib/site-config"
import { buildCollectionPageJsonLd } from "@/lib/seo/json-ld"

const HERO_ICONS = [Lightbulb, ShieldCheck, TrendingUp]

export async function generateMetadata(): Promise<Metadata> {
  const { blog } = content
  return {
    title: blog.metadata.title,
    description: blog.metadata.description,
    alternates: {
      canonical: `${siteConfig.url}/blog`,
    },
  }
}

export default function BlogHubPage() {
  const posts = getAllPosts()
  const { blog } = content

  const postsBySlug = new Map(posts.map((post) => [post.slug, post]))
  const featuredItems: FeaturedPostItem[] = blog.featured.items.map((art) => {
    const post = postsBySlug.get(art.slug)
    return {
      slug: art.slug,
      title: art.title,
      desc: art.desc,
      cta: art.cta,
      readingTime: post?.readingTime,
      date: post?.date,
    }
  })

  const featuredShown = featuredItems.slice(0, 3)
  const featuredSlugs = new Set(featuredShown.map((item) => item.slug))
  const remainingPosts = posts.filter((post) => !featuredSlugs.has(post.slug))

  const jsonLd = buildCollectionPageJsonLd({
    path: "/blog",
    name: blog.metadata.title,
    description: blog.metadata.description,
  })

  const indicators = blog.header.indicators.map((item, i) => ({
    icon: HERO_ICONS[i % HERO_ICONS.length],
    label: item.title,
  }))

  return (
    <BlogPageLayout
      jsonLd={jsonLd}
      cta={blog.cta}
      hero={
        <BlogHero
          badge={blog.header.badge}
          title={blog.header.title}
          description={blog.header.description}
          indicators={indicators}
        />
      }
    >
      <OfferSection
        badge={blog.categories.badge}
        offer={{
          title: blog.categories.title,
          subheading: blog.categories.subtitle,
          paths: blog.categories.items.map((cat, i) => ({
            title: `Kategoria 0${i + 1}`,
            situation: cat.title,
            desc: cat.desc,
            link: cat.cta,
            href: cat.href,
          })),
        }}
        className="mb-12 sm:mb-20"
      />

      <div className="mb-12 sm:mb-20">
        <SectionHeader
          badge={blog.featured.badge}
          title={blog.featured.title}
          description={blog.featured.subtitle}
        />

        <FeaturedPosts
          posts={featuredShown}
          className={remainingPosts.length > 0 ? "mb-10 sm:mb-16" : "mb-20"}
        />
      </div>

      {remainingPosts.length > 0 && (
        <section aria-label="Lista artykułów" className="mb-20">
          <BlogArticles
            posts={remainingPosts.map((post) => ({
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt,
              date: post.date,
              silo: siloLabel(post.silo),
              readingTime: post.readingTime,
            }))}
          />
        </section>
      )}

      <aside className="hidden">
        <div className="rounded-xl border border-border/50 bg-background/80 p-6 sm:p-8">
          <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
            {blog.offer.title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed font-normal text-muted-foreground">
            {blog.offer.description}
          </p>
          <Link
            href={`${siteConfig.url}/#kontakt`}
            className="mt-4 flex h-auto min-h-[3rem] w-full items-center justify-center rounded-lg px-4 py-3 text-center text-sm leading-tight font-semibold text-balance transition-colors"
          >
            {blog.offer.cta}
          </Link>
        </div>
      </aside>
    </BlogPageLayout>
  )
}
