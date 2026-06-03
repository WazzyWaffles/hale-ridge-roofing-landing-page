import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustStats } from "@/components/trust-stats"
import { Services } from "@/components/services"
import { FeaturedWork } from "@/components/featured-work"
import { PricingTiers } from "@/components/pricing-tiers"
import { Testimonials } from "@/components/testimonials"
import { ServiceArea } from "@/components/service-area"
import { WarrantyFAQ } from "@/components/warranty-faq"
import { EstimateForm } from "@/components/estimate-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <Services />
        <FeaturedWork />
        <PricingTiers />
        <Testimonials />
        <ServiceArea />
        <WarrantyFAQ />
        <EstimateForm />
      </main>
      <Footer />
    </>
  )
}
