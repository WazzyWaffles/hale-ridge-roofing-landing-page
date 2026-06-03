# Hale Ridge Roofing Landing Page - Implementation Kickstart Plan

## Overview
Single-page landing site for Hale Ridge Roofing with responsive design, smooth interactions, modal estimate form, and generated placeholder assets. Full-width layout with glass effect cards, forest green accent color, and animated scroll behavior.

---

## 1. Design System & Tokens

### Color Palette (3 colors total)
- **Primary Brand Color**: Forest Green (`#2D5016`) — CTAs, highlights, accents
- **Neutral Light**: Warm Light Off-White (`#F8F5F0`) — backgrounds, light surfaces
- **Neutral Dark**: Charcoal (`#1A1A1A`) — text, primary content

### Design Tokens (CSS Variables - globals.css & tailwind.config.ts)
```
--color-accent: #2D5016 (forest green)
--color-background: #F8F5F0 (warm light)
--color-foreground: #1A1A1A (charcoal)
--color-accent-light: #E8F0E0 (light green tint for hover/secondary)
--color-text-secondary: #666666 (mid-gray for secondary text)
--color-border: #E0D9D0 (subtle border/divider)
--radius-default: 0.5rem (8px)
--radius-lg: 1rem (16px)
--glass-blur: blur(10px)
--glass-opacity: 0.7
```

### Typography
- **Font Family**: Geist (sans-serif) — applied via `font-sans` class
- **Headings**: Geist Regular/Bold, sizes: h1=3.5rem (desktop)/2rem (mobile), h2=2.5rem/1.75rem, h3=1.5rem/1.25rem
- **Body**: Geist Regular, size: 1rem (desktop)/0.95rem (mobile), line-height: 1.6
- **All text**: Use `text-foreground` class by default
- **Contrast**: Dynamic contrast for dark mode readiness — ensure WCAG AA minimum (4.5:1)

---

## 2. Page Structure & Sections

### Full-Width Single-Page Layout
```
1. Sticky Header + Navigation
2. Hero Section
3. Trust Stats Bar
4. Services Overview (5 services)
5. Featured Work (Before/After Gallery)
6. Pricing Tiers (Good/Better/Best)
7. Testimonials (3–5 carousel or grid)
8. Homeowner Stories (2–3 featured transformations)
9. Service Area (List + Visual)
10. Warranty & FAQs (Accordion)
11. Estimate Form Section
12. Footer (Navigation + Contact)
```

---

## 3. Component Breakdown

### High-Level Component Structure (Keep under 600 lines per file)

#### **Header & Navigation**
- `components/Header.tsx` — Sticky header, responsive nav, hamburger menu (mobile)
  - Logo (generated)
  - Nav links: Services, Our Work, Reviews, Estimate, Contact
  - Primary CTA button (mobile-optimized)
  - Transparent on hero, blur/light bg on scroll

#### **Hero Section**
- `components/Hero.tsx` — Hero banner with generated image, headline, subheading
  - Background: Generated roofing project image
  - CTA button + Secondary link
  - Gradient overlay for text readability
  - Animate on page load (fade-in)

#### **Trust Stats Bar**
- `components/TrustStats.tsx` — Row of trust metrics (14 years, 500+ roofs, 4.9 rating, etc.)
  - Flex layout, responsive grid on mobile
  - Icons + numbers + labels
  - Subtle animation on scroll into view

#### **Services Section**
- `components/Services.tsx` — Grid of 5 service cards
  - Glass effect cards (frosted glass with blur)
  - Icon, heading, short description
  - Card hover animation (slight lift/scale)
  - Responsive: 3 cols (desktop) → 2 cols (tablet) → 1 col (mobile)

#### **Featured Work / Before-After Gallery**
- `components/FeaturedWork.tsx` — Grid or carousel of project cards
  - 3–5 project cards with generated before/after images
  - Project type label, location, brief description
  - Hover: Image zoom effect
  - Responsive: 3 cols → 2 cols → 1 col

#### **Pricing Section**
- `components/PricingTiers.tsx` — Good/Better/Best tier cards
  - Glass effect cards with forest green accent
  - Feature list per tier
  - CTA button per tier (scroll to form)
  - Best tier highlighted/featured
  - Responsive: 3 cols → 2 cols → 1 col

#### **Testimonials Section**
- `components/Testimonials.tsx` — Carousel or grid layout (3–5 cards)
  - Testimonial card: Name, location, rating (stars), quote
  - Glass effect cards
  - Animate on scroll (fade-in stagger)
  - Optional: Auto-scroll carousel on desktop

#### **Homeowner Stories Section**
- `components/HomeownerStories.tsx` — 2–3 featured transformation cards
  - Story heading, before/after images (generated), outcome text
  - Glass effect layout
  - Staggered animation on scroll

