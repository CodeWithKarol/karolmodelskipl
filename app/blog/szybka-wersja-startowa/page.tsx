import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { BookOpen, ArrowRight } from "lucide-react"
import { CtaSection, type CtaContent } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"

const ctaContent: CtaContent = {
  badge: "Program Wdrożeniowy: Szybka Wersja Startowa (MVP)",
  title: "Masz gotowy pomysł na aplikację i wolisz omówić architekturę MVP od razu w 4 oczy?",
  description:
    "Zamiast tracić godziny na analizowanie artykułów i domysły, przenieś wyzwanie na moje barki. Jako Niezależny Partner Technologiczny w każdym kwartale prowadzę <strong class='text-white font-semibold'>maksymalnie dwa wdrożenia</strong>, dając projektom 100% mojego skupienia. W zamian za opinię po zakończeniu analizy, możesz odebrać kompletny Pakiet Strategiczny na start za 0 zł.",
  package_title: "Co namacalnie otrzymujesz w Pakiecie Strategicznym (Wartość 600 zł za 0 zł):",
  offer_items: [
    {
      title: "Bezpłatna Diagnoza i Audyt Pomysłu: Pomagam Ci wybrać serce Twojego systemu i odrzucić zbędny przerost formy agencji.",
    },
    {
      title: "Bankowy Test Stabilności i Bezpieczeństwa: Weryfikacja, czy Twój pomysł na architekturę spełnia standardy bezpieczeństwa danych.",
    },
    {
      title: "Osobista Mapa Drogowa MVP: Rozpisany krok po kroku plan działania, harmonogram wdrożenia w 30 dni oraz przejrzysta wycena etapowa.",
    },
  ],
  button: "Odbierz Pakiet Strategiczny i Skonsultuj Pomysł (0 zł)",
  footer:
    "Zajmij jedno z 2 wolnych miejsc na ten kwartał. Odkładanie walidacji biznesowej na „kiedyś” to zgoda na to, że konkurencja pierwsza wypuści podobne rozwiązanie i przejmie rynek.",
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Szybka Wersja Startowa Aplikacji | Artykuły i Poradniki IT",
    description: "Masz pomysł na nowy produkt cyfrowy? Dowiedz się, jak bezpiecznie uruchomić kluczową funkcję w 30 dni, przetestować pomysł i nie przepalić budżetu.",
    alternates: {
      canonical: "https://www.karolmodelski.pl/blog/szybka-wersja-startowa",
    },
  }
}

export default function SzybkaWersjaStartowaCategoryPage() {
  const posts = getAllPosts().filter((p) => p.silo === "Szybka Wersja Startowa Aplikacji")

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.karolmodelski.pl/blog/szybka-wersja-startowa#webpage",
        url: "https://www.karolmodelski.pl/blog/szybka-wersja-startowa",
        name: "Szybka Wersja Startowa Aplikacji | Artykuły",
        description: "Praktyczne poradniki o tym, jak w bezpieczny sposób uruchomić kluczową funkcję w 30 dni.",
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

      <section className="relative flex flex-col overflow-hidden bg-slate-950 text-slate-50 pt-16 pb-12 sm:pt-20 lg:pt-24 sm:pb-16 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
        <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-25"></div>

        <div className="relative z-10 container mx-auto px-4 text-center py-4">
          <div className="w-full">
            <div className="mb-6 sm:mb-8 flex justify-center">
              <SectionBadge><BookOpen className="h-3.5 w-3.5 shrink-0" />Szybka wersja startowa aplikacji (MVP)</SectionBadge>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white mb-6 sm:mb-8 leading-tight sm:leading-[1.05] text-balance max-w-5xl mx-auto">
              Szybka Wersja Startowa (MVP) – Poradniki i Praktyka
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto text-pretty">
              Jak przetestować pomysł na aplikację lub system w 30 dni bez przepalania 100 tysięcy złotych w agencji? Zobacz artykuły, w których krok po kroku wyjaśniam inżynierskie metody obcinania zakresu specyfikacji, architekturę startową oraz bezpieczną walidację rynkowego popytu.
            </p>

            <div className="flex w-full sm:w-auto sm:inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-sm sm:text-base text-slate-300 shadow-[0_0_30px_-12px_rgba(59,130,246,0.4)]">
              <span aria-hidden className="text-blue-400 shrink-0">💡</span>
              <span>Szukasz bezpośredniego wykonania technicznego przez inżyniera?</span>
              <Link
                href="/projektowanie-mvp"
                className="group inline-flex items-center gap-1.5 font-bold text-blue-400 transition-colors hover:text-blue-300"
              >
                Przejdź do oferty: Wdrożenie MVP w 30 dni
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 py-12 sm:py-24">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2.5 sm:mb-4 leading-snug">
            Poradniki i analizy dotyczące budowy MVP:
          </h2>
        </div>

        <div className="grid gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800/60 bg-slate-900/40 p-4 sm:p-6 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-slate-900 flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 left-0 h-1 w-full bg-slate-800 transition-colors group-hover:bg-blue-500"></div>
                  <span className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2.5 sm:mb-3">
                    {post.silo}
                  </span>
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-[11px] sm:text-sm leading-relaxed text-slate-400 mb-4 sm:mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-medium text-slate-400 pt-3 sm:pt-4 border-t border-slate-800/60">
                  <span>{post.readingTime} czytania</span>
                  <span className="inline-flex items-center gap-1.5 text-blue-400 font-bold group-hover:translate-x-1 transition-transform">
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
