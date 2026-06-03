"use client"

import * as React from "react"
import { motion, useInView, animate } from "framer-motion"
import { Award, Home, Star, Clock } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: 14,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: Home,
    value: 500,
    suffix: "+",
    label: "Roofs Completed",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "",
    label: "Average Rating",
  },
  {
    icon: Award,
    value: 48,
    suffix: "hr",
    label: "Assessment Turnaround",
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(value % 1 !== 0 ? Number(latest.toFixed(1)) : Math.floor(latest))
        },
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

export function TrustStats() {
  const containerRef = React.useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative bg-primary py-12 md:py-16">
      <div className="container-main">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="mb-3 h-6 w-6 text-primary-foreground/80 md:h-8 md:w-8" />
              <p className="text-3xl font-bold text-primary-foreground md:text-4xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-primary-foreground/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