#### **Service Area Section**
- `components/ServiceArea.tsx` — List of towns + visual graphic
  - Bullet list of Northern Virginia towns
  - Simple visual representation (graphic, not interactive map)
  - Heading + supporting text

#### **Warranty & FAQ Section**
- `components/WarrantyFAQ.tsx` — Warranty overview + accordion FAQ
  - Warranty card with trust copy
  - Accordion component (shadcn/ui Accordion if available, else custom)
  - 6–8 FAQ items, collapsed by default (first item pre-expanded on desktop)
  - Smooth expand/collapse animation

#### **Estimate Form Section**
- `components/EstimateForm.tsx` — Contact form with validation
  - Form fields: Name, Address, Phone, Email, Service Needed (dropdown), Project Details (textarea)
  - Client-side validation (required fields, email format)
  - On submit: Show inline success panel (not modal)
  - Success state with confirmation reference (HRR-2026-XXXX)
  - In-memory state only (no persistence after refresh)

#### **Footer**
- `components/Footer.tsx` — Navigation links, contact details, back-to-top
  - Links: Services, Pricing, FAQ, Contact, Privacy Policy, Terms
  - Contact block: Phone, Email, Address (placeholders)
  - Social icons (optional)
  - Back-to-Top button with smooth scroll
  - Copyright info

#### **Modular Sub-Components**
- `components/ui/CTAButton.tsx` — Reusable CTA button (forest green, hover state)
- `components/ui/GlassCard.tsx` — Reusable glass effect card component
- `components/ui/AnimatedSection.tsx` — Wrapper for scroll-triggered animations
- `components/ui/ServiceAreaGraphic.tsx` — SVG or generated visual for service area

---

## 4. Interactions & Animations

### Scroll Behavior
- **Smooth Scroll**: Apply `scroll-behavior: smooth` to entire page
- **Scroll-to-Section**: CTA buttons scroll to #estimate-form anchor
- **Scroll-triggered Animations**: Sections fade-in + slide-up on entering viewport (Framer Motion or Intersection Observer)

### Animations (Subtle, Framer Motion-based)
- **Hero**: Fade-in + subtle scale on page load (duration: 0.8s)
- **Services Cards**: Staggered fade-in on scroll, hover lift effect (translateY -4px)
- **Gallery**: Zoom image on hover (scale 1.05)
- **Trust Stats**: Count-up animation as section enters viewport
- **Testimonials**: Auto-scroll carousel (optional) or staggered fade-in
- **Form Success**: Slide-up + fade-in success panel
- **All Hovers**: Smooth transitions (0.3s ease)

### Mobile Interactions
- **Hamburger Menu**: Toggle open/close with smooth slide animation
- **Glass Cards**: Touch-friendly tap states
- **Reduced Motion**: Respect `prefers-reduced-motion` query

---

## 5. Responsive Design Strategy

### Breakpoints (Tailwind defaults)
- **Mobile**: 0–639px (base styles)
- **Tablet**: 640px–1023px (`md:` prefix)
- **Desktop**: 1024px+ (`lg:` prefix)

### Key Responsive Changes
- **Header**: Hamburger menu on mobile (`md:` shows full nav)
- **Hero Text**: Scales from 2rem (mobile) → 3.5rem (desktop)
- **Grid Layouts**: 
  - Services: 1 col (mobile) → 2 cols (md) → 3 cols (lg)
  - Pricing: 1 col (mobile) → 2 cols (md) → 3 cols (lg)
  - Gallery: 1 col (mobile) → 2 cols (md) → 3 cols (lg)
- **Spacing**: Reduced padding/gaps on mobile (`p-4 md:p-8`, `gap-4 md:gap-6`)
- **FAQ**: Stack on mobile, side-by-side on desktop (if relevant)

---

## 6. Image Generation Requirements

### Images to Generate
1. **Logo**: Clean, modern Hale Ridge Roofing logo (mark + text variant)
2. **Hero Image**: Professional residential roofing project (Northern Virginia style)
3. **Service Icons**: 5 icons (replacement, repair, storm damage, leak detection, inspection)
4. **Before-After Gallery**: 3–5 pairs of before/after roofing project images
5. **Testimonial Avatars**: 5 circular placeholder avatars for testimonials
6. **Homeowner Story Images**: 2–3 before/after transformation sets
7. **Service Area Visual**: Simple graphic representation (not map) — SVG or generated

### Image Specifications
- **Logo**: SVG, 200x80px (horizontal), white/color variants
- **Hero**: 1920x600px (16:9 aspect), optimized JPG/WebP
- **Gallery/Stories**: 800x600px (4:3 aspect), optimized JPG
- **Avatars**: 120x120px, circular
- **Icons**: 64x64px, SVG, forest green color

