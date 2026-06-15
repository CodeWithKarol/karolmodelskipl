import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BookOpen, FileText } from "lucide-react";
import { Footer } from "@/components/footer";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Tworzenie aplikacji internetowych dla MŚP",
  description: "Jak tworzyć aplikacje internetowe dla firm bez długu IT i kosztów agencji? Poznaj standardy enterprise i odbierz Bezpłatną Mapę Drogową Modernizacji IT.",
  alternates: {
    canonical: "https://karolmodelski.pl/blog",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://karolmodelski.pl/blog/#collectionpage",
      "url": "https://karolmodelski.pl/blog",
      "name": "Tworzenie aplikacji internetowych dla MŚP | Blog Karol Modelski",
      "description": "Baza wiedzy i poradniki technologiczne dla sektora MŚP. Dowiedz się, jak projektować stabilne systemy webowe i unikać długu technologicznego.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://karolmodelski.pl/#website"
      }
    }
  ]
};

export default function BlogHubPage() {
  const posts = getAllPosts();
  const { blog } = content;
  
  const businessPosts = posts.filter(p => p.category.includes("Biznes"));
  const techPosts = posts.filter(p => !p.category.includes("Biznes"));

  return (
    <div className="bg-slate-950 min-h-[100dvh] text-slate-50 selection:bg-blue-500/30 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950 pointer-events-none -z-10"></div>
      <div className="fixed top-1/4 right-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen opacity-60 pointer-events-none -z-10"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none -z-10"></div>

      <header className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 text-center px-4">
        <nav aria-label="Nawigacja główna" className="mb-8 flex items-center justify-center gap-3 text-[13px] sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">Strona Główna</Link>
          <span className="text-slate-700">/</span>
          <span className="text-blue-400">Baza Wiedzy</span>
        </nav>
        
        <div className="mx-auto max-w-4xl z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" /> Baza Wiedzy Enterprise
          </div>
          <h1 
            className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-[3.25rem] xl:text-[4rem] font-extrabold tracking-tight text-white sm:leading-[1.05] text-balance mb-6"
            dangerouslySetInnerHTML={{ __html: blog.header.title }}
          />
          <p className="mx-auto max-w-3xl text-sm sm:text-lg leading-relaxed text-slate-300 font-light text-balance px-4 sm:px-0">
            {blog.header.description}
          </p>
        </div>
      </header>

      <main className="container relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-24 lg:flex-row xl:gap-16 flex-1">
        <section className="flex-1 flex flex-col gap-10 sm:gap-16" aria-label="Lista artykułów blogowych">
          
          {/* Cluster 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-800">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </div>
              <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white">Strategiczne Tworzenie Aplikacji dla Firm</h2>
            </div>
            
            <div className="grid gap-4 sm:gap-5">
              {businessPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="rounded-xl sm:rounded-2xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm p-5 sm:p-8 transition-all hover:bg-slate-900 hover:border-blue-500/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-800 group-hover:bg-blue-500 transition-colors"></div>
                    <h3 className="text-base sm:text-xl font-bold leading-tight text-slate-100 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-[13px] font-medium text-slate-500">
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-800 text-slate-300">{post.category}</span>
                      <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-slate-700"></span> {post.readingTime} czytania</span>
                      <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-slate-700"></span> {post.date}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Cluster 2 */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-800">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
              </div>
              <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white">Architektura Fullstack i Ekosystem</h2>
            </div>
            <div className="grid gap-4 sm:gap-5">
              {techPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <article className="rounded-xl sm:rounded-2xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-sm p-5 sm:p-8 transition-all hover:bg-slate-900 hover:border-indigo-500/30 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-800 group-hover:bg-indigo-500 transition-colors"></div>
                    <h3 className="text-base sm:text-xl font-bold leading-tight text-slate-100 group-hover:text-indigo-400 transition-colors">{post.title}</h3>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-[13px] font-medium text-slate-500">
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-800 text-slate-300">{post.category}</span>
                      <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-slate-700"></span> {post.readingTime} czytania</span>
                      <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-slate-700"></span> {post.date}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <aside className="h-fit flex-1 rounded-2xl border border-slate-800/80 bg-slate-900/80 backdrop-blur-xl p-1 shadow-2xl lg:sticky lg:top-8" aria-label="Bezpłatna mapa drogowa">
          <div className="bg-slate-950/80 rounded-xl p-6 sm:p-8 border border-slate-800/50">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-3">{blog.offer.title}</h3>
            <p className="text-[13px] sm:text-sm leading-relaxed text-slate-400 font-light mb-6">
              {blog.offer.description}
            </p>
            
            <ul className="mb-8 space-y-4">
              {blog.offer.items.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="mt-0.5 p-1 rounded-md bg-blue-500/10 border border-blue-500/20 shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-[13px] text-slate-300">
                    <span className="block font-medium text-slate-200">{item.title}</span>
                    <span className="text-slate-500">{item.description} <em className="text-blue-400 not-italic">(Wartość: {item.value})</em></span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-center">
              <p className="mb-4 text-base sm:text-lg font-bold text-white">
                <span className="text-emerald-400">0 zł</span> <span className="text-xs font-normal text-slate-500 line-through ml-2">(Zamiast {blog.offer.value_total})</span>
              </p>
              <Link href="https://karolmodelski.pl/#kontakt" className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-11 rounded-lg border border-blue-400/20 shadow-lg transition-colors text-sm">
                {blog.offer.cta}
              </Link>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
