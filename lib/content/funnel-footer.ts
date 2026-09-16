export const funnelFooterVariants = {
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
    tagline:
      "E-commerce & B2B • Klasa bankowa • Uzdrowienie w 2–4 tygodnie • Zero przestoju",
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

export type FunnelFooterVariant = keyof typeof funnelFooterVariants
