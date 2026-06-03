"use client"

import * as React from "react"
import { Shield } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { GlassCard } from "@/components/ui/glass-card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a typical roof replacement take?",
    answer:
      "Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of your roof. We work efficiently while maintaining our high standards of quality, and we always clean up thoroughly at the end of each day.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Yes! We have extensive experience working with all major insurance providers. We can assist with the claims process, provide detailed documentation, and meet with adjusters to ensure you receive fair coverage for storm damage and other covered repairs.",
  },
  {
    question: "What warranties do you offer?",
    answer:
      "All our installations come with both manufacturer warranties on materials and our own workmanship warranty. Depending on your chosen package, workmanship warranties range from 5 years to lifetime coverage. We stand behind every job we complete.",
  },
  {
    question: "How do I know if I need a repair or full replacement?",
    answer:
      "During our free inspection, we'll assess the age of your roof, extent of damage, and overall condition. Generally, roofs under 15 years with localized damage are good candidates for repair. Older roofs or those with widespread issues often benefit more from replacement.",
  },
  {
    question: "What types of roofing materials do you work with?",
    answer:
      "We specialize in asphalt shingles, including 3-tab, architectural, and designer varieties. We also work with metal roofing, flat roof systems, and slate for select projects. During your consultation, we'll recommend the best material for your home and budget.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Hale Ridge Roofing is fully licensed in Virginia and carries comprehensive liability insurance and workers' compensation coverage. We're happy to provide documentation upon request for your peace of mind.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the greater Northern Virginia area, including Fairfax County, Loudoun County, Arlington County, and surrounding communities. If you're unsure whether we cover your area, just give us a call and we'll let you know.",
  },
  {
    question: "How much does a new roof cost?",
    answer:
      "Roof replacement costs vary based on size, materials, and complexity. For typical residential homes in our area, costs generally range from $8,500 to $25,000+. We provide free detailed estimates so you know exactly what to expect before any work begins.",
  },
]

export function WarrantyFAQ() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Warranty Card */}
          <AnimatedSection>
            <GlassCard hover={false} className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Our Warranty Promise
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                At Hale Ridge Roofing, we stand behind every project we complete. 
                Our workmanship warranties range from 5 years to lifetime coverage, 
                depending on your chosen package.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Workmanship Warranty</p>
                    <p className="text-sm text-muted-foreground">
                      5-year to lifetime coverage on all labor and installation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Manufacturer Warranty</p>
                    <p className="text-sm text-muted-foreground">
                      Full manufacturer warranties on all materials used
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Satisfaction Guarantee</p>
                    <p className="text-sm text-muted-foreground">
                      We&apos;re not done until you&apos;re completely satisfied
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* FAQ Accordion */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
