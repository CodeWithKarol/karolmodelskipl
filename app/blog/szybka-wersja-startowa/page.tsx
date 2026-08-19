import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import {
  BookOpen,
  ArrowRight,
  Rocket,
  Banknote,
  ShieldCheck,
} from "lucide-react"
import { CtaSection, type CtaContent } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"

const ctaContent: CtaContent = {
  badge: "Program Wdrożeniowy: Szybka Wersja Startowa (MVP)",
  title:
    "Masz gotowy pomysł na aplikację i wolisz omówić architekturę MVP od razu w 4 oczy?",
  description:
    "Zamiast tracić godziny na analizowanie artykułów i domysły, przenieś wyzwanie na moje barki. Jako Niezależny Partner Technologiczny w każdym kwartale prowadzę <strong class='text-white font-semibold'>maksymalnie dwa wdrożenia</strong>, dając projektom 100% mojego skupienia. W zamian za opinię po zakończeniu analizy, możesz odebrać kompletny Pakiet Strategiczny na start za 0 zł.",
  package_title:
    "Co namacalnie otrzymujesz w Pakiecie Strategicznym (Wartość 600 zł za 0 zł):",
  offer_items: [
    {
      title:
        "Bezpłatna Diagnoza i Audyt Pomysłu: Pomagam Ci wybrać serce Twojego systemu i odrzucić zbędny przerost formy agencji.",
    },
    {
      title:
        "Bankowy Test Stabilności i Bezpieczeństwa: Weryfikacja, czy Twój pomysł na architekturę spełnia standardy bezpieczeństwa danych.",
    },
    {
      title:
        "Osobista Mapa Drogowa MVP: Rozpisany krok po kroku plan działania, harmonogram wdrożenia w 30 dni oraz przejrzysta wycena etapowa.",
    },
  ],
  button: "Odbierz Pakiet Strategiczny i Skonsultuj Pomysł (0 zł)",
  footer:
    "Zajmij jedno z 2 wolnych miejsc na ten kwartał. Odkładanie walidacji biznesowej na „kiedyś” to zgoda na to, że konkurencja pierwsza wypuści podobne rozwiązanie i przejmie rynek.",
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Szybka Wersja Startowa Aplikacji | Artykuły i Poradniki IT",
    description:
      "Masz pomysł na nowy produkt cyfrowy? Dowiedz się, jak bezpiecznie uruchomić kluczową funkcję w 30 dni, przetestować pomysł i nie przepalić budżetu.",
    alternates: {
      canonical: "https://www.karolmodelski.pl/blog/szybka-wersja-startowa",
    },
  }
}

export default function SzybkaWersjaStartowaCategoryPage() {
  const posts = getAllPosts().filter(
    (p) => p.silo === "Szybka Wersja Startowa Aplikacji"
  )

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id":
          "https://www.karolmodelski.pl/blog/szybka-wersja-startowa#webpage",
        url: "https://www.karolmodelski.pl/blog/szybka-wersja-startowa",
        name: "Szybka Wersja Startowa Aplikacji | Artykuły",
        description:
          "Praktyczne poradniki o tym, jak w bezpieczny sposób uruchomić kluczową funkcję w 30 dni.",
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

      <section className="relative flex flex-col overflow-hidden bg-slate-950 pt-24 pb-10 text-slate-50 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
        <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-25"></div>

        <div className="relative z-10 container mx-auto px-4 py-4 text-left sm:text-center">
          <div className="w-full">
            <div className="mb-6 flex justify-start sm:mb-8 sm:justify-center">
              <SectionBadge>
                <BookOpen className="h-3.5 w-3.5 shrink-0" />
                Szybka wersja startowa aplikacji (MVP)
              </SectionBadge>
            </div>
            <h1 className="mb-6 max-w-4xl text-3xl leading-tight font-extrabold tracking-tighter text-balance text-white sm:mx-auto sm:mb-8 sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              Szybka Wersja Startowa (MVP) – Poradniki i Praktyka
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-pretty text-slate-400 sm:mx-auto sm:mb-10 sm:text-lg lg:text-xl">
              Jak przetestować pomysł na aplikację lub system w 30 dni bez
              przepalania 100 tysięcy złotych w agencji? Zobacz artykuły, w
              których krok po kroku wyjaśniam inżynierskie metody obcinania
              zakresu specyfikacji, architekturę startową oraz bezpieczną
              walidację rynkowego popytu.
            </p>

            <div className="flex w-full flex-wrap items-center justify-start gap-x-2 gap-y-1 rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-sm text-slate-300 shadow-[0_0_30px_-12px_rgba(59,130,246,0.4)] sm:inline-flex sm:w-auto sm:justify-center sm:text-base">
              <span aria-hidden className="shrink-0 text-blue-400">
                💡
              </span>
              <span>
                Szukasz bezpośredniego wykonania technicznego przez inżyniera?
              </span>
              <Link
                href="/projektowanie-mvp"
                className="group inline-flex items-center gap-1.5 font-bold text-blue-400 transition-colors hover:text-blue-300"
              >
                Przejdź do oferty: Wdrożenie MVP w 30 dni
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-5 flex flex-col items-start gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="shrink-0 text-blue-400">
                  <Rocket className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium sm:text-sm">
                  Walidacja pomysłu w 30 dni
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="shrink-0 text-blue-400">
                  <Banknote className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium sm:text-sm">
                  Minimalne koszty na starcie
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="shrink-0 text-blue-400">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium sm:text-sm">
                  Bezpieczna weryfikacja popytu
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 py-12 sm:py-24">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-2.5 text-xl leading-snug font-extrabold tracking-tight text-white sm:mb-4 sm:text-3xl md:text-4xl">
            Poradniki i analizy dotyczące budowy MVP:
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
