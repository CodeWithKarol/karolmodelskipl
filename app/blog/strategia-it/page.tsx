import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import {
  BookOpen,
  ArrowRight,
  Target,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"
import { CtaSection } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Strategia i Niezależne Partnerstwo Technologiczne | Artykuły",
    description:
      "Zastanawiasz się, jak mądrze zarządzać technologią w firmie, jak weryfikować wyceny agencji i dlaczego tradycyjny model software house'ów to pułapka?",
    alternates: {
      canonical: "https://www.karolmodelski.pl/blog/strategia-it",
    },
  }
}

export default function StrategiaItCategoryPage() {
  const posts = getAllPosts().filter(
    (p) => p.silo === "Strategia i Niezależne Partnerstwo Technologiczne"
  )

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.karolmodelski.pl/blog/strategia-it#webpage",
        url: "https://www.karolmodelski.pl/blog/strategia-it",
        name: "Strategia i Niezależne Partnerstwo Technologiczne | Artykuły",
        description:
          "Praktyczne poradniki o zarządzaniu IT na szczeblu zarządczym, oparte na rygorystycznych standardach bankowych.",
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
      <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>

      <section className="relative flex w-full flex-col bg-slate-950 pt-24 pb-10 text-slate-50 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-20">
        <div className="relative z-10 container mx-auto flex-1 px-4 text-left sm:text-center">
          <div className="mb-4 flex justify-start sm:mb-6 sm:justify-center">
            <SectionBadge>
              <BookOpen className="h-3.5 w-3.5 shrink-0" />
              Doradztwo i architektura IT dla firm
            </SectionBadge>
          </div>
          <h1 className="mb-5 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-tighter text-balance text-white sm:mx-auto sm:mb-6 sm:text-4xl lg:text-6xl">
            Strategia IT i doradztwo technologiczne dla firm – bez chaosu
            agencji i ryzykownych decyzji.
          </h1>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-pretty text-slate-400 sm:mx-auto sm:mb-8 sm:text-lg">
            Zastanawiasz się, jak mądrze zarządzać technologią w firmie,
            weryfikować wyceny zewnętrznych dostawców i dlaczego tradycyjny
            model software house&apos;ów często prowadzi do przepalania budżetu?
            Znajdziesz tu praktyczne poradniki o tworzeniu strategii IT,
            doradztwie technicznym oraz kontroli oprogramowania na szczeblu
            zarządczym – w oparciu o rygorystyczne standardy bankowe.
          </p>

          <div className="flex w-full flex-wrap items-center justify-start gap-x-2 gap-y-1 rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-sm text-slate-300 shadow-[0_0_30px_-12px_rgba(59,130,246,0.4)] sm:inline-flex sm:w-auto sm:justify-center sm:text-base">
            <span aria-hidden className="shrink-0 text-blue-400">
              💡
            </span>
            <span>
              Szukasz bezpośredniego doradztwa strategicznego dla swojej firmy?
            </span>
            <Link
              href="/doradztwo-techniczne-dla-firm"
              className="group inline-flex items-center gap-1.5 font-bold text-blue-400 transition-colors hover:text-blue-300"
            >
              Przejdź do oferty: Doradztwo techniczne i partnerstwo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-5 flex flex-col items-start gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="shrink-0 text-blue-400">
                <Target className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium sm:text-sm">
                Decyzje zarządcze
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="shrink-0 text-blue-400">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium sm:text-sm">
                Ochrona przed pułapkami agencji
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="shrink-0 text-blue-400">
                <TrendingUp className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium sm:text-sm">
                Nowoczesna strategia
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 py-12 sm:py-24">
        <div className="mb-8 text-center sm:mb-12">
          <div className="mb-3 sm:mb-4">
            <SectionBadge>
              <span>Baza wiedzy</span>
            </SectionBadge>
          </div>
          <h2 className="mb-2.5 text-xl leading-snug font-extrabold tracking-tight text-white sm:mb-4 sm:text-3xl md:text-4xl">
            Przeczytaj najnowsze poradniki z tej dziedziny:
          </h2>
          <p className="mx-auto max-w-2xl text-xs leading-relaxed font-light text-slate-400 sm:text-base">
            Wybierz interesujący Cię temat i dowiedz się, jak świadomie
            zarządzać technologią w biznesie.
          </p>
        </div>

        <div className="mb-20 grid gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-slate-900 sm:rounded-3xl sm:p-6">
                <div>
                  <div className="absolute top-0 left-0 h-1 w-full bg-slate-800 transition-colors group-hover:bg-blue-500"></div>
                  <span className="mb-2.5 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-blue-400 uppercase sm:mb-3 sm:text-[10px]">
                    {post.silo}
                  </span>
                  <h3 className="mb-2 text-sm leading-snug font-bold text-white transition-colors group-hover:text-blue-400 sm:mb-3 sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-[11px] leading-relaxed text-slate-400 sm:mb-6 sm:text-sm">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-800/60 pt-3 text-[11px] font-medium text-slate-400 sm:pt-4 sm:text-xs">
                  <span>{post.readingTime} czytania</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-blue-400 transition-transform group-hover:translate-x-1">
                    Przeczytaj artykuł <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <CtaSection />
    </div>
  )
}
