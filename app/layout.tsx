import { Geist_Mono, Inter } from "next/font/google"
import { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.karolmodelski.pl/#organization",
      name: "Karol Modelski - Tworzenie Aplikacji Internetowych | Warszawa",
      url: "https://www.karolmodelski.pl",
      telephone: "+48664598563",
      areaServed: "PL",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warszawa",
        addressCountry: "PL",
      },
      sameAs: ["https://g.page/r/CZSVfAGtTiIzEBM"],
      founder: {
        "@id": "https://www.karolmodelski.pl/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.karolmodelski.pl/#person",
      name: "Karol Modelski",
      jobTitle: "Niezależny Partner Technologiczny",
      description:
        "Ekspert technologii frontendowych i budowy produktów cyfrowych (MVP Builder) z doświadczeniem projektowym m.in. w Citibanku, BNP Paribas oraz Silent Eight.",
      worksFor: {
        "@id": "https://www.karolmodelski.pl/#organization",
      },
      sameAs: ["https://www.linkedin.com/in/karol-modelski/"],
      knowsAbout: [
        "Architektura Frontendowa",
        "Tworzenie MVP",
        "Optymalizacja Wydajności",
        "Bezpieczeństwo Aplikacji",
        "Tworzenie Aplikacji Internetowych",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.karolmodelski.pl/#website",
      url: "https://www.karolmodelski.pl",
      name: "Karol Modelski - Niezależny Partner Technologiczny",
      publisher: {
        "@id": "https://www.karolmodelski.pl/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.karolmodelski.pl/#webpage",
      url: "https://www.karolmodelski.pl",
      name: "Karol Modelski - Tworzenie Aplikacji Internetowych | Warszawa",
      isPartOf: {
        "@id": "https://www.karolmodelski.pl/#website",
      },
      about: {
        "@id": "https://www.karolmodelski.pl/#person",
      },
    },
  ],
}

const META_DESCRIPTION = "Twój biznes nie może czekać na powolne agencje. Wdrażam stabilne MVP w 30 dni, biorąc pełną odpowiedzialność za kod i architekturę aplikacji.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.karolmodelski.pl"),
  title: {
    default: "Karol Modelski - Tworzenie Aplikacji Internetowych | Warszawa",
    template: "%s | Karol Modelski",
  },
  description: META_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Karol Modelski - Tworzenie Aplikacji Internetowych | Warszawa",
    description: META_DESCRIPTION,
    url: "https://www.karolmodelski.pl",
    siteName: "Karol Modelski - Tworzenie Aplikacji Internetowych | Warszawa",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karol Modelski - Tworzenie Aplikacji Internetowych | Warszawa",
    description: META_DESCRIPTION,
  },
}

import { Footer } from "@/components/footer"

// ... (reszta importów)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
