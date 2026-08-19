import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { BookOpen, ArrowRight, Zap, ShieldCheck, Banknote } from "lucide-react"
import { CtaSection, type CtaContent } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"

const ctaContent: CtaContent = {
  badge: "Program Wdrożeniowy: Audyt Wydajności i Architektury (Tylko 2 firmy w kwartale)",
  title:
    "Twój system działa wolno, generuje błędy przy obciążeniu i wolisz zdiagnozować wąskie gardła od razu w 4 oczy?",
  description:
    "Zamiast tracić tygodnie na domysły i kolejne bezowocne dyskusje z programistami, przenieś analizę na moje barki. Jako Niezależny Partner Technologiczny w każdym kwartale biorę na warsztat <strong class='text-white font-semibold'>maksymalnie dwa systemy</strong>. W zamian za opinię po zakończeniu analizy, możesz odebrać dedykowany Pakiet Strategiczny całkowicie <strong class='text-white font-semibold'>za 0 zł</strong>.",
  package_title:
    "Co namacalnie otrzymujesz w Pakiecie Strategicznym (Wartość 600 zł za 0 zł):",
  offer_items: [
    {
      title:
        "Bezpłatna Diagnoza Wąskich Gardeł i Długu Technologicznego: Wskazanie 2–3 krytycznych miejsc w kodzie i architekturze, które realnie dławią szybkość systemu i blokują zyski.",
    },
    {
      title:
        "Bankowy Test Stabilności pod Obciążeniem: Weryfikacja odporności Twojego oprogramowania na awarie w godzinach największego ruchu i sprzedaży.",
    },
    {
      title:
        "Ewolucyjna Mapa Drogowa Naprawy: Rozpisany krok po kroku plan wymiany modułów na środowisku testowym – z gwarancją zero przestojów w biznesie.",
    },
  ],
  button: "Odbierz Bezpłatny Audyt Wydajności i Zarezerwuj Miejsce (0 zł)",
  footer:
    "Zajmij jedno z 2 wolnych miejsc w tym kwartale. Każdy kolejny dzień z mulącym systemem to porzucone koszyki, sfrustrowany zespół i ryzyko krytycznej awarii w najważniejszym momencie sprzedażowym.",
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bezinwazyjna Modernizacja Systemów | Artykuły i Poradniki IT",
    description:
      "Jak zoptymalizować działający kod, wyeliminować błędy w bazie danych i przyspieszyć aplikację bez zatrzymywania sprzedaży? Praktyczne poradniki i analizy oparte na bankowych standardach inżynieryjnych, przeniesione do realiów MŚP.",
    alternates: {
      canonical:
        "https://www.karolmodelski.pl/blog/bezinwazyjna-modernizacja-systemow",
    },
  }
}

export default function ModernizacjaCategoryPage() {
  const posts = getAllPosts().filter(
    (p) => p.silo === "Bezinwazyjna Modernizacja Systemów"
  )

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id":
          "https://www.karolmodelski.pl/blog/bezinwazyjna-modernizacja-systemow#webpage",
        url: "https://www.karolmodelski.pl/blog/bezinwazyjna-modernizacja-systemow",
        name: "Bezinwazyjna Modernizacja i Przyspieszanie Systemów | Poradniki i Praktyka IT",
        description:
          "Praktyczne przewodniki i analizy o ratowaniu i optymalizacji kodu, oparte na bankowych standardach inżynieryjnych przeniesionych do realiów MŚP.",
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
              Poradniki i praktyka IT
            </SectionBadge>
          </div>
          <h1 className="mb-5 max-w-4xl text-3xl leading-[1.1] font-extrabold tracking-tighter text-balance text-white sm:mx-auto sm:mb-6 sm:text-4xl lg:text-6xl">
            Bezinwazyjna Modernizacja i Przyspieszanie Systemów – Poradniki i
            Praktyka IT
          </h1>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-pretty text-slate-400 sm:mx-auto sm:mb-8 sm:text-lg">
            Jak zoptymalizować działający kod, wyeliminować błędy w bazie danych
            i przyspieszyć aplikację bez zatrzymywania bieżącej sprzedaży i bez
            kosztownego pisania wszystkiego od nowa? Przeczytaj praktyczne
            przewodniki oraz analizy oparte na bankowych standardach
            inżynieryjnych przeniesionych bezpośrednio do realiów MŚP.
          </p>

          <div className="flex w-full flex-wrap items-center justify-start gap-x-2 gap-y-1 rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-sm text-slate-300 shadow-[0_0_30px_-12px_rgba(59,130,246,0.4)] sm:inline-flex sm:w-auto sm:justify-center sm:text-base">
            <span aria-hidden className="shrink-0 text-blue-400">
              💡
            </span>
            <span>
              Twoja aplikacja wymaga konkretnej naprawy lub przyspieszenia?
            </span>
            <Link
              href="/naprawa-i-modernizacja-aplikacji"
              className="group inline-flex items-center gap-1.5 font-bold text-blue-400 transition-colors hover:text-blue-300"
            >
              Przejdź do oferty: Bezinwazyjna modernizacja aplikacji
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-5 flex flex-col items-start gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="shrink-0 text-blue-400">
                <Zap className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium sm:text-sm">
                Jak przyspieszyć aplikację
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="shrink-0 text-blue-400">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium sm:text-sm">
                Bezpieczny rozwój w tle
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="shrink-0 text-blue-400">
                <Banknote className="h-4 w-4" />
              </span>
              <span className="text-xs font-medium sm:text-sm">
                Ochrona budżetu
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 py-12 sm:py-24">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-2.5 text-xl leading-snug font-extrabold tracking-tight text-white sm:mb-4 sm:text-3xl md:text-4xl">
            Poradniki i analizy dotyczące modernizacji oprogramowania:
          </h2>
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

      <CtaSection content={ctaContent} />
    </div>
  )
}
