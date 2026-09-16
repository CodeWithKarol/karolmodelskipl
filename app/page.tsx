import { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { StorySection } from "@/components/story-section"
import { AboutSection } from "@/components/about-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { OfferSection } from "@/components/offer-section"
import { ComparisonTableSection } from "@/components/comparison-table-section"
import { FaqSection } from "@/components/faq-section"
import { ContactHubSection } from "@/components/contact-hub-section"
import { content } from "@/lib/content"
import { siteConfig } from "@/lib/site-config"
import { buildServicePageJsonLd } from "@/lib/seo/json-ld"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
      canonical: siteConfig.url,
    },
  }
}

export default function Page() {
  const jsonLd = buildServicePageJsonLd({
    name: content.metadata.title,
    description: content.metadata.description,
    faq: content.faq,
  })

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustedBySection />
      <StorySection />
      <ComparisonTableSection comparison={content.comparison} />
      <OfferSection
        sectionId="zwrotnica"
        className="scroll-mt-20 sm:scroll-mt-16"
      />
      <GuaranteeSection />
      <AboutSection />
      <FaqSection />
      <ContactHubSection />
    </main>
  )
}
