# Wing Tong Personal Website — Design Document

## Overview

Single-page personal website for Wing Tong Leong, a Senior Product Designer with 10+ years of experience. Hybrid portfolio + CV site with AI-powered chat and fit assessment features. Deployed as a static site (Surge/Vercel).

## Tech Stack

- **HTML:** Single `index.html` file
- **CSS:** Tailwind CDN + custom `css/main.css`
- **JS:** Vanilla JS split into `js/tailwind-config.js` and `js/main.js`
- **Animations:** GSAP + ScrollTrigger
- **Icons:** Lucide
- **AI:** Gemini API via `api/generate/index.js` proxy (same pattern as alivia-cv)

## File Structure

```
wingtong-cv/
├── index.html
├── css/main.css
├── js/tailwind-config.js
├── js/main.js
├── api/generate/index.js
├── favicon.svg
├── .env
├── .gitignore
└── wingtong_portfolio.md (existing)
```

## Visual Aesthetic — "Designer-Elevated"

Draws from Wing Tong's Framer site aesthetic, pushed further with more editorial refinement.

### Typography

- **Headings:** Instrument Serif — elegant, editorial serif
- **Body:** Satoshi — clean geometric sans-serif
- Both via Google Fonts / CDN

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#F5F4EF` | Page background (warm off-white) |
| `text-primary` | `#1E1515` | Primary text (deep brown-black) |
| `accent` | `#0052A3` | Interactive elements, highlights (deep blue) |
| `accent-warm` | `#C4A882` | Secondary accent (warm sand) |
| `text-muted` | `#6B6560` | Secondary text |
| `border` | `#E0DBD3` | Borders, dividers |
| `card` | `#FFFFFF` | Card backgrounds |
| `dark` | `#1E1515` | Dark sections (fit assessment) |

### Design Signatures

- Generous whitespace — editorial pacing
- Thin divider lines between sections
- Accent color used sparingly (interactive elements only)
- Per-project and per-company color flavoring (like alivia-cv)

## Page Sections

### 1. Navigation

Fixed top nav with backdrop blur. Left: "Wing Tong" in Instrument Serif. Right: About, Portfolio, Experience, Education links + "Download CV" pill button. Mobile hamburger.

### 2. Hero

- "Hello, I'm" label in accent blue, tracked uppercase
- "Wing Tong Leong" — large Instrument Serif heading
- "Senior Product Designer" — italic subtitle
- Summary: 10+ years across F&B, FinTech, digital consultancy
- CTAs: "View Portfolio" (scroll) + "Download CV"
- Social: LinkedIn + email
- Morphing background shape in palette colors

### 3. Stats Bar

Floating card overlapping hero bottom. Animated counters:
- 10+ Years in Design
- 4 Industries
- 6 Case Studies
- 3 Certifications

### 4. About

Two-column layout:
- Left: prose narrative about design philosophy and career arc
- Right: 4 skill cards (Product Design, User Research, Design Ops, Mobile UI) with icons

### 5. Portfolio Grid

2-column or 3-column responsive grid. 6 project cards, each with:
- Colored background per project
- Project title + short description
- Role/context tag
- Click opens fullscreen modal overlay with case study

**Projects:**
1. POS Dashboard — Redesigning management for multi-location restaurants
2. POS Checkout — Optimizing checkout for quick-service restaurants
3. Accountancy — Upskilling course platform
4. Biz360 — Business startup guidance tool
5. Gateway & Catering — Brand experience design
6. Science Centre — Trip planning interface

### 6. Case Study Modals

Fullscreen overlay on project card click. Contains:
- Close button (top right)
- Project title, role, timeline
- Problem statement
- Design process / research approach
- Solution with key decisions
- Outcomes / metrics
- Scroll within modal, body scroll locked

Per-project accent colors for visual variety.

### 7. Experience Timeline

Per-company colored sections (like alivia-cv pattern):
- **TCG Unite** — Senior Product Designer (Jul 2024 – Oct 2025)
- **A5tec** — Product Lead, Design (Jan 2022 – Oct 2023)
- **Career Break** — Health & well-being (Apr 2021 – Dec 2021)
- **EY** — UI/UX Designer (Oct 2018 – Apr 2021)
- **Adelphi Digital** — UI/UX Designer (Jan 2017 – Oct 2018)
- **Comwerks Interactive** — Digital Developer (May 2013 – Aug 2013)

Each section: icon badge, sticky sidebar with company/role/dates, bullet points with "Learn more" AI expansion buttons.

### 8. Education

Two cards side by side:
- NTU — BFA, Art Design & Media (Interactive Media), Second Class Upper Honours
- Nanyang Polytechnic — Diploma, Digital Media Design (Interaction Design), Merit, 4x Director's List

### 9. Certifications

Horizontal list/tags:
- Data-Driven Design: Quantitative Research for UX (IxDF, Nov 2024)
- Mobile UX Design: The Beginner's Guide (IxDF, Nov 2024)
- Mobile UI Design (IxDF, Nov 2024)
- IxDF Membership Certificate (Feb 2024)
- EY Digital Bronze (Jul 2020)

### 10. Fit Assessment

Dark section (`#1E1515` background). Textarea to paste a job description. AI analyzes fit against Wing Tong's profile. Same structure as alivia-cv but with Wing Tong's context.

### 11. AI Chat Widget

Floating FAB (bottom right), opens slide-up chat panel. Wing Tong persona grounded in her full profile. Warm, professional tone. Answers about design process, experience, tools, projects.

### 12. Footer

Name, subtitle ("Product Designer"), copyright.

## AI Context

The Gemini prompt will include Wing Tong's full profile from `wingtong_portfolio.md` plus project summaries, instructing the model to respond in first person as Wing Tong.

## Technical Patterns (from alivia-cv)

- GSAP hero entrance animation (staggered children)
- ScrollTrigger reveal for `.gsap-reveal` elements
- Animated stat counters on scroll
- Parallax on hero background shape
- Cursor glow on experience sections
- Nav border appears on scroll
- Mobile nav toggle with hamburger animation
- Markdown renderer for AI responses
- Chat history management