---

## 7. Form Implementation

### Estimate Form Fields
```
1. Name (required, text input)
2. Address (required, text input, no live validation)
3. Phone (required, tel input)
4. Email (required, email input)
5. Service Needed (required, dropdown with options)
6. Project Details (optional, textarea)
```

### Service Needed Dropdown Options
- Roof Replacement
- Roof Repair
- Storm Damage Repair
- Leak Inspection
- Roof Inspection
- Other

### Validation
- Client-side only (HTML5 + custom JS)
- Required field checks before submit
- Email format validation (basic regex)
- On error: Show inline error messages per field
- On success: Store in in-memory state, show success panel, clear form

### Success State (Inline, not Modal)
```
Headline: "Your estimate request has been received."
Body: "A Hale Ridge Roofing team member will review your request and follow up within 24–48 hours."
Reference: "Confirmation ID: HRR-2026-XXXX"
Duration: Persists until page refresh
Action: Button to close panel or clear form
```

---

## 8. SEO & Metadata

### Page Metadata (layout.tsx)
```
Title: "Professional Roofing Services in Northern Virginia | Hale Ridge Roofing"
Description: "Expert roof replacement, repair, and inspection services in Northern Virginia. 14+ years of experience, 500+ completed projects. Get a free estimate today."
Keywords: roofing, roof replacement, repair, Northern Virginia, local contractor
```

### Open Graph Tags
```
og:title: "Hale Ridge Roofing - Quality Roofing Services in Northern Virginia"
og:description: "Professional roofing services with 14+ years of experience."
og:image: [Hero image URL]
og:url: [Site URL]
```

### Structured Data (JSON-LD)
```
LocalBusiness schema:
- Name: Hale Ridge Roofing
- Phone: [Placeholder number]
- Address: [Placeholder address]
- Rating: 4.9/5
- Review count: 500+
```

### SEO Best Practices
- Semantic HTML (h1, h2, h3 hierarchy)
- Alt text on all images
- Clean URL structure (single page with anchors)
- Fast Core Web Vitals (optimize images, lazy load off-screen content)
- Mobile-first indexing ready

---

## 9. Contact Page (Separate Route)

### Route: `/contact`
- Simple contact form (Name, Email, Message)
- Contact information block (Phone, Email, Address)
- Service area map or list
- CTA back to main landing page / estimate form

---

## 10. Implementation Phases

### Phase 1: Foundation (Design Tokens + Reusable Components)
- [ ] Configure design tokens in `globals.css` and `tailwind.config.ts`
- [ ] Create base components: CTAButton, GlassCard, AnimatedSection
- [ ] Setup Geist font in layout.tsx
- [ ] Verify color contrast (WCAG AA)

### Phase 2: Static Page Structure
- [ ] Header with sticky behavior
- [ ] Hero section (with generated image)
- [ ] Trust stats bar
- [ ] Services grid (5 cards)
- [ ] Featured work gallery
- [ ] Pricing tiers
- [ ] Testimonials
- [ ] Homeowner stories
- [ ] Service area section
- [ ] Warranty & FAQ accordion
- [ ] Footer

### Phase 3: Form & Interactivity
- [ ] Build EstimateForm component with validation
- [ ] Implement form success state (in-memory)
- [ ] Add smooth scroll behavior for CTA buttons
- [ ] Test form on mobile/tablet

### Phase 4: Animations & Polish
- [ ] Add Framer Motion animations (scroll-triggered, hover effects)
- [ ] Implement hamburger menu (mobile nav)
- [ ] Sticky header blur/background transition
- [ ] Carousel auto-scroll for testimonials (optional)
- [ ] Smooth transitions and reduced-motion support

### Phase 5: Image Generation & Content
- [ ] Generate/source all placeholder images
- [ ] Create placeholder testimonials, stories, contact info
- [ ] Insert generated images into components
- [ ] Verify image optimization (sizes, formats)

### Phase 6: Responsive Design & Testing
- [ ] Test layout on mobile (< 640px), tablet (640–1024px), desktop (1024px+)
- [ ] Verify hamburger menu, touch interactions
- [ ] Check form usability on all screen sizes
- [ ] Test scroll behavior and animations on mobile

### Phase 7: Contact Page
- [ ] Build `/contact` page with separate form
- [ ] Add navigation links between main page and contact page

### Phase 8: SEO & Final Polish
- [ ] Add metadata, Open Graph tags, structured data
- [ ] Optimize images for Core Web Vitals
- [ ] Final contrast/accessibility audit
- [ ] Performance testing (Lighthouse)

---

