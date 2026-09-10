import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"
import { StorySection } from "@/components/story-section"
import { ComparisonTableSection } from "@/components/comparison-table-section"
import { FaqSection } from "@/components/faq-section"
import { ArrowRight, Check } from "lucide-react"
import {
  hero,
  story,
  valueStack,
  comparison,
  guarantee,
  faq,
  metadata,
  cta,
} from "@/lib/content/doradztwo-techniczne-dla-firm/page"
import { GuaranteeSection } from "@/components/guarantee-section"
import { PackageSpecSection } from "@/components/package-spec-section"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: "https://www.karolmodelski.pl/doradztwo-techniczne-dla-firm",
    },
  }
}

export default function DoradztwoTechnicznePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.karolmodelski.pl/doradztwo-techniczne-dla-firm#webpage",
        url: "https://www.karolmodelski.pl/doradztwo-techniczne-dla-firm",
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
            "https://www.karolmodelski.pl/doradztwo-techniczne-dla-firm#service",
        },
        hasPart: {
          "@id": "https://www.karolmodelski.pl/doradztwo-techniczne-dla-firm#faq",
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
          "https://www.karolmodelski.pl/doradztwo-techniczne-dla-firm#service",
        name: metadata.title,
        description: metadata.description,
        serviceType: "Konsulting technologiczny i doradztwo IT dla firm",
        provider: {
          "@id": "https://www.karolmodelski.pl/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.karolmodelski.pl/doradztwo-techniczne-dla-firm#faq",
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
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
      <section className="relative w-full flex flex-col bg-slate-950 text-slate-50 pt-20 pb-16 sm:pt-24 lg:pb-12 lg:min-h-screen">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
        <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>

        <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center pt-4 sm:pt-8">
          <div className="w-full max-w-3xl mx-auto pt-4 sm:pt-8">
            <div className="mb-5 sm:mb-7 flex justify-center animate-[fade-up_0.7s_ease-out_both]">
              <SectionBadge className="border-white/10 bg-white/5 text-slate-400 text-[10px] sm:text-xs text-center max-w-md sm:max-w-lg">
                {hero.badge}
              </SectionBadge>
            </div>

            <h1 className="text-4xl leading-[1.12] tracking-tight text-balance text-white mb-3 sm:mb-4 animate-[fade-up_0.7s_ease-out_0.1s_both] sm:text-5xl sm:leading-[1.1] lg:text-6xl">
              {hero.title}
            </h1>

            {hero.titleHighlight && (
              <p className="mb-4 text-lg font-semibold leading-relaxed text-slate-300 sm:mb-5 sm:text-xl lg:text-2xl lg:leading-snug">
                {hero.titleHighlight}
              </p>
            )}

            <p className="text-base sm:text-lg text-slate-400 mb-7 sm:mb-9 leading-relaxed max-w-2xl mx-auto animate-[fade-up_0.7s_ease-out_0.2s_both]">
              {hero.description}
            </p>

            <div className="animate-[fade-up_0.7s_ease-out_0.3s_both]">
              <Button asChild size="lg" className="w-full max-w-md mx-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 text-xs font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-snug sm:py-4 sm:text-sm">
                <a href="/kwalifikacja-doradztwo" role="button">
                  <span className="block">{hero.cta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </Button>

              <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
                {hero.microcopy.map((item, i) => (
                  <li
                    key={i}
                    className={`inline-flex items-center gap-2 text-left text-xs sm:text-sm leading-snug ${
                      item.urgent ? "text-amber-300 font-semibold" : "text-slate-400 font-medium"
                    }`}
                  >
                    <Check className={`h-4 w-4 shrink-0 ${item.urgent ? "text-amber-400" : "text-blue-500"}`} />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja 2: STORY (Agitacja bólu) */}
      <StorySection
        title={story.title}
        intro={story.intro}
        context={story.context}
        points={story.points}
        className="py-16 sm:py-20"
      />

      {/* Sekcja: STOS WARTOŚCI (Fundament + Bonusy) */}
      <PackageSpecSection spec={valueStack} />

      {/* Sekcja 3: Porównanie – Trzy Drogi do Nadzoru Technicznego */}
      <ComparisonTableSection comparison={comparison} />

      {/* Sekcja 5: GWARANCJE I RYGOR BANKOWY */}
      <GuaranteeSection guarantee={guarantee} />

      {/* Sekcja 6: FAQ */}
      <FaqSection
        faq={{
          title: "Najczęściej zadawane pytania",
          subtitle: faq.subtitle,
          items: faq.items.map((item) => ({
            question: item.q,
            answer: item.a,
          })),
        }}
        className="py-16 sm:py-24"
      />


      <CtaSection content={cta} ctaHref="/kwalifikacja-doradztwo" />
    </main>
  )
}
