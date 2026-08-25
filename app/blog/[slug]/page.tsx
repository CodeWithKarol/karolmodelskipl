import { notFound } from "next/navigation"
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog"
import Link from "next/link"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import {
  ArrowLeft,
  Clock,
  List,
  ChevronDown,
} from "lucide-react"
import { ReadingProgress } from "@/components/reading-progress"
import { BlogPostGrid } from "@/components/blog-post-grid"
import { CtaSection } from "@/components/cta-section"
import { extractHeadings, slugify, extractTextContent } from "@/lib/utils/heading"
import { ctaCalloutPlugin } from "@/lib/utils/mdx-cta"
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react"

const headingTags = { 2: "h2", 3: "h3" } as const

function getTableHeaderLabels(children: ReactNode): string[] {
  const nodes = Children.toArray(children)
  const thead = nodes.find(
    (node) => isValidElement(node) && node.type === "thead"
  )
  if (!isValidElement(thead)) return []
  const rows = Children.toArray(
    (thead.props as { children?: ReactNode }).children
  )
  const firstRow = rows.find((row) => isValidElement(row))
  if (!isValidElement(firstRow)) return []
  return Children.toArray(
    (firstRow.props as { children?: ReactNode }).children
  )
    .filter((cell): cell is ReactElement => isValidElement(cell))
    .map((cell) =>
      extractTextContent((cell.props as { children?: ReactNode }).children)
    )
}

