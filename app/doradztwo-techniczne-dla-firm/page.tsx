import type { Metadata } from "next"
import { OfferPage, buildOfferMetadata } from "@/components/offer-page"
import { offerPage } from "@/lib/content/doradztwo-techniczne-dla-firm/page"

export async function generateMetadata(): Promise<Metadata> {
  return buildOfferMetadata(offerPage)
}

export default function DoradztwoTechnicznePage() {
  return <OfferPage config={offerPage} />
}
