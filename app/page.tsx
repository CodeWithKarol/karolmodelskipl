import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { StorySection } from "@/components/story-section"
import { BusinessImpactSection } from "@/components/business-impact-section"
import { OfferSection } from "@/components/offer-section"
import { ContrastSection } from "@/components/contrast-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { content } from "@/lib/content"

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <TrustedBySection />
      <StorySection />
      <BusinessImpactSection />
      <OfferSection />
      <ContrastSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
