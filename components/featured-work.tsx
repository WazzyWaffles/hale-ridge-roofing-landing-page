"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Complete Roof Replacement",
    location: "Arlington, VA",
    type: "Roof Replacement",
    before: "/images/before-1.png",
    after: "/images/after-1.png",
    description: "Full tear-off and replacement with GAF Timberline HDZ shingles.",
  },
  {
    id: 2,
    title: "Storm Damage Restoration",
    location: "Fairfax, VA",
    type: "Storm Damage",
    before: "/images/before-2.png",
    after: "/images/after-2.png",
    description: "Emergency repair after severe hail and wind damage. Insurance claim handled.",
  },
  {
    id: 3,
    title: "Aging Roof Renovation",
    location: "Leesburg, VA",
    type: "Roof Replacement",
    before: "/images/before-3.png",
    after: "/images/after-3.png",
    description: "25-year-old roof replaced with premium architectural shingles.",
  },
]

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [showAfter, setShowAfter] = React.useState(false)

  return (
    <div className="group relative overflow-hidden rounded-xl bg-card shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={showAfter ? "after" : "before"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={showAfter ? project.after : project.before}
              alt={`${showAfter ? "After" : "Before"}: ${project.title}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Before/After Toggle */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <button
            onClick={() => setShowAfter(false)}
            className={cn(
              "px-3 py-1 text-sm font-medium rounded-full transition-colors",
              !showAfter
                ? "bg-primary text-primary-foreground"
                : "bg-background/80 text-foreground hover:bg-background"
            )}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={cn(
              "px-3 py-1 text-sm font-medium rounded-full transition-colors",
              showAfter
                ? "bg-primary text-primary-foreground"
                : "bg-background/80 text-foreground hover:bg-background"
            )}
          >
            After
          </button>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-background/90 text-foreground rounded-full">
            {project.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {project.location}
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  )
}

export function FeaturedWork() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="work" className="section-padding">
      <div className="container-main">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Work Speaks for Itself
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            See the difference quality roofing makes. Browse our recent projects
            and transformations across Northern Virginia.
          </p>
        </AnimatedSection>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <AnimatedSection>
            <ProjectCard project={projects[currentIndex]} />
          </AnimatedSection>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  )}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