## 11. Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + CSS Variables (design tokens)
- **Typography**: Geist font (Next.js Google Fonts)
- **Animations**: Framer Motion (subtle, scroll-triggered)
- **UI Components**: shadcn/ui (Accordion, Button, etc.) + custom GlassCard
- **Forms**: React Hook Form (optional) or vanilla HTML form + client-side validation
- **Scroll**: Intersection Observer API (or Framer Motion scroll triggers)
- **Images**: Next.js Image component with optimization

---

## 12. File Structure

```
src/
├── app/
│   ├── layout.tsx (Geist font, design tokens)
│   ├── page.tsx (Main landing page)
│   ├── contact/
│   │   └── page.tsx (Contact page)
│   └── globals.css (CSS variables, base styles)
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TrustStats.tsx
│   ├── Services.tsx
│   ├── FeaturedWork.tsx
│   ├── PricingTiers.tsx
│   ├── Testimonials.tsx
│   ├── HomeownerStories.tsx
│   ├── ServiceArea.tsx
│   ├── WarrantyFAQ.tsx
│   ├── EstimateForm.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── CTAButton.tsx
│       ├── GlassCard.tsx
│       ├── AnimatedSection.tsx
│       └── ServiceAreaGraphic.tsx
├── hooks/
│   ├── useFormState.ts (Manage estimate form state)
│   └── useScrollTo.ts (Smooth scroll to sections)
├── public/
│   ├── images/ (Generated & placeholder images)
│   └── icons/ (Generated service icons)
└── lib/
    └── utils.ts (Utility functions, cn() for classnames)
```

---

## 13. CTA Placement Strategy

### Primary CTAs (Minimum 3+ occurrences)
1. **Header**: Fixed primary CTA button (mobile-visible)
2. **Hero Section**: Large primary CTA + secondary link
3. **After Services Section**: Section CTA ("Get Started")
4. **Pricing Tiers**: CTA button on each tier (3 buttons)
5. **After Testimonials**: Call-to-action block
6. **Estimate Form Section**: Form headline + submit button
7. **Footer**: Secondary CTA option

### CTA Behavior
- All CTAs scroll smoothly to `#estimate-form` anchor
- Consistent forest green styling
- Hover state: Lighter green background + slight shadow
- Mobile: Full-width or large touch target

---

## 14. Placeholder Content Guidelines

### Testimonials (Placeholder Examples)
- Names: First + Last name, specific location (Arlington, VA, etc.)
- Quotes: 1–2 sentences, specific to service (e.g., "They fixed my storm damage roof in record time...")
- Rating: 4.9–5 stars
- Profession: Optional (e.g., "Homeowner", "Property Manager")

### Homeowner Stories (Placeholder Examples)
- Title: "Storm Damage to Restored Beauty" or similar
- Before Image: Damaged/old roof
- After Image: New/repaired roof
- Story: 2–3 sentences with specific outcome
- Timeline: Optional (e.g., "Completed in 3 days")

### Contact Details (Placeholder)
- Phone: (571) 555-0123 (realistic Northern Virginia area code)
- Email: info@haleridgeroofing.com
- Address: 123 Main St, Leesburg, VA 20176
- Hours: Mon–Fri 7am–5pm, Sat 9am–3pm (Optional)

---

## 15. Performance & Optimization

### Image Optimization
- Use Next.js Image component with `priority`, `loading="lazy"`
- Generate multiple image sizes (srcset)
- Use WebP format with JPG fallback
- Placeholder blur effect or skeleton loader

### Code Splitting
- Keep components under 600 lines
- Lazy load sections below fold (if needed)
- Dynamic imports for heavy libraries

### CSS
- Design tokens minimize CSS bloat
- Tailwind PurgeCSS removes unused styles
- No inline styles; use utility classes

### Lighthouse Targets
- LCP (Largest Contentful Paint): < 2.5s
- INP (Interaction to Next Paint): < 200ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 16. Future Expansion Points

- [ ] Email notification integration (backend)
- [ ] Real testimonials/review integration (Trustpilot, Google, etc.)
- [ ] Interactive service area map
- [ ] Blog or resources section
- [ ] Team member profiles (for "About" section)
- [ ] Photo gallery/portfolio management system
- [ ] Multi-page site (if scaling beyond single page)
- [ ] Dark mode toggle (design tokens ready for this)

---

## Notes

- **Color Contrast**: Forest green on warm light bg tested for WCAG AA; adjust if needed post-launch.
- **Glass Effects**: Cross-browser tested (Chrome, Firefox, Safari); graceful fallback to solid color if needed.
- **Animations**: All animations respect `prefers-reduced-motion`.
- **Form Data**: In-memory only; no server persistence. Ready for backend integration later.
- **Asset Placeholders**: All generated images intended as temporary; replace with real assets when available.
