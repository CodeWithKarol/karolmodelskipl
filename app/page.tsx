import { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { StorySection } from "@/components/story-section"
import { AboutSection } from "@/components/about-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { OfferSection } from "@/components/offer-section"
import { ContrastSection } from "@/components/contrast-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { content } from "@/lib/content"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: "https://www.karolmodelski.pl",
    },
  }
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.karolmodelski.pl/#webpage",
        url: "https://www.karolmodelski.pl/",
        name: content.metadata.title,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.karolmodelski.pl/#website",
          url: "https://www.karolmodelski.pl/",
          name: "Karol Modelski - Aplikacje Internetowe dla Firm | Warszawa",
        },
        about: {
          "@id": "https://www.karolmodelski.pl/#person",
        },
        mainEntity: {
          "@id": "https://www.karolmodelski.pl/#service",
        },
        hasPart: {
          "@id": "https://www.karolmodelski.pl/#faq",
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
        "@id": "https://www.karolmodelski.pl/#service",
        name: content.metadata.title,
        description: content.metadata.description,
        provider: {
          "@id": "https://www.karolmodelski.pl/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.karolmodelski.pl/#faq",
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustedBySection />
      <StorySection />
      <ContrastSection />
      <OfferSection />
      <GuaranteeSection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
