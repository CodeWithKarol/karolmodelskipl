import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"
import { StorySection } from "@/components/story-section"
import { ContrastSection } from "@/components/contrast-section"
import { FaqSection } from "@/components/faq-section"
import { ArrowRight, Check, ShieldCheck } from "lucide-react"
import {
  hero,
  story,
  valueStack,
  faq,
  metadata,
  guarantee,
  bankingStability,
  comparison,
  offer,
} from "@/lib/content/aplikacje-internetowe/page"
import { GuaranteeSection } from "@/components/guarantee-section"
import { PackageSpecSection } from "@/components/package-spec-section"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm",
    },
  }
}

export default function AplikacjeInternetoweDlaFirmPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm#webpage",
        url: "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm",
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
            "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm#service",
        },
        hasPart: {
          "@id": "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm#faq",
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
          "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm#service",
        name: metadata.title,
        description: metadata.description,
        provider: { "@id": "https://www.karolmodelski.pl/#organization" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm#faq",
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


      {/* Sekcja 1: HERO */}
      <section className="relative w-full flex flex-col bg-slate-950 text-slate-50 pt-20 pb-16 sm:pt-24 lg:pb-12 lg:min-h-screen">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
        <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>

        <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center pt-4 sm:pt-8">

          <div className="w-full max-w-3xl mx-auto pt-4 sm:pt-8">
            {/* Callout — badge jak w /projektowanie-mvp */}
            <div className="mb-5 sm:mb-7 flex justify-center animate-[fade-up_0.7s_ease-out_both]">
              <SectionBadge className="border-white/10 bg-white/5 text-slate-400 text-[10px] sm:text-xs text-center max-w-md sm:max-w-lg">
                {hero.callout}
              </SectionBadge>
            </div>

            <h1 className="text-4xl leading-[1.12] tracking-tight text-balance text-white mb-4 sm:mb-5 animate-[fade-up_0.7s_ease-out_0.1s_both] sm:text-5xl sm:leading-[1.1] lg:text-6xl">
              <span className="block">
                {hero.h1Lead}{" "}
                <span className="text-blue-500">{hero.h1Highlight}</span>{" "}
                {hero.h1Tail}
              </span>
              <span className="block mt-3 sm:mt-4 text-lg font-semibold leading-relaxed text-slate-300 sm:text-xl lg:text-2xl lg:leading-snug">
                {hero.h1Second}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 mb-7 sm:mb-9 leading-relaxed max-w-2xl mx-auto animate-[fade-up_0.7s_ease-out_0.2s_both]">
              {hero.subheading}
            </p>

            {/* CTA */}
            <div className="animate-[fade-up_0.7s_ease-out_0.3s_both]">
              <Button asChild size="lg" className="w-full max-w-md mx-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 text-xs font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-snug sm:py-4 sm:text-sm">
                <a href={hero.cta.href} role="button">
                  <span className="block">{hero.cta.label}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </Button>

              {/* Micro-copy pod CTA */}
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

      {/* Sekcja 3: STOS WARTOŚCI (Fundament + Bonusy) */}
      <PackageSpecSection spec={valueStack} className="py-16 sm:py-20" />

      {/* Sekcja: PORÓWNANIE – tabela */}
      <ContrastSection
        contrast={{
          badge: comparison.badge,
          title: comparison.title,
          blue_title: comparison.columns.me,
          red_title: comparison.columns.agency,
          rows: comparison.rows.map((row) => ({
            area: row.feature,
            blue: row.me,
            red: row.agency,
          })),
        }}
        className="py-16 sm:py-20"
      />

      {/* Sekcja: Bankowa stabilność w realiach MŚP */}
      <section className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-12 sm:py-20 text-slate-300 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-3xl">
          <div className="mb-8 sm:mb-12 text-center">
            <div className="mb-3 sm:mb-4">
              <SectionBadge>
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>{bankingStability.badge}</span>
              </SectionBadge>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight">
              {bankingStability.title}
            </h2>
          </div>

          <blockquote className="mb-8 sm:mb-12 border-l-2 border-blue-500/60 pl-4 sm:pl-6">
            <p className="text-slate-300 font-light leading-relaxed text-sm sm:text-base md:text-lg">
              {bankingStability.intro}
            </p>
          </blockquote>

          <h3 className="mb-2 sm:mb-4 text-base sm:text-2xl font-bold text-white leading-snug sm:leading-tight">
            {bankingStability.subtitle}
          </h3>
          <p className="text-slate-400 font-light leading-relaxed text-sm sm:text-base md:text-lg">
            {bankingStability.text}
          </p>
        </div>
      </section>

      {/* Sekcja 6: Gwarancje i Bezpieczeństwo */}
      <GuaranteeSection guarantee={guarantee} />

      {/* Sekcja 7: FAQ */}
      <FaqSection
        faq={{
          title: "Najczęściej zadawane pytania",
          subtitle: faq.subtitle,
          items: faq.items.map((item) => ({
            question: item.q,
            answer: item.a,
          })),
        }}
        className="py-16 sm:py-20"
      />


      <CtaSection content={offer} ctaHref="/kwalifikacja-aplikacje" />
    </main>
  )
}
