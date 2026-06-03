"use client"

import * as React from "react"
import { Star, Quote } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { GlassCard } from "@/components/ui/glass-card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Arlington, VA",
    rating: 5,
    quote:
      "Mason and his team replaced our entire roof in just two days. They were professional, cleaned up everything, and the new roof looks fantastic. Highly recommend!",
  },
  {
    id: 2,
    name: "Robert Chen",
    location: "Fairfax, VA",
    rating: 5,
    quote:
      "After the big storm last spring, Hale Ridge was out the next morning to assess the damage. They handled everything with our insurance and made the whole process painless.",
  },
  {
    id: 3,
    name: "Jennifer Williams",
    location: "Leesburg, VA",
    rating: 5,
    quote:
      "We&apos;ve used Hale Ridge twice now - once for a repair and once for a full replacement. Both times they exceeded our expectations. Fair pricing and honest work.",
  },
  {
    id: 4,
    name: "Michael Thompson",
    location: "Ashburn, VA",
    rating: 5,
    quote:
      "The inspection report was thorough and helped us understand exactly what needed attention. No pressure sales tactics, just honest advice. Refreshing experience.",
  },
  {
    id: 5,
    name: "Amanda Rodriguez",
    location: "McLean, VA",
    rating: 5,
    quote:
      "Found a leak that two other companies couldn&apos;t locate. Fixed it quickly and the price was exactly what they quoted. Will definitely call them again.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-main">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Don&apos;t just take our word for it. Here&apos;s what homeowners across 
            Northern Virginia have to say about working with Hale Ridge Roofing.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.1}>
              <GlassCard className="h-full flex flex-col">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-foreground leading-relaxed flex-1">
                  {testimonial.quote.replace(/&apos;/g, "'")}
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <StarRating rating={testimonial.rating} />
                  <p className="mt-2 font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional testimonials in a different layout */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.slice(3).map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={0.3 + index * 0.1}>
              <GlassCard className="flex flex-col sm:flex-row gap-4">
                <Quote className="h-6 w-6 text-primary/20 shrink-0" />
                <div>
                  <p className="text-foreground leading-relaxed">
                    {testimonial.quote.replace(/&apos;/g, "'")}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-sm text-muted-foreground">
                      {testimonial.name}, {testimonial.location}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
