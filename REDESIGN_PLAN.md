# REDESIGN_PLAN.md

## Goal

Turn the current site into a calm, trustworthy, local Zagreb IT help landing page.

## Diagnosis

Current design feels too much like an AI/SaaS template:
- too much GSAP
- too much glass
- too much hover movement
- too much decoration
- pricing too weak
- hero not direct enough
- local trust feeling is not strong enough

## New Direction

Use a simple editorial service-page layout:

- warm off-white background
- charcoal text
- one calm blue/green accent
- subtle amber for warnings
- solid cards, not glass cards
- moderate radius
- light borders
- minimal shadows
- almost no animation

## Section Priorities

1. Hero
2. Problems
3. Services
4. Pricing
5. Honesty / limits
6. Process
7. FAQ
8. Contact

## Component Fixes

### HeroSection
Rewrite visually. Remove GSAP, mouse-follow, floating effects. Make message direct and local.

### globals.css
Remove glass-heavy utilities. Reduce radius and shadows.

### ProblemCards / ServicesGrid
Make cards simpler, more compact, less SaaS.

### PricingCards
Use 5 real packages:
- Brzi pregled — Od 20 €
- Windows osvježenje — Od 35 €
- Sigurniji podaci — Od 30 €
- Čisto i mirnije računalo — Od 45 €
- Mala IT pomoć — Od 25 €

### ContactCTA
No fake form. Use clear mail/WhatsApp placeholders until real data exists.

### LocalBusinessJsonLd
Remove placeholder phone/email or disable JSON-LD until real data exists.

## Acceptance Criteria

- Looks local and trustworthy
- No generic AI/SaaS feel
- No unnecessary GSAP
- Pricing is clear
- Mobile is clean
- CTA is obvious
- No fake business data
- `pnpm lint` passes
- `pnpm build` passes