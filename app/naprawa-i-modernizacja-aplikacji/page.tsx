import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CtaSection } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"
import {
  ShieldCheck,
  Target,
  Banknote,
  HelpCircle,
  Flame,
  Zap,
  TrendingUp,
  Gem,
  Map,
  CheckCircle2,
} from "lucide-react"
import {
  hero,
  story,
  safety,
  mechanism,
  contrast,
  faq,
  metadata,
  guarantee,
  offer,
} from "@/lib/content/naprawa-i-modernizacja-aplikacji/page"
import { GuaranteeSection } from "@/components/guarantee-section"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: "https://www.karolmodelski.pl/naprawa-i-modernizacja-aplikacji",
    },
  }
}

export default function ModernizacjaOprogramowaniaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.karolmodelski.pl/naprawa-i-modernizacja-aplikacji#webpage",
        url: "https://www.karolmodelski.pl/naprawa-i-modernizacja-aplikacji",
        name: metadata.title,
        description: metadata.description,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.karolmodelski.pl/#website",
          url: "https://www.karolmodelski.pl/",
          name: "Karol Modelski - Aplikacje Internetowe dla Firm | Warszawa",
        },
        mainEntity: {
          "@id":
            "https://www.karolmodelski.pl/naprawa-i-modernizacja-aplikacji#service",
        },
        hasPart: {
          "@id": "https://www.karolmodelski.pl/naprawa-i-modernizacja-aplikacji#faq",
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
      {
        "@type": "Service",
        "@id":
          "https://www.karolmodelski.pl/naprawa-i-modernizacja-aplikacji#service",
        name: metadata.title,
        description: metadata.description,
        provider: { "@id": "https://www.karolmodelski.pl/#organization" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.karolmodelski.pl/naprawa-i-modernizacja-aplikacji#faq",
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  }

  return (
    <main className="flex-1 overflow-hidden bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sekcja 1: HERO SECTION */}
      <section className="relative w-full flex flex-col bg-slate-950 text-slate-50 pt-16 pb-16 lg:pb-12 lg:min-h-screen">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
        <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>

        <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-6 lg:gap-20">
          
          <div className="flex-1 w-full max-w-2xl text-left pt-4 sm:pt-8">
            <div className="mb-4 sm:mb-6">
              <SectionBadge><Gem className="h-3.5 w-3.5 shrink-0" />{hero.badge}</SectionBadge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter text-white mb-5 sm:mb-6 leading-[1.1]">
              {hero.title}
              {hero.titleHighlight && (
                <span className="block text-blue-500 mt-1 sm:mt-2">{hero.titleHighlight}</span>
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-400 mb-5 sm:mb-8 leading-relaxed max-w-xl">
              {hero.description}
            </p>

            <div className="mb-5 sm:mb-6 lg:hidden">
              <a href={siteConfig.calendlyLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-tight">
                  {hero.pilot_program.cta}
                </Button>
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">{hero.cta_sub}</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {hero.indicators.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <span className="text-blue-400 shrink-0 text-base">
                    {i === 0 ? <Zap className="h-4 w-4" /> : i === 1 ? <ShieldCheck className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}
                  </span>
                  <span className="text-xs sm:text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden w-full max-w-md lg:max-w-sm flex-shrink-0 lg:block lg:mt-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
              <h2 className="text-lg font-bold text-white mb-3 leading-snug">{hero.pilot_program.title}</h2>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: hero.pilot_program.description }} />
              
              <p className="text-xs font-semibold text-white mb-2.5">{hero.pilot_program.package_title}</p>
              <ul className="space-y-1.5 mb-4">
                {hero.offer_items.map((item, i) => (
                  <li key={i} className="text-xs text-slate-300 leading-snug flex items-start gap-2">
                    <span className="text-blue-400 shrink-0 mt-0.5">
                      {i === 0 && <Zap className="h-3.5 w-3.5" />}
                      {i === 1 && <ShieldCheck className="h-3.5 w-3.5" />}
                      {i === 2 && <Zap className="h-3.5 w-3.5" />}
                      {i === 3 && <Map className="h-3.5 w-3.5" />}
                    </span>
                    {item.title}
                  </li>
                ))}
              </ul>

              <a href={siteConfig.calendlyLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-tight">
                  {hero.pilot_program.cta}
                </Button>
              </a>
              <p className="text-[10px] text-slate-400 text-center mt-3 uppercase tracking-widest font-semibold">{hero.cta_sub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja 2: STORY (Agitacja bólu) */}
      <section id="problem" className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <div className="mb-16 text-center">
            <div className="mb-4">
              <SectionBadge variant="red">
              <Flame className="h-4 w-4" />
              <span>Diagnoza problemu</span>
            </SectionBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
              {story.title}
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg mb-4" dangerouslySetInnerHTML={{ __html: story.intro }} />
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg italic text-slate-200">
              {story.context}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {story.points.map((point, idx) => (
              <div key={idx} className="group bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl hover:border-slate-700 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6">
                  <div className="text-red-400 font-black text-2xl shrink-0" aria-hidden="true">0{idx + 1}</div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2" dangerouslySetInnerHTML={{ __html: point.title.replace(/^Objaw\s+\d+:\s*/, "") }} />
                    <p className="text-slate-400 leading-relaxed text-xs sm:text-sm" dangerouslySetInnerHTML={{ __html: point.desc }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja 3: INŻYNIERYJNA GWARANCJA BEZPIECZEŃSTWA */}
      <section className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 container mx-auto max-w-5xl px-4">
          <div className="mb-12 sm:mb-16 text-center">
            <div className="mb-4">
              <SectionBadge variant="emerald">
              <ShieldCheck className="h-4 w-4" />
              <span>{safety.badge}</span>
            </SectionBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
              {safety.title}
            </h2>
          </div>

          <figure className="mx-auto mb-8 sm:mb-12 max-w-3xl text-center">
            <blockquote className="text-lg sm:text-2xl md:text-[28px] font-bold text-white leading-snug sm:leading-snug">
              {safety.fear}
            </blockquote>
          </figure>

          <p className="mb-10 sm:mb-16 text-center text-sm sm:text-lg font-semibold text-emerald-400 tracking-wide">
            {safety.lead}
          </p>

          <div className="mx-auto grid max-w-4xl gap-8 sm:gap-12 md:grid-cols-2 md:gap-0">
            {safety.steps.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-start gap-3 sm:gap-4 ${
                  i === 1 ? "md:border-l md:border-slate-800 md:pl-10 lg:pl-14" : "md:pr-10 lg:pr-14"
                }`}
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8 sm:divide-x sm:divide-slate-800">
            {safety.guarantees.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 sm:items-center sm:px-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 sm:mt-0 sm:h-5 sm:w-5 shrink-0 text-emerald-400" />
                <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed text-left">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja 4: REWOLUCYJNY MECHANIZM (Proces pracy krok po kroku) */}
      <section className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 container mx-auto max-w-5xl px-4">
          <div className="mb-16 text-center">
            <div className="mb-4">
              <SectionBadge>
              <ShieldCheck className="h-4 w-4" />
              <span>Krok po kroku</span>
            </SectionBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
              {mechanism.title}
            </h2>
            {mechanism.subtitle && <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg">{mechanism.subtitle}</p>}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {mechanism.cards.map((card, i) => (
              <div
                key={i}
                className={`group bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-all flex flex-col ${
                  i < 3 
                    ? "lg:col-span-2 md:col-span-1" 
                    : i === 3 
                    ? "lg:col-span-3 md:col-span-1" 
                    : "lg:col-span-3 md:col-span-2"
                }`}
              >
                <span className="hidden">0{i + 1}</span>
                <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 font-bold text-lg shadow-inner z-10">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white leading-tight group-hover:text-blue-400 transition-colors z-10">
                  {card.title.replace(/^\d+\.\s+/, "")}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm z-10">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja 4: VISUAL CONTRAST MATRIX */}
      <section className="relative border-t border-slate-900/50 bg-slate-950 py-20 text-slate-300 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 container mx-auto max-w-5xl px-4">
          <div className="mb-16 text-center">
            <div className="mb-4">
              <SectionBadge>
              <ShieldCheck className="h-4 w-4" />
              <span>Porównanie metod</span>
            </SectionBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
              {contrast.title}
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-base sm:text-lg">{contrast.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contrast.comparisons.map((item, i) => (
              <div key={i} className="contents">
                <div className="bg-slate-900/40 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col hover:border-slate-700 transition-all">
                  <div className="text-red-400 mb-3 font-bold text-[10px] uppercase tracking-widest">{contrast.red_ocean_title}</div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-300 mb-3 leading-snug">{item.red.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">{item.red.desc}</p>
                </div>
                <div className="bg-blue-600/10 border border-blue-500/30 p-6 sm:p-8 rounded-2xl flex flex-col hover:border-blue-500/50 transition-all">
                  <div className="text-blue-400 mb-3 font-bold text-[10px] uppercase tracking-widest">{contrast.blue_ocean_title}</div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">{item.blue.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{item.blue.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja 5: Gwarancje */}
      <GuaranteeSection guarantee={guarantee} />

      {/* Sekcja 6: FAQ */}
      <section className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <div className="mb-12 text-center">
          <div className="mb-6">
            <SectionBadge>
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </SectionBadge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-slate-400 font-light leading-relaxed text-base sm:text-lg">
            {faq.subtitle}
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faq.items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-slate-800/60 bg-slate-900/40 px-5 sm:px-6 backdrop-blur-sm transition-all hover:border-slate-700 data-[state=open]:border-blue-500/30">
              <AccordionTrigger className="py-4 sm:py-6 text-left text-sm sm:text-base font-bold text-slate-200 hover:text-white hover:no-underline">{item.q}</AccordionTrigger>
              <AccordionContent className="pb-5 sm:pb-6 text-xs sm:text-sm leading-relaxed text-slate-400">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>


      <CtaSection content={offer} />
    </main>
  )
}
