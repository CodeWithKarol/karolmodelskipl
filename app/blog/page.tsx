import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { CtaSection } from "@/components/cta-section"
import { OfferSection } from "@/components/offer-section"
import { FileText, Lightbulb, ShieldCheck, TrendingUp, BookOpen } from "lucide-react"
import { SectionBadge } from "@/components/section-badge"
import { FeaturedPosts, type FeaturedPostItem } from "@/components/featured-posts"
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

  const silo1 = posts.filter((p) => p.silo === "Fundamenty & Strategia")
  const silo2 = posts.filter((p) => p.silo === "Technologia w Praktyce")
  const silo3 = posts.filter((p) => p.silo === "Case Studies")

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
    <div className="flex min-h-[100dvh] flex-col bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
      <div className="pointer-events-none fixed top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 opacity-60 mix-blend-screen blur-[120px] lg:h-[800px] lg:w-[800px]"></div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-25"></div>

      <section className="relative w-full flex flex-col bg-slate-950 text-slate-50 pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-20">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
        <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>

        <div className="relative z-10 flex-1 container mx-auto px-4 text-left sm:text-center">
          <div className="mb-4 sm:mb-6 flex justify-start sm:justify-center">
            <SectionBadge><BookOpen className="h-3.5 w-3.5 shrink-0" />{blog.header.badge}</SectionBadge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter text-white mb-5 sm:mb-6 leading-[1.1] max-w-4xl sm:mx-auto text-balance">
            {blog.header.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 mb-8 sm:mb-10 leading-relaxed max-w-2xl sm:mx-auto text-pretty">
            {blog.header.description}
          </p>

          <div className="flex flex-col items-start gap-3 sm:items-center sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 sm:justify-center">
            {blog.header.indicators.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <span className="text-blue-400 shrink-0 text-base">
                  {i === 0 ? <Lightbulb className="h-4 w-4" /> : i === 1 ? <ShieldCheck className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}
                </span>
                <span className="text-sm sm:text-sm font-medium">{item.title}</span>
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
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mb-3 sm:mb-4">
            <SectionBadge>
              <span>{blog.featured.badge}</span>
            </SectionBadge>
          </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2.5 sm:mb-4 leading-snug">
              {blog.featured.title}
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base">
              {blog.featured.subtitle}
            </p>
          </div>

          <FeaturedPosts posts={featuredItems} />
        </div>
        <section
          className="flex flex-1 flex-col gap-16"
          aria-label="Lista artykułów"
        >
          {[
            { title: "Fundamenty & Strategia", posts: silo1 },
            { title: "Technologia w Praktyce", posts: silo2 },
            { title: "Case Studies", posts: silo3 },
          ].map(
            (silo, idx) =>
              silo.posts.length > 0 && (
                <div key={idx}>
                  <div className="mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                      <FileText className="h-5 w-5 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                      {silo.title}
                    </h2>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {silo.posts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block"
                      >
                        <article className="relative h-full overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-slate-900 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]">
                          <div className="absolute top-0 left-0 h-1 w-full bg-slate-800 transition-colors group-hover:bg-blue-500"></div>
                          <h3 className="text-lg leading-tight font-bold text-slate-100 transition-colors group-hover:text-blue-400">
                            {post.title}
                          </h3>
                          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                            {post.excerpt}
                          </p>
                          <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] font-medium text-slate-400">
                            <span>{post.readingTime} czytania</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              )
          )}
        </section>

        <aside className="hidden">
          <div className="rounded-xl border border-slate-800/50 bg-slate-950/80 p-6 sm:p-8">
            <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
              {blog.offer.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed font-light text-slate-400">
              {blog.offer.description}
            </p>
            <Link
              href="https://www.karolmodelski.pl/#kontakt"
              className="mt-4 flex h-auto min-h-[3rem] w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-center text-sm leading-tight font-bold text-balance text-white transition-colors hover:bg-blue-500"
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
