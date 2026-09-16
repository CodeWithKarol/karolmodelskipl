import { Inter } from "next/font/google"
import { Metadata } from "next"
import Script from "next/script"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppChrome } from "@/components/app-chrome"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, websiteJsonLd],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.brand,
    template: `%s | ${siteConfig.name}`,
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
