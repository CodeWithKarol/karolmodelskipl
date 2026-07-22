import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
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
      <section className="relative flex min-h-[calc(100vh-theme(spacing.16))] items-center justify-center overflow-hidden border-b border-slate-900/80 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 opacity-60 mix-blend-screen blur-[120px] lg:h-[800px] lg:w-[800px]"></div>

        <div className="relative z-10 container mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <div className="mb-8 flex justify-center">
            <Breadcrumbs />
          </div>
          <h1 className="mb-6 text-4xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {mvp.hero.title}
            <br className="hidden sm:block" />
            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {mvp.hero.title_highlight}
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-[15px] leading-relaxed font-light text-slate-300 sm:text-lg">
            {mvp.hero.subtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#kontakt"
              className="group relative inline-block w-full sm:w-auto"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 blur transition duration-500 group-hover:opacity-60 group-hover:duration-200"></div>
              <Button
                size="lg"
                className="relative flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/20 bg-blue-600 px-8 py-6 text-[15px] font-bold text-white shadow-xl transition-all hover:bg-blue-500 sm:w-auto sm:text-[17px]"
              >
                {mvp.hero.cta}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          <p className="mt-5 text-xs font-medium text-slate-400 sm:text-sm">
            {mvp.hero.sub_cta}
          </p>
        </div>
      </section>

      {/* Sekcja 2: THE "AGENCY TRAP" */}
      <section className="relative container mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-[2rem] leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {mvp.trap.title}{" "}
              <span className="text-red-400">{mvp.trap.title_highlight}</span>
            </h2>
            <div className="space-y-6 text-[15px] leading-relaxed font-light text-slate-300 sm:text-lg">
              <p>{mvp.trap.text1}</p>
              <p className="text-base font-medium text-white sm:text-xl">
                <strong className="font-bold text-blue-400">
                  {mvp.trap.text2.split(" ").slice(0, 4).join(" ")}
                </strong>{" "}
                {mvp.trap.text2.split(" ").slice(4).join(" ")}
              </p>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="pointer-events-none absolute -top-10 -right-10 hidden h-64 w-64 rounded-full bg-red-500/5 blur-[80px] sm:block"></div>
            <div className="pointer-events-none absolute -bottom-10 -left-10 hidden h-64 w-64 rounded-full bg-blue-500/5 blur-[80px] sm:block"></div>

            <div className="relative z-10 space-y-8 lg:pl-10">
              {mvp.trap.negative_points.map((point, i) => (
                <div key={i} className="group flex items-start gap-5">
                  <div className="mt-1 opacity-60 transition-opacity group-hover:opacity-100">
                    <XCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-slate-200 sm:text-[17px]">
                      {point}
                    </h4>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-900/10 px-6 py-5">
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-400" />
                    <p className="text-[15px] leading-snug font-medium text-white sm:text-[17px]">
                      <span className="font-bold text-blue-300">Moje MVP:</span>{" "}
                      {mvp.trap.positive_point}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja 3: USP – SENIOR PRAGMATISM */}
      <section className="relative overflow-hidden border-y border-slate-800/80 bg-slate-900/20 py-16 sm:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:3rem_3rem] opacity-25"></div>
        <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-[2rem] leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {mvp.usp.title}
            </h2>
            <p className="mt-4 text-[15px] font-light text-slate-400 sm:text-lg">
              {mvp.usp.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {mvp.usp.cards.map((card, i) => {
              const Icon = i === 0 ? Crosshair : i === 1 ? LineChart : Clock
              const color = i === 0 ? "blue" : i === 1 ? "cyan" : "indigo"
              return (
                <div
                  key={i}
                  className="rounded-[1.5rem] border border-slate-800/60 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-${color}-500/30 bg-${color}-500/20 text-${color}-400`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed font-light text-slate-400 sm:text-[15px]">
                    {card.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sekcja 4: PORÓWNANIE */}
      <section className="relative container mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-16 text-center">
          <h2 className="text-[2rem] leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {mvp.comparison.title} <br className="md:hidden" />
            {mvp.comparison.title_highlight}
          </h2>
          <div className="mt-6">
            <p className="text-[15px] font-light text-slate-300 sm:text-[17px]">
              Zobacz pełne, bezkompromisowe zestawienie kosztów i procesów
              operacyjnych:
            </p>
            <a
              href="/doradztwo-techniczne-dla-firm"
              className="mt-2 inline-flex items-center gap-2 text-[15px] font-medium text-blue-400 transition-colors hover:text-blue-300 hover:underline sm:text-[17px]"
            >
              Dlaczego niezależny partner technologiczny, a nie agencja
              programistyczna?
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Widok Mobile i Tablet */}
        <div className="space-y-12 md:hidden">
          {mvp.comparison.rows.map((row, i) => (
            <div key={i} className="border-t border-slate-800/60 pt-6">
              <h3 className="mb-6 text-sm font-bold tracking-wider text-slate-500 uppercase">
                {row.feature}
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5 opacity-80">
                  <span className="text-xs font-medium text-slate-400">
                    {mvp.comparison.headers[1]}
                  </span>
                  <span className="text-[15px] text-slate-300">
                    {row.agency}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 border-l-2 border-blue-500 pl-4">
                  <span className="text-xs font-medium text-blue-400">
                    {mvp.comparison.headers[2]}
                  </span>
                  <span className="text-[15px] font-bold text-white">
                    {row.me}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Widok Desktop (Tabela) */}
        <div className="hidden overflow-hidden rounded-[1.5rem] border border-slate-800/80 bg-slate-900/60 shadow-xl backdrop-blur-sm md:block">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="border-b border-slate-800/80 bg-slate-950/50">
                <TableRow className="border-none hover:bg-transparent">
                  {mvp.comparison.headers.map((h, i) => (
                    <TableHead
                      key={i}
                      className={`px-6 py-5 text-base ${i === 2 ? "bg-blue-500/5 font-bold text-blue-400" : "font-semibold text-slate-300"}`}
                    >
                      {h}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {mvp.comparison.rows.map((row, i) => (
                  <TableRow
                    key={i}
                    className="border-b border-slate-800/60 hover:bg-slate-800/30"
                  >
                    <TableCell className="px-6 py-5 text-[15px] font-medium whitespace-normal text-white">
                      {row.feature}
                    </TableCell>
                    <TableCell className="px-6 py-5 text-[15px] whitespace-normal text-slate-400">
                      {row.agency}
                    </TableCell>
                    <TableCell className="bg-blue-500/5 px-6 py-5 text-[15px] font-bold whitespace-normal text-white">
                      {row.me}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Sekcja 5: FAQ */}
      <section className="relative border-y border-slate-800/80 bg-slate-900/20 py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-[2rem] leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {mvp.faq.title}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {mvp.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-slate-800/80 px-2 py-1"
              >
                <AccordionTrigger className="text-[15px] font-bold text-white transition-colors hover:text-blue-400 hover:no-underline sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className="pt-2 pb-6 text-[14px] leading-relaxed font-light text-slate-400 sm:text-base [&_a]:font-medium [&_a]:text-blue-400 [&_a]:transition-colors [&_a:hover]:text-blue-300 [&_a:hover]:underline"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Sekcja 6: FINAL CTA */}
      <section
        id="kontakt"
        className="relative overflow-hidden border-t border-slate-900/80 bg-slate-950 py-20 sm:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute bottom-0 left-1/2 h-[300px] w-full max-w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 opacity-60 mix-blend-screen blur-[100px]"></div>

        <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
            <CalendarDays className="h-6 w-6" />
          </div>
          <h2 className="mb-6 text-[2.2rem] leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {mvp.cta.title}
            <br />
            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {mvp.cta.title_highlight}
            </span>
          </h2>
          <div className="mx-auto mb-10 max-w-2xl text-[15px] leading-relaxed font-light text-slate-300 sm:text-lg">
            <p className="mb-4">{mvp.cta.text1}</p>
            <p className="text-base font-medium text-white sm:text-xl">
              {mvp.cta.text2}
            </p>
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
              className="relative flex w-full items-center justify-center gap-3 rounded-xl border border-blue-400/20 bg-blue-600 px-8 py-7 text-[15px] font-bold text-white shadow-xl transition-all hover:bg-blue-500 sm:w-auto sm:text-lg"
            >
              <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6" />
              {mvp.cta.button}
              <ArrowRight className="hidden h-5 w-5 transition-transform group-hover:translate-x-1 sm:block" />
            </Button>
          </a>
        </div>
      </section>
    </main>
  )
}
