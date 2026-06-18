---
name: Serene Boutique Villa System
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#414846'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#727876'
  outline-variant: '#c1c8c5'
  surface-tint: '#49645e'
  primary: '#092420'
  on-primary: '#ffffff'
  primary-container: '#203a35'
  on-primary-container: '#88a49d'
  inverse-primary: '#b0cdc5'
  secondary: '#785926'
  on-secondary: '#ffffff'
  secondary-container: '#ffd395'
  on-secondary-container: '#795927'
  tertiary: '#202020'
  on-tertiary: '#ffffff'
  tertiary-container: '#353535'
  on-tertiary-container: '#9f9d9d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe9e1'
  primary-fixed-dim: '#b0cdc5'
  on-primary-fixed: '#04201b'
  on-primary-fixed-variant: '#324c46'
  secondary-fixed: '#ffddb0'
  secondary-fixed-dim: '#eac083'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#5e4111'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies "Quiet Luxury"—a philosophy of restraint, intentionality, and exclusivity. Inspired by ultra-high-end hospitality, the aesthetic prioritizes space over density and texture over decoration. The target audience is the discerning traveler seeking a sanctuary from the digital and physical noise of urban life.

The style is a refined **Minimalism** blended with **Glassmorphism**. It utilizes expansive white space (or "breathable space") to frame high-quality photography of natural materials and architecture. UI elements are designed to feel like physical artifacts—substantial yet light. The emotional response is one of immediate decompression, reliability, and timeless elegance.

## Colors
The palette is rooted in an organic, earth-toned foundation to evoke the villa's physical environment.

- **Primary Green (#203A35):** Deep and grounding, used for core branding, primary calls to action, and structural elements.
- **Luxury Gold Accent (#B8925A):** A muted, sophisticated metallic used sparingly for highlights, secondary interactive elements, and luxury indicators (stars, badges).
- **Surface Palette:** The primary background is a warm linen (#F7F5F2), providing more soul than pure white. Sectional shifts to the Alternate Background (#EFE8DF) create rhythmic pacing without needing heavy borders.
- **Typography:** Headings utilize a near-black (#2A2A2A) for high legibility, while body copy uses a soft basalt grey (#666666) to reduce visual vibration and maintain a calm reading experience.

## Typography
The typographic pairing balances heritage and modernity. **Libre Caslon Text** (selected as a refined alternative to Cormorant) provides an authoritative, editorial feel for headlines, evocative of high-end travel journals. **Inter** serves as the utilitarian backbone, ensuring that functional information—pricing, dates, and amenities—is clear and accessible.

Large display type should be used for villa names and hero sections, often set in sentence case to feel more personal and less "corporate." Labels and small UI cues use increased letter spacing in all-caps to denote secondary hierarchy and a "concierge" aesthetic.

## Layout & Spacing
This design system utilizes a **Fluid Grid** with generous internal margins. The layout philosophy is built on "Asymmetric Balance"—avoiding overcrowded grids in favor of composition that allows images to bleed or occupy significant portions of the viewport.

- **Desktop:** 12-column grid with a 1280px max-width. Sections are separated by large vertical gaps (120px–160px) to signify a change in narrative.
- **Mobile:** 4-column grid with 20px side margins. Content is mostly single-column stacked, with horizontal carousels used for image galleries to keep the page length manageable.
- **Spacing Rhythm:** Based on an 8px scale. Padding within cards and containers should lean towards "oversized" (e.g., 40px padding on a card) to emphasize the luxury of space.

## Elevation & Depth
Depth is conveyed through **Glassmorphism** and **Ambient Shadows** rather than sharp borders.

- **The "Floating" Layer:** Navigation bars and booking widgets use a high-blur backdrop filter (20px–30px) with a 70% opaque white fill. This allows the villa's scenery to peek through the interface.
- **Soft Shadows:** Elevation is subtle. Use "Large Soft" shadows for cards: `0px 12px 32px rgba(32, 58, 53, 0.06)`. Note the slight green tint in the shadow to harmonize with the brand's primary color.
- **Tonal Depth:** Use the Alternate Background (#EFE8DF) for full-width sections to create a natural recess in the page flow without introducing hard lines.

## Shapes
The shape language is "Organic Geometric." While the layout is structured, the corners are softened to avoid a clinical or harsh feeling.

- **Base Radius:** 16px for standard buttons and input fields.
- **Large Radius:** 20px-24px for cards, modal containers, and hero image frames.
- **Interactive States:** Buttons should maintain their radius even on hover; avoid changing shape, but rather focus on subtle color shifts or slight scaling (1.02x) to indicate interactivity.

## Components
- **Buttons:** Primary buttons are solid Primary Green (#203A35) with white text. Secondary buttons use an outline of the Luxury Gold (#B8925A). Text is always centered with generous horizontal padding (32px+).
- **Cards:** White surfaces with 20px rounded corners and a soft ambient shadow. Images within cards should have a top-only radius to sit flush with the card container.
- **Inputs:** Fields are defined by a bottom-border only or a very light #EFE8DF background to feel less like a "form" and more like a guestbook entry. Focus state uses the Luxury Gold color.
- **Booking Bar:** A persistent, glassmorphic floating bar that sits at the bottom of the mobile view or top of the desktop view, featuring a simple date-range picker and "Reserve" button.
- **Chips/Badges:** Use a light tint of the Primary Green with 100px (pill) radius for amenities (e.g., "Infinity Pool," "Private Chef").
- **Lists:** Iconography should be thin-stroke (1px) and use the Primary Green or Gold accent, paired with Inter regular 16px text.