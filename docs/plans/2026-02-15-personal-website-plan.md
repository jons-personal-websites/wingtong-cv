# Wing Tong Personal Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page personal website for Wing Tong Leong (Senior Product Designer) with portfolio showcase, experience timeline, AI chat, and fit assessment.

**Architecture:** Single `index.html` with Tailwind CDN for styling, GSAP for animations, Lucide for icons, and a Vercel serverless function proxying Gemini API for AI features. All content is inline HTML — no build step, no framework.

**Tech Stack:** HTML5, Tailwind CSS (CDN), GSAP + ScrollTrigger, Lucide Icons, Vanilla JS, Gemini API (via Vercel serverless proxy)

**Reference:** `../alivia-cv/` contains the proven pattern for all technical implementations. Copy patterns directly, adapt content and colors.

---

### Task 1: Project Scaffolding

**Files:**
- Create: `favicon.svg`
- Create: `.gitignore`
- Create: `.env`
- Create: `js/tailwind-config.js`
- Create: `css/main.css`
- Create: `api/generate.js`

**Step 1: Create `.gitignore`**

```
.env
.env.local
.vercel
node_modules
DS_Store
```

**Step 2: Create `.env`**

```
GEMINI_API_KEY=your_key_here
```

**Step 3: Create `favicon.svg`**

A minimal geometric "WT" monogram in deep blue `#0052A3` on transparent background. Simple, clean lines befitting a designer.

**Step 4: Create `js/tailwind-config.js`**

Wing Tong's color palette and typography. Reference `../alivia-cv/js/tailwind-config.js` for structure.

Colors:
- `cream: { DEFAULT: "#F5F4EF", dark: "#E8E3DA" }`
- `ink: { DEFAULT: "#1E1515", light: "#4A4040" }` (primary text — "ink" instead of "charcoal" for designer flavor)
- `accent: { DEFAULT: "#0052A3", light: "#3378BA", pale: "#E8F0F8" }` (deep blue)
- `sand: { DEFAULT: "#C4A882", light: "#E0D4BF" }` (warm secondary)
- `muted: "#6B6560"`
- `border-custom: "#E0DBD3"`

Per-company experience colors:
- `tcg: { DEFAULT: "#6C5CE7", bg: "#F3F1FD" }` (purple — gaming/TCG)
- `a5tec: { DEFAULT: "#E17055", bg: "#FDF0ED" }` (coral — F&B tech)
- `ey: { DEFAULT: "#2D3436", bg: "#F0F1F2" }` (dark slate — corporate)
- `adelphi: { DEFAULT: "#0984E3", bg: "#EBF5FD" }` (blue — digital)
- `comwerks: { DEFAULT: "#00B894", bg: "#E8F8F2" }` (teal — dev)

Per-project portfolio colors:
- `proj-dashboard: "#E17055"` (coral)
- `proj-pos: "#6C5CE7"` (purple)
- `proj-accountancy: "#0984E3"` (blue)
- `proj-biz360: "#00B894"` (teal)
- `proj-gateway: "#FDCB6E"` (gold)
- `proj-scs: "#E84393"` (pink)

Fonts:
- `display: ['"Instrument Serif"', "Georgia", "serif"]`
- `body: ['"Satoshi"', "-apple-system", "sans-serif"]`

Animations: same `morph`, `spin-slow`, `pulse-line`, `dot-bounce` keyframes as alivia-cv.

**Step 5: Create `api/generate.js`**

Copy from `../alivia-cv/api/generate.js` verbatim — same Vercel serverless Gemini proxy.

**Step 6: Commit**

```bash
git add favicon.svg .gitignore js/tailwind-config.js css/main.css api/generate.js
git commit -m "feat: scaffold project with config, favicon, and API proxy"
```

---

### Task 2: HTML Shell + Navigation

**Files:**
- Create: `index.html`

**Step 1: Create `index.html` with head and nav**

