import type { Metadata } from "next"
import {
  QualificationPage,
  buildQualificationMetadata,
} from "@/components/qualification-page"
import { qualification } from "@/lib/content/aplikacje-internetowe/page"

export async function generateMetadata(): Promise<Metadata> {
  return buildQualificationMetadata({
    slug: "kwalifikacja-aplikacje",
    title: "Weryfikacja kwalifikacyjna | Aplikacje internetowe dla firm",
    description:
      "3 szybkie pytania. Sprawdź, czy Twoja firma kwalifikuje się do wdrożenia dedykowanego systemu w tym kwartale.",
  })
}

export default function KwalifikacjaPage() {
  return <QualificationPage qualification={qualification} />
}
