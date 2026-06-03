"use client"

import * as React from "react"
import { MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { GlassCard } from "@/components/ui/glass-card"

const serviceAreas = [
  { name: "Arlington", county: "Arlington County" },
  { name: "Fairfax", county: "Fairfax County" },
  { name: "Leesburg", county: "Loudoun County" },
  { name: "Ashburn", county: "Loudoun County" },
  { name: "McLean", county: "Fairfax County" },
  { name: "Vienna", county: "Fairfax County" },
  { name: "Reston", county: "Fairfax County" },
  { name: "Sterling", county: "Loudoun County" },
  { name: "Herndon", county: "Fairfax County" },
  { name: "Great Falls", county: "Fairfax County" },
  { name: "Centreville", county: "Fairfax County" },
  { name: "Chantilly", county: "Fairfax County" },
]

export function ServiceArea() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Proudly Serving Northern Virginia
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              For over 14 years, we&apos;ve been the trusted roofing partner for 
              homeowners across Northern Virginia. From Arlington to Leesburg, 
              we&apos;re committed to protecting your home.
            </p>
            <p className="mt-4 text-muted-foreground">
              Don&apos;t see your area listed? Give us a call - we may still be able to help.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <GlassCard hover={false}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Areas We Cover
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div
                    key={area.name}
                    className="flex items-center gap-2 text-sm"
                  >
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-foreground">{area.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Serving Fairfax County, Loudoun County, Arlington County, and surrounding areas.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
