import { Metadata } from "next"
import { GuaranteeSection } from "@/components/guarantee-section"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/cta-section"
import { SectionBadge } from "@/components/section-badge"
import { StorySection } from "@/components/story-section"
import { ContrastSection } from "@/components/contrast-section"
import { OfferSection } from "@/components/offer-section"
import { FaqSection } from "@/components/faq-section"
import { content } from "@/lib/content"
import {
  Clock,
  Crosshair,
  LineChart,
  ShieldCheck,
  Rocket,
  Handshake,
  Gem,
  Map,
} from "lucide-react"

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
      <section className="relative w-full flex flex-col bg-slate-950 text-slate-50 pt-16 pb-16 lg:pb-12 lg:min-h-screen">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950"></div>
        <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-50 mix-blend-screen blur-[120px]"></div>

        <div className="relative z-10 flex-1 container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-between gap-10 lg:gap-8">
          
          <div className="flex-1 w-full max-w-2xl text-left pt-4 sm:pt-8">
            <div className="mb-4 sm:mb-6 animate-[fade-up_0.7s_ease-out_both]">
              <SectionBadge><Gem className="h-3.5 w-3.5 shrink-0" />{mvp.hero.badge}</SectionBadge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter text-white mb-5 sm:mb-6 leading-[1.1] animate-[fade-up_0.7s_ease-out_0.1s_both]">
              {mvp.hero.title}
              {mvp.hero.title_highlight && (
                <span className="block text-blue-500 mt-1 sm:mt-2">{mvp.hero.title_highlight}</span>
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-400 mb-5 sm:mb-8 leading-relaxed max-w-xl animate-[fade-up_0.7s_ease-out_0.2s_both]">
              {mvp.hero.subtitle}
            </p>

            <div className="mb-5 sm:mb-6 lg:hidden animate-[fade-up_0.7s_ease-out_0.25s_both]">
              <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-tight">
                  {mvp.hero.pilot_program.cta}
                </Button>
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">{mvp.hero.cta_sub}</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 animate-[fade-up_0.7s_ease-out_0.3s_both]">
              {mvp.hero.indicators.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <span className="text-blue-400 shrink-0 text-base">
                    {i === 0 ? <Rocket className="h-4 w-4" /> : i === 1 ? <ShieldCheck className="h-4 w-4" /> : <Handshake className="h-4 w-4" />}
                  </span>
                  <span className="text-xs sm:text-sm font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Promo Card — asymmetric composition (desktop only) */}
          <div className="relative hidden w-full max-w-md lg:max-w-sm flex-shrink-0 lg:block lg:mt-14 lg:animate-[fade-in_0.9s_ease-out_0.15s_both]">
            <div className="absolute -top-8 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/3 -right-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none"></div>
            <div className="relative rotate-1 rounded-[2rem] bg-slate-900/70 backdrop-blur-xl ring-1 ring-white/5 p-6 shadow-[0_25px_80px_-20px_rgba(37,99,235,0.35)]">
              <h2 className="text-lg font-bold text-white mb-3 leading-snug">{mvp.hero.pilot_program.title}</h2>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: mvp.hero.pilot_program.description }} />
              
              <p className="text-xs font-semibold text-white mb-2.5">{mvp.hero.pilot_program.package_title}</p>
              <ul className="space-y-1.5 mb-4">
                {mvp.hero.offer_items.map((item, i) => (
                  <li key={i} className="text-xs text-slate-300 leading-snug flex items-start gap-2">
                    <span className="text-blue-400 shrink-0 mt-0.5">
                      {i === 0 && <Rocket className="h-3.5 w-3.5" />}
                      {i === 1 && <ShieldCheck className="h-3.5 w-3.5" />}
                      {i === 2 && <Map className="h-3.5 w-3.5" />}
                    </span>
                    {item.title}
                  </li>
                ))}
              </ul>

              <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-sm font-bold rounded-xl shadow-lg whitespace-normal h-auto leading-tight">
                  {mvp.hero.pilot_program.cta}
                </Button>
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-2 font-medium leading-snug">30-minutowa wideorozmowa diagnostyczna + kompletny plan wdrożenia przesłany po spotkaniu</p>
              <p className="text-[10px] text-slate-400 text-center mt-2 uppercase tracking-widest font-semibold">{mvp.hero.cta_sub}</p>
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
        badge="Krok po kroku"
        offer={{
          title: mvp.mechanism.title,
          subheading: mvp.mechanism.subtitle,
          paths: mvp.mechanism.cards.map((card, i) => ({
            title: `Krok ${i + 1}`,
            situation: card.title.replace(/^\d+\.\s+/, ""),
            desc: card.content,
          })),
        }}
        className="py-12 sm:py-20"
      />

      {/* Sekcja 5: Gwarancje i Bezpieczeństwo */}
      <GuaranteeSection guarantee={mvp.guarantee} />

      {/* Sekcja 6: FAQ */}
      <FaqSection faq={mvp.faq} className="py-12 sm:py-24" />


      <CtaSection content={mvp.cta} />
    </main>
  )
}