The `<head>` section includes:
- Meta charset, viewport, title: "Wing Tong Leong — Senior Product Designer"
- OG/Twitter meta tags
- Google Fonts: `Instrument Serif` (wght 400) + `Satoshi` via CDN (use `https://api.fontshare.com/v2/css?f[]=satoshi@400;500;700&display=swap` for Satoshi, Google Fonts for Instrument Serif)
- Tailwind CDN script
- `js/tailwind-config.js` script
- GSAP + ScrollTrigger CDN
- Lucide CDN
- `css/main.css` link

Navigation structure (match alivia-cv pattern):
- Fixed `<nav>` with `bg-cream/85 backdrop-blur-xl`
- Left: `<a>` "Wing Tong" in `font-display text-2xl font-semibold`
- Right: `<ul>` with links: About, Portfolio, Experience, Education
- "Download CV" pill button (hidden on small screens)
- Mobile hamburger button + mobile menu dropdown
- All nav links use `.nav-link` class for hover underline effect

**Step 2: Verify in browser**

Open `index.html` in browser. Nav should render with correct fonts and sticky positioning. Mobile hamburger should show on small viewports.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add HTML shell with navigation"
```

---

### Task 3: Hero Section

**Files:**
- Modify: `index.html`

**Step 1: Add hero section after nav**

Structure (inside `<section class="min-h-screen ...">`)
- Morphing background shape div (absolute positioned, gradient from `accent-pale` via `sand-light` to `cream-dark`)
- Two-column grid: text left, decorative right (no photo — Wing Tong doesn't have one in her existing sites)
  - Instead of photo: an abstract geometric composition using CSS — overlapping circles/rectangles in palette colors, slowly rotating. This is distinctive for a designer's site.
- Text column:
  - `<p>` "Hello, I'm" — `text-xs font-semibold tracking-[0.15em] uppercase text-accent`
  - `<h1>` "Wing Tong Leong" — `font-display text-5xl sm:text-6xl lg:text-7xl`
  - `<p>` "Senior Product Designer" — `font-display text-lg lg:text-xl italic text-ink-light`
  - `<p>` summary: "I craft user-centric experiences across F&B, FinTech, and digital transformation — with over a decade of turning complex problems into elegant interfaces."
  - CTA buttons: "View Portfolio" (primary, `bg-accent text-cream`, links to `#portfolio`) + "Download CV" (outline)
  - Social links row: LinkedIn (`https://www.linkedin.com/in/wing-tong-leong/`) + Email (`mailto:leongwingtong@gmail.com`)
- Scroll indicator at bottom

All text elements get class `hero-child` for staggered GSAP entrance.

**Step 2: Verify in browser**

Hero should fill viewport, text legible, CTAs visible, background shape animating.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add hero section with CTAs and social links"
```

---

### Task 4: Stats Bar

**Files:**
- Modify: `index.html`

**Step 1: Add stats bar after hero section**

Floating card with negative top margin (`-mt-12`), same pattern as alivia-cv `#statsBar`:
- `bg-white border border-border-custom rounded-[20px]`
- 4 stats in grid: `grid-cols-2 lg:grid-cols-4`
- Each stat: `.stat-counter` with `data-target` attribute
  - 10 → "Years in Design"
  - 4 → "Industries"
  - 6 → "Case Studies"
  - 5 → "Certifications"
- Use `font-display text-4xl font-bold text-accent` for numbers

**Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add stats bar with animated counters"
```

---

### Task 5: About Section

**Files:**
- Modify: `index.html`

**Step 1: Add about section**

Section with id `about`, max-w-[1200px], py-24:
- Label: "About" in `text-xs font-bold tracking-[0.2em] uppercase text-accent`
- Heading: "Designing with intent" in `font-display text-3xl sm:text-4xl lg:text-5xl`
- Two-column grid:
  - Left: 2 paragraphs about her career arc and design philosophy:
    - Para 1: Senior Product Designer with 10+ years across F&B tech (A5tec), FinTech/TCG (TCG Unite), and digital transformation consultancy (EY/Adelphi Digital). Specialized in end-to-end product development, from user research to high-fidelity prototypes.
    - Para 2: Led Design Ops, educated teams on Figma best practices, implemented Agile methodologies. Fine Arts background from NTU with Interactive Media specialization.
  - Right: 4 skill cards in 2x2 grid, each with icon + title + description:
    - Product Design (layers icon) — "End-to-end product lifecycle from concept to launch"
    - User Research (search icon) — "Field studies, interviews, and usability testing"
    - Design Ops (settings icon) — "Design systems, Figma workflows, and team education"
    - Mobile UI (smartphone icon) — "Native mobile interface and interaction design"

All elements get `gsap-reveal` class.

**Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add about section with skill cards"
```

---

### Task 6: Portfolio Grid + Modal Structure

**Files:**
- Modify: `index.html`

**Step 1: Add portfolio section**

Section with id `portfolio`:
- Label: "Portfolio"
- Heading: "Selected work"
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- 6 project cards, each:
  - `bg-white border border-border-custom rounded-2xl overflow-hidden cursor-pointer`
  - Top: colored band (`h-2`) in project accent color
  - Body: project title (font-display), 1-line description, role tag pill
  - `onclick="openProject('projectId')"`
  - Hover: lift + shadow

Projects with their accent colors:
1. **POS Dashboard** (`proj-dashboard` / coral) — "Redesigning the POS management experience for multi-location restaurants" — Role: Designer & Product Manager
2. **POS Checkout** (`proj-pos` / purple) — "Optimising the checkout process for quick service restaurants" — Role: Sole Designer
3. **ISCA Courses** (`proj-accountancy` / blue) — "Helping accountants upskill with courses" — Role: Experience & Interface Designer
4. **Biz360** (`proj-biz360` / teal) — "Guiding entrepreneurs to start businesses" — Role: Designer
5. **Gateway & Catering** (`proj-gateway` / gold) — "Building emotional connection for a gateway & catering brand" — Role: Lead Designer
6. **Science Centre** (`proj-scs` / pink) — "Making trip planning to Science Centre a breeze" — Role: Interface Designer

**Step 2: Add modal overlay container**

After the portfolio section, add a hidden fullscreen modal:

```html
<div id="projectModal" class="fixed inset-0 z-[2000] bg-ink/80 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300">
  <div id="projectModalContent" class="absolute inset-0 sm:inset-4 lg:inset-8 bg-cream rounded-none sm:rounded-2xl overflow-y-auto translate-y-8 transition-all duration-400">
    <button onclick="closeProject()" class="sticky top-4 right-4 float-right m-4 z-10 w-10 h-10 rounded-full bg-white border border-border-custom flex items-center justify-center hover:bg-ink hover:text-cream transition-all">
      <i data-lucide="x" class="w-5 h-5"></i>
    </button>
    <div id="projectModalBody" class="max-w-[900px] mx-auto px-6 sm:px-10 py-12"></div>
  </div>
</div>
```

**Step 3: Add modal content templates**

Inside `index.html`, add 6 hidden `<template>` elements (or hidden divs), one per project. Each contains the full case study HTML:

Each case study follows this structure:
- Colored accent bar at top (project color)
- Project title (font-display, large)
- Role + timeline metadata
- "Overview" paragraph
- "The Problem" section with subheadings
- "The Solution" section with subheadings
- "Outcomes" section with metric callouts
- "Key Takeaway" quote

