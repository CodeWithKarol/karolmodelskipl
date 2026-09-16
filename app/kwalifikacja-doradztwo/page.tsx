import type { Metadata } from "next"
import {
  QualificationPage,
  buildQualificationMetadata,
} from "@/components/qualification-page"
import { qualification } from "@/lib/content/doradztwo-techniczne-dla-firm/page"

export async function generateMetadata(): Promise<Metadata> {
  return buildQualificationMetadata({
    slug: "kwalifikacja-doradztwo",
    title: "Weryfikacja kwalifikacyjna | Niezależny Fractional CTO",
    description:
      "4 szybkie pytania. Sprawdź, czy Twój projekt kwalifikuje się do współpracy w tym kwartale.",
  })
}

export default function KwalifikacjaDoradztwoPage() {
  return <QualificationPage qualification={qualification} />
}
