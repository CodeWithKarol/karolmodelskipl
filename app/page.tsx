import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { StorySection } from "@/components/story-section"
import { OfferSection } from "@/components/offer-section"
import { ContrastSection } from "@/components/contrast-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <TrustedBySection />
      <StorySection />
      <OfferSection />
      <ContrastSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
