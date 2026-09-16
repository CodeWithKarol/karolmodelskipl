import type { Metadata } from "next"
import {
  QualificationPage,
  buildQualificationMetadata,
} from "@/components/qualification-page"
import { content } from "@/lib/content"

export async function generateMetadata(): Promise<Metadata> {
  return buildQualificationMetadata({
    slug: "kwalifikacja-saas",
    title: "Aplikacja o projekt | Karol Modelski",
    description:
      "Sprawdź, czy Twój projekt kwalifikuje się do startu w 30 dni. 3 pytania, zanim otworzę kalendarz na rozmowę kwalifikacyjną.",
  })
}

export default function AplikujPage() {
  const { mvp } = content

  return <QualificationPage qualification={mvp.application} />
}
