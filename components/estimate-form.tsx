"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const serviceOptions = [
  { value: "replacement", label: "Roof Replacement" },
  { value: "repair", label: "Roof Repair" },
  { value: "storm-damage", label: "Storm Damage Repair" },
  { value: "leak-inspection", label: "Leak Inspection" },
  { value: "inspection", label: "Roof Inspection" },
  { value: "other", label: "Other" },
]

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  service: string
  details: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  address?: string
  service?: string
}

function generateConfirmationId() {
  const year = new Date().getFullYear()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `HRR-${year}-${random}`
}

export function EstimateForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    details: "",
  })
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [confirmationId, setConfirmationId] = React.useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setConfirmationId(generateConfirmationId())
      setIsSubmitted(true)
    }
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      details: "",
    })
    setErrors({})
    setIsSubmitted(false)
    setConfirmationId("")
  }

  return (
    <section id="estimate" className="section-padding">
      <div className="container-main">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Get Your Free Roof Estimate
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Fill out the form below and one of our roofing experts will 
              contact you within 24-48 hours to schedule your free assessment.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <GlassCard hover={false}>
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-8"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Your estimate request has been received.
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                      A Hale Ridge Roofing team member will review your request 
                      and follow up within 24-48 hours.
                    </p>
                    <p className="mt-4 text-sm font-medium text-foreground">
                      Confirmation ID: <span className="text-primary">{confirmationId}</span>
                    </p>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="mt-6"
                    >
                      Submit Another Request
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(571) 555-0123"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          aria-invalid={!!errors.phone}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">{errors.phone}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger className="w-full" aria-invalid={!!errors.service}>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p className="text-sm text-destructive">{errors.service}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Property Address *</Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="123 Main St, Leesburg, VA 20176"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        aria-invalid={!!errors.address}
                      />
                      {errors.address && (
                        <p className="text-sm text-destructive">{errors.address}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details">Project Details (Optional)</Label>
                      <Textarea
                        id="details"
                        placeholder="Tell us more about your roofing needs, any damage you've noticed, or questions you have..."
                        value={formData.details}
                        onChange={(e) =>
                          setFormData({ ...formData, details: e.target.value })
                        }
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Request Free Estimate
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to be contacted by Hale Ridge Roofing 
                      regarding your estimate request.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
