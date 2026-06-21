import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { FileText } from "lucide-react"
import { content } from "@/lib/content"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Aplikacje internetowe dla firm – Strategia, MVP i Baza Wiedzy IT",
  description:
    "Buduj aplikacje internetowe dla firm bez agencyjnych marż i długu technicznego. Poznaj standardy klasy bankowej. Odbierz darmową Mapę Drogową IT!",
  alternates: {
    canonical: "https://www.karolmodelski.pl/blog",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.karolmodelski.pl/blog/#collectionpage",
      url: "https://www.karolmodelski.pl/blog",
      name: "Tworzenie aplikacji internetowych dla MŚP | Blog Karol Modelski",
      description:
        "Baza wiedzy i poradniki technologiczne dla sektora MŚP. Dowiedz się, jak projektować stabilne systemy webowe i unikać długu technologicznego.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.karolmodelski.pl/#website",
      },
    },
  ],
}

export default function BlogHubPage() {
  const posts = getAllPosts()
  const { blog } = content

  const silo1 = posts.filter((p) => p.silo === "Fundamenty & Strategia")
  const silo2 = posts.filter((p) => p.silo === "Technologia w Praktyce")
  const silo3 = posts.filter((p) => p.silo === "Case Studies")

  return (
    <div className="flex min-h-[100dvh] flex-col bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
      <div className="pointer-events-none fixed top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 opacity-60 mix-blend-screen blur-[120px] lg:h-[800px] lg:w-[800px]"></div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-25"></div>

      <header className="relative flex min-h-[100dvh] flex-col items-center justify-center px-4 pt-20 pb-12 text-center sm:min-h-dvh sm:pt-32 sm:pb-20">
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <div className="mb-4 flex justify-center sm:mb-8">
            <Breadcrumbs />
          </div>
          <h1
            className="mb-4 text-[32px] leading-[1.15] font-extrabold tracking-tight text-balance text-white sm:mb-6 sm:text-5xl sm:leading-[1.05] lg:text-[3.5rem]"
            dangerouslySetInnerHTML={{ __html: blog.header.title }}
          />
          <p className="mx-auto max-w-3xl px-2 text-[15px] leading-snug font-light text-balance text-slate-300 sm:px-0 sm:text-lg">
            {blog.header.description}
          </p>
          <div className="mt-8 flex w-full flex-col items-center justify-center sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 blur transition duration-500 hover:opacity-60"></div>
              <Link
                href="https://www.karolmodelski.pl/#kontakt"
                className="group relative flex h-auto min-h-[3.25rem] w-full flex-row items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-[14px] font-bold text-white shadow-xl transition-all hover:bg-blue-500 sm:min-h-[3.5rem] sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
              >
                <span className="text-center leading-tight text-balance whitespace-normal">
                  Odbierz bezpłatną Mapę Drogową Modernizacji IT i sprawdź,
                  gdzie tracisz pieniądze.
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto flex max-w-7xl flex-1 flex-col gap-16 px-4 pb-24 lg:flex-row xl:gap-16">
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
                          <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] font-medium text-slate-500">
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

        <aside className="h-fit w-full rounded-2xl border border-slate-800/80 bg-slate-900/80 p-1 shadow-2xl backdrop-blur-xl lg:sticky lg:top-8 lg:flex-[0_0_350px]">
          <div className="rounded-xl border border-slate-800/50 bg-slate-950/80 p-6 sm:p-8">
            <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
              {blog.offer.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed font-light text-slate-400">
              {blog.offer.description}
            </p>
            <Link
              href="https://www.karolmodelski.pl/#kontakt"
              className="mt-4 flex min-h-[3rem] h-auto w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-bold leading-tight text-balance text-white transition-colors hover:bg-blue-500"
            >
              {blog.offer.cta}
            </Link>
          </div>
        </aside>
      </main>
    </div>
  )
}
