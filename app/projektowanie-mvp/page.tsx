import { Metadata } from "next"
import { GuaranteeSection } from "@/components/guarantee-section"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"
import { StorySection } from "@/components/story-section"
import { ContrastSection } from "@/components/contrast-section"
import { OfferSection } from "@/components/offer-section"
import { FaqSection } from "@/components/faq-section"
import { PackageSpecSection } from "@/components/package-spec-section"
import { content } from "@/lib/content"

function TrustLogos({ label, logos }: { label: string; logos: string[] }) {
  return (
    <p className="mt-3 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[10px] font-medium text-slate-500">
      <span>{label}</span>
      {logos.map((logo, i) => (
        <span key={logo} className="flex items-center gap-x-1.5">
          {i > 0 && <span className="text-slate-600">•</span>}
          <span className="font-semibold text-slate-400">{logo}</span>
        </span>
      ))}
    </p>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { mvp } = content
  return {
    title: mvp.metadata.title,
    description: mvp.metadata.description,
    alternates: {
      canonical: "https://www.karolmodelski.pl/projektowanie-mvp",
    },
  }
}

export default function ProjektowanieMvpPage() {
  const { mvp } = content

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.karolmodelski.pl/projektowanie-mvp#webpage",
        "url": "https://www.karolmodelski.pl/projektowanie-mvp",
        "name": mvp.metadata.title,
        "description": mvp.metadata.description,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.karolmodelski.pl/#website",
          "url": "https://www.karolmodelski.pl/",
          "name": "Karol Modelski - Aplikacje Internetowe dla Firm | Warszawa",
        },
        "mainEntity": {
          "@id": "https://www.karolmodelski.pl/projektowanie-mvp#service",
        },
        "hasPart": {
          "@id": "https://www.karolmodelski.pl/projektowanie-mvp#faq",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.karolmodelski.pl/#organization",
        "name": "Karol Modelski - Aplikacje Internetowe dla Firm | Warszawa",
        "url": "https://www.karolmodelski.pl/",
        "telephone": "+48664598563",
        "priceRange": "$$",
        "areaServed": "PL",
        "sameAs": "https://g.page/r/CZSVfAGtTiIzEBM",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Warszawa",
          "addressCountry": "PL",
        },
        "founder": {
          "@type": "Person",
          "@id": "https://www.karolmodelski.pl/#person",
          "name": "Karol Modelski",
          "jobTitle": "Niezależny Partner Technologiczny",
          "sameAs": "https://www.linkedin.com/in/karol-modelski/",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.karolmodelski.pl/projektowanie-mvp#service",
        "name": mvp.service.title,
        "description": mvp.service.description,
        "provider": {
          "@id": "https://www.karolmodelski.pl/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.karolmodelski.pl/projektowanie-mvp#faq",
        "mainEntity": mvp.faq.items.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
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
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

        <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center pt-4 sm:pt-8">
          
          <div className="w-full max-w-3xl mx-auto pt-4 sm:pt-8">
            <div className="mb-5 sm:mb-7 flex justify-center animate-[fade-up_0.7s_ease-out_both]">
              <SectionBadge className="border-white/10 bg-white/5 text-slate-400 text-[10px] sm:text-xs text-center">{mvp.hero.badge}</SectionBadge>
            </div>
            <h1 className="text-4xl leading-[1.12] tracking-tight text-balance text-white mb-4 sm:mb-5 animate-[fade-up_0.7s_ease-out_0.1s_both] sm:text-5xl sm:leading-[1.1] lg:text-6xl">
              {mvp.hero.title}
              {mvp.hero.title_highlight && (
                <span className="block mt-3 sm:mt-4 text-lg font-semibold leading-relaxed text-slate-300 sm:text-xl lg:text-2xl lg:leading-snug">
                  {mvp.hero.title_highlight}
                </span>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-400 mb-7 sm:mb-9 leading-relaxed max-w-2xl mx-auto animate-[fade-up_0.7s_ease-out_0.2s_both]">
              {mvp.hero.subtitle}
            </p>

            <div className="mb-6 sm:mb-8 animate-[fade-up_0.7s_ease-out_0.25s_both]">
              <Button
                asChild
                size="lg"
                className="flex-col gap-1 w-full max-w-md mx-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 text-xs font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-snug sm:gap-1.5 sm:py-4 sm:text-sm"
              >
                <a href="/aplikuj" role="button">
                  <span className="block">{mvp.hero.qualification.cta_line1}</span>
                  <span className="block">{mvp.hero.qualification.cta_line2} →</span>
                </a>
              </Button>
              <p className="text-[11px] sm:text-xs text-slate-400 text-center mt-2.5 font-medium leading-relaxed">{mvp.hero.cta_sub}</p>
              <TrustLogos label={mvp.hero.qualification.trust_label} logos={mvp.hero.qualification.trust_logos} />
            </div>

            <div className="grid gap-3 sm:gap-4 sm:grid-cols-3 mt-10 sm:mt-14 text-left animate-[fade-up_0.7s_ease-out_0.35s_both]">
              {mvp.hero.pegs.map((peg) => (
                <div key={peg.title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5">
                  <p className="text-sm font-semibold text-white leading-snug mb-1.5">{peg.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{peg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja 2: THE "AGENCY TRAP" (Agitacja bólu) */}
      <StorySection
        title={mvp.trap.title}
        intro={mvp.trap.text1}
        context={mvp.trap.text2}
        points={mvp.trap.negative_points}
        className="py-12 sm:py-20"
      />



      {/* Sekcja 3: VISUAL CONTRAST MATRIX (Nowa Okazja – Podejście Szybkiej Wersji Startowej) */}
      <ContrastSection contrast={mvp.contrast} className="py-12 sm:py-20" />

      {/* Sekcja 4: MECHANISM / PROCESS (Jak krok po kroku uruchamiamy Twoją aplikację w 30 dni?) */}
      <OfferSection
        badge="Harmonogram wdrożenia"
        mdColumns="3"
        sectionId="proces"
        offer={{
          title: mvp.mechanism.title,
          subheading: mvp.mechanism.subtitle,
          paths: mvp.mechanism.cards.map((card) => ({
            title: card.label,
            situation: card.title,
            desc: card.content,
            result: card.result,
          })),
        }}
        className="py-12 sm:py-20"
      />

      {/* Sekcja 5: Specyfikacja Pakietu i Warunki Rozliczenia */}
      <PackageSpecSection spec={mvp.spec} />

      {/* Sekcja 6: Gwarancje i Bezpieczeństwo */}
      <GuaranteeSection guarantee={mvp.guarantee} />

      {/* Sekcja 7: FAQ */}
      <FaqSection faq={mvp.faq} className="py-12 sm:py-24" />

      <CtaSection content={mvp.cta} ctaHref="/aplikuj" />
    </main>
  )
}
