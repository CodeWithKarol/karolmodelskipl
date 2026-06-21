import { Geist_Mono, Inter } from "next/font/google"
import { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.karolmodelski.pl/#organization",
      name: "Karol Modelski - Niezależny Partner Technologiczny",
      url: "https://www.karolmodelski.pl",
      telephone: "+48664598563",
      areaServed: "PL",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warszawa",
        addressCountry: "PL",
      },
      sameAs: ["https://g.page/r/CZSVfAGtTiIzEBM"],
      founder: { "@id": "https://www.karolmodelski.pl/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://www.karolmodelski.pl/#person",
      name: "Karol Modelski",
      jobTitle: "Niezależny Partner Technologiczny",
      worksFor: { "@id": "https://www.karolmodelski.pl/#organization" },
      sameAs: ["https://www.linkedin.com/in/karol-modelski/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.karolmodelski.pl/#website",
      url: "https://www.karolmodelski.pl",
      name: "Karol Modelski - Niezależny Partner Technologiczny",
      publisher: { "@id": "https://www.karolmodelski.pl/#organization" },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.karolmodelski.pl"),
  title: {
    default: "Karol Modelski - Niezależny Partner Technologiczny",
    template: "%s | Karol Modelski",
  },
  description:
    "Masz dość software house'ów? Tworzę dedykowane aplikacje internetowe dla firm.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pl"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        "scroll-smooth antialiased",
        fontMono.variable,
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
          <SiteHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
