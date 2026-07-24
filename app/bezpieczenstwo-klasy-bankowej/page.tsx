import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CtaSection } from "@/components/cta-section"
import { ShieldCheck, Banknote, Target, CalendarDays, ArrowRight } from "lucide-react"
import {
  hero,
  mechanism,
  faq,
  offer,
  metadata,
} from "@/lib/content/bezpieczenstwo-klasy-bankowej/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: "https://www.karolmodelski.pl/bezpieczenstwo-klasy-bankowej",
    },
  }
}

export default function BezpieczenstwoKlasyBankowejPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id":
          "https://www.karolmodelski.pl/bezpieczenstwo-klasy-bankowej#webpage",
        url: "https://www.karolmodelski.pl/bezpieczenstwo-klasy-bankowej",
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
            "https://www.karolmodelski.pl/bezpieczenstwo-klasy-bankowej#service",
        },
        hasPart: {
          "@id": "https://www.karolmodelski.pl/bezpieczenstwo-klasy-bankowej#faq",
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
          "https://www.karolmodelski.pl/bezpieczenstwo-klasy-bankowej#service",
        name: metadata.title,
        description: metadata.description,
        serviceType:
          "Audyt bezpieczeństwa i wdrażanie standardów ochrony danych klasy bankowej",
        provider: {
          "@id": "https://www.karolmodelski.pl/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.karolmodelski.pl/bezpieczenstwo-klasy-bankowej#faq",
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
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
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden border-b border-slate-900/80 bg-slate-950 pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 opacity-60 mix-blend-screen blur-[120px] lg:h-[800px] lg:w-[800px]"></div>

        <div className="relative z-10 container mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 sm:py-12">
          <div className="mb-3 flex origin-bottom scale-90 transform justify-center sm:mb-8 sm:scale-100">
            <Breadcrumbs />
          </div>
          <h1 className="mb-3 text-[26px] leading-tight font-extrabold tracking-tight text-white sm:mb-6 sm:text-5xl sm:leading-[1.15] lg:text-6xl">
            {hero.title}
            <br className="hidden sm:block" />
            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>
          <p className="mx-auto mb-5 max-w-3xl text-[13px] leading-snug font-light text-slate-300 sm:mb-10 sm:text-lg sm:leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#oferta"
              className="group relative inline-block w-full sm:w-auto"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 blur transition duration-500 group-hover:opacity-60 group-hover:duration-200"></div>
              <Button
                size="lg"
                className="relative flex h-auto min-h-[50px] w-full items-center justify-center gap-2 rounded-xl border border-blue-400/20 bg-blue-600 px-4 py-3 text-center text-[14px] leading-snug font-bold !whitespace-normal text-white shadow-xl transition-all hover:bg-blue-500 sm:min-h-[60px] sm:w-auto sm:px-8 sm:py-6 sm:text-[17px]"
              >
                <span>{hero.cta}</span>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          <p className="mt-3 text-[10px] font-medium text-slate-400 sm:mt-5 sm:text-sm">
            {hero.footnote}
          </p>
        </div>
      </section>

      {/* Sekcja 2: MECHANIZM (3 TARCZE) */}
      <section className="relative overflow-hidden border-y border-slate-800/80 bg-slate-900/20 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-25"></div>
        <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {mechanism.title}
            </h2>
            {mechanism.subtitle && (
              <p className="mt-4 text-[15px] font-light text-slate-400 sm:text-lg">
                {mechanism.subtitle}
              </p>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mechanism.cards.map((card, i) => {
              const Icon = i === 0 ? Target : i === 1 ? Banknote : ShieldCheck
              const colorClasses =
                i === 0
                  ? "border-blue-500/30 bg-blue-500/20 text-blue-400"
                  : i === 1
                    ? "border-cyan-500/30 bg-cyan-500/20 text-cyan-400"
                    : "border-indigo-500/30 bg-indigo-500/20 text-indigo-400"

              return (
                <div
                  key={i}
                  className={`rounded-[1.5rem] border border-slate-800/60 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 sm:p-8 ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div
                    className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${colorClasses}`}
                  >
                    <Icon
                      className="h-6 w-6 [stroke-width:1.5px]"
                      fill="transparent"
                    />
                  </div>
                  <h3 className="mb-2 text-xl leading-snug font-bold text-white">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <span className="mb-4 block text-sm font-medium text-slate-400">
                      {card.subtitle}
                    </span>
                  )}
                  <div
                    className="text-[14px] leading-relaxed font-light text-slate-400 sm:text-[15px] [&_a]:font-medium [&_a]:text-blue-400 [&_a]:transition-colors [&_a:hover]:text-blue-300 [&_a:hover]:underline"
                    dangerouslySetInnerHTML={{ __html: card.content }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sekcja 3: FAQ */}
      <section className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {faq.title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-slate-800/80 px-2 py-1"
            >
              <AccordionTrigger className="text-left text-[15px] font-bold text-white transition-colors hover:text-blue-400 hover:no-underline sm:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6 text-[14px] leading-relaxed font-light text-slate-400 sm:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Sekcja 4: FINAL CTA (OFFER) */}
      <section
        id="oferta"
        className="relative overflow-hidden border-t border-slate-900/80 bg-slate-950 py-20 sm:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute bottom-0 left-1/2 h-[300px] w-full max-w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-60 mix-blend-screen blur-[100px]"></div>

        <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
            <CalendarDays className="h-6 w-6" />
          </div>
          <h2 className="mb-6 text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {offer.title}
          </h2>
          <div className="mx-auto mb-10 max-w-2xl text-[15px] leading-relaxed font-light text-slate-300 sm:text-lg">
            <p>{offer.subtitle}</p>
          </div>

          <div className="mx-auto mb-12 w-full max-w-2xl rounded-[1.5rem] border border-blue-500/20 bg-slate-900/80 p-6 text-left shadow-2xl backdrop-blur-xl sm:p-10">
            <h3 className="mb-6 flex flex-col items-center justify-center border-b border-slate-800/80 pb-6 text-center text-lg font-bold text-white sm:mb-8 sm:flex-row sm:text-xl">
              {offer.packetTitle}{" "}
              <span className="mt-2 text-[15px] font-normal text-blue-400 sm:mt-0 sm:ml-3">
                {offer.packetVal}
              </span>
            </h3>

            <ul className="space-y-6 sm:space-y-8">
              {offer.benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex w-full flex-row items-start gap-4 sm:gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    {i === 0 ? (
                      <Target className="h-6 w-6" />
                    ) : i === 1 ? (
                      <Banknote className="h-6 w-6" />
                    ) : (
                      <ShieldCheck className="h-6 w-6" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <strong className="mb-1 block text-base font-semibold text-slate-200 sm:text-lg">
                      {b.title}
                    </strong>
                    <span className="block text-[14px] leading-relaxed font-light text-slate-400 sm:text-[15px]">
                      {b.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={siteConfig.calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block w-full sm:w-auto"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 blur transition duration-500 group-hover:opacity-60 group-hover:duration-200"></div>
            <Button
              size="lg"
              className="relative flex h-auto min-h-[60px] w-full items-center justify-center gap-2 rounded-xl border border-blue-400/20 bg-blue-600 px-6 py-4 text-center text-[15px] leading-snug font-bold !whitespace-normal text-white shadow-xl transition-all hover:bg-blue-500 sm:w-auto sm:px-8 sm:py-6 sm:text-[17px]"
            >
              <CalendarDays className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
              <span>{offer.cta}</span>
            </Button>
          </a>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
