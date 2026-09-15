export const SILO_LABELS: Record<string, string> = {
  "Dedykowane Systemy dla Firm (Koszty i Zyski)": "Dedykowane systemy",
  "Szybka Wersja Startowa Aplikacji": "Szybka wersja startowa",
  "Bezinwazyjna Modernizacja Systemów": "Modernizacja systemów",
  "Strategia i Niezależne Partnerstwo Technologiczne": "Strategia IT",
}

export function siloLabel(silo: string) {
  return SILO_LABELS[silo] ?? silo
}
