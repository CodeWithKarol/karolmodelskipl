import { notFound } from "next/navigation"
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog"
import Link from "next/link"
import type { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { ArrowLeft, Clock, List } from "lucide-react"
import { ReadingProgress } from "@/components/reading-progress"
import { BlogPostGrid } from "@/components/blog-post-grid"
import { CtaSection } from "@/components/cta-section"
import {
  extractHeadings,
  slugify,
  extractTextContent,
} from "@/lib/utils/heading"
import { ctaCalloutPlugin } from "@/lib/utils/mdx-cta"
import { siteConfig } from "@/lib/site-config"
import { buildArticleJsonLd } from "@/lib/seo/json-ld"
import {
  HeadingAnchor,
  ResponsiveTable,
  TableOfContents,
} from "@/components/mdx/mdx-components"

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
      canonical: `${siteConfig.url}/blog/${post.slug}`,
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

  const jsonLd = buildArticleJsonLd({
    slug: post.slug,
    title: post.title,
    description: post.excerpt,
    datePublished: post.date,
  })

  return (
    <>
      <ReadingProgress />
      <div className="flex min-h-[100dvh] flex-col bg-background text-foreground selection:bg-primary/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"></div>
        <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 opacity-30 mix-blend-screen blur-[100px] sm:h-[400px] sm:w-[800px] sm:opacity-50 sm:blur-[120px]"></div>

        <div className="mx-auto w-full max-w-6xl flex-1 px-4 pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-32">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <h2 className="mb-3 flex items-center gap-2 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                    <List className="h-3.5 w-3.5 text-primary" />
                    Spis treści
                  </h2>
                  <nav>
                    <ul className="space-y-1.5">
                      {headings.map((h, i) => (
                        <li key={i}>
                          <a
                            href={`#${h.id}`}
                            className="block text-[13px] leading-snug text-muted-foreground transition-colors hover:text-primary"
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

                  <div className="mt-6 flex items-center gap-2 text-[11px] text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime} czytania</span>
                  </div>
                </div>
              </aside>
            )}

            <div className="min-w-0">
              <Link
                href="/blog"
                className="group mb-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-6"
              >
                <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" />
                <span className="leading-snug">Powrót do Bazy Wiedzy</span>
              </Link>

              <article>
                <div>
                  <header className="mb-6 border-b border-border/60 pb-5 sm:mb-8 sm:pb-8">
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground sm:mb-5 sm:text-sm">
                      <span className="font-semibold tracking-wider text-primary uppercase">
                        {post.silo}
                      </span>
                      <span className="h-0.5 w-0.5 rounded-full bg-border"></span>
                      <span>{post.readingTime} czytania</span>
                      <span className="h-0.5 w-0.5 rounded-full bg-border"></span>
                      <span>{post.date}</span>
                    </div>
                    <h1 className="text-xl leading-snug font-semibold tracking-tight text-balance text-foreground sm:text-2xl lg:text-3xl xl:text-4xl">
                      {post.title}
                    </h1>
                  </header>

                  {headings.length > 0 && (
                    <TableOfContents headings={headings} />
                  )}

                  <div className="prose prose-sm max-w-none prose-invert md:prose-base prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:text-foreground prose-p:my-3 prose-p:max-w-prose prose-p:leading-[1.7] prose-p:text-muted-foreground prose-a:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary hover:prose-a:underline prose-blockquote:max-w-prose prose-blockquote:rounded-r-lg prose-blockquote:border-l-primary prose-blockquote:bg-muted/80 prose-blockquote:px-4 prose-blockquote:py-2.5 prose-blockquote:font-normal prose-blockquote:text-muted-foreground sm:prose-blockquote:px-6 prose-strong:font-bold prose-strong:text-foreground prose-li:my-1 prose-li:max-w-prose prose-li:text-muted-foreground prose-img:rounded-xl prose-img:border prose-img:border-border prose-hr:border-border">
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
                            className="my-6 h-auto max-w-full rounded-xl border border-border"
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
                  <h2 className="mb-5 text-base font-semibold text-foreground sm:mb-6 sm:text-lg">
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
