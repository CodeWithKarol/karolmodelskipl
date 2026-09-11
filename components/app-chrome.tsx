"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

const FUNNEL_PATHS = ["/projektowanie-mvp", "/aplikacje-internetowe-dla-firm", "/naprawa-i-modernizacja-aplikacji", "/doradztwo-techniczne-dla-firm", "/kwalifikacja-aplikacje", "/kwalifikacja-modernizacja", "/kwalifikacja-saas", "/kwalifikacja-doradztwo"]

function FunnelHeader() {
  return (
    <div className="fixed top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center px-4 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center">
          <span className="text-[15px] font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground">
            Karol Modelski
          </span>
        </Link>
      </div>
    </div>
  )
}

const FOOTER_VARIANTS = {
  sme: {
    title: "Karol Modelski – Niezależny Partner Technologiczny dla MŚP",
    description:
      "Projektuję i wdrażam dedykowane systemy operacyjne w standardach bankowych (Citibank, BNP Paribas). Zastępuję agencje programistyczne bezpośrednią współpracą inżynierską – zamieniając paraliż w arkuszach Excela na stabilny zysk i automatyzację procesów.",
    tagline: "MŚP • Standardy bankowe • 100% własności kodu",
  },
  modernizacja: {
    title: "Karol Modelski – Niezależny Partner Technologiczny dla Biznesu",
    description:
      "Uzdrawiam architekturę systemów transakcyjnych i platform B2B — odblokowując sprzedaż bez pisania kodu od zera.",
    tagline: "E-commerce & B2B • Klasa bankowa • Uzdrowienie w 2–4 tygodnie • Zero przestoju",
  },
  doradztwo: {
    title:
      "Karol Modelski – Niezależny Partner Technologiczny dla Zarządów & MŚP",
    description:
      "Chronię budżety firm przed zawyżonymi wycenami IT i niekorzystnymi umowami agencyjnymi.",
    tagline:
      "MŚP • Audyt IT • Gwarancja min. 10 000 zł oszczędności • 0% prowizji od agencji",
  },
  b2b: {
    title: "Karol Modelski – Partner Technologiczny dla Założycieli B2B & SaaS",
    description:
      "Buduję dochodowe platformy internetowe dla założycieli firm — od pomysłu do działającego, gotowego do sprzedaży systemu w 30 dni.",
    tagline: "B2B / SaaS · Start platformy w 30 dni · 100% własności kodu",
  },
} as const

type FunnelVariant = keyof typeof FOOTER_VARIANTS

function getFunnelVariant(pathname: string): FunnelVariant {
  if (
    pathname === "/naprawa-i-modernizacja-aplikacji" ||
    pathname === "/kwalifikacja-modernizacja"
  )
    return "modernizacja"
  if (
    pathname === "/doradztwo-techniczne-dla-firm" ||
    pathname === "/kwalifikacja-doradztwo"
  )
    return "doradztwo"
  if (
    pathname === "/aplikacje-internetowe-dla-firm" ||
    pathname === "/kwalifikacja-aplikacje"
  )
    return "sme"
  return "b2b"
}

function FunnelFooter({ variant }: { variant: FunnelVariant }) {
  const { title, description, tagline } = FOOTER_VARIANTS[variant]

  return (
    <footer className="relative border-t border-border bg-background pt-12 text-muted-foreground sm:pt-16 md:pt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12">
          <div>
            <p className="text-base font-bold text-foreground sm:text-lg">
              {title}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {description}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">Kontakt</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="mailto:kontakt@karolmodelski.pl" className="text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4">
                  kontakt@karolmodelski.pl
                </a>
              </li>
              <li>
                <a href="tel:+48664598563" className="text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4">
                  +48 664 598 563
                </a>
              </li>
              <li className="text-muted-foreground">Warszawa / współpraca zdalna w całej Polsce</li>
              <li className="text-muted-foreground">NIP: 6112800950</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 pb-8 text-center sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-8 sm:pt-8 sm:pb-6">
          <p className="text-xs text-muted-foreground sm:text-sm">© 2026 Karol Modelski. Wszelkie prawa zastrzeżone.</p>
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
            {tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isFunnel = FUNNEL_PATHS.includes(pathname)

  return (
    <>
      {isFunnel ? <FunnelHeader /> : <SiteHeader />}
      {children}
      {isFunnel ? (
        <FunnelFooter variant={getFunnelVariant(pathname)} />
      ) : (
        <Footer />
      )}
    </>
  )
}
