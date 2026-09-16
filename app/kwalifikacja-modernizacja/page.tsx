import type { Metadata } from "next"
import {
  QualificationPage,
  buildQualificationMetadata,
} from "@/components/qualification-page"
import { qualification } from "@/lib/content/naprawa-i-modernizacja-aplikacji/page"

export async function generateMetadata(): Promise<Metadata> {
  return buildQualificationMetadata({
    slug: "kwalifikacja-modernizacja",
    title:
      "Weryfikacja kwalifikacyjna | Bezinwazyjna modernizacja oprogramowania",
    description:
      "3 szybkie pytania. Sprawdź, czy Twoja platforma kwalifikuje się do modernizacji w tym kwartale.",
  })
}

export default function KwalifikacjaModernizacjaPage() {
  return <QualificationPage qualification={qualification} />
}
