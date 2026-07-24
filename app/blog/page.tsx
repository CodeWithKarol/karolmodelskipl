import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { CtaSection } from "@/components/cta-section"
import { FileText, ArrowRight, Lightbulb, ShieldCheck, TrendingUp, BookOpen, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionBadge } from "@/components/section-badge"
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

      <section className="relative w-full flex flex-col bg-slate-950 text-slate-50 pt-16 pb-16 lg:pb-12 lg:min-h-screen">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
        <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>

        <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-6 lg:gap-20">
          
          <div className="flex-1 w-full max-w-2xl text-left pt-4 sm:pt-8">
            <div className="mb-4 sm:mb-6">
              <SectionBadge><BookOpen className="h-3.5 w-3.5 shrink-0" />{blog.header.badge}</SectionBadge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter text-white mb-5 sm:mb-6 leading-[1.1]">
              {blog.header.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-400 mb-5 sm:mb-8 leading-relaxed max-w-xl">
              {blog.header.description}
            </p>

            <div className="mb-5 sm:mb-6 lg:hidden">
              <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-tight">
                  {blog.header.pilot_program.cta}
                </Button>
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">{blog.header.cta_sub}</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {blog.header.indicators.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <span className="text-blue-400 shrink-0 text-base">
                    {i === 0 ? <Lightbulb className="h-4 w-4" /> : i === 1 ? <ShieldCheck className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}
                  </span>
                  <span className="text-xs sm:text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden w-full max-w-md lg:max-w-sm flex-shrink-0 lg:block lg:mt-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
              <h2 className="text-lg font-bold text-white mb-3 leading-snug">{blog.header.pilot_program.title}</h2>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.header.pilot_program.description }} />
              
              <p className="text-xs font-semibold text-white mb-2.5">{blog.header.pilot_program.package_title}</p>
              <ul className="space-y-1.5 mb-4">
                {blog.header.offer_items.map((item, i) => (
                  <li key={i} className="text-xs text-slate-300 leading-snug flex items-start gap-2">
                    <span className="text-blue-400 shrink-0 mt-0.5">
                      {i === 0 && <Lightbulb className="h-3.5 w-3.5" />}
                      {i === 1 && <ShieldCheck className="h-3.5 w-3.5" />}
                      {i === 2 && <TrendingUp className="h-3.5 w-3.5" />}
                      {i === 3 && <Map className="h-3.5 w-3.5" />}
                    </span>
                    {item.title}
                  </li>
                ))}
              </ul>

              <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-tight">
                  {blog.header.pilot_program.cta}
                </Button>
              </a>
              <p className="text-[10px] text-slate-400 text-center mt-3 uppercase tracking-widest font-semibold">{blog.header.cta_sub}</p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 py-12 sm:py-24">
        <div className="mb-8 sm:mb-16 text-center">
          <div className="mb-3 sm:mb-4">
            <SectionBadge>
            <span>{blog.categories.badge}</span>
          </SectionBadge>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2.5 sm:mb-4 leading-snug">
            {blog.categories.title}
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base">
            {blog.categories.subtitle}
          </p>
        </div>

        <div className="grid gap-3 sm:gap-6 md:grid-cols-2 mb-12 sm:mb-20">
          {blog.categories.items.map((cat, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800 p-4 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-blue-400 font-bold text-[9px] sm:text-xs uppercase tracking-widest mb-1.5 sm:mb-2">Kategoria 0{i + 1}</div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-snug">{cat.title}</h3>
                <p className="text-slate-400 leading-relaxed text-[11px] sm:text-sm mb-4 sm:mb-6">{cat.desc}</p>
              </div>
              <Link href={cat.href} className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                <span>{cat.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

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

          <div className="grid gap-3 sm:gap-6 md:grid-cols-3">
            {blog.featured.items.map((art, i) => (
              <Link key={i} href={`/blog/${art.slug}`} className="group block">
                <article className="bg-slate-900/40 border border-slate-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2.5 sm:mb-3">
                      {art.badge}
                    </span>
                    <h3 className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-[11px] sm:text-sm mb-3 sm:mb-4">
                      {art.desc}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[11px] sm:text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span>{art.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
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


      <CtaSection />
    </div>
  )
}
