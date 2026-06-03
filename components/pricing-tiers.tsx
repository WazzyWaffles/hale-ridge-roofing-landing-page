"use client"

import * as React from "react"
import { Check, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { useScrollTo } from "@/hooks/use-scroll-to"
import { cn } from "@/lib/utils"

const pricingTiers = [
  {
    name: "Good",
    subtitle: "Standard Protection",
    price: "$8,500",
    priceNote: "Starting price",
    description: "Quality materials and professional installation for budget-conscious homeowners.",
    features: [
      "3-tab asphalt shingles",
      "Standard underlayment",
      "5-year workmanship warranty",
      "Basic cleanup included",
      "Permit handling",
    ],
    featured: false,
  },
  {
    name: "Better",
    subtitle: "Enhanced Durability",
    price: "$11,000 - $16,000",
    priceNote: "Most popular",
    description: "Premium materials with extended protection for long-term value and peace of mind.",
    features: [
      "Architectural shingles",
      "Synthetic underlayment",
      "10-year workmanship warranty",
      "Ice & water shield",
      "Ridge vent installation",
      "Full debris removal",
    ],
    featured: true,
  },
  {
    name: "Best",
    subtitle: "Maximum Protection",
    price: "$18,000+",
    priceNote: "Premium tier",
    description: "Top-of-the-line materials and craftsmanship for the ultimate in roof protection.",
    features: [
      "Designer shingles",
      "Premium underlayment system",
      "Lifetime workmanship warranty",
      "Full ice & water protection",
      "Upgraded ventilation",
      "Copper flashing",
      "Extended manufacturer warranty",
    ],
    featured: false,
  },
]

export function PricingTiers() {
  const { scrollTo } = useScrollTo()

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container-main">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Choose the protection level that fits your needs and budget. 
            All packages include professional installation and our quality guarantee.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            * Pricing shown is for typical residential roofs. Your actual estimate may vary based on roof size and complexity.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <AnimatedSection key={tier.name} delay={index * 0.1}>
              <GlassCard
                className={cn(
                  "h-full flex flex-col",
                  tier.featured && "ring-2 ring-primary relative"
                )}
                hover={false}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-3xl font-bold text-foreground">{tier.price}</p>
                  <p className="text-sm text-muted-foreground">{tier.priceNote}</p>
                </div>

                <p className="mt-4 text-sm text-muted-foreground text-center leading-relaxed">
                  {tier.description}
                </p>

                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollTo("estimate")}
                  className={cn(
                    "mt-6 w-full",
                    tier.featured
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
