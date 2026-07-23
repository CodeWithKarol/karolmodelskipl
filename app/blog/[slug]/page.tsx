import { notFound } from "next/navigation"
import { getPostBySlug, getPostSlugs } from "@/lib/blog"
import Link from "next/link"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ArrowLeft } from "lucide-react"

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
    <div className="flex min-h-[100dvh] flex-col bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Tło i Gradienty */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
      <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>

      <div className="mx-auto w-full max-w-4xl flex-1 px-4 pt-12 pb-24 sm:pt-20">
        <Link
          href="/blog"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Powrót do Bazy Wiedzy
        </Link>
        <article className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 shadow-2xl backdrop-blur-xl sm:rounded-2xl sm:p-8 lg:p-12">
          <header className="mb-8 border-b border-slate-800 pb-8 sm:mb-12 sm:pb-10">
            <div className="mb-6 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 sm:px-3 sm:py-1 sm:text-sm">
                {post.silo}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
                <span className="h-1 w-1 rounded-full bg-slate-700 sm:h-1.5 sm:w-1.5"></span>{" "}
                {post.readingTime} czytania
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
                <span className="h-1 w-1 rounded-full bg-slate-700 sm:h-1.5 sm:w-1.5"></span>{" "}
                {post.date}
              </span>
            </div>
            <h1 className="text-2xl leading-[1.2] font-extrabold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-sm max-w-none prose-invert sm:prose-lg prose-headings:font-bold prose-headings:text-slate-100 prose-p:leading-relaxed prose-p:text-slate-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-blockquote:rounded-r-lg prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-900/50 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:font-normal prose-blockquote:text-slate-300 sm:prose-blockquote:px-6 prose-strong:font-bold prose-strong:text-white prose-li:text-slate-300 prose-hr:border-slate-800">
            <MDXRemote
              source={post.content}
              components={{
                img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    {...props}
                    alt={props.alt || "Ilustracja w artykule blogowym"}
                    className="rounded-xl border border-slate-800 my-6 max-w-full h-auto"
                  />
                ),
              }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
