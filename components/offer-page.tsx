import type { Metadata } from "next"
import { ServiceHero } from "@/components/service-hero"
import { ComparisonTableSection } from "@/components/comparison-table-section"
import { StorySection } from "@/components/story-section"
import { OfferSection } from "@/components/offer-section"
import { PackageSpecSection } from "@/components/package-spec-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { siteConfig } from "@/lib/site-config"
import { buildServicePageJsonLd } from "@/lib/seo/json-ld"
import type { OfferPageContent } from "@/lib/content/types"

export function buildOfferMetadata(config: OfferPageContent): Metadata {
  return {
    title: config.metadata.title,
    description: config.metadata.description,
    alternates: {
      canonical: `${siteConfig.url}/${config.slug}`,
    },
  }
}

export function OfferPage({ config }: { config: OfferPageContent }) {
  const jsonLd = buildServicePageJsonLd({
    path: `/${config.slug}`,
    name: config.metadata.title,
    description: config.metadata.description,
    serviceName: config.jsonLd?.serviceName,
    serviceDescription: config.jsonLd?.serviceDescription,
    serviceType: config.jsonLd?.serviceType,
    faq: config.faq,
  })

  return (
    <main className="flex-1 overflow-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServiceHero hero={config.hero} ctaHref={config.qualificationHref} />

      <StorySection
        title={config.story.title}
        intro={config.story.intro}
        context={config.story.context}
        points={config.story.points}
        stripPointPrefix={config.storyStripPointPrefix}
        className="py-16 sm:py-20"
      />

      <ComparisonTableSection
        comparison={config.comparison}
        className="py-16 sm:py-20"
      />

      <OfferSection
        badge={config.offer.badge}
        mdColumns="3"
        sectionId="proces"
        offer={config.offer}
        className="py-16 sm:py-20"
      />

      <PackageSpecSection spec={config.spec} className="py-16 sm:py-20" />

      <GuaranteeSection guarantee={config.guarantee} />

      {config.continuation && (
        <OfferSection
          badge={config.continuation.badge}
          mdColumns="3"
          sectionId="po-audycie"
          offer={config.continuation}
          className="py-16 sm:py-20"
        />
      )}

      <FaqSection faq={config.faq} className="py-16 sm:py-24" />

      <CtaSection content={config.cta} ctaHref={config.qualificationHref} />
    </main>
  )
}
