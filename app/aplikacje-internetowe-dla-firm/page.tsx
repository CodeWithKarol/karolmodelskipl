import type { Metadata } from "next"
import { OfferPage, buildOfferMetadata } from "@/components/offer-page"
import { offerPage } from "@/lib/content/aplikacje-internetowe/page"

export async function generateMetadata(): Promise<Metadata> {
  return buildOfferMetadata(offerPage)
}

export default function AplikacjeInternetoweDlaFirmPage() {
  return <OfferPage config={offerPage} />
}
