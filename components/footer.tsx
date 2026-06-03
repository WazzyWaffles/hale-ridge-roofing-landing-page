"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Phone, Mail, MapPin, ArrowUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollTo } from "@/hooks/use-scroll-to"

const footerLinks = {
  services: [
    { label: "Roof Replacement", href: "#services" },
    { label: "Roof Repair", href: "#services" },
    { label: "Storm Damage", href: "#services" },
    { label: "Inspections", href: "#services" },
  ],
  company: [
    { label: "Our Work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

const contactInfo = {
  phone: "(571) 555-0123",
  email: "info@haleridgeroofing.com",
  address: "123 Main St, Leesburg, VA 20176",
  hours: "Mon-Fri 7am-5pm, Sat 9am-3pm",
}

export function Footer() {
  const { scrollTo, scrollToTop } = useScrollTo()
const pathname = usePathname()
const router = useRouter()

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        scrollTo(href.slice(1))
      } else {
        router.push(`/${href}`)
      }
    }
  }

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container-main py-12 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to Protect Your Home?
          </h2>
          <p className="mt-3 text-background/80 max-w-xl mx-auto">
            Get your free, no-obligation roof estimate today. We&apos;ll assess your 
            needs and provide honest recommendations.
          </p>
          <Button
            onClick={() => {
        if (pathname === "/") {
          scrollTo("estimate")
        } else {
          router.push("/#estimate")
        }
      }}
            size="lg"
            className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get a Free Roof Estimate
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-main py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">
                  HR
                </span>
              </div>
              <div>
                <span className="text-lg font-semibold text-background">
                  Hale Ridge
                </span>
                <span className="block text-xs text-background/60 -mt-1">
                  Roofing
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Northern Virginia&apos;s trusted roofing experts. 14+ years of 
              experience protecting homes with quality craftsmanship.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Clock className="h-4 w-4" />
                {contactInfo.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} Hale Ridge Roofing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border-background/20 text-background hover:bg-background/10 hover:text-background"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
