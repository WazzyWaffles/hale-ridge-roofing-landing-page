"use client"

import * as React from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

const directionVariants: Record<string, { hidden: object; visible: object }> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

const AnimatedSection = React.forwardRef<HTMLDivElement, AnimatedSectionProps>(
  (
    {
      className,
      children,
      delay = 0,
      direction = "up",
      duration = 0.6,
      once = true,
      ...props
    },
    ref
  ) => {
    const localRef = React.useRef<HTMLDivElement>(null)
    const resolvedRef = (ref as React.RefObject<HTMLDivElement>) || localRef
    const isInView = useInView(resolvedRef, { once, margin: "-100px" })

    const variants: Variants = {
      hidden: directionVariants[direction].hidden,
      visible: {
        ...directionVariants[direction].visible,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    }

    return (
      <motion.div
        ref={resolvedRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
AnimatedSection.displayName = "AnimatedSection"

export { AnimatedSection }
