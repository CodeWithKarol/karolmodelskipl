import { Metadata } from "next"
import { GuaranteeSection } from "@/components/guarantee-section"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { content } from "@/lib/content"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Crosshair,
  LineChart,
  CalendarDays,
  XCircle,
  Flame,
  ShieldCheck,
  Search,
  ListChecks,
  Server,
  RefreshCw,
  HelpCircle,
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
      <section className="relative flex flex-col items-center justify-center overflow-hidden border-b border-slate-900/80 bg-slate-950 pt-24 pb-12 sm:pt-36 sm:pb-24 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] sm:h-[600px] bg-blue-900/10 blur-[100px] sm:blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <div className="mb-3 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-widest">
            {mvp.hero.badge}
          </div>
          <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-8 leading-[1.25] sm:leading-[1.15]">
            {mvp.hero.title}
          </h1>
          <p className="text-xs sm:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            {mvp.hero.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 mb-6 sm:mb-12 w-full text-left">
            {mvp.hero.indicators.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-3.5 sm:p-6 rounded-2xl backdrop-blur-sm">
                <div className="text-blue-400 mb-1.5 sm:mb-3 text-base sm:text-xl">
                  {i === 0 ? "🚀" : i === 1 ? "🛡️" : "🤝"}
                </div>
                <h4 className="text-[11px] sm:text-sm font-bold text-white mb-1 leading-tight">{item.title}</h4>
                <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-md w-full relative mx-auto shadow-xl">
            <p className="text-[11px] sm:text-sm md:text-base font-bold text-blue-400 mb-1.5 sm:mb-2">
              {mvp.hero.audit_promo.title.replace("👉 ", "")}
            </p>
            <p className="text-[11px] sm:text-sm text-slate-300 mb-4 sm:mb-6 leading-relaxed max-w-sm mx-auto">
              {mvp.hero.audit_promo.desc}
            </p>
            <a href="https://calendly.com/kontakt-karolmodelski/30min" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button size="lg" className="w-full py-4 sm:py-6 text-[11px] sm:text-sm font-bold rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg whitespace-normal h-auto leading-tight">{mvp.hero.cta}</Button>
            </a>
            <p className="text-[9px] sm:text-xs text-slate-500 mt-3 sm:mt-4 uppercase tracking-widest font-semibold">{mvp.hero.footnote}</p>
          </div>
        </div>
      </section>

      {/* Sekcja 2: THE "AGENCY TRAP" (Agitacja bólu) */}
      <section id="problem" className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-12 sm:py-20 text-slate-300 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <div className="mb-8 sm:mb-16 text-center">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-red-400 uppercase tracking-wider">
              <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Diagnoza problemu</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight max-w-3xl mx-auto">
              {mvp.trap.title}
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base md:text-lg mb-2.5 sm:mb-4">
              {mvp.trap.text1}
            </p>
            <p className="max-w-2xl mx-auto text-slate-300 font-medium leading-relaxed text-xs sm:text-base md:text-lg">
              {mvp.trap.text2}
            </p>
          </div>
          <div className="grid gap-3 sm:gap-6 md:grid-cols-2">
            {mvp.trap.negative_points.map((point, idx) => (
              <div key={idx} className="group bg-slate-900/40 border border-slate-800 p-4 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-slate-700 transition-all duration-300 flex flex-col">
                <div className="flex items-start gap-3.5 sm:gap-6">
                  <div className="text-red-500 font-black text-xl sm:text-2xl opacity-50 shrink-0 leading-none">0{idx + 1}</div>
                  <div>
                    <h4 className="text-sm sm:text-lg font-bold text-white mb-1.5 sm:mb-2 leading-snug">{point.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-[11px] sm:text-sm">{point.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Sekcja 3: VISUAL CONTRAST MATRIX (Nowa Okazja – Podejście Szybkiej Wersji Startowej) */}
      <section className="relative border-t border-slate-900/50 bg-slate-950 py-12 sm:py-20 text-slate-300 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

        <div className="relative z-10 container mx-auto max-w-5xl px-4">
          <div className="mb-8 sm:mb-16 text-center">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Nowa okazja</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight max-w-3xl mx-auto">
              {mvp.contrast.title}
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base md:text-lg">
              {mvp.contrast.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
            {mvp.contrast.comparisons.map((item, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 md:contents gap-3 sm:gap-0">
                <div className="bg-slate-900/40 border border-slate-800 p-4 sm:p-8 rounded-2xl flex flex-col hover:border-slate-700 transition-all">
                  <div className="text-red-500 mb-1.5 sm:mb-3 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest">{mvp.contrast.red_ocean_title}</div>
                  <h4 className="text-sm sm:text-lg font-bold text-slate-300 mb-1 sm:mb-3 leading-snug">{item.red.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-[11px] sm:text-sm">{item.red.desc}</p>
                </div>
                <div className="bg-blue-600/10 border border-blue-500/30 p-4 sm:p-8 rounded-2xl flex flex-col hover:border-blue-500/50 transition-all">
                  <div className="text-blue-400 mb-1.5 sm:mb-3 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest">{mvp.contrast.blue_ocean_title}</div>
                  <h4 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-3 leading-snug">{item.blue.title}</h4>
                  <p className="text-slate-300 leading-relaxed text-[11px] sm:text-sm">{item.blue.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja 4: MECHANISM / PROCESS (Jak krok po kroku uruchamiamy Twoją aplikację w 30 dni?) */}
      <section className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-12 sm:py-20 text-slate-300 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>
        <div className="relative z-10 container mx-auto max-w-5xl px-4">
          <div className="mb-8 sm:mb-16 text-center">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Krok po kroku</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight max-w-3xl mx-auto">
              {mvp.mechanism.title}
            </h2>
            {mvp.mechanism.subtitle && (
              <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base md:text-lg">
                {mvp.mechanism.subtitle}
              </p>
            )}
          </div>
          <div className="grid gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-6">
            {mvp.mechanism.cards.map((card, i) => {
              const icons = [Search, ListChecks, Server, RefreshCw, CheckCircle2];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className={`group bg-slate-900/40 border border-slate-800 p-4 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-slate-700 transition-all duration-300 flex flex-col ${
                    i < 3 
                      ? "lg:col-span-2 md:col-span-1" 
                      : i === 3 
                      ? "lg:col-span-3 md:col-span-1" 
                      : "lg:col-span-3 md:col-span-2 max-w-xl mx-auto md:max-w-none w-full"
                  }`}
                >
                  <div className="mb-3 sm:mb-6 flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform duration-500">
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="mb-1.5 sm:mb-3 text-sm sm:text-lg font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                    {card.title.replace(/^\d+\.\s+/, "")}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-[11px] sm:text-sm">
                    {card.content}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sekcja 5: Gwarancje i Bezpieczeństwo */}
      <GuaranteeSection guarantee={mvp.guarantee} />

      {/* Sekcja 6: FAQ */}
      <section className="relative border-y border-slate-800/80 bg-slate-900/20 py-12 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-8 sm:mb-16 text-center">
            <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wider">
              <HelpCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight">
              {mvp.faq.title}
            </h2>
            {mvp.faq.subtitle && (
              <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base md:text-lg">
                {mvp.faq.subtitle}
              </p>
            )}
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {mvp.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/40 px-4 sm:px-6 backdrop-blur-sm transition-all hover:border-slate-700 data-[state=open]:border-blue-500/30"
              >
                <AccordionTrigger className="py-4 sm:py-6 text-left text-xs sm:text-sm md:text-base font-bold text-slate-200 hover:text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-4 sm:pb-6 text-xs sm:text-sm leading-relaxed text-slate-400 [&_a]:font-medium [&_a]:text-blue-400 [&_a]:transition-colors [&_a:hover]:text-blue-300 [&_a:hover]:underline"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Sekcja 6: FINAL CTA (OFFER) */}
      <section
        id="oferta"
        className="relative overflow-hidden border-t border-slate-900/50 bg-slate-950 py-12 sm:py-20 text-slate-300 md:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>

        <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center">
          <div className="mb-8 sm:mb-12">
            <div className="mb-3 sm:mb-6 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
              <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-6 leading-snug sm:leading-tight max-w-3xl mx-auto">
              {mvp.cta.title}
            </h2>
            <p className="max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-xs sm:text-base md:text-lg" dangerouslySetInnerHTML={{ __html: mvp.cta.subtitle }} />
          </div>

          {/* Ozdobny pakiet wartościowy - Mobile First */}
          <div className="mx-auto mb-6 sm:mb-12 w-full max-w-2xl bg-slate-900/40 border border-slate-800 p-4 sm:p-10 rounded-2xl sm:rounded-3xl text-left">
            <h3 className="mb-4 sm:mb-8 text-center text-sm sm:text-xl font-bold text-white border-b border-slate-800 pb-3 sm:pb-6 leading-snug">
              {mvp.cta.packetTitle}{" "}
              <span className="block sm:inline mt-1 sm:mt-0 sm:ml-2 text-blue-400 text-[11px] sm:text-sm font-normal">
                {mvp.cta.packetVal}
              </span>
            </h3>

            <ul className="space-y-3 sm:space-y-6">
              {mvp.cta.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="shrink-0 rounded-full bg-emerald-500/10 p-1.5 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <strong className="block text-xs sm:text-base font-bold text-white leading-snug">
                      {b.title}
                    </strong>
                    {b.desc && (
                      <span className="text-[11px] sm:text-sm text-slate-400 leading-relaxed">
                        {b.desc}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center">
            <a
              href="https://calendly.com/kontakt-karolmodelski/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md"
            >
              <Button
                size="lg"
                className="relative flex h-auto min-h-[3.5rem] w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white py-4 sm:py-5 px-3 text-xs sm:text-sm font-bold shadow-lg transition-all whitespace-normal text-center leading-tight"
              >
                <CalendarDays className="h-5 w-5 shrink-0" />
                {mvp.cta.cta}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
            </a>
            <p className="mt-3 sm:mt-4 text-[11px] sm:text-sm text-slate-400 italic font-medium text-center" dangerouslySetInnerHTML={{ __html: mvp.cta.footer }} />
          </div>
        </div>
      </section>
    </main>
  )
}
