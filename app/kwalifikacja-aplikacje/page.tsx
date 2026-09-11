import { Metadata } from "next"
import { QualificationForm } from "@/components/qualification-form"
import { qualification } from "@/lib/content/aplikacje-internetowe/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Weryfikacja kwalifikacyjna | Aplikacje internetowe dla firm",
    description:
      "3 szybkie pytania. Sprawdź, czy Twoja firma kwalifikuje się do wdrożenia dedykowanego systemu w tym kwartale.",
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: "https://www.karolmodelski.pl/kwalifikacja-aplikacje",
    },
  }
}

export default function KwalifikacjaPage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <QualificationForm qualification={qualification} />
    </main>
  )
}
