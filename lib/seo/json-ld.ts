import { siteConfig } from "@/lib/site-config"
import type { FaqContent } from "@/lib/content/types"

const SITE_URL = siteConfig.url
const ORGANIZATION_ID = `${SITE_URL}/#organization`
const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

const personJsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  sameAs: siteConfig.linkedinUrl,
}

export const organizationJsonLd = {
  "@type": "ProfessionalService",
  "@id": ORGANIZATION_ID,
  name: siteConfig.legalName,
  url: `${SITE_URL}/`,
  telephone: siteConfig.phone,
  priceRange: "$$",
  areaServed: "PL",
  sameAs: siteConfig.googleReviewUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressCountry: siteConfig.address.country,
  },
  founder: personJsonLd,
}

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: siteConfig.legalName,
  publisher: { "@id": ORGANIZATION_ID },
}

const websiteRef = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: siteConfig.legalName,
}

function faqJsonLd(id: string, faq: FaqContent) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function buildServicePageJsonLd({
  path = "",
  name,
  description,
  serviceName,
  serviceDescription,
  serviceType,
  faq,
}: {
  path?: string
  name: string
  description: string
  serviceName?: string
  serviceDescription?: string
  serviceType?: string
  faq: FaqContent
}) {
  const pageUrl = path ? `${SITE_URL}${path}` : `${SITE_URL}/`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        isPartOf: websiteRef,
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": `${pageUrl}#service` },
        hasPart: { "@id": `${pageUrl}#faq` },
      },
      organizationJsonLd,
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: serviceName ?? name,
        description: serviceDescription ?? description,
        ...(serviceType ? { serviceType } : {}),
        provider: { "@id": ORGANIZATION_ID },
      },
      faqJsonLd(`${pageUrl}#faq`, faq),
    ],
  }
}

export function buildCollectionPageJsonLd({
  path,
  name,
  description,
}: {
  path: string
  name: string
  description: string
}) {
  const pageUrl = `${SITE_URL}${path}`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        isPartOf: websiteRef,
        publisher: { "@id": ORGANIZATION_ID },
      },
      organizationJsonLd,
    ],
  }
}

export function buildArticleJsonLd({
  slug,
  title,
  description,
  datePublished,
}: {
  slug: string
  title: string
  description: string
  datePublished: string
}) {
  const pageUrl = `${SITE_URL}/blog/${slug}`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${pageUrl}#article`,
        headline: title,
        description,
        datePublished,
        author: { "@id": PERSON_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${title} | Blog Karol Modelski`,
        isPartOf: websiteRef,
      },
      organizationJsonLd,
      personJsonLd,
    ],
  }
}
