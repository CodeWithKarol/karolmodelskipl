import { Metadata } from "next"
import { DoradztwoQualificationForm } from "@/components/doradztwo-qualification-form"
import { qualification } from "@/lib/content/doradztwo-techniczne-dla-firm/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Weryfikacja kwalifikacyjna | Niezależny Fractional CTO",
    description:
      "4 szybkie pytania. Sprawdź, czy Twój projekt kwalifikuje się do współpracy w tym kwartale.",
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: "https://www.karolmodelski.pl/kwalifikacja-doradztwo",
    },
  }
}

export default function KwalifikacjaDoradztwoPage() {
  return (
    <main className="flex-1 bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <DoradztwoQualificationForm qualification={qualification} />
    </main>
  )
}
