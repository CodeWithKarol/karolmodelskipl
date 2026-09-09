"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

const FUNNEL_PATHS = ["/projektowanie-mvp", "/aplikuj", "/aplikacje-internetowe-dla-firm", "/kwalifikacja"]

function FunnelHeader() {
  return (
    <div className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center px-4 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center">
          <span className="text-[15px] font-bold tracking-tight text-slate-200 transition-colors group-hover:text-white">
            Karol Modelski
          </span>
        </Link>
      </div>
    </div>
  )
}

function FunnelFooter({ isSme }: { isSme?: boolean }) {
  return (
    <footer className="relative border-t border-slate-800/60 bg-slate-950 py-12 text-slate-400 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-12">
          <div>
            <p className="text-base font-bold text-slate-200 sm:text-lg">
              {isSme
                ? "Karol Modelski – Niezależny Partner Technologiczny dla MŚP"
                : "Karol Modelski – Partner Technologiczny dla Założycieli B2B & SaaS"}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-[15px]">
              {isSme
                ? "Projektuję i wdrażam dedykowane systemy operacyjne w standardach bankowych (Citibank, BNP Paribas). Zastępuję agencje programistyczne bezpośrednią współpracą inżynierską – zamieniając paraliż w arkuszach Excela na stabilny zysk i automatyzację procesów."
                : "Projektuję i wdrażam stabilne systemy internetowe w standardach bankowych (Citibank, BNP Paribas). Zastępuję agencje programistyczne bezpośrednią współpracą inżynierską — od pomysłu do działającego kodu w 30 dni."}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">Kontakt</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="mailto:kontakt@karolmodelski.pl" className="text-slate-300 transition-colors hover:text-white hover:underline underline-offset-4">
                  kontakt@karolmodelski.pl
                </a>
              </li>
              <li>
                <a href="tel:+48664598563" className="text-slate-300 transition-colors hover:text-white hover:underline underline-offset-4">
                  +48 664 598 563
                </a>
              </li>
              <li className="text-slate-400">Warszawa / współpraca zdalna w całej Polsce</li>
              <li className="text-slate-400">NIP: 6112800950</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-800/60 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500 sm:text-sm">© 2026 Karol Modelski. Wszelkie prawa zastrzeżone.</p>
          <p className="text-[11px] uppercase tracking-wider text-slate-600 sm:text-xs">
            {isSme
              ? "MŚP • Standardy bankowe • 100% własności kodu"
              : "B2B / SaaS · Bankowe standardy · 30 dni"}
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
        <FunnelFooter
          isSme={
            pathname === "/aplikacje-internetowe-dla-firm" ||
            pathname === "/kwalifikacja"
          }
        />
      ) : (
        <Footer />
      )}
    </>
  )
}
