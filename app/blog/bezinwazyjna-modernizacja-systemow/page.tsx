import { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import {   BookOpen, FileText, ArrowRight, CheckCircle2, Zap, ShieldCheck, Banknote, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"

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
      <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>

      <section className="relative w-full flex flex-col bg-slate-950 text-slate-50 pt-16 pb-12">
        <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-6 lg:gap-20">
          
          <div className="flex-1 w-full max-w-2xl text-left pt-4 sm:pt-8">
            <div className="mb-4 sm:mb-6">
              <SectionBadge><BookOpen className="h-3.5 w-3.5 shrink-0" />Bezinwazyjna modernizacja oprogramowania</SectionBadge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter text-white mb-5 sm:mb-6 leading-[1.1]">
              Bezinwazyjna modernizacja aplikacji i systemów dla firm – bez wstrzymywania sprzedaży i kosztownego pisania od nowa.
            </h1>
            <p className="text-base sm:text-lg text-slate-400 mb-5 sm:mb-8 leading-relaxed max-w-xl">
              Masz wrażenie, że Twoja aplikacja internetowa działa coraz wolniej, generuje błędy albo wymaga ciągłych napraw? Znajdziesz tu praktyczne poradniki i analizy wyjaśniające, jak unowocześniać oprogramowanie dla firm ewolucyjnie – bez wstrzymywania sprzedaży, bez ryzyka paraliżu biznesu i bez przepalania budżetu.
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
                <span className="text-blue-400 shrink-0"><Zap className="h-4 w-4" /></span>
                <span className="text-xs sm:text-sm font-medium">Jak przyspieszyć aplikację</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-blue-400 shrink-0"><ShieldCheck className="h-4 w-4" /></span>
                <span className="text-xs sm:text-sm font-medium">Bezpieczny rozwój w tle</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-blue-400 shrink-0"><Banknote className="h-4 w-4" /></span>
                <span className="text-xs sm:text-sm font-medium">Ochrona budżetu</span>
              </div>
            </div>
          </div>

          <div className="hidden w-full max-w-md lg:max-w-sm flex-shrink-0 lg:block lg:mt-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
              <h2 className="text-lg font-bold text-white mb-3 leading-snug">Program Wdrożeniowy: Modernizacja i Przyspieszanie Systemów (Tylko 2 firmy)</h2>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: "Nie chcesz czytać dziesiątek artykułów i wolisz omówić swój obecny system bezpośrednio ze mną? Zostań <strong class='text-white font-semibold'>Partnerem Założycielem</strong> w tym kwartale i przetestuj proces bezinwazyjnej naprawy oprogramowania w zamian za opinię po projekcie. Zyskujesz mój wyłączny czas, preferencyjne warunki oraz <strong class='text-white font-semibold'>3 miesiące bezpłatnej opieki</strong> nad kodem." }} />
              
              <p className="text-xs font-semibold text-white mb-2.5">Odbierz Pakiet Strategiczny na start (Wartość 600 zł za 0 zł):</p>
              <ul className="space-y-1.5 mb-4">
                <li className="text-xs text-slate-300 leading-snug flex items-start gap-2"><span className="text-blue-400 shrink-0 mt-0.5"><Zap className="h-3.5 w-3.5" /></span>Jak przyspieszyć aplikację: sprawdzone metody optymalizacji kodu, architektury i bazy danych.</li>
                <li className="text-xs text-slate-300 leading-snug flex items-start gap-2"><span className="text-blue-400 shrink-0 mt-0.5"><ShieldCheck className="h-3.5 w-3.5" /></span>Bezpieczny rozwój w tle: jak wdrażać zmiany i nowe funkcje, by klienci kupowali bez przerw 24/7.</li>
                <li className="text-xs text-slate-300 leading-snug flex items-start gap-2"><span className="text-blue-400 shrink-0 mt-0.5"><Banknote className="h-3.5 w-3.5" /></span>Ochrona budżetu: dlaczego nie musisz słuchać agencji namawiających na przepisanie całego systemu od zera.</li>
                <li className="text-xs text-slate-300 leading-snug flex items-start gap-2"><span className="text-blue-400 shrink-0 mt-0.5"><Map className="h-3.5 w-3.5" /></span>Bezpłatny plan poprawek: precyzyjna mapa drogowa usprawnienia Twojego oprogramowania.</li>
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
          <div className="mb-3 sm:mb-4">
            <SectionBadge>
            <span>Baza wiedzy</span>
          </SectionBadge>
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

      <CtaSection />
    </div>
  )
}