function ResponsiveTable({ children }: { children: ReactNode }) {
  const labels = getTableHeaderLabels(children)

  if (labels.length === 0) {
    return (
      <div className="my-6 overflow-x-auto rounded-xl border border-slate-800">
        <table>{children}</table>
      </div>
    )
  }

  if (labels.length === 1) {
    return (
      <div className="table-mobile-cards table-mobile-cards--single">
        <table>{children}</table>
      </div>
    )
  }

  const nodes = Children.toArray(children)
  const tbodyIndex = nodes.findIndex(
    (node) => isValidElement(node) && node.type === "tbody"
  )
  const tbody = tbodyIndex >= 0 ? (nodes[tbodyIndex] as ReactElement) : null

  const newChildren = nodes.map((node, index) => {
    if (index !== tbodyIndex || !tbody) return node
    const rows = Children.toArray(
      (tbody.props as { children?: ReactNode }).children
    )
    const newRows = rows.map((row) => {
      if (!isValidElement(row)) return row
      const cells = Children.toArray(
        (row.props as { children?: ReactNode }).children
      )
      const newCells = cells.map((cell, i) => {
        if (!isValidElement(cell) || i === 0) return cell
        return cloneElement(cell as ReactElement<{ children?: ReactNode }>, {
          children: (
            <>
              <span className="table-card-label">{labels[i] ?? ""}</span>
              {(cell.props as { children?: ReactNode }).children}
            </>
          ),
        })
      })
      return cloneElement(row as ReactElement<{ children?: ReactNode }>, {
        children: newCells,
      })
    })
    return cloneElement(tbody as ReactElement<{ children?: ReactNode }>, {
      children: newRows,
    })
  })

  return (
    <div className="table-mobile-cards">
      <table>{newChildren}</table>
    </div>
  )
}

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
    <details className="group mb-6 lg:hidden">
      <summary className="flex cursor-pointer items-center gap-2 py-2 text-[11px] font-semibold uppercase tracking-widest text-slate-500 transition-colors hover:text-slate-300 select-none">
        <List className="h-3.5 w-3.5 shrink-0 text-blue-400" />
        <span className="flex-1">Spis treści</span>
        <span className="text-slate-600 font-normal normal-case">
          {headings.length} {headings.length === 1 ? "sekcja" : "sekcji"}
        </span>
        <ChevronDown className="h-3.5 w-3.5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
      </summary>
      <nav className="border-t border-slate-800/60 py-2">
        <ul className="space-y-0.5">
          {headings.map((h, i) => (
            <li key={i}>
              <a
                href={`#${h.id}`}
                className="block py-1.5 text-[13px] leading-snug text-slate-500 transition-colors hover:text-blue-400"
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

  const headings = extractHeadings(post.content).filter(
    (h) => h.level === 2 || h.level === 3
  )
  const allPosts = getAllPosts()
  const relatedPosts =
    post.related.length > 0
      ? post.related
          .map((slug) => allPosts.find((p) => p.slug === slug))
          .filter((p): p is NonNullable<typeof p> => p !== undefined)
          .slice(0, 3)
      : allPosts
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

        <div className="mx-auto w-full max-w-6xl flex-1 px-4 pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-32">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <h2 className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-slate-600">
                    <List className="h-3.5 w-3.5 text-blue-400" />
                    Spis treści
                  </h2>
                  <nav>
                    <ul className="space-y-1.5">
                      {headings.map((h, i) => (
                        <li key={i}>
                          <a
                            href={`#${h.id}`}
                            className="block text-[13px] leading-snug text-slate-500 transition-colors hover:text-blue-400"
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

                  <div className="mt-6 flex items-center gap-2 text-[11px] text-slate-600">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime} czytania</span>
                  </div>
                </div>
              </aside>
            )}

            <div className="min-w-0">
              <Link
                href="/blog"
                className="group mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-white sm:mb-6"
              >
                <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" />
                <span className="leading-snug">Powrót do Bazy Wiedzy</span>
              </Link>

              <article>
                <div>
                  <header className="mb-6 border-b border-slate-800/60 pb-5 sm:mb-8 sm:pb-8">
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 sm:mb-5 sm:text-sm">
                      <span className="font-semibold uppercase tracking-wider text-blue-400">
                        {post.silo}
                      </span>
                      <span className="h-0.5 w-0.5 rounded-full bg-slate-700"></span>
                      <span>{post.readingTime} czytania</span>
                      <span className="h-0.5 w-0.5 rounded-full bg-slate-700"></span>
                      <span>{post.date}</span>
                    </div>
                    <h1 className="text-xl leading-snug font-bold tracking-tight text-balance text-white sm:text-2xl lg:text-3xl xl:text-4xl">
                      {post.title}
                    </h1>
                  </header>

                  {headings.length > 0 && <TableOfContents headings={headings} />}

                  <div className="prose prose-sm max-w-none prose-invert md:prose-base prose-headings:font-bold prose-headings:text-slate-100 prose-headings:scroll-mt-24 prose-p:leading-[1.7] prose-p:text-slate-300 prose-p:my-3 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-blockquote:rounded-r-lg prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-900/80 prose-blockquote:px-4 prose-blockquote:py-2.5 prose-blockquote:font-normal prose-blockquote:text-slate-300 sm:prose-blockquote:px-6 prose-strong:font-bold prose-strong:text-white prose-li:text-slate-300 prose-li:my-1 prose-hr:border-slate-800 prose-img:rounded-xl prose-img:border prose-img:border-slate-800">
                    <MDXRemote
                      source={post.content}
                      options={{
                        mdxOptions: {
                          remarkPlugins: [remarkGfm],
                          rehypePlugins: [ctaCalloutPlugin],
                        },
                      }}
                      components={{
                        img: (props) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            {...props}
                            alt={props.alt || "Ilustracja w artykule blogowym"}
                            className="rounded-xl border border-slate-800 my-6 max-w-full h-auto"
                          />
                        ),
                        table: (props) => (
                          <ResponsiveTable>{props.children}</ResponsiveTable>
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
                  <h2 className="mb-5 text-base font-bold text-white sm:mb-6 sm:text-lg">
                    Powiązane artykuły
                  </h2>
                  <BlogPostGrid posts={relatedPosts} />
                </section>
              )}
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
    </>
  )
}
