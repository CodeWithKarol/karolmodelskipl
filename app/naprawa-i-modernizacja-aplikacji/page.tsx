import type { Metadata } from "next"
import { OfferPage, buildOfferMetadata } from "@/components/offer-page"
import { offerPage } from "@/lib/content/naprawa-i-modernizacja-aplikacji/page"

export async function generateMetadata(): Promise<Metadata> {
  return buildOfferMetadata(offerPage)
}

export default function ModernizacjaOprogramowaniaPage() {
  return <OfferPage config={offerPage} />
}
