import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { BlogPostGrid } from "@/components/blog-post-grid"
import { FeaturedPosts } from "@/components/featured-posts"
import {
  BookOpen,
  ArrowRight,
  Target,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"
import { CtaSection, type CtaContent } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"

const ctaContent: CtaContent = {
  badge: "Program Partnerski: Audyt Strategiczny i Nadzór IT",
  title:
    "Masz na stole wyceny od software house'ów lub chcesz skonsultować kierunek cyfryzacji firmy w 4 oczy?",
  description:
    "Zamiast podejmować wielotysięczne decyzje technologiczne „na wyczucie”, przenieś odpowiedzialność analityczną na moje barki. Jako Niezależny Partner Technologiczny w każdym kwartale obejmuję opieką strategiczną <strong class='text-white font-semibold'>maksymalnie dwie firmy</strong>. W zamian za feedback po zakończeniu analizy, możesz odebrać dedykowany Pakiet Strategiczny całkowicie <strong class='text-white font-semibold'>za 0 zł</strong>.",
  package_title:
    "Co namacalnie otrzymujesz w Pakiecie Strategicznym (Wartość 600 zł za 0 zł):",
  offer_items: [
    {
      title:
        "Bezpłatny Audyt Umów i Wycen IT: Prześwietlenie kosztorysów od agencji, wykrycie sztucznie napompowanych godzin i ukrytych opłat.",
    },
    {
      title:
        "Bankowy Test Bezpieczeństwa i Architektury: Weryfikacja odporności infrastruktury na wycieki danych i uzależnienie od jednego programisty (vendor lock-in).",
    },
    {
      title:
        "Strategiczna Mapa Drogowa Rozwoju IT: Przejrzysty, rozpisany krok po kroku plan cyfryzacji firmy z priorytetami biznesowymi i estymacją budżetu.",
    },
  ],
  button: "Odbierz Bezpłatny Audyt Strategiczny (0 zł)",
  footer:
    "Zajmij jedno z 2 wolnych miejsc w tym kwartale. Każdy miesiąc braku niezależnego nadzoru nad technologią to ryzyko podpisania niekorzystnej umowy i bezradnego patrzenia, jak Twój budżet ucieka przez palce.",
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Strategia IT i Niezależne Partnerstwo Technologiczne | Poradniki",
    description:
      "Jak mądrze planować rozwój cyfrowy firmy, weryfikować wyceny zewnętrznych dostawców i chronić budżet przed naciąganiem ze strony software house'ów? Poznaj praktykę Fractional CTO.",
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
            Strategia IT i Niezależne Partnerstwo Technologiczne – Poradniki
            i Praktyka
          </h1>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-pretty text-slate-400 sm:mx-auto sm:mb-8 sm:text-lg">
            Jak mądrze planować rozwój cyfrowy firmy, weryfikować wyceny
            zewnętrznych dostawców i chronić budżet przed naciąganiem ze strony
            software house&apos;ów? Dowiedz się, jak korzystać ze wsparcia
            Fractional CTO (Dyrektora Technologicznego na godziny), by chronić
            portfel, budować bezpieczną architekturę i egzekwować jakość od
            programistów — bez płacenia 30 tys. zł miesięcznie za etat
            zarządczy.
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
          <h2 className="mb-2.5 text-xl leading-snug font-extrabold tracking-tight text-white sm:mb-4 sm:text-3xl md:text-4xl">
            Poradniki i analizy dotyczące strategii oraz architektury IT:
          </h2>
        </div>

        <FeaturedPosts
          posts={posts.slice(0, 3).map((post) => ({
            slug: post.slug,
            title: post.title,
            desc: post.excerpt,
            cta: "Przeczytaj artykuł",
            readingTime: post.readingTime,
            date: post.date,
          }))}
          className={posts.length > 3 ? "mb-10 sm:mb-16" : "mb-20"}
        />
        {posts.length > 3 && <BlogPostGrid posts={posts.slice(3)} className="mb-20" />}
      </main>

      <CtaSection content={ctaContent} />
    </div>
  )
}
