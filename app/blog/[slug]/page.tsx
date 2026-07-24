import { notFound } from "next/navigation"
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog"
import Link from "next/link"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import {
  ArrowLeft,
  Clock,
  CalendarDays,
  List,
  ChevronDown,
} from "lucide-react"
import { ReadingProgress } from "@/components/reading-progress"
import { SectionBadge } from "@/components/section-badge"
import { extractHeadings, slugify, extractTextContent } from "@/lib/utils/heading"
import type { ReactNode } from "react"

const headingTags = { 2: "h2", 3: "h3" } as const

function HeadingAnchor({
  level,
  id,
  children,
}: {
  level: 2 | 3
  id: string
  children: ReactNode
}) {
  const Tag = headingTags[level]
  return (
    <Tag id={id} className="group relative scroll-mt-24">
      {children}
      <a
        href={`#${id}`}
        className="absolute -left-4 top-1/2 -translate-y-1/2 text-blue-400 opacity-0 group-hover:opacity-100 no-underline !text-sm font-normal transition-opacity hover:!text-blue-300 hidden sm:block"
        aria-label={`Link do sekcji: ${extractTextContent(children)}`}
      >
        #
      </a>
    </Tag>
  )
}

function TableOfContents({
  headings,
}: {
  headings: { level: number; text: string; id: string }[]
}) {
  return (
    <details className="group mb-8 rounded-lg border border-slate-800 bg-slate-900/80 lg:hidden">
      <summary className="flex cursor-pointer items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-slate-300 select-none">
        <List className="h-3.5 w-3.5 shrink-0 text-blue-400" />
        <span className="flex-1">Spis treści</span>
        <span className="text-slate-600 font-normal normal-case">
          {headings.length} {headings.length === 1 ? "sekcja" : "sekcji"}
        </span>
        <ChevronDown className="h-3.5 w-3.5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
      </summary>
      <nav className="border-t border-slate-800 px-4 py-3">
        <ul className="space-y-1">
          {headings.map((h, i) => (
            <li key={i}>
              <a
                href={`#${h.id}`}
                className="block py-2 text-sm leading-snug text-slate-400 transition-colors hover:text-blue-400"
                style={{ paddingLeft: `${(h.level - 2) * 14}px` }}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  )
}

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.karolmodelski.pl/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const headings = extractHeadings(post.content)
  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.silo === post.silo)
    .slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `https://www.karolmodelski.pl/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { "@id": "https://www.karolmodelski.pl/#person" },
        publisher: { "@id": "https://www.karolmodelski.pl/#organization" },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.karolmodelski.pl/blog/${post.slug}#webpage`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `https://www.karolmodelski.pl/blog/${post.slug}#webpage`,
        url: `https://www.karolmodelski.pl/blog/${post.slug}`,
        name: `${post.title} | Blog Karol Modelski`,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.karolmodelski.pl/#website",
          url: "https://www.karolmodelski.pl/",
          name: "Karol Modelski - Aplikacje Internetowe dla Firm | Warszawa",
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
      {
        "@type": "Person",
        "@id": "https://www.karolmodelski.pl/#person",
        name: "Karol Modelski",
        jobTitle: "Niezależny Partner Technologiczny",
        sameAs: "https://www.linkedin.com/in/karol-modelski/",
      },
    ],
  }

  return (
    <>
      <ReadingProgress />
      <div className="flex min-h-[100dvh] flex-col bg-slate-950 text-slate-50 selection:bg-blue-500/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
        <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-30 mix-blend-screen blur-[100px] sm:opacity-50 sm:h-[400px] sm:w-[800px] sm:blur-[120px]"></div>

        <div className="mx-auto w-full max-w-6xl flex-1 px-4 pt-20 pb-16 sm:pb-24">
          <Link
            href="/blog"
            className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white sm:mb-10"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" />
            <span className="leading-snug">Powrót do Bazy Wiedzy</span>
          </Link>

          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <h2 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <List className="h-3.5 w-3.5 text-blue-400" />
                    Spis treści
                  </h2>
                  <nav className="border-l border-slate-800">
                    <ul className="space-y-2">
                      {headings.map((h, i) => (
                        <li key={i}>
                          <a
                            href={`#${h.id}`}
                            className="block text-sm leading-snug text-slate-400 transition-colors hover:text-blue-400"
                            style={{
                              paddingLeft: `${(h.level - 2) * 14 + 12}px`,
                            }}
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="mt-6 flex items-center gap-2 text-xs text-slate-600">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime} czytania</span>
                  </div>
                </div>
              </aside>
            )}

            <div className="min-w-0">
              <article className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/50 shadow-lg backdrop-blur-xl sm:shadow-2xl sm:rounded-2xl">
                <div className="p-4 sm:p-8 lg:p-12">
                  <header className="mb-6 border-b border-slate-800 pb-6 sm:mb-10 sm:pb-10">
                    <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-3">
                      <SectionBadge variant="blue" rounded="md">
                        {post.silo}
                      </SectionBadge>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
                        <span className="h-1 w-1 rounded-full bg-slate-700"></span>{" "}
                        {post.readingTime} czytania
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
                        <span className="h-1 w-1 rounded-full bg-slate-700"></span>{" "}
                        {post.date}
                      </span>
                    </div>
                    <h1 className="text-xl leading-[1.25] font-extrabold tracking-tight text-balance text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                      {post.title}
                    </h1>
                  </header>

                  {headings.length > 0 && <TableOfContents headings={headings} />}

                  <div className="prose prose-sm max-w-none prose-invert md:prose-base lg:prose-lg prose-headings:font-bold prose-headings:text-slate-100 prose-headings:scroll-mt-24 prose-p:leading-[1.7] prose-p:text-slate-300 prose-p:my-4 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-blockquote:rounded-r-lg prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-900/80 prose-blockquote:px-4 prose-blockquote:py-3 prose-blockquote:font-normal prose-blockquote:text-slate-300 sm:prose-blockquote:px-6 prose-strong:font-bold prose-strong:text-white prose-li:text-slate-300 prose-li:my-2 prose-hr:border-slate-800 prose-img:rounded-xl prose-img:border prose-img:border-slate-800">
                    <MDXRemote
                      source={post.content}
                      components={{
                        img: (props) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            {...props}
                            alt={props.alt || "Ilustracja w artykule blogowym"}
                            className="rounded-xl border border-slate-800 my-8 max-w-full h-auto"
                          />
                        ),
                        h2: (props) => (
                          <HeadingAnchor
                            level={2}
                            id={slugify(extractTextContent(props.children))}
                          >
                            {props.children}
                          </HeadingAnchor>
                        ),
                        h3: (props) => (
                          <HeadingAnchor
                            level={3}
                            id={slugify(extractTextContent(props.children))}
                          >
                            {props.children}
                          </HeadingAnchor>
                        ),
                      }}
                    />
                  </div>
                </div>
              </article>

              {relatedPosts.length > 0 && (
                <section className="mt-10 sm:mt-12">
                  <h2 className="mb-4 text-base font-bold text-white sm:text-xl sm:mb-6">
                    Powiązane artykuły
                  </h2>
                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="group block"
                      >
                        <article className="h-full rounded-xl border border-slate-800/60 bg-slate-900/50 p-4 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-slate-900/70 sm:p-5">
                          <SectionBadge variant="blue" rounded="md" className="mb-2 inline-block">
                            {p.silo}
                          </SectionBadge>
                          <h3 className="text-sm font-bold leading-snug text-slate-100 transition-colors group-hover:text-blue-400">
                            {p.title}
                          </h3>
                          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400">
                            {p.excerpt}
                          </p>
                          <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                            <Clock className="h-3 w-3 shrink-0" />
                            <span>{p.readingTime} czytania</span>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              <section className="mt-10 overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-slate-900/50 p-5 text-center sm:mt-12 sm:rounded-2xl sm:p-10">
                <h2 className="text-balance text-base font-bold text-white sm:text-xl">
                  Umów bezpłatną konsultację
                </h2>
                <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-300 sm:mt-3">
                  Opowiedz o swoim pomyśle — podpowiem Ci, jak go zrealizować i
                  oszacuję koszty. Bez zobowiązań, bez presji.
                </p>
                <a
                  href="https://calendly.com/kontakt-karolmodelski/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-700 active:scale-[0.98] sm:mt-6 sm:px-6"
                >
                  <CalendarDays className="h-4 w-4 shrink-0" />
                  ZAREZERWUJ SPOTKANIE
                </a>
                <p className="mt-3 text-xs text-slate-500">
                  30 minut online · Bez zobowiązań · Odpowiem na Twoje pytania
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
