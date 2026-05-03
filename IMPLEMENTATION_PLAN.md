# Phase 6 — Deep Frontend Redesign (Warm Editorial Utilitarian)

## Goal
Elevate the "Direkt IT Pomoć" landing page from a standard, safe design into a **memorable, high-craft, and distinctive** web experience. We will use the **Warm Editorial Utilitarian** aesthetic. It will feel exceptionally premium and trustworthy, breaking away from "generic SaaS" tropes while honoring the brief's requirement for honesty and accessibility.

## Design System Overhaul (DFII: 17/15 - Excellent)

### 1. Typography & Colors
- **Fonts**: Move away from generic sans-serifs. 
  - *Headings*: `Outfit` (Modern, geometric, yet friendly).
  - *Body*: `Plus Jakarta Sans` (Highly legible, editorial feel).
- **Colors**: Shift the stark white/gray to a rich, tactile palette.
  - *Background*: `Warm Paper` (#FDFBF7) for a tactile, editorial feel.
  - *Text*: `Stone 900` (#1C1917) instead of pure black for reduced eye strain.
  - *Accent*: `Vibrant Coral` (#FF5A36). A bold, energetic color that screams action and modernity, immediately differentiating from the typical "IT blue/green".

### 2. Composition & Layout Enhancements
- **Hero Section**: Transform the centered layout into a striking **Split Layout**.
  - *Left*: Massive, tightly-kerned headline using `text-balance`.
  - *Right*: The `hero_desk_setup` image (which I have already generated).
- **Services Grid**: Break the boring symmetrical grid. We will use an asymmetrical **Bento-box** layout where some cards span 2 columns, creating dynamic visual rhythm.
- **Honesty Section**: Turn this into a high-contrast, full-width "marquee" block (Stone 900 background, Paper text) to create a dramatic pause in the page flow.
- **Pricing Cards**: Introduce a slight rotation or offset to the "Najčešći izbor" card to break the rigid grid, filled with the bold Coral color.

## Proposed Code Changes

### 1. `src/app/globals.css` [MODIFY]
- Redefine `@theme` tokens for the new `Warm Paper`, `Stone`, and `Vibrant Coral` palette.
- Add utility classes for subtle noise/texture to make the background feel tactile.

### 2. `src/app/layout.tsx` [MODIFY]
- Import `Outfit` and `Plus Jakarta Sans` from `next/font/google`.

### 3. `src/components/site/HeroSection.tsx` [MODIFY]
- Rewrite component for a 2-column split layout on desktop.
- Embed the generated desk image.

### 4. `src/components/site/ServicesGrid.tsx` [MODIFY]
- Update layout to an asymmetrical CSS grid (e.g., `md:col-span-2` for specific featured services).

### 5. `src/components/site/PricingCards.tsx` & `HonestySection.tsx` [MODIFY]
- Apply high-contrast and distinctive "broken grid" styling to featured elements.

## Generated Assets
I have already generated two high-quality, editorial-style images to use:
1. `hero_desk_setup.png` (For the Hero)
2. `process_hands.png` (For the Process/About section)

## User Review Required
> [!IMPORTANT]  
> This is a **major aesthetic upgrade**. The site will look completely different, moving to a "Warm Editorial" style with a textured paper background, strong typography, and Vibrant Coral accents. 
> 
> Does this "Editorial Utilitarian" direction (using the generated images and bold typography) sound like the right vibe for you, or would you prefer a different aesthetic direction (e.g., "Sleek Dark Mode" or "Minimalist Corporate")?

## Verification Plan
- Run `pnpm dev` and perform a visual check using the browser subagent.
- Ensure the site remains fully accessible (high contrast, readable fonts).
