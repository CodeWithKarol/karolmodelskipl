import { Breadcrumbs } from "@/components/breadcrumbs"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  Zap,
  Network,
  Blocks,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  TrendingUp,
  Target,
  Banknote,
} from "lucide-react"
import {
  hero,
  story,
  mechanism,
  funnel,
  contrast,
  faq,
  offer,
} from "@/lib/content/aplikacje-internetowe/page"
import { siteConfig } from "@/lib/site-config"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm#webpage",
  url: "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm",
  name: "Skalowanie i Wydajne Aplikacje Internetowe dla Firm | Niezależny Partner Technologiczny",
  isPartOf: { "@id": "https://www.karolmodelski.pl/#website" },
  mainEntity: [
    {
      "@type": "Service",
      "@id":
        "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm#service",
      name: "Tworzenie dedykowanych aplikacji internetowych dla firm",
      description:
        "Projektowanie i wdrażanie bezpiecznych, wydajnych aplikacji internetowych dla małych i średnich firm.",
      provider: { "@id": "https://www.karolmodelski.pl/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.karolmodelski.pl/aplikacje-internetowe-dla-firm#faq",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
}

export const metadata: Metadata = {
  title:
    "Skalowanie i Wydajne Aplikacje Internetowe dla Firm | Niezależny Partner Technologiczny",
  description:
    "Dedykowane aplikacje internetowe dla firm o niezawodności systemów bankowych. Zyskaj solidne rozwiązania bez marż agencji. Odbierz darmowy plan!",
}

export default function AplikacjeInternetoweDlaFirmPage() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative flex w-full min-h-[calc(100dvh-64px)] flex-col items-center justify-center bg-slate-950 py-12 text-slate-50 sm:py-20 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:24px_24px]" />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 w-full flex justify-center sm:mb-8">
            <Breadcrumbs />
          </div>
          <h1 className="mb-4 w-full text-3xl font-extrabold tracking-tight text-balance break-words sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            {hero.title}{" "}
            <span className="text-emerald-400">{hero.titleHighlight}</span>
          </h1>

          <p className="mx-auto mb-8 w-full max-w-3xl text-sm leading-relaxed text-balance text-slate-300 sm:mb-10 sm:text-base md:text-lg">
            {hero.description}
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              className="group !h-auto w-full bg-emerald-500 px-4 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-emerald-400 sm:!h-16 sm:w-auto sm:px-8 sm:text-base"
              asChild
            >
              <Link
                href="#oferta"
                className="flex w-full items-center justify-center gap-2"
              >
                <span className="whitespace-normal text-center text-balance leading-tight">
                  {hero.cta}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>

          <p className="mt-4 w-full px-2 text-center text-xs break-words text-slate-400 sm:text-sm">
            {hero.footnote}
          </p>
        </div>
      </section>

      {/* 2. THE EPIPHANY BRIDGE STORY */}
      <section className="w-full py-12 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm sm:rounded-3xl sm:p-8 md:p-12">
            <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white sm:h-16 sm:w-16">
                <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-balance break-words text-slate-900 sm:text-3xl">
                {story.title}
              </h2>
            </div>

            <div className="prose prose-sm max-w-none break-words text-slate-600 prose-slate sm:prose-base md:prose-lg">
              {story.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="my-6 border-l-4 border-emerald-500 pl-4 sm:my-8 sm:pl-6">
                <p className="m-0 text-base leading-relaxed font-semibold text-slate-900 sm:text-lg md:text-xl">
                  {story.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REWOLUCYJNY MECHANIZM */}
      <section className="w-full bg-slate-50 py-12 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-balance break-words text-slate-900 sm:text-3xl md:text-4xl">
              {mechanism.title}
            </h2>
            <p className="px-2 text-sm text-balance text-slate-600 sm:text-base md:text-lg">
              {mechanism.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mechanism.cards.map((card, i) => (
              <Card key={i} className="flex flex-col border-none shadow-md">
                <CardHeader className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    {i === 0 ? (
                      <Zap className="h-6 w-6" />
                    ) : i === 1 ? (
                      <Network className="h-6 w-6" />
                    ) : (
                      <Blocks className="h-6 w-6" />
                    )}
                  </div>
                  <CardTitle className="text-lg break-words sm:text-xl">
                    {card.title}
                    <br />
                    <span className="mt-1 block text-sm font-normal text-slate-500">
                      {card.subtitle}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 px-6 pb-6 text-sm text-slate-600 sm:text-base">
                  {card.content}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY CONTENT (Funnel-Driven Development) */}
      <section className="w-full overflow-hidden py-12 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2">
            <div className="w-full">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-balance break-words text-slate-900 sm:mb-6 sm:text-3xl md:text-4xl">
                {funnel.title}{" "}
                <span className="mt-1 block text-emerald-500 sm:mt-0 sm:inline">
                  {funnel.titleHighlight}
                </span>
              </h2>
              <div className="prose prose-sm break-words text-slate-600 sm:prose-base md:prose-lg">
                {funnel.text.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <ul className="mt-6 list-none space-y-4 pl-0 font-medium text-slate-800">
                  {funnel.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="mt-1 mr-3 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="flex-1">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-full">
              <div className="absolute -inset-2 rounded-3xl bg-emerald-500/10 blur-lg sm:-inset-4 sm:blur-xl" />
              <div className="relative w-full rounded-2xl bg-slate-950 p-6 shadow-2xl sm:p-8">
                <div className="mb-6 flex flex-row items-center gap-4 border-b border-slate-800 pb-6">
                  <Target className="h-8 w-8 shrink-0 text-emerald-400 sm:h-10 sm:w-10" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs text-slate-400 sm:text-sm">
                      {funnel.boxLeft}
                    </div>
                    <div className="text-sm font-semibold break-words text-white sm:text-base">
                      {funnel.boxLeftSub}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <TrendingUp className="h-8 w-8 shrink-0 text-emerald-400 sm:h-10 sm:w-10" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs text-slate-400 sm:text-sm">
                      {funnel.boxRight}
                    </div>
                    <div className="text-sm font-semibold break-words text-white sm:text-base">
                      {funnel.boxRightSub}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISUAL CONTRAST MATRIX */}
      <section className="w-full bg-slate-950 py-12 text-white sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-balance break-words sm:text-3xl md:text-4xl">
              {contrast.title}
            </h2>
          </div>

          <div className="hidden w-full rounded-2xl border border-slate-800 bg-slate-900/50 shadow-lg lg:block">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-slate-800 hover:bg-transparent">
                  {contrast.tableHeaders.map((h, i) => (
                    <TableHead
                      key={i}
                      className={`py-6 text-sm font-medium ${i === 2 ? "font-bold text-emerald-400" : "text-slate-400"}`}
                    >
                      {h}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {contrast.rows.map((row, i) => (
                  <TableRow
                    key={i}
                    className="border-slate-800 transition-colors hover:bg-slate-800/50"
                  >
                    <TableCell className="py-6 text-sm font-medium text-slate-300 whitespace-normal">
                      {row.feature}
                    </TableCell>
                    <TableCell className="py-6 text-sm text-slate-400 whitespace-normal">
                      <div className="flex items-start gap-3">
                        <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                        <span className="leading-relaxed">{row.traditional}</span>
                      </div>
                    </TableCell>
                    <TableCell className="bg-emerald-500/5 py-6 text-sm font-medium text-white whitespace-normal">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                        <span className="leading-relaxed">{row.elite}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="space-y-4 lg:hidden">
            {contrast.rows.map((row, i) => (
              <div
                key={i}
                className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <h4 className="border-b border-slate-800 pb-3 text-lg font-bold text-emerald-400">
                  {row.feature}
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <div className="text-sm text-slate-300">
                      <span className="mb-1 block text-xs font-semibold text-slate-500 uppercase">
                        Tradycyjny:
                      </span>{" "}
                      {row.traditional}
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-lg border border-emerald-500/10 bg-emerald-500/5 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <div className="text-sm text-white">
                      <span className="mb-1 block text-xs font-semibold text-emerald-500 uppercase">
                        Model Elite:
                      </span>{" "}
                      {row.elite}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ BLOCK */}
      <section className="w-full bg-slate-50 py-12 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-balance break-words text-slate-900 sm:text-3xl md:text-4xl">
              {faq.title}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-slate-200"
              >
                <AccordionTrigger className="px-1 py-4 text-left text-sm font-semibold break-words text-slate-900 hover:text-emerald-600 sm:text-base md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-1 pb-4 text-sm leading-relaxed break-words text-slate-600 sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7. THE IRRESISTIBLE OFFER CLOSING */}
      <section
        id="oferta"
        className="w-full bg-emerald-500 py-12 text-slate-950 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-balance break-words sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            {offer.title}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl px-2 text-sm font-medium text-balance text-emerald-950 sm:mb-12 sm:text-base md:text-lg">
            {offer.subtitle}
          </p>

          <div className="mx-auto mb-8 w-full max-w-2xl rounded-xl border border-emerald-100 bg-white p-5 text-left shadow-xl sm:mb-12 sm:rounded-2xl sm:p-8">
            <h3 className="mb-5 flex flex-col items-center justify-center border-b border-slate-100 pb-4 text-center text-base font-bold text-balance break-words text-slate-900 sm:mb-6 sm:flex-row sm:text-lg md:text-xl">
              {offer.packetTitle}{" "}
              <span className="mt-1 text-sm font-normal text-slate-500 sm:mt-0 sm:ml-2 sm:text-base">
                {offer.packetVal}
              </span>
            </h3>

            <ul className="space-y-6 sm:space-y-8">
              {offer.benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex w-full flex-row items-start gap-3 sm:gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 sm:h-12 sm:w-12">
                    {i === 0 ? (
                      <Target className="h-5 w-5 sm:h-6 sm:w-6" />
                    ) : i === 1 ? (
                      <Banknote className="h-5 w-5 sm:h-6 sm:w-6" />
                    ) : (
                      <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <strong className="mb-1 block text-sm leading-tight break-words text-slate-900 sm:text-base">
                      {b.title}
                    </strong>
                    <span className="block text-xs leading-snug break-words text-slate-600 sm:text-sm">
                      {b.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full justify-center px-0 sm:px-4">
            <Button
              size="lg"
              className="group !h-auto w-full rounded-full bg-slate-950 px-4 py-4 text-sm font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:shadow-2xl sm:!h-16 sm:w-auto sm:px-10 sm:text-lg"
              asChild
            >
              <Link href={siteConfig.calendlyLink} className="flex w-full items-center justify-center gap-2">
                <span className="whitespace-normal text-center text-balance leading-tight">{offer.cta}</span>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
