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
      "@type": "Organization",
      "@id": "https://www.karolmodelski.pl/#organization",
      "name": "Karol Modelski",
      "url": "https://www.karolmodelski.pl"
    },
    {
      "@type": "Person",
      "@id": "https://www.karolmodelski.pl/#person",
      "name": "Karol Modelski",
      "jobTitle": "Senior Frontend Developer",
      "description": "Ekspert technologii frontendowych i budowy produktów cyfrowych (MVP Builder) z doświadczeniem projektowym w Citibanku, BNP Paribas, Amway oraz Silent Eight.",
      "worksFor": {
        "@id": "https://www.karolmodelski.pl/#organization"
      },
      "sameAs": [
        "https://www.linkedin.com/in/karol-modelski/"
      ],
      "knowsAbout": [
        "Frontend Architecture",
        "MVP Development",
        "Web Security",
        "Performance Optimization"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.karolmodelski.pl/#website",
      "url": "https://www.karolmodelski.pl",
      "name": "Karol Modelski - Frontend Developer",
      "publisher": {
        "@id": "https://www.karolmodelski.pl/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.karolmodelski.pl/#webpage",
      "url": "https://www.karolmodelski.pl",
      "name": "Karol Modelski - Tworzenie Aplikacji Internetowych | Warszawa",
      "isPartOf": {
        "@id": "https://www.karolmodelski.pl/#website"
      },
      "about": {
        "@id": "https://www.karolmodelski.pl/#person"
      }
    }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.karolmodelski.pl"),
  title: {
    default: "Karol Modelski - Tworzenie Aplikacji Internetowych | Warszawa",
    template: "%s | Karol Modelski"
  },
  description: "Chcesz szybko walidować pomysł? Oferuję tworzenie aplikacji internetowych i MVP w 30 dni bez kosztów agencji. Sprawdź, jak szybko wejdziesz na rynek!",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Karol Modelski - Tworzenie Aplikacji Internetowych | Warszawa",
    description: "Chcesz szybko walidować pomysł? Oferuję tworzenie aplikacji internetowych i MVP w 30 dni bez kosztów agencji.",
    url: 'https://www.karolmodelski.pl',
    siteName: 'Karol Modelski - Tworzenie Aplikacji Internetowych',
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Karol Modelski - Tworzenie Aplikacji Internetowych | Warszawa",
    description: "Zbuduj niezawodny system bez długu technologicznego i korporacyjnej biurokracji.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
