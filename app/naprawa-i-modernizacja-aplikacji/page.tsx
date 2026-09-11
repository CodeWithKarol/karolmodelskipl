import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"
import { StorySection } from "@/components/story-section"
import { ContrastSection } from "@/components/contrast-section"
import { FaqSection } from "@/components/faq-section"
import { Banknote, CalendarCheck, KeyRound } from "lucide-react"
import {
  hero,
  story,
  valueStack,
  contrast,
  faq,
  metadata,
  guarantee,
  process,
  offer,
} from "@/lib/content/naprawa-i-modernizacja-aplikacji/page"
import { GuaranteeSection } from "@/components/guarantee-section"
import { PackageSpecSection } from "@/components/package-spec-section"
import { OfferSection } from "@/components/offer-section"

function TrustLogos({ label, logos }: { label: string; logos: string[] }) {
  return (
    <p className="mt-3 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[10px] font-medium text-muted-foreground">
      <span>{label}</span>
      {logos.map((logo, i) => (
        <span key={logo} className="flex items-center gap-x-1.5">
          {i > 0 && <span className="text-muted-foreground">•</span>}
          <span className="font-semibold text-muted-foreground">{logo}</span>
        </span>
      ))}
    </p>
  )
}

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
    <main className="flex-1 overflow-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sekcja 1: HERO SECTION */}
      <section className="relative w-full flex flex-col bg-background text-foreground pt-20 pb-16 sm:pt-24 lg:pb-12 lg:min-h-screen">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

        <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center pt-4 sm:pt-8">

          <div className="w-full max-w-3xl mx-auto pt-4 sm:pt-8">
            <div className="mb-5 sm:mb-7 flex justify-center animate-[fade-up_0.7s_ease-out_both]">
              <SectionBadge variant="neutral" className="text-[10px] sm:text-xs text-center">{hero.badge}</SectionBadge>
            </div>
            <h1 className="text-4xl leading-[1.12] tracking-tight text-balance text-foreground mb-4 sm:mb-5 animate-[fade-up_0.7s_ease-out_0.1s_both] sm:text-5xl sm:leading-[1.1] lg:text-6xl">
              {hero.title}
              {hero.title_highlight && (
                <span className="block mt-3 sm:mt-4 text-lg font-semibold leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl lg:leading-snug">
                  {hero.title_highlight}
                </span>
              )}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-7 sm:mb-9 leading-relaxed max-w-2xl mx-auto animate-[fade-up_0.7s_ease-out_0.2s_both]">
              {hero.subtitle}
            </p>

            <div className="mb-6 sm:mb-8 animate-[fade-up_0.7s_ease-out_0.25s_both]">
              <Button
                asChild
                size="lg"
                className="w-full max-w-md mx-auto h-auto py-3 px-6 text-xs font-bold rounded-xl shadow-lg whitespace-normal text-center leading-snug sm:py-4 sm:text-sm"
              >
                <a href="/kwalifikacja-modernizacja" role="button">
                  {hero.qualification.cta_line1}
                </a>
              </Button>
              <p className="text-[11px] sm:text-xs text-muted-foreground text-center mt-2.5 font-medium leading-relaxed">{hero.cta_sub}</p>
              <TrustLogos label={hero.qualification.trust_label} logos={hero.qualification.trust_logos} />
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto mt-10 sm:mt-14 text-left animate-[fade-up_0.7s_ease-out_0.35s_both]">
            <div className="grid gap-y-6 sm:grid-cols-3 sm:gap-y-0">
              {hero.pegs.map((peg, i) => {
                const Icon = [Banknote, CalendarCheck, KeyRound][i % 3]
                const isLast = i === hero.pegs.length - 1
                const cellClass = [
                  i > 0 ? "border-t border-border pt-5 sm:mt-0 sm:border-t-0 sm:pt-0 sm:border-l" : "",
                  !isLast ? "sm:pr-8" : "",
                  i > 0 ? "sm:pl-8" : "",
                ]
                  .filter(Boolean)
                  .join(" ")
                return (
                  <div key={peg.title} className={cellClass}>
                    <Icon className="mb-3 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    <p className="text-sm font-semibold text-foreground leading-snug mb-1.5">{peg.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{peg.desc}</p>
                  </div>
                )
              })}
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
        stripPointPrefix
      />

      {/* Sekcja: VISUAL CONTRAST MATRIX */}
      <ContrastSection contrast={contrast} />

      {/* Sekcja: PROCES RATUNKOWY – 3 etapy */}
      <OfferSection
        badge={process.badge}
        mdColumns="3"
        sectionId="proces"
        offer={{
          title: process.title,
          subheading: process.subheading,
          paths: process.paths.map((path) => ({
            title: path.title,
            situation: path.situation,
            desc: path.desc,
            result: path.result,
          })),
        }}
        className="py-16 sm:py-20"
      />

      {/* Sekcja: STOS WARTOŚCI (Fundament + Bonusy) */}
      <PackageSpecSection spec={valueStack} />

      {/* Sekcja 5: Gwarancje */}
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


      <CtaSection content={offer} ctaHref="/kwalifikacja-modernizacja" />
    </main>
  )
}
