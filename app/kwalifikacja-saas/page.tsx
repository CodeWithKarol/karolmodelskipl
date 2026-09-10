import { Metadata } from "next"
import { ApplicationForm } from "@/components/application-form"
import { content } from "@/lib/content"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aplikacja o projekt | Karol Modelski",
    description:
      "Sprawdź, czy Twój projekt kwalifikuje się do startu w 30 dni. 3 pytania, zanim otworzę kalendarz na rozmowę kwalifikacyjną.",
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: "https://www.karolmodelski.pl/kwalifikacja-saas",
    },
  }
}

export default function AplikujPage() {
  const { mvp } = content

  return (
    <main className="flex-1 bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

      <ApplicationForm application={mvp.application} />
    </main>
  )
}
