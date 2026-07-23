import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { FileText, ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
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

      <header className="relative flex flex-col items-center justify-center overflow-hidden border-b border-slate-900/80 bg-slate-950 pt-20 pb-10 sm:pt-36 sm:pb-24 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[250px] sm:h-[600px] bg-blue-900/10 blur-[90px] sm:blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <div className="mb-3 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 sm:px-4 py-1 text-[9px] sm:text-xs font-bold text-blue-400 uppercase tracking-widest">
            {blog.header.badge}
          </div>
          <h1
            className="text-lg sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-8 leading-snug sm:leading-[1.15]"
            dangerouslySetInnerHTML={{ __html: blog.header.title }}
          />
          <p className="text-[11px] sm:text-lg lg:text-xl text-slate-400 mb-5 sm:mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            {blog.header.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-5 sm:mb-12 w-full text-left">
            {blog.header.indicators.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-3 sm:p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-blue-400 mb-1 sm:mb-3 text-sm sm:text-xl">
                  {i === 0 ? "💡" : i === 1 ? "🛡️" : "📈"}
                </div>
                <h4 className="text-[10px] sm:text-sm font-bold text-white mb-0.5 sm:mb-1 leading-tight">{item.title}</h4>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 max-w-md w-full relative mx-auto shadow-xl">
            <p className="text-[11px] sm:text-sm md:text-base font-bold text-blue-400 mb-1 sm:mb-2">
              {blog.header.audit_promo.title.replace("👉 ", "")}
            </p>
            <p className="text-[10px] sm:text-sm text-slate-300 mb-3 sm:mb-6 leading-relaxed max-w-sm mx-auto">
              {blog.header.audit_promo.desc}
            </p>
            <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button size="lg" className="w-full py-3.5 sm:py-6 text-[11px] sm:text-sm font-bold rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg whitespace-normal h-auto leading-tight">{blog.header.cta}</Button>
            </a>
            <p className="text-[9px] sm:text-xs text-slate-500 mt-2.5 sm:mt-4 uppercase tracking-widest font-semibold">{blog.header.footnote}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 py-12 sm:py-24">
        <div className="mb-8 sm:mb-16 text-center">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">
            <span>{blog.categories.badge}</span>
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
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">
              <span>{blog.featured.badge}</span>
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

      {/* Sekcja 4: Finałowe Wezwanie do Działania w Bazie Wiedzy */}
      <section
        id="oferta"
        className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-12 sm:py-20 text-slate-300 md:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>

        <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center">
          <div className="mb-8 sm:mb-12">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">
              <span>{blog.offer.badge}</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight max-w-3xl mx-auto">
              {blog.offer.title}
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base md:text-lg">
              {blog.offer.description}
            </p>
          </div>

          {/* Ozdobny pakiet wartościowy - Mobile First */}
          <div className="mx-auto mb-6 sm:mb-12 w-full max-w-2xl bg-slate-900/40 border border-slate-800 p-4 sm:p-10 rounded-2xl sm:rounded-3xl text-left">
            <h3 className="mb-4 sm:mb-8 text-center text-sm sm:text-xl font-bold text-white border-b border-slate-800 pb-3 sm:pb-6 leading-snug">
              {blog.offer.packetTitle}{" "}
              <span className="block sm:inline mt-1 sm:mt-0 sm:ml-2 text-blue-400 text-[11px] sm:text-sm font-normal">
                {blog.offer.packetVal}
              </span>
            </h3>

            <ul className="space-y-3 sm:space-y-6">
              {blog.offer.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="shrink-0 rounded-full bg-emerald-500/10 p-1.5 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <strong className="block text-xs sm:text-base font-bold text-white leading-snug">
                      {b.title}
                    </strong>
                    {b.desc && (
                      <span className="text-[11px] sm:text-sm text-slate-400 leading-relaxed">
                        {b.desc}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center">
            <a
              href="https://calendly.com/kontakt-karolmodelski/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md"
            >
              <Button
                size="lg"
                className="relative flex h-auto min-h-[3.5rem] w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-4 sm:py-5 px-3 text-xs sm:text-sm font-bold shadow-lg transition-all whitespace-normal text-center leading-tight"
              >
                <CalendarDays className="h-5 w-5 shrink-0" />
                {blog.offer.cta}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
            </a>
            <p className="mt-3 sm:mt-4 text-[11px] sm:text-sm text-slate-400 italic font-medium text-center" dangerouslySetInnerHTML={{ __html: blog.offer.footer }} />
          </div>
        </div>
      </section>
    </div>
  )
}