Content comes from the fetched case study data (POS Dashboard, POS Checkout, ISCA, Biz360, Gateway & Catering, Science Centre). Use the full text extracted from wingtong.surge.sh.

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add portfolio grid and case study modals"
```

---

### Task 7: Experience Timeline

**Files:**
- Modify: `index.html`

**Step 1: Add experience section**

Section with id `experience`, same pattern as alivia-cv:
- Label: "Experience"
- Heading: "Where I've designed"
- Sub-text: "Click 'Learn more' on any achievement to explore the deeper story behind it."

6 company blocks, each with per-company color flavoring (`.flavor-tcg`, `.flavor-a5tec`, etc.):

**TCG Unite** (purple):
- Icon: gamepad-2
- Senior Product Designer, Jul 2024 – Oct 2025, 1 yr 4 mos, Singapore, Hybrid/Contract
- Tag: "FinTech · TCG"
- Tagline: "Designing a mobile Trading Card Game app from the ground up"
- Bullets:
  - Led interface and experience design for a mobile TCG app from scratch
  - Managed both contract and full-time senior design responsibilities focused on mobile UI

**A5tec (Feisiong Group)** (coral):
- Icon: utensils
- Product Lead (Design), Jan 2022 – Oct 2023, 1 yr 10 mos, Singapore
- Tag: "F&B · Digital Products"
- Tagline: "Driving end-to-end product development for digital F&B products"
- Metric callout: "End-to-end" / "Product Lifecycle"
- Bullets:
  - Drove end-to-end product development lifecycle for digital F&B products
  - Collaborated with stakeholders to define product strategy and gather requirements
  - Designed low and high-fidelity screens based on user research
  - Implemented Agile methodologies, including sprint reviews and manual QA testing
  - Spearheaded Design Ops and educated cross-functional teams on Figma best practices
- Each bullet gets "Learn more" expand button

**Career Break** (muted, no accent):
- Icon: heart
- Health and Well-being, Apr 2021 – Dec 2021, 9 mos
- Simple: "Focused on rest while maintaining select freelance projects."
- No "Learn more" buttons

**EY (Ernst & Young)** (dark slate):
- Icon: building-2
- UI/UX Designer, Oct 2018 – Apr 2021, 2 yrs 7 mos, Singapore, Hybrid
- Tag: "Consultancy · Digital Transformation"
- Tagline: "Leading UI/UX design for strategic accounts across industries"
- Bullets:
  - Led UI/UX design for strategic accounts, facilitating digital transformation
  - Assisted in user research, including stakeholder interviews and workshops

**Adelphi Digital (Acquired by EY)** (blue):
- Icon: monitor
- UI/UX Designer, Jan 2017 – Oct 2018, 1 yr 10 mos, Singapore
- Tag: "Digital Agency"
- Tagline: "User-centered design and interaction design before EY acquisition"
- Bullets:
  - Focused on User-Centered Design and Interaction Design
  - Company later rebranded to EY Digital

**Comwerks Interactive** (teal):
- Icon: code
- Digital Developer, May 2013 – Aug 2013, 4 mos
- Tag: "Development · Agency"
- Tagline: "Front-end development for leading global brands"
- Bullets:
  - Assisted in front-end development for microsites, Flash applications, and EDMs
  - Managed content for clients including Microsoft, 3M, Xbox, and Ponds

**Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add experience timeline with per-company flavoring"
```

---

### Task 8: Education + Certifications

**Files:**
- Modify: `index.html`

**Step 1: Add education section**

Section with id `education`, two cards:

**NTU:**
- Nanyang Technological University (NTU) Singapore
- Bachelor of Fine Arts (B.F.A.), Art, Design & Media (Interactive Media)
- Grade: Second Class (Upper) Honours

**Nanyang Polytechnic:**
- Diploma, Digital Media Design (Interaction Design)
- Grade: Merit
- Four-time Director's List recipient (2010–2012)

**Step 2: Add certifications section**

Below education, horizontal flex-wrap of cert tags:
- Data-Driven Design: Quantitative Research for UX — IxDF (Nov 2024)
- Mobile UX Design: The Beginner's Guide — IxDF (Nov 2024)
- Mobile UI Design — IxDF (Nov 2024)
- Membership Certificate — IxDF (Feb 2024)
- EY Digital Bronze — EY (Jul 2020)

