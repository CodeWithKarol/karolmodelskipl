import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { BookOpen, FileText } from "lucide-react"
import { Footer } from "@/components/footer"
import { content } from "@/lib/content"

export const metadata: Metadata = {
  title: "Blog | Tworzenie aplikacji internetowych dla MŚP",
  description:
    "Jak tworzyć aplikacje internetowe dla firm bez długu IT i kosztów agencji? Poznaj standardy enterprise i odbierz Bezpłatną Mapę Drogową Modernizacji IT.",
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

  const businessPosts = posts.filter((p) => p.category.includes("Biznes"))

  return (
    <div className="flex min-h-[100dvh] flex-col bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
      <div className="pointer-events-none fixed top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 opacity-60 mix-blend-screen blur-[120px] lg:h-[800px] lg:w-[800px]"></div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-25"></div>

      <header className="relative px-4 pt-16 pb-12 text-center sm:pt-24 sm:pb-16">
        <nav
          aria-label="Nawigacja główna"
          className="mb-8 flex items-center justify-center gap-3 text-[13px] font-medium text-slate-400 sm:text-sm"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            Strona Główna
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-blue-400">Baza Wiedzy</span>
        </nav>

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400 sm:text-sm">
            <BookOpen className="h-4 w-4" /> Baza Wiedzy Enterprise
          </div>
          <h1
            className="mb-6 text-[2rem] leading-[1.1] font-extrabold tracking-tight text-balance text-white sm:text-5xl sm:leading-[1.05] lg:text-[3.25rem] xl:text-[4rem]"
            dangerouslySetInnerHTML={{ __html: blog.header.title }}
          />
          <p className="mx-auto max-w-3xl px-4 text-sm leading-relaxed font-light text-balance text-slate-300 sm:px-0 sm:text-lg">
            {blog.header.description}
          </p>
        </div>
      </header>

      <main className="relative z-10 container mx-auto flex max-w-7xl flex-1 flex-col gap-10 px-4 pb-24 lg:flex-row xl:gap-16">
        <section
          className="flex flex-1 flex-col gap-10 sm:gap-16"
          aria-label="Lista artykułów blogowych"
        >
          {/* Cluster 1 */}
          <div>
            <div className="mb-6 flex items-center gap-3 border-b border-slate-800 pb-3 sm:mb-8 sm:pb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 sm:h-10 sm:w-10 sm:rounded-xl">
                <FileText className="h-4 w-4 text-blue-400 sm:h-5 sm:w-5" />
              </div>
              <h2 className="text-lg font-bold tracking-tight text-white sm:text-2xl">
                Strategiczne Tworzenie Aplikacji dla Firm
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-5">
              {businessPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 p-5 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-slate-900 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)] sm:rounded-2xl sm:p-8">
                    <div className="absolute top-0 left-0 h-full w-1 bg-slate-800 transition-colors group-hover:bg-blue-500"></div>
                    <h3 className="text-base leading-tight font-bold text-slate-100 transition-colors group-hover:text-blue-400 sm:text-xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400 sm:mt-3 sm:text-base">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-500 sm:mt-6 sm:gap-4 sm:text-[13px]">
                      <span className="rounded-md bg-slate-800 px-2 py-0.5 text-slate-300 sm:px-2.5 sm:py-1">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-slate-700"></span>{" "}
                        {post.readingTime} czytania
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-slate-700"></span>{" "}
                        {post.date}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <aside
          className="h-fit flex-1 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-1 shadow-2xl backdrop-blur-xl lg:sticky lg:top-8"
          aria-label="Bezpłatna mapa drogowa"
        >
          <div className="rounded-xl border border-slate-800/50 bg-slate-950/80 p-6 sm:p-8">
            <h3 className="mb-3 text-lg font-bold tracking-tight text-white sm:text-xl">
              {blog.offer.title}
            </h3>
            <p className="mb-6 text-[13px] leading-relaxed font-light text-slate-400 sm:text-sm">
              {blog.offer.description}
            </p>

            <ul className="mb-8 space-y-4">
              {blog.offer.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 rounded-md border border-blue-500/20 bg-blue-500/10 p-1">
                    <svg
                      className="h-3.5 w-3.5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="text-[13px] text-slate-300">
                    <span className="block font-medium text-slate-200">
                      {item.title}
                    </span>
                    <span className="text-slate-500">
                      {item.description}{" "}
                      <em className="text-blue-400 not-italic">
                        (Wartość: {item.value})
                      </em>
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-center">
              <p className="mb-4 text-base font-bold text-white sm:text-lg">
                <span className="text-emerald-400">0 zł</span>{" "}
                <span className="ml-2 text-xs font-normal text-slate-500 line-through">
                  (Zamiast {blog.offer.value_total})
                </span>
              </p>
              <Link
                href="https://www.karolmodelski.pl/#kontakt"
                className="inline-flex h-11 w-full items-center justify-center rounded-lg border border-blue-400/20 bg-blue-600 text-sm font-bold text-white shadow-lg transition-colors hover:bg-blue-500"
              >
                {blog.offer.cta}
              </Link>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}
