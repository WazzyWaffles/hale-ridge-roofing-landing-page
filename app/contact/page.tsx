import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "./contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

export const metadata: Metadata = {
  title: "Contact Us | Hale Ridge Roofing",
  description:
    "Get in touch with Hale Ridge Roofing for all your roofing needs in Northern Virginia. Call, email, or visit us today.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(571) 555-0123",
    href: "tel:+15715550123",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@haleridgeroofing.com",
    href: "mailto:info@haleridgeroofing.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Main St, Leesburg, VA 20176",
    href: "https://maps.google.com/?q=123+Main+St,+Leesburg,+VA+20176",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri 7am-5pm, Sat 9am-3pm",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-main">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Have questions about your roof? Ready to schedule an inspection?
                We&apos;re here to help. Reach out using any of the methods below.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Contact Information
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((item) => (
                    <GlassCard key={item.label} hover={false} className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-medium text-foreground hover:text-primary transition-colors"
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Our Service Area
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We proudly serve homeowners throughout Northern Virginia,
                    including Fairfax County, Loudoun County, Arlington County,
                    and surrounding areas. Not sure if we cover your area? Just ask!
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
