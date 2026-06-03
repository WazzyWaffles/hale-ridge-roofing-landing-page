"use client"

import * as React from "react"
import { 
  Home, 
  Wrench, 
  CloudLightning, 
  Droplets, 
  Search,
  ArrowRight
} from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { useScrollTo } from "@/hooks/use-scroll-to"

const services = [
  {
    icon: Home,
    title: "Roof Replacement",
    description:
      "Complete tear-off and installation with premium materials. We handle everything from permits to final cleanup.",
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    description:
      "Fast, reliable repairs for leaks, damaged shingles, flashing issues, and general wear. Most repairs completed same-day.",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Repair",
    description:
      "Emergency response for hail, wind, and fallen tree damage. We work directly with your insurance company.",
  },
  {
    icon: Droplets,
    title: "Leak Detection",
    description:
      "Advanced diagnostic techniques to find and fix even the trickiest leaks before they cause major damage.",
  },
  {
    icon: Search,
    title: "Roof Inspections",
    description:
      "Comprehensive inspections for home buyers, sellers, and annual maintenance. Detailed reports provided.",
  },
]

export function Services() {
  const { scrollTo } = useScrollTo()

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-main">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Comprehensive Roofing Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From minor repairs to complete replacements, we have the expertise 
            to handle any roofing project in Northern Virginia.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <GlassCard className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() => scrollTo("estimate")}
            className="bg-primary hover:bg-primary/90"
          >
            Get a Free Roof Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
