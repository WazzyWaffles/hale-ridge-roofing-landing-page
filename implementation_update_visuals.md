# Implementation Plan - Fix Broken Header & Footer Navigation Links

## 1. Framework & Stack
- **Framework**: Next.js 16 (App Router) with TypeScript.
- **Styling**: Tailwind CSS (v4) with custom design tokens in `globals.css`.
- **UI**: `framer-motion` for animations, `lucide-react` icons.
- **Utility Hook**: `useScrollTo` for smooth scrolling to section IDs.

## 2. Routing Structure
- Root layout: `app/layout.tsx`.
- Home page: `app/page.tsx` (renders `<Header/>` and `<Footer/>`).
- Contact page: `app/contact/page.tsx` (also renders the shared `<Header/>` and `<Footer/>`).
- Navigation links in Header/Footer use hash anchors (e.g. `#services`, `#pricing`).

## 3. Current Navigation Implementation
- **Header (`components/header.tsx`)** defines `navLinks` with hash `href`s and a `handleNavClick` that calls `scrollTo(id)` when the href starts with `#`.
- **Footer (`components/footer.tsx`)** uses a similar `handleLinkClick` and a CTA button that directly calls `scrollTo('estimate')`.
- Both components import `useScrollTo` only; they do **not** check the current pathname.

## 4. Root Cause
When a user is on `/contact`, the target sections (`#services`, `#pricing`, etc.) are not present in the DOM. The `scrollTo` call therefore does nothing, making the navigation appear broken. The logo works because it is a normal `<Link href="/">`.

## 5. Proposed Minimal Fix
1. **Import Next navigation utilities** in both components:
   ```ts
   import { usePathname, useRouter } from "next/navigation";
   ```
2. **Update `handleNavClick` (Header)**:
   ```ts
   const pathname = usePathname();
   const router = useRouter();
   const handleNavClick = (href: string) => {
     setIsMobileMenuOpen(false);
     if (href.startsWith("#")) {
       if (pathname === "/") {
         scrollTo(href.slice(1));
       } else {
         router.push(`/${href}`); // e.g. /#services
       }
     } else {
       router.push(href);
     }
   };
   ```
3. **Update `handleLinkClick` (Footer)** with the same pathname check.
4. **Update Footer CTA button** (`Get a Free Roof Estimate`):
   ```ts
   onClick={() => {
     if (pathname === "/") scrollTo("estimate");
     else router.push("/#estimate");
   }}
   ```
5. No CSS or layout changes are required.

## 6. Verification Plan
- **Build**: `npm run build` – ensure TypeScript compiles.
- **Lint**: `npm run lint` – ensure no ESLint errors.
- **Manual tests (desktop)**:
  1. Open `/` – verify each header link scrolls to its section.
  2. Open `/contact` – verify:
     - Logo returns to `/`.
     - Header links navigate to `/#section` and scroll correctly.
     - Header CTA (“Get Free Estimate”) navigates to `/#estimate`.
     - Footer section links and CTA navigate to the correct homepage anchors.
- **Mobile tests**: Resize viewport (~375 px), open hamburger menu, click each link, ensure menu closes and navigation works as above.
- Record a short video of the navigation flow for final evidence.

## 7. Checklist
- [ ] Add `usePathname` & `useRouter` imports to `components/header.tsx`.
- [ ] Update `handleNavClick` logic.
- [ ] Add same imports to `components/footer.tsx`.
- [ ] Update `handleLinkClick` logic.
- [ ] Update Footer CTA button click handler.
- [ ] Run `npm run build` and fix any TypeScript errors.
- [ ] Run `npm run lint`.
- [ ] Perform desktop manual navigation verification.
- [ ] Perform mobile navigation verification.
- [ ] Capture video/screenshots.
- [ ] Document results in `walkthrough.md`.

---
*This plan follows the smallest possible code change while preserving the existing design and component architecture.*
