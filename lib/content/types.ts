export interface ContentMetadata {
  title: string
  description: string
  serviceDescription?: string
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export interface HeroPeg {
  title: string
  desc: string
}

export interface HeroQualification {
  cta_line1: string
  trust_label: string
  trust_logos: string[]
  status_label?: string
  status_value?: string
  title?: string
  description?: string
  cta?: string
}

export interface HeroContent {
  badge: string
  title: string
  title_highlight?: string
  subtitle: string
  qualification: HeroQualification
  cta_sub: string
  pegs: HeroPeg[]
}

export interface HomeHeroIndicator {
  title: string
  desc: string
}

export interface HomeHeroOfferItem {
  title: string
  desc: string
  val: string
}

export interface HomeHeroContent {
  badge: string
  h1: string
  subheading: string
  indicators: HomeHeroIndicator[]
  pilot_program: {
    title: string
    description: string
    cta: string
    package_title: string
  }
  cta_sub: string
  offer_items: HomeHeroOfferItem[]
}

/* -------------------------------------------------------------------------- */
/* Trusted by / About                                                         */
/* -------------------------------------------------------------------------- */

export interface TrustedByLogo {
  name: string
  category: string
}

export interface TrustedByContent {
  badge: string
  title: string
  quote: string[]
  quote_author: string
  logos: TrustedByLogo[]
}

export interface AboutContent {
  badge: string
  title: string
  body: string[]
}

/* -------------------------------------------------------------------------- */
/* Story (agitacja bólu)                                                      */
/* -------------------------------------------------------------------------- */

export interface StoryPoint {
  title: string
  desc: string
}

export interface StoryContent {
  title: string
  intro: string
  context?: string
  points: StoryPoint[]
}

/* -------------------------------------------------------------------------- */
/* Value stack (specyfikacja pakietu)                                         */
/* -------------------------------------------------------------------------- */

interface ValueStackTier {
  label: string
  text: string
}

export interface ValueStackCore {
  tag?: string
  value?: string
  title: string
  desc?: string
  bullets?: string[]
  tiers?: ValueStackTier[]
}

export interface ValueStackBonus {
  tag: string
  title: string
  value?: string
  desc?: string
  bullets?: string[]
  tiers?: ValueStackTier[]
}

export interface ValueStackContent {
  badge: string
  title: string
  intro: string
  core: ValueStackCore
  bonuses: ValueStackBonus[]
  summary_label?: string
  summary_value?: string
  price_label?: string
  price_amount?: string
  payment?: string
  bullets?: string[]
}

/* -------------------------------------------------------------------------- */
/* Comparison / contrast                                                      */
/* -------------------------------------------------------------------------- */

export interface ComparisonRow {
  feature: string
  me: string
  agency: string
}

export interface ComparisonContent {
  badge?: string
  title?: string
  subtitle?: string
  columns: {
    feature: string
    me: string
    agency: string
  }
  rows: ComparisonRow[]
}

export interface ComparisonTableContent {
  badge?: string
  title?: string
  subtitle?: string
  columns: string[]
  rows: { criterion: string; values: string[] }[]
}

export interface ContrastRow {
  area?: string
  blue: string
  red: string
  blueTitle?: string
  redTitle?: string
}

export interface ContrastComparison {
  red: { title: string; desc: string }
  blue: { title: string; desc: string }
}

export interface ContrastContent {
  badge?: string
  title?: string
  blue_title?: string
  red_title?: string
  blue_ocean_title?: string
  red_ocean_title?: string
  rows?: ContrastRow[]
  comparisons?: ContrastComparison[]
}

/* -------------------------------------------------------------------------- */
/* Offer / process                                                            */
/* -------------------------------------------------------------------------- */

export interface OfferPath {
  title: string
  situation: string
  subtitle?: string
  desc?: string
  result?: string
  link?: string
  href?: string
}

export interface OfferContent {
  badge?: string
  title?: string
  subheading?: string
  paths: OfferPath[]
}

export type ProcessContent = OfferContent

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqContent {
  title?: string
  subtitle?: string
  items: FaqItem[]
}

/* -------------------------------------------------------------------------- */
/* CTA / offer callout                                                        */
/* -------------------------------------------------------------------------- */

export interface CtaItem {
  title: string
  desc?: string
}

export interface CtaContent {
  badge: string
  title: string
  description: string
  package_title: string
  offer_items: CtaItem[]
  button: string
  footer: string
  format?: string
  note?: string
  availability?: string
}

/* -------------------------------------------------------------------------- */
/* Guarantee                                                                  */
/* -------------------------------------------------------------------------- */

export interface GuaranteeItem {
  title: string
  desc: string
  bullets?: string[]
  note?: string
}

export interface GuaranteeContent {
  badge: string
  title: string
  subtitle: string
  steps?: string[]
  items: GuaranteeItem[]
}

/* -------------------------------------------------------------------------- */
/* Qualification                                                              */
/* -------------------------------------------------------------------------- */

interface QualificationOption {
  value: string
  label: string
  hint?: string
}

export interface QualificationStep {
  key: string
  label: string
  options: QualificationOption[]
}

export interface QualificationContent {
  badge: string
  title: string
  intro: string
  steps: QualificationStep[]
  messages: {
    rejected: { title: string; body: string; button: string; href: string }
  }
  qualified: {
    title: string
    body: string
    button: string
    footer: string
  }
}
