import { Metadata } from "next"
import { ModernizacjaQualificationForm } from "@/components/modernizacja-qualification-form"
import { qualification } from "@/lib/content/naprawa-i-modernizacja-aplikacji/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Weryfikacja kwalifikacyjna | Bezinwazyjna modernizacja oprogramowania",
    description:
      "3 szybkie pytania. Sprawdź, czy Twoja platforma kwalifikuje się do modernizacji w tym kwartale.",
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: "https://www.karolmodelski.pl/kwalifikacja-modernizacja",
    },
  }
}

export default function KwalifikacjaModernizacjaPage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <ModernizacjaQualificationForm qualification={qualification} />
    </main>
  )
}
