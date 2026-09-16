import type { Metadata } from "next"
import { OfferPage, buildOfferMetadata } from "@/components/offer-page"
import { offerPage } from "@/lib/content/mvp"

export async function generateMetadata(): Promise<Metadata> {
  return buildOfferMetadata(offerPage)
}

export default function ProjektowanieMvpPage() {
  return <OfferPage config={offerPage} />
}
