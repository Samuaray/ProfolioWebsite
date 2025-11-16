# High-Tech Grid Website Design Document

## Overview
A futuristic, terminal-inspired website design with a technical aesthetic featuring animated grid backgrounds, CPU chip visualization, and monospace typography. Perfect for developer portfolios, tech companies, or engineering-focused brands.

---

## Color Palette

### Primary Colors
```css
--primary: #00ff88    /* Matrix Green - main accent color */
--secondary: #0088ff  /* Electric Blue - secondary accent */
--accent: #ff0088     /* Hot Pink - rarely used accent */
--dark: #0d0d0d       /* Dark Gray - component backgrounds */
--darker: #050505     /* Almost Black - main background */
```

### Usage Guidelines
- **Matrix Green (#00ff88)**: Primary color for all interactive elements, text accents, borders, and glowing effects
- **Electric Blue (#0088ff)**: Secondary circuit traces, gradients combined with green
- **Background**: Pure black (#050505) with layered effects on top
- **Text**: White (#fff) for headings, rgba(255, 255, 255, 0.7) for body text
- **Borders**: rgba(0, 255, 136, 0.2) for subtle dividers

---

## Typography

### Font Families
```css
/* Primary: Space Grotesk */
font-family: 'Space Grotesk', sans-serif;
weights: 300, 400, 600, 700

/* Monospace: JetBrains Mono */
font-family: 'JetBrains Mono', monospace;
weights: 400, 700
```

### Font Usage
- **JetBrains Mono**: Logo, navigation links, terminal text, stat labels, service numbers, tech stack
- **Space Grotesk**: All other text (headings, paragraphs, descriptions)

### Type Scale
```css
Logo: 24px (JetBrains Mono, weight 700, uppercase, letter-spacing 3px)
Navigation: 14px (JetBrains Mono, weight 600, uppercase, letter-spacing 2px)
H1 (Hero): 80px (Space Grotesk, weight 700, uppercase, letter-spacing -2px)
Terminal Line: 16px (JetBrains Mono)
Hero Description: 20px (Space Grotesk, weight 400, line-height 1.6)
Section Title: 56px (Space Grotesk, weight 700, uppercase)
Section Subtitle: 14px (JetBrains Mono, uppercase, letter-spacing 3px)
Service Card H3: 28px (Space Grotesk, weight 400, uppercase)
Service Number: 14px (JetBrains Mono)
Stat Label: 12px (JetBrains Mono, uppercase, letter-spacing 2px)
Stat Value: 48px (JetBrains Mono, weight 700)
Tech Items: 18px (JetBrains Mono, uppercase, letter-spacing 2px)
```

---

## Layout Structure

### Container
- Max-width: 1400px
- Padding: 0 40px
- Centered with auto margins
- Position: relative, z-index: 1 (above background effects)

### Header
- Sticky positioning (top: 0)
- Background: rgba(13, 13, 13, 0.95) with backdrop-filter: blur(10px)
- Border-bottom: 1px solid rgba(0, 255, 136, 0.2)
- Padding: 30px 0
- Z-index: 100

### Navigation
- Flexbox layout: space-between alignment
- Logo on left, navigation links on right
- Gap between nav items: 50px

### Sections
- Hero: padding 120px 0
- Stats: padding 80px 0 (with top/bottom borders)
- Services: padding 120px 0
- Tech Stack: padding 80px 0

---

## Background Effects

### 1. Animated Grid
```css
Position: fixed, full viewport
Grid size: 40px × 40px
Grid color: rgba(0, 255, 136, 0.03)
Animation: Continuous diagonal movement (20s linear infinite)
Translation: (0,0) → (40px, 40px) to create seamless loop
```

### 2. Scanline Effect
```css
Position: fixed, full viewport
Pattern: Horizontal lines (2px transparent, 2px rgba(0, 255, 136, 0.02))
Background-size: 100% 4px
Animation: Vertical scan from top to bottom (8s linear infinite)
Z-index: 9999 (top layer)
```

### 3. CPU Chip Animation
**Container:**
- Position: fixed, centered (top 50%, left 50%, translate -50%, -50%)
- Size: 800px × 800px
- Opacity: 0.15
- Z-index: 0 (behind all content)

**SVG Viewbox:** 0 0 800 800

**Elements:**

*Central CPU Core:*
- Rectangle: 200×200px at position (300, 300)
- Border-radius: 10px
- Animated breathing effect (4s cycle)
- Fill oscillates: rgba(0, 255, 136, 0.05) ↔ rgba(0, 255, 136, 0.15)
- Stroke-width oscillates: 2px ↔ 3px

*CPU Label:*
- Text "CPU" centered at (400, 405)
- Font: JetBrains Mono, 24px
- Fill: var(--primary)
- Opacity: 0.5

*Corner Mounting Holes (4):*
- Positions: (320,320), (480,320), (320,480), (480,480)
- Radius: 8px
- Fill: rgba(0, 255, 136, 0.3)
- Stroke: var(--primary), width 1px

*Connection Pins (20 total):*
- Top edge: 5 pins at y=280, heights 20px, widths 8px
  - X positions: 330, 360, 390, 420, 450
- Bottom edge: 5 pins at y=500, heights 20px, widths 8px
  - X positions: 330, 360, 390, 420, 450
- Left edge: 5 pins at x=280, widths 20px, heights 8px
  - Y positions: 330, 360, 390, 420, 450
- Right edge: 5 pins at x=500, widths 20px, heights 8px
  - Y positions: 330, 360, 390, 420, 450

*Pin Animation:*
- 3s cycle, ease-in-out
- Opacity: 0.5 ↔ 1.0
- Glow: drop-shadow(0 0 5px) ↔ drop-shadow(0 0 15px + 0 0 25px)

*Circuit Traces - Green (8 paths):*
- Stroke: var(--primary)
- Stroke-width: 2px
- Animation: 4s draw cycle with stroke-dasharray/offset
- Opacity: 0.3 ↔ 1.0
- Staggered delays: 0s, 0.5s, 1s, 1.5s, 2s, 2.5s, 3s, 3.5s

Trace paths (from pins to endpoints):
1. Top-left: (334,280) → (334,200) → (150,200) → (150,100)
2. Top-mid-left: (364,280) → (364,180) → (250,180) → (250,80)
3. Top-mid-right: (394,280) → (394,160) → (600,160) → (600,90)
4. Top-right-1: (424,280) → (424,140) → (650,140) → (650,110)
5. Top-right-2: (454,280) → (454,200) → (700,200) → (700,100)
6. Bottom-left: (334,520) → (334,600) → (150,600) → (150,700)
7. Bottom-mid: (364,520) → (364,620) → (250,620) → (250,720)
8. Bottom-right: (394,520) → (394,640) → (600,640) → (600,710)

*Circuit Traces - Blue (4 paths):*
- Stroke: var(--secondary)
- Same animation as green traces
- Opacity: 0.2 ↔ 0.8 (slightly more subtle)
- Staggered delays: 0.25s, 0.75s, 1.25s, 1.75s

Trace paths:
1. Left-top: (280,334) → (200,334) → (200,250) → (100,250)
2. Left-bottom: (280,394) → (180,394) → (180,500) → (90,500)
3. Right-top: (520,334) → (600,334) → (600,250) → (700,250)
4. Right-bottom: (520,394) → (620,394) → (620,500) → (710,500)

*Connection Nodes (12 circles):*
- Radius: 5px
- Class: pin (inherits pin glow animation)
- Individual animation delays matching their trace timing

Positions:
- (150,100), (250,80), (600,90), (650,110), (700,100) - top traces
- (150,700), (250,720), (600,710) - bottom traces
- (100,250), (90,500), (700,250), (710,500) - side traces

---

## Component Details

### Logo
```
Text: "NEXTECH"
Prefix: "> " (in secondary blue color)
Suffix: "_" (blinking cursor animation)
Cursor blink: 1s infinite, opacity 1 → 0 at 50% mark
```

### Navigation Links
**Default State:**
- Color: rgba(255, 255, 255, 0.7)
- Transition: all 0.3s

**Hover State:**
- Color: var(--primary) matrix green
- Brackets appear: "[ " before and " ]" after link text
- Bracket color: var(--primary)
- Bracket opacity transition: 0 → 1

### Hero Section
**Terminal Line:**
- Appears before main heading
- Text: "$ ./initialize_future.sh"
- Color: var(--primary)
- Font: JetBrains Mono
- Margin-bottom: 30px

**Main Heading:**
- Gradient text effect
- Background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)
- -webkit-background-clip: text
- -webkit-text-fill-color: transparent

**CTA Button:**
- Border: 2px solid var(--primary)
- Background: transparent (initially)
- Padding: 18px 40px
- Text: uppercase with letter-spacing 2px

**CTA Button Hover:**
- Background fills from left (slide-in effect using ::before pseudo-element)
- Text color changes to var(--darker)
- Box-shadow: 0 0 30px rgba(0, 255, 136, 0.5) glow effect
- Transition: 0.3s

### Stats Grid
**Layout:**
- CSS Grid: 4 equal columns (repeat(4, 1fr))
- Gap: 40px
- Bordered section (top and bottom)

**Stat Box:**
- Background: linear-gradient(135deg, rgba(0, 255, 136, 0.05), rgba(0, 136, 255, 0.05))
- Border: 1px solid rgba(0, 255, 136, 0.2)
- Padding: 40px

**Stat Box Hover:**
- Top border effect: animated line from left to right (using ::before pseudo-element)
- Border gradient: var(--primary) → var(--secondary)
- Background intensifies: opacity 0.05 → 0.1
- Transform: translateY(-5px)

**Content Structure:**
- Label on top (small, uppercase, green)
- Value below (large, monospace)

### Service Cards
**Layout:**
- CSS Grid: auto-fit, minmax(350px, 1fr)
- Gap: 30px

**Card Styling:**
- Background: rgba(0, 255, 136, 0.02)
- Border: 1px solid rgba(0, 255, 136, 0.2)
- Padding: 50px
- Clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)
  - Creates angled top-right corner

**Card Hover:**
- Corner accent appears (20×20px triangle in top-right using ::after pseudo-element)
- Background: rgba(0, 255, 136, 0.05)
- Transform: translateX(10px) - slides right
- Box-shadow: -10px 0 30px rgba(0, 255, 136, 0.2) - left glow

**Content Structure:**
- Service number: [01], [02], [03] format
- Heading (uppercase)
- Description paragraph

### Tech Stack Section
**Background:**
- Subtle gradient: linear-gradient(135deg, rgba(0, 255, 136, 0.02), rgba(0, 136, 255, 0.02))

**Layout:**
- Flexbox with wrap
- justify-content: space-around
- Gap: 40px

**Tech Items:**
- Default: rgba(255, 255, 255, 0.5) - dim gray
- Hover: var(--primary) with text-shadow glow (0 0 10px)
- Uppercase with letter-spacing

---

## Animation Specifications

### Grid Scroll
```css
@keyframes gridScroll {
    0% { transform: translate(0, 0); }
    100% { transform: translate(40px, 40px); }
}
Duration: 20s
Timing: linear
Iteration: infinite
```

### Scanline
```css
@keyframes scan {
    0% { transform: translateY(0); }
    100% { transform: translateY(100%); }
}
Duration: 8s
Timing: linear
Iteration: infinite
```

### Logo Cursor Blink
```css
@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}
Duration: 1s
Iteration: infinite
```

### Circuit Trace Draw (Green)
```css
@keyframes drawTrace {
    0%, 100% {
        stroke-dashoffset: 1000;
        opacity: 0.3;
    }
    50% {
        stroke-dashoffset: 0;
        opacity: 1;
    }
}
Duration: 4s
Timing: ease-in-out
Iteration: infinite
stroke-dasharray: 1000
```

### Circuit Trace Draw (Blue)
```css
@keyframes drawTraceSecondary {
    0%, 100% {
        stroke-dashoffset: 1000;
        opacity: 0.2;
    }
    50% {
        stroke-dashoffset: 0;
        opacity: 0.8;
    }
}
Duration: 4s
Timing: ease-in-out
Iteration: infinite
```

### Pin Glow
```css
@keyframes pinGlow {
    0%, 100% {
        opacity: 0.5;
        filter: drop-shadow(0 0 5px var(--primary));
    }
    50% {
        opacity: 1;
        filter: drop-shadow(0 0 15px var(--primary)) drop-shadow(0 0 25px var(--primary));
    }
}
Duration: 3s
Timing: ease-in-out
Iteration: infinite
```

### CPU Core Breath
```css
@keyframes coreBreath {
    0%, 100% {
        fill: rgba(0, 255, 136, 0.05);
        stroke-width: 2;
    }
    50% {
        fill: rgba(0, 255, 136, 0.15);
        stroke-width: 3;
    }
}
Duration: 4s
Timing: ease-in-out
Iteration: infinite
```

---

## Interactive States

### Navigation Links
- Default: 70% white opacity, brackets hidden
- Hover: Primary green, brackets visible with fade-in

### CTA Button
- Default: Transparent bg, green border/text
- Hover: Green background slides in from left, text turns dark, glowing shadow

### Stat Boxes
- Default: Subtle gradient background
- Hover: Animated top border appears, lifts up 5px, background intensifies

### Service Cards
- Default: Barely visible background, straight top-right corner
- Hover: Slides right 10px, corner triangle appears, left shadow glow

### Tech Items
- Default: 50% white opacity
- Hover: Primary green with glow effect

---

## Content Structure

### Header
- Logo: "NEXTECH"
- Navigation: Home, Services, Technology, Contact

### Hero Section
- Terminal prompt: "$ ./initialize_future.sh"
- H1: "BUILD THE FUTURE"
- Description: 1-2 sentence tagline
- CTA: "Initialize Project"

### Stats Section
- 4 metrics in grid layout
- Each with label + large number

Example stats:
- Projects: 500+
- Clients: 250+
- Uptime: 99.9%
- Countries: 45+

### Services Section
- Section subtitle: "// What We Do"
- Section title: "Core Services"
- 3 service cards with numbers [01], [02], [03]

Example services:
1. System Architecture
2. Cloud Infrastructure
3. AI Integration

### Tech Stack Section
- 6-8 technology names
- Horizontal layout with wrapping

Example tech: React, Node.js, Python, Docker, Kubernetes, AWS

---

## Implementation Notes

### Browser Compatibility
- Uses CSS custom properties (variables)
- backdrop-filter requires -webkit- prefix for Safari
- clip-path well supported in modern browsers
- SVG animations work across all modern browsers

### Performance Considerations
- Fixed position elements use transform for animations (GPU accelerated)
- SVG drop-shadows can be performance-intensive - opacity kept at 15% helps
- Scanline animation uses transform instead of top/position changes
- All animations use ease-in-out for smooth visual flow

### Accessibility
- Ensure sufficient color contrast (green on black passes WCAG AA)
- Provide focus states for interactive elements (inherit hover states)
- Reduce motion for users who prefer it (@media prefers-reduced-motion)
- Ensure text remains readable over background animations

### Responsive Considerations
- Container max-width scales content for large screens
- Grid layouts use auto-fit/minmax for responsive columns
- Font sizes may need scaling on mobile (use clamp() or media queries)
- Consider reducing animation complexity on mobile for performance
- CPU chip background size may need adjustment for smaller viewports

---

## File Dependencies

### External Fonts
```html
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
```

### No External Assets Required
- All graphics generated with CSS and SVG
- No image files needed
- Self-contained in single HTML file

---

## Design Philosophy

This design embodies a **technical, developer-focused aesthetic** with these key principles:

1. **Terminal-Inspired**: Monospace fonts, command-line prompts, bracket notation
2. **Circuit Board Aesthetic**: Grid patterns, connection traces, chip visualization
3. **Matrix/Cyberpunk**: Green phosphor glow, animated effects, dark backgrounds
4. **Precision**: Exact spacing, grid alignment, technical accuracy
5. **Performance**: Smooth 60fps animations, optimized effects
6. **Minimalism**: No unnecessary decoration, function informs form

### Visual Hierarchy
1. CPU chip breathing animation (subtle, ambient)
2. Hero heading with gradient (primary focus)
3. Interactive elements with glow effects (secondary focus)
4. Grid and scanlines (background texture)

### Motion Design
- **Ambient**: Grid, scanlines, CPU chip (continuous, slow)
- **Interactive**: Hovers, button fills (fast, responsive)
- **Branded**: Logo cursor blink (attention-grabbing)

---

## Prompt Template for Recreation

Use this prompt to recreate this design:

```
Create a futuristic, high-tech website with these specifications:

COLOR SCHEME:
- Background: Pure black (#050505)
- Primary accent: Matrix green (#00ff88)
- Secondary accent: Electric blue (#0088ff)
- Text: White with 70% opacity for body text

TYPOGRAPHY:
- Headings: Space Grotesk (modern sans-serif)
- Technical elements: JetBrains Mono (monospace)
- Logo: JetBrains Mono with "> " prefix and blinking cursor
- All uppercase for nav, headings, and labels

BACKGROUND EFFECTS:
1. Animated grid pattern (40px squares, subtle green, moving diagonally)
2. Scanline overlay (CRT screen effect, vertical scroll)
3. Centered CPU chip SVG animation with:
   - 200×200px core with breathing glow
   - 20 connection pins (5 per side) with pulsing glow
   - 12 circuit traces that draw themselves with staggered timing
   - Green and blue colored connections

LAYOUT:
- Sticky header with logo and nav (frosted glass effect)
- Hero section with terminal prompt "$ ./initialize_future.sh"
- Large gradient text heading
- Stats grid (4 columns)
- Service cards with angled corners
- Tech stack tags

INTERACTIONS:
- Nav links: Brackets appear on hover
- Buttons: Fill slides in from left
- Cards: Lift and glow on hover
- All transitions smooth with green glow effects

STYLE: Terminal-inspired, circuit board aesthetic, developer-focused, Matrix/cyberpunk vibe
```

---

## Version History

- **v1.0** - Initial high-tech grid design
- **v1.1** - Added ambient CPU chip background animation

---

## Credits

Design System: High-Tech Grid Theme
Style: Futuristic Terminal / Circuit Board
Inspiration: Matrix UI, cyberpunk aesthetics, developer tools
