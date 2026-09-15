import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { siloLabel } from "@/lib/blog-silos"
import { CtaSection } from "@/components/cta-section"
import { OfferSection } from "@/components/offer-section"
import { Lightbulb, ShieldCheck, TrendingUp, BookOpen } from "lucide-react"
import { SectionBadge } from "@/components/section-badge"
import {
  FeaturedPosts,
  type FeaturedPostItem,
} from "@/components/featured-posts"
import { BlogArticles } from "@/components/blog-articles"
import { content } from "@/lib/content"

export async function generateMetadata(): Promise<Metadata> {
  const { blog } = content
  return {
    title: blog.metadata.title,
    description: blog.metadata.description,
    alternates: {
      canonical: "https://www.karolmodelski.pl/blog",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.karolmodelski.pl/blog#webpage",
        url: "https://www.karolmodelski.pl/blog",
        name: blog.metadata.title,
        description: blog.metadata.description,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.karolmodelski.pl/#website",
          url: "https://www.karolmodelski.pl/",
          name: "Karol Modelski - Aplikacje Internetowe dla Firm | Warszawa",
        },
        publisher: {
          "@id": "https://www.karolmodelski.pl/#organization",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.karolmodelski.pl/#organization",
        name: "Karol Modelski - Aplikacje Internetowe dla Firm | Warszawa",
        url: "https://www.karolmodelski.pl/",
        telephone: "+48664598563",
        priceRange: "$$",
        areaServed: "PL",
        sameAs: "https://g.page/r/CZSVfAGtTiIzEBM",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Warszawa",
          addressCountry: "PL",
        },
        founder: {
          "@type": "Person",
          "@id": "https://www.karolmodelski.pl/#person",
          name: "Karol Modelski",
          jobTitle: "Niezależny Partner Technologiczny",
          sameAs: "https://www.linkedin.com/in/karol-modelski/",
        },
      },
    ],
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"></div>
      <div className="pointer-events-none fixed top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 opacity-60 mix-blend-screen blur-[120px] lg:h-[800px] lg:w-[800px]"></div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-25"></div>

      <section className="relative flex w-full flex-col bg-background pt-24 pb-10 text-foreground sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-20">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"></div>
        <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 opacity-50 mix-blend-screen blur-[120px]"></div>

        <div className="relative z-10 container mx-auto flex-1 px-4 text-left sm:text-center">
          <div className="mb-4 flex justify-start sm:mb-6 sm:justify-center">
            <SectionBadge>
              <BookOpen className="h-3.5 w-3.5 shrink-0" />
              {blog.header.badge}
            </SectionBadge>
          </div>
          <h1 className="mb-5 max-w-4xl text-3xl leading-[1.1] font-semibold tracking-tighter text-balance text-foreground sm:mx-auto sm:mb-6 sm:text-4xl lg:text-6xl">
            {blog.header.title}
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:mx-auto sm:mb-10 sm:text-lg">
            {blog.header.description}
          </p>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2">
            {blog.header.indicators.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="shrink-0 text-base text-primary">
                  {i === 0 ? (
                    <Lightbulb className="h-4 w-4" />
                  ) : i === 1 ? (
                    <ShieldCheck className="h-4 w-4" />
                  ) : (
                    <TrendingUp className="h-4 w-4" />
                  )}
                </span>
                <span className="text-sm font-medium sm:text-sm">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 py-12 sm:py-24">
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
          <div className="mb-8 text-center sm:mb-12">
            <div className="mb-3 sm:mb-4">
              <SectionBadge>
                <span>{blog.featured.badge}</span>
              </SectionBadge>
            </div>
            <h2 className="mb-2.5 text-xl leading-snug font-semibold tracking-tight text-foreground sm:mb-4 sm:text-3xl md:text-4xl">
              {blog.featured.title}
            </h2>
            <p className="mx-auto max-w-2xl text-xs leading-relaxed font-normal text-muted-foreground sm:text-base">
              {blog.featured.subtitle}
            </p>
          </div>

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
              href="https://www.karolmodelski.pl/#kontakt"
              className="mt-4 flex h-auto min-h-[3rem] w-full items-center justify-center rounded-lg px-4 py-3 text-center text-sm leading-tight font-semibold text-balance transition-colors"
            >
              {blog.offer.cta}
            </Link>
          </div>
        </aside>
      </main>

      <CtaSection content={blog.cta} />
    </div>
  )
}
