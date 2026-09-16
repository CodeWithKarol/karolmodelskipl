import { Inter } from "next/font/google"
import { Metadata } from "next"
import Script from "next/script"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppChrome } from "@/components/app-chrome"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

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
      className={cn("scroll-smooth antialiased", inter.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N3QL4956');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3QL4956"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <ThemeProvider>
          <AppChrome>{children}</AppChrome>
        </ThemeProvider>
      </body>
    </html>
  )
}