Each tag: `px-4 py-2 bg-white border border-border-custom rounded-full text-sm`

**Step 3: Add skills section**

Below certifications, display technical skills grouped:
- **Design:** Product Design, UI/UX Design, Mobile Interface Design, UCD, Wireframing, Interaction Design
- **Process:** Product Management, Product Lifecycle, Agile, User Research, Usability Testing, Design Ops
- **Tools:** Figma, Adobe Illustrator, jQuery, MySQL

Use pill tags with subtle background colors per group.

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add education, certifications, and skills sections"
```

---

### Task 9: Fit Assessment Section

**Files:**
- Modify: `index.html`

**Step 1: Add fit assessment section**

Dark section (`bg-ink text-cream`), same structure as alivia-cv `#fit`:
- Label: "Fit Assessment" in `text-sand`
- Heading: "Am I the right fit for your role?"
- Subtitle explaining the feature
- Textarea with placeholder "Paste the job description here..."
- "Assess Fit" button in accent blue
- Hidden result div
- Glow pseudo-element (`.fit-glow`)

**Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add AI-powered fit assessment section"
```

---

### Task 10: Chat Widget + Footer

**Files:**
- Modify: `index.html`

**Step 1: Add footer**

Simple footer:
- "Wing Tong Leong" in font-display
- Small design icon (pen-tool lucide icon)
- "Product Designer · Singapore"
- Copyright: "Leong Wing Tong © 2025"

**Step 2: Add chat FAB and panel**

Same pattern as alivia-cv:
- Floating button (bottom-right): `bg-accent`, message-circle icon
- Slide-up chat panel with:
  - Header: "Wing Tong Leong" title, no photo
  - Message area with initial bot message: "Hi! I'm Wing Tong — a product designer with a love for clean, purposeful interfaces. Ask me anything about my design process, experience, or projects!"
  - Input + send button
  - Social links: LinkedIn + Email

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add footer and AI chat widget"
```

---

### Task 11: Custom CSS

**Files:**
- Create/Write: `css/main.css`

**Step 1: Write main.css**

Port all patterns from `../alivia-cv/css/main.css`, adapted for Wing Tong's palette:

- `html { scroll-behavior: smooth; }`, font smoothing
- Noise texture overlay (`body::before`)
- Nav link hover underline (`.nav-link::after`) — use `#0052A3` instead of terracotta
- Experience accent bars (`.exp-accent`) and bullet dots (`.exp-list li::before`)
- Per-company flavor colors for `.flavor-tcg`, `.flavor-a5tec`, `.flavor-ey`, `.flavor-adelphi`, `.flavor-comwerks`
- Loading dots animation delay
- Education card top accent (gradient from `#0052A3` to `#C4A882`)
- Fit section glow (`.fit-glow::before`) — use accent blue radial gradient
- Decorative background accents per company (radial gradients, stripe patterns, dot patterns)
- Metric callout cards
- Chat FAB hover effect (use a pen/pencil animation instead of steam — designer touch)
- Section hover micro-interactions (same patterns, adapted colors)
- **NEW: Portfolio card hover effects** — scale up slightly, shadow increases
- **NEW: Project modal styles** — open/close transitions, body scroll lock class

**Step 2: Commit**

```bash
git add css/main.css
git commit -m "feat: add custom CSS with animations and micro-interactions"
```

---

### Task 12: JavaScript — Animations + Navigation

**Files:**
- Create/Write: `js/main.js`

**Step 1: Write GSAP animations and nav logic**

Port from `../alivia-cv/js/main.js`, sections:

1. `lucide.createIcons();`
2. Config: `GEMINI_URL = '/api/generate';` and `WINGTONG_CONTEXT` string (full profile + project summaries, first-person persona instructions)
3. GSAP animations:
   - Hero entrance (staggered `.hero-child`, decorative element)
   - ScrollTrigger reveal for `.gsap-reveal`
   - Stats bar counter animation
   - Parallax on morphing shape
   - Portfolio card stagger animation
   - Certification/skill tag stagger
