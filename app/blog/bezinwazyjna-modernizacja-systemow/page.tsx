import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { FileText, ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bezinwazyjna Modernizacja Systemów | Artykuły i Poradniki IT",
    description: "Masz aplikację, która działa wolno, zacina się lub wymaga ciągłych napraw? Przeczytaj praktyczne poradniki o ewolucyjnej modernizacji oprogramowania.",
    alternates: {
      canonical: "https://www.karolmodelski.pl/blog/bezinwazyjna-modernizacja-systemow",
    },
  }
}

export default function ModernizacjaCategoryPage() {
  const posts = getAllPosts().filter((p) => p.silo === "Bezinwazyjna Modernizacja Systemów")

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.karolmodelski.pl/blog/bezinwazyjna-modernizacja-systemow#webpage",
        url: "https://www.karolmodelski.pl/blog/bezinwazyjna-modernizacja-systemow",
        name: "Bezinwazyjna Modernizacja Systemów | Artykuły",
        description: "Praktyczne poradniki i analizy wyjaśniające, jak unowocześniać oprogramowanie ewolucyjnie.",
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
          <div className="mb-2.5 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 sm:px-4 py-1 text-[9px] sm:text-xs font-bold text-blue-400 uppercase tracking-widest">
            Bezinwazyjna Modernizacja Systemów
          </div>
          <h1 className="text-lg sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-8 leading-snug sm:leading-[1.15]">
            Artykuły z kategorii: Bezinwazyjna Modernizacja Systemów
          </h1>
          <p className="text-[11px] sm:text-lg lg:text-xl text-slate-400 mb-5 sm:mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Masz wrażenie, że Twoja aplikacja działa coraz wolniej, generuje błędy albo wymaga ciągłych napraw? Znajdziesz tu praktyczne poradniki i analizy wyjaśniające, jak unowocześniać oprogramowanie ewolucyjnie – bez wstrzymywania sprzedaży, bez ryzyka paraliżu firmy i bez kosztownego pisania kodu od nowa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-5 sm:mb-12 w-full text-left">
            <div className="bg-white/5 border border-white/10 p-3 sm:p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-blue-400 mb-1 sm:mb-3 text-sm sm:text-xl">⚡</div>
              <h4 className="text-[10px] sm:text-sm font-bold text-white mb-0.5 sm:mb-1 leading-tight">Jak przyspieszyć aplikację</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">Sprawdzone metody optymalizacji kodu i bazy danych.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 sm:p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-blue-400 mb-1 sm:mb-3 text-sm sm:text-xl">🛡️</div>
              <h4 className="text-[10px] sm:text-sm font-bold text-white mb-0.5 sm:mb-1 leading-tight">Bezpieczny rozwój w tle</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">Jak wdrażać zmiany, by klienci kupowali bez przerw.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 sm:p-6 rounded-2xl backdrop-blur-sm">
              <div className="text-blue-400 mb-1 sm:mb-3 text-sm sm:text-xl">💸</div>
              <h4 className="text-[10px] sm:text-sm font-bold text-white mb-0.5 sm:mb-1 leading-tight">Ochrona budżetu</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">Dlaczego nie musisz słuchać agencji namawiających na pisanie systemu od zera.</p>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 max-w-md w-full relative mx-auto shadow-xl">
            <p className="text-[11px] sm:text-sm md:text-base font-bold text-blue-400 mb-1 sm:mb-2">
              Nie chcesz czytać setek artykułów i wolisz omówić swój projekt od razu?
            </p>
            <p className="text-[10px] sm:text-sm text-slate-300 mb-3 sm:mb-6 leading-relaxed max-w-sm mx-auto">
              Zarezerwuj bezpłatną, 30-minutową rozmowę strategiczną i odbierz Pakiet Mapy Drogowej o wartości 600 zł za 0 zł.
            </p>
            <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button size="lg" className="w-full py-3.5 sm:py-6 text-[11px] sm:text-sm font-bold rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg whitespace-normal h-auto leading-tight">ZAREZERWUJ BEZPŁATNĄ DIAGNOZĘ</Button>
            </a>
            <p className="text-[9px] sm:text-xs text-slate-500 mt-2.5 sm:mt-4 uppercase tracking-widest font-semibold">100% bezpłatnie • Rozmowa wideo • Bezpośredni kontakt z ekspertem</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 py-12 sm:py-24">
        <div className="mb-8 sm:mb-12 text-center">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">
            <span>Baza wiedzy</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2.5 sm:mb-4 leading-snug">
            Przeczytaj najnowsze poradniki z tej dziedziny:
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base">
            Wybierz interesujący Cię temat i dowiedz się, jak bezinwazyjnie usprawnić oprogramowanie w swojej firmie.
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
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-medium text-slate-500 pt-3 sm:pt-4 border-t border-slate-800/60">
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
              <span>Bez zobowiązań</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight max-w-3xl mx-auto">
              Masz dość teorii? Porozmawiajmy o praktyce w Twojej firmie.
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base md:text-lg">
              Artykuły i poradniki to świetny początek, ale każdy biznes ma swoją unikalną specyfikację, procesy i cele. Jeśli chcesz dowiedzieć się, jak konkretnie możemy usprawnić działanie i zyski Twojej firmy, porozmawiajmy bez zobowiązań.
            </p>
          </div>

          <div className="mx-auto mb-6 sm:mb-12 w-full max-w-2xl bg-slate-900/40 border border-slate-800 p-4 sm:p-10 rounded-2xl sm:rounded-3xl text-left">
            <h3 className="mb-4 sm:mb-8 text-center text-sm sm:text-xl font-bold text-white border-b border-slate-800 pb-3 sm:pb-6 leading-snug">
              Zarezerwuj darmowy audyt i odbierz Pakiet Mapy Drogowej{" "}
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
                    Indywidualny Plan Wdrożenia lub Modernizacji w 30 dni
                  </strong>
                  <span className="text-[11px] sm:text-sm text-slate-400 leading-relaxed">
                    Otrzymasz najszybszą ścieżkę optymalizacji systemów.
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
                className="relative flex h-auto min-h-[3.5rem] w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-4 sm:py-5 px-3 text-xs sm:text-sm font-bold shadow-lg transition-all whitespace-normal text-center leading-tight"
              >
                <CalendarDays className="h-5 w-5 shrink-0" />
                ZAREZERWUJ BEZPŁATNĄ DIAGNOZĘ
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
            </a>
            <p className="mt-3 sm:mt-4 text-[11px] sm:text-sm text-slate-400 italic font-medium text-center" dangerouslySetInnerHTML={{ __html: "(W ramach programu doradczego w tym kwartale zostały tylko <strong class='text-white font-semibold'>2 wolne miejsca</strong>)" }} />
          </div>
        </div>
      </section>
    </div>
  )
}
