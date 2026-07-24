import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { FileText, ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dedykowane Systemy dla Firm (Koszty i Zyski) | Artykuły",
    description: "Zastanawiasz się, ile naprawdę kosztuje dedykowane oprogramowanie i w jaki sposób automatyzacja procesów przekłada się na wzrost zysków?",
    alternates: {
      canonical: "https://www.karolmodelski.pl/blog/aplikacje-dla-firm",
    },
  }
}

export default function AplikacjeDlaFirmCategoryPage() {
  const posts = getAllPosts().filter((p) => p.silo === "Dedykowane Systemy dla Firm (Koszty i Zyski)")

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.karolmodelski.pl/blog/aplikacje-dla-firm#webpage",
        url: "https://www.karolmodelski.pl/blog/aplikacje-dla-firm",
        name: "Dedykowane Systemy dla Firm (Koszty i Zyski) | Artykuły",
        description: "Twarde analizy rynkowe, kalkulacje oraz poradniki o tym, jak inwestować w systemy internetowe bez ukrytych kosztów agencji.",
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

      <section className="relative w-full flex flex-col bg-slate-950 text-slate-50 pt-16 pb-12">
        <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-6 lg:gap-20">
          
          <div className="flex-1 w-full max-w-2xl text-left pt-4 sm:pt-8">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-2.5 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-tight sm:tracking-widest whitespace-nowrap">
              💰 Koszt stworzenia aplikacji dla firmy
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter text-white mb-5 sm:mb-6 leading-[1.1]">
              Ile kosztuje dedykowane oprogramowanie i jak aplikacje internetowe generują zyski w firmie?
            </h1>
            <p className="text-base sm:text-lg text-slate-400 mb-5 sm:mb-8 leading-relaxed max-w-xl">
              Zastanawiasz się, ile naprawdę kosztuje stworzenie aplikacji dla firmy i w jaki sposób automatyzacja procesów przekłada się na realny wzrost przychodów? Znajdziesz tu twarde analizy rynkowe, kalkulacje oraz praktyczne poradniki o tym, jak inwestować w dedykowane aplikacje biznesowe na zamówienie bez ukrytych opłat i chaosu agencji.
            </p>

            <div className="mb-5 sm:mb-6 lg:hidden">
              <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-tight">
                  Porozmawiajmy o Twoim projekcie
                </Button>
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">Zostało tylko 1 z 2 wolnych miejsc w tym kwartale</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-blue-400 shrink-0 text-base">💰</span>
                <span className="text-xs sm:text-sm font-medium">Realne koszty i budżety</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-blue-400 shrink-0 text-base">📈</span>
                <span className="text-xs sm:text-sm font-medium">Automatyzacja i zyski</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-blue-400 shrink-0 text-base">🛡️</span>
                <span className="text-xs sm:text-sm font-medium">Bezpieczne inwestycje</span>
              </div>
            </div>
          </div>

          <div className="hidden w-full max-w-md lg:max-w-sm flex-shrink-0 lg:block lg:mt-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
              <h2 className="text-lg font-bold text-white mb-3 leading-snug">Program Wdrożeniowy: Rentowne Aplikacje dla Firm (Tylko 2 firmy)</h2>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: "Nie chcesz tracić czasu na analizowanie artykułów i wolisz precyzyjnie wycenić swój pomysł bezpośrednio ze mną? Zostań <strong class='text-white font-semibold'>Partnerem Założycielem</strong> w bieżącym kwartale i przetestuj proces planowania budżetu oprogramowania w zamian za opinię po projekcie. Zyskujesz mój wyłączny czas, preferencyjne warunki oraz <strong class='text-white font-semibold'>3 miesiące bezpłatnej opieki</strong> nad wdrożonym systemem." }} />
              
              <p className="text-xs font-semibold text-white mb-2.5">Odbierz Pakiet Strategiczny na start (Wartość 600 zł za 0 zł):</p>
              <ul className="space-y-1.5 mb-4">
                <li className="text-xs text-slate-300 leading-snug">💰 Realne koszty i budżety: dowiesz się, ile kosztuje zrobienie aplikacji dla firmy i jak zaplanować wydatki bez niespodzianek.</li>
                <li className="text-xs text-slate-300 leading-snug">📈 Automatyzacja i zyski: w jaki sposób dedykowane oprogramowanie oszczędza czas Twojego zespołu i bezpośrednio zwiększa konwersję.</li>
                <li className="text-xs text-slate-300 leading-snug">🛡️ Bezpieczne inwestycje IT: jak dobierać technologie dopasowane do skali biznesu, by nie przepłacać za zbędne funkcje.</li>
                <li className="text-xs text-slate-300 leading-snug">🗺️ Osobista Mapa Drogowa IT: wstępna kalkulacja i optymalna ścieżka rozwoju systemu dopasowana do Twojego budżetu.</li>
              </ul>

              <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-tight">
                  Porozmawiajmy o Twoim projekcie
                </Button>
              </a>
              <p className="text-[10px] text-slate-400 text-center mt-3 uppercase tracking-widest font-semibold">Zostało tylko 1 z 2 wolnych miejsc w tym kwartale</p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 py-12 sm:py-24">
        <div className="mb-8 sm:mb-12 text-center">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">
            <span>Baza wiedzy</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2.5 sm:mb-4 leading-snug">
            Przeczytaj najnowsze poradniki z tej dziedziny:
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base">
            Wybierz interesujący Cię temat i dowiedz się, jak mądrze inwestować w oprogramowanie bez przepłacania.
          </p>
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

      {/* Finałowe CTA */}
      <section
        id="oferta"
        className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-12 sm:py-20 text-slate-300 md:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>

        <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center">
          <div className="mb-8 sm:mb-12">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">
              <span>Dedykowane systemy</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight max-w-3xl mx-auto">
              Chcesz poznać realny koszt i plan wdrożenia systemu w Twojej firmie?
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base md:text-lg">
              Artykuły pomagają zrozumieć rynek, ale każdy biznes ma swoją unikalną specyfikację. Jeśli chcesz dowiedzieć się, ile mogłaby kosztować aplikacja dla Twojej firmy i jak szybko przyniesie zwrot z inwestycji, porozmawiajmy.
            </p>
          </div>

          <div className="mx-auto mb-6 sm:mb-12 w-full max-w-2xl bg-slate-900/40 border border-slate-800 p-4 sm:p-10 rounded-2xl sm:rounded-3xl text-left">
            <h3 className="mb-4 sm:mb-8 text-center text-sm sm:text-xl font-bold text-white border-b border-slate-800 pb-3 sm:pb-6 leading-snug">
              Zarezerwuj bezpłatny audyt i odbierz Pakiet Mapy Drogowej{" "}
              <span className="block sm:inline mt-1 sm:mt-0 sm:ml-2 text-blue-400 text-[11px] sm:text-sm font-normal">
                (Wartość 600 zł za 0 zł)
              </span>
            </h3>

            <ul className="space-y-3 sm:space-y-6">
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="shrink-0 rounded-full bg-emerald-500/10 p-1.5 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <strong className="block text-xs sm:text-base font-bold text-white leading-snug">
                    30-minutowa diagnoza podczas rozmowy wideo
                  </strong>
                  <span className="text-[11px] sm:text-sm text-slate-400 leading-relaxed">
                    Przeanalizujemy aktualne wyzwania i cele Twojego biznesu.
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="shrink-0 rounded-full bg-emerald-500/10 p-1.5 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <strong className="block text-xs sm:text-base font-bold text-white leading-snug">
                    Wstępna wycena i plan budowy systemu bez ukrytych kosztów
                  </strong>
                  <span className="text-[11px] sm:text-sm text-slate-400 leading-relaxed">
                    Poznaj realny budżet i harmonogram prac.
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="shrink-0 rounded-full bg-emerald-500/10 p-1.5 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <strong className="block text-xs sm:text-base font-bold text-white leading-snug">
                    Bankowy Test Bezpieczeństwa Informacji
                  </strong>
                  <span className="text-[11px] sm:text-sm text-slate-400 leading-relaxed">
                    Weryfikacja pod kątem rygorystycznych standardów finansowych.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://calendly.com/kontakt-karolmodelski/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md"
            >
              <Button
                size="lg"
                className="relative flex h-auto min-h-[3.5rem] w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-4 sm:py-5 px-5 sm:px-6 text-xs sm:text-sm font-bold shadow-lg transition-all whitespace-normal text-center leading-tight"
              >
                Porozmawiajmy o Twoim projekcie
              </Button>
            </a>
            <p className="mt-3 sm:mt-4 text-[11px] sm:text-sm text-slate-400 italic font-medium text-center" dangerouslySetInnerHTML={{ __html: "(W ramach programu doradczego w tym kwartale zostały tylko <strong class='text-white font-semibold'>2 wolne miejsca</strong>)" }} />
          </div>
        </div>
      </section>
    </div>
  )
}
