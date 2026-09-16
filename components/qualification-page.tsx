import type { Metadata } from "next"
import { QualificationForm } from "@/components/qualification-form"
import { siteConfig } from "@/lib/site-config"
import type { QualificationContent } from "@/lib/content/types"

export function buildQualificationMetadata({
  slug,
  title,
  description,
}: {
  slug: string
  title: string
  description: string
}): Metadata {
  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `${siteConfig.url}/${slug}`,
    },
  }
}

export function QualificationPage({
  qualification,
}: {
  qualification: QualificationContent
}) {
  return (
    <main className="flex-1 bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <QualificationForm qualification={qualification} />
    </main>
  )
}
