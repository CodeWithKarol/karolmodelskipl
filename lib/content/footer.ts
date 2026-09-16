import { siteConfig } from "@/lib/site-config"
import type { FooterContent } from "./types"

export const footer = {
  brand: {
    name: "Karol Modelski",
    title: "Niezależny Partner Technologiczny dla MŚP",
    description:
      "Projektuję i buduję stabilne oprogramowanie biznesowe dla małych i średnich firm. Zastępuję agencje programistyczne bezpośrednią współpracą, dając Ci bezpieczeństwo wypracowane w bankowości oraz 100% inwestycji w jakość Twojego systemu.",
  },
  solutions: {
    title: "Obszary współpracy",
    items: [
      { label: "Fundament SaaS/B2B w 30 dni", href: "/projektowanie-mvp" },
      {
        label: "Tarcza Portfela IT (Fractional CTO)",
        href: "/doradztwo-techniczne-dla-firm",
      },
      {
        label: "Modernizacja Systemów w Locie",
        href: "/naprawa-i-modernizacja-aplikacji",
      },
      {
        label: "Systemy Skalowania Operacji",
        href: "/aplikacje-internetowe-dla-firm",
      },
    ],
  },
  guarantees: {
    title: "Gwarancje Bezpieczeństwa",
    items: [
      {
        title: "Gwarancja dostarczenia",
        desc: "Płacisz za dany etap dopiero po akceptacji działającego efektu lub raportu.",
      },
      {
        title: "Jakość bankowa",
        desc: "Standardy bezpieczeństwa i ochrony danych sprawdzone w globalnych instytucjach (Citibank, BNP Paribas).",
      },
      {
        title: "Niezależność technologiczna",
        desc: "Uniwersalny, w pełni udokumentowany kod – Twój system nigdy nie jest uzależniony od jednej osoby.",
      },
    ],
  },
  contact: {
    title: "Bezpośredni kontakt",
    linkedin: siteConfig.linkedinUrl,
    linkedinLabel: "Profil na LinkedIn",
    coverage: "Warszawa oraz cała Polska (współpraca zdalna i bezpośrednia)",
    email: siteConfig.email,
    phone: siteConfig.phoneDisplay,
    address: "ul. Mieczysława Karłowicza 1 lok. 40, 58-506 Jelenia Góra",
    nip: siteConfig.nip,
  },
  legal: {
    title: "Dokumenty i Kwestie Prawne",
    items: [] as { label: string; href: string }[],
  },
  copyright:
    "© 2026 Karol Modelski. Wszelkie prawa zastrzeżone. Oprogramowanie tworzone z myślą o stabilności i zysku Twojej firmy.",
} satisfies FooterContent