4. Cursor glow on experience sections (adapted class names)
5. Nav scroll behavior (border toggle)
6. `toggleMobileNav()` / `closeMobileNav()`
7. `animateCounters()`

**Step 2: Commit**

```bash
git add js/main.js
git commit -m "feat: add GSAP animations and navigation logic"
```

---

### Task 13: JavaScript — Project Modals

**Files:**
- Modify: `js/main.js`

**Step 1: Add modal open/close functions**

```javascript
function openProject(projectId) {
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('projectModalBody');
  const template = document.getElementById('project-' + projectId);
  if (!template) return;

  body.innerHTML = template.innerHTML;
  lucide.createIcons({ nodes: [body] }); // re-init icons in modal
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.querySelector('#projectModalContent').classList.remove('translate-y-8');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.querySelector('#projectModalContent').classList.add('translate-y-8');
  document.body.style.overflow = '';
}
```

Also: close on Escape key, close on backdrop click (outside modal content).

**Step 2: Commit**

```bash
git add js/main.js
git commit -m "feat: add project modal open/close logic"
```

---

### Task 14: JavaScript — AI Chat + Fit Assessment

**Files:**
- Modify: `js/main.js`

**Step 1: Add Gemini API, chat, and fit assessment functions**

Port directly from alivia-cv, adapting:
- `WINGTONG_CONTEXT` — full profile string with all experience, education, projects, and persona instructions ("You are Wing Tong Leong. Respond in first person as a product designer...")
- `callGemini(prompt, isChat)` — same implementation
- `renderMarkdown(text)` — same implementation
- `inlineMd(text)` — same implementation
- `expandContext(btn, context)` — same, change color references from terracotta to accent
- `toggleChat()` — same, change color class names
- `sendChat()` — same
- `addChatMessage()` / `removeChatMessage()` — same, adapt color classes
- `assessFit()` — same structure, change prompt to Wing Tong's designer context

**Step 2: Commit**

```bash
git add js/main.js
git commit -m "feat: add AI chat widget and fit assessment logic"
```

---

### Task 15: Final Polish + Responsive Testing

**Files:**
- Modify: `index.html`, `css/main.css`

**Step 1: Responsive audit**

Check and fix:
- Mobile nav works correctly
- Hero text doesn't overflow on small screens
- Portfolio grid collapses to single column on mobile
- Project modals are fullscreen on mobile (no inset)
- Stats bar stacks properly (2x2)
- Experience sections read well on mobile (no sticky sidebar on mobile)
- Chat panel responsive (full-width on mobile with proper margins)
- All text sizes are legible

**Step 2: Accessibility pass**

- All images have alt text
- Buttons have aria-labels where icon-only
- Modal has `role="dialog"` and `aria-modal="true"`
- Focus trap in modal when open
- Color contrast meets WCAG AA

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: responsive polish and accessibility improvements"
```

---

## Content Reference

### WINGTONG_CONTEXT for AI (use in js/main.js)

The AI context string should include:
- Full professional profile from `wingtong_portfolio.md`
- Summaries of all 6 projects (POS Dashboard, POS Checkout, ISCA, Biz360, Gateway & Catering, Science Centre)
- Persona instructions: respond as Wing Tong in first person, warm but professional, design-literate tone
- Guidelines: be honest about experience gaps, redirect off-topic questions, keep answers focused

### Case Study Content Sources

All case study content has been extracted from `wingtong.surge.sh`:
- `/dashboard` — POS management dashboard redesign
- `/pos` — POS checkout optimization
- `/accountancy` — ISCA course platform
- `/biz360` — Entrepreneur guidance portal
- `/gatewayNcatering` — SATS corporate website
- `/scs` — Science Centre Singapore website

Use the extracted content verbatim where possible, reformatted to fit the modal HTML structure.
