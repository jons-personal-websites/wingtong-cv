# Cross-Site Best Practices Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Bridge best practices across all three CV sites (wingtong, alivia, chengwei) — primarily adding a print-ready cv.html + PDF to wingtong, fixing a print bug in alivia, and completing OG meta tags on wingtong + chengwei.

**Architecture:** Three independent repos. No shared code. Each change is self-contained HTML/CSS. No build step — all static files deployed to Vercel.

**Tech Stack:** Vanilla HTML/CSS, Google Fonts (Playfair Display + DM Sans for wingtong), Chrome headless for PDF generation, git push per repo.

---

### Task 1: Create `wingtong-cv/cv.html`

**Files:**
- Create: `wingtong-cv/cv.html`

A4 two-column print page matching Wing Tong's design language.

**Palette from tailwind-config.js:**
- Accent blue: `#0073CE`
- TCG: `#6C5CE7`, A5tec: `#E17055`, EY: `#D4A017`, Adelphi: `#0984E3`, Comwerks: `#00B894`

**Layout:**
- Sidebar (70mm, dark navy `#0D2137`): name, tagline, contact (email + LinkedIn + WhatsApp), education, certifications, skills
- Main (remaining, white): stats row (10yr / 4 industries / 6 case studies / 5 certs), summary, 5 experience blocks with per-company flavor accents
- Fonts: Playfair Display for headings, DM Sans body, JetBrains Mono for labels
- `print-color-adjust: exact` on body — required so sidebar prints correctly
- `save_as_pdf()` and `close()` buttons visible on screen, hidden in `@media print`
- `@page { size: A4; margin: 0; }`

**Contact details** (from index.html):
- leongwingtong@gmail.com
- linkedin.com/in/wing-tong-leong/
- wa.me/6592709783 (+65 9270 9783)
- Singapore

**Step 1: Write cv.html**
Full self-contained file. No Tailwind, no external JS — pure CSS + Google Fonts.

**Step 2: Preview in browser**
Open `http://localhost:8765/cv.html` and take screenshot to verify layout.

**Step 3: Commit**
```bash
git add cv.html
git commit -m "feat: add print-ready cv.html for Wing Tong"
```

---

### Task 2: Add Download CV button to `wingtong-cv/index.html`

**Files:**
- Modify: `wingtong-cv/index.html` (nav section, ~line 47 and mobile menu ~line 58)

The nav currently has Work/About/Experience/Education links but NO Download CV button.

**Step 1: Add to desktop nav** (after the `</ul>` closing tag for navLinks, before the hamburger button):
```html
<a href="cv.html" target="_blank" class="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent text-sm font-mono rounded-md hover:bg-accent hover:text-white transition-all duration-200 no-underline">
  <i data-lucide="download" class="w-3.5 h-3.5"></i>
  CV
</a>
```

**Step 2: Add to mobile menu** (inside the flex-col div of mobileMenu):
```html
<a href="cv.html" target="_blank" class="inline-flex items-center gap-2 text-sm font-mono text-accent no-underline hover:underline">
  <i data-lucide="download" class="w-3.5 h-3.5"></i>Download CV
</a>
```

**Step 3: Commit**
```bash
git add index.html
git commit -m "feat: add Download CV nav button linking to cv.html"
```

---

### Task 3: Generate `wingtong-cv/Leong_Wing_Tong_CV_2026.pdf`

**Files:**
- Create: `wingtong-cv/Leong_Wing_Tong_CV_2026.pdf`

Use Chrome headless to print cv.html to PDF (same approach as chengwei).

**Step 1: Start local server in wingtong-cv dir, generate PDF**
```bash
cd wingtong-cv
python3 -m http.server 8767 &
sleep 1
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu \
  --print-to-pdf="Leong_Wing_Tong_CV_2026.pdf" \
  --print-to-pdf-no-header --no-margins \
  --run-all-compositor-stages-before-draw \
  "http://localhost:8767/cv.html"
pkill -f "python3 -m http.server 8767"
```

**Step 2: Update Download CV buttons in index.html to download the PDF directly** (same as chengwei pattern — buttons that were pointing to `cv.html` should now point to `Leong_Wing_Tong_CV_2026.pdf` with `download` attribute).

**Step 3: Commit both**
```bash
git add Leong_Wing_Tong_CV_2026.pdf index.html
git commit -m "feat: add generated PDF + wire Download CV to direct download"
```

---

### Task 4: Fix `print-color-adjust` in `alivia-cv/cv.html`

**Files:**
- Modify: `alivia-cv/cv.html` (inside `<style>`, body rule ~line 48-56)

Currently missing `print-color-adjust: exact` — without it Chrome strips the dark sidebar background when printing.

**Step 1: Add to body rule**
```css
body {
  /* existing rules... */
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
```

**Step 2: Commit**
```bash
cd alivia-cv
git add cv.html
git commit -m "fix: add print-color-adjust so sidebar prints correctly in Chrome"
```

---

### Task 5: Complete OG meta tags — `wingtong-cv` and `chengwei-cv`

Both sites have only `og:type`, `og:title`, `og:description`. Alivia has full tags including `og:url`, `og:image`, `og:site_name`, and Twitter card tags. Add the missing tags to both.

**Files:**
- Modify: `wingtong-cv/index.html` (head, ~line 9-12)
- Modify: `chengwei-cv/index.html` (head, ~line 9-12)

**Wingtong additions** (after existing og: tags):
```html
<meta property="og:url" content="https://wingtong.vercel.app/">
<meta property="og:site_name" content="Leong Wing Tong">
<meta property="og:image" content="https://wingtong.vercel.app/wingtong_icon.svg">
<meta name="twitter:card" content="summary">
<meta property="twitter:url" content="https://wingtong.vercel.app/">
<meta name="twitter:title" content="Leong Wing Tong — Product Designer">
<meta name="twitter:description" content="Product Designer based in Singapore — specializing in user-centric experiences across F&B, FinTech, and digital transformation">
<meta name="twitter:image" content="https://wingtong.vercel.app/wingtong_icon.svg">
```

**Chengwei additions** (after existing og: tags):
```html
<meta property="og:url" content="https://chengwei.vercel.app/">
<meta property="og:site_name" content="Goh Cheng Wei">
<meta property="og:image" content="https://chengwei.vercel.app/favicon.svg">
<meta name="twitter:card" content="summary">
<meta property="twitter:url" content="https://chengwei.vercel.app/">
<meta name="twitter:title" content="Goh Cheng Wei — Senior Engineer · Educator · Systems Thinker">
<meta name="twitter:description" content="Senior Engineer, Educator & Systems Thinker based in Singapore — embedded systems, IoT, elevator engineering, and technical training.">
<meta name="twitter:image" content="https://chengwei.vercel.app/favicon.svg">
```

**Step 1: Update both index.html files**

**Step 2: Commit each repo**
```bash
# wingtong-cv
git add index.html && git commit -m "feat: add complete OG + Twitter meta tags"

# chengwei-cv
git add index.html && git commit -m "feat: add complete OG + Twitter meta tags"
```

---

### Task 6: Push all three repos

```bash
cd wingtong-cv && git push
cd ../alivia-cv && git push
cd ../chengwei-cv && git push
```

---

### Task 7: Update `personal-website-builder` skill (if needed)

**Files:**
- Read: personal-website-builder skill (via Skill tool)
- Possibly edit the skill file

Review the skill against learnings from building all three sites. Key things to potentially add:
- `cv.html` as a mandatory deliverable pattern
- `print-color-adjust: exact` as a required print CSS property
- PDF generation via Chrome headless as the standard workflow
- Per-company flavor color system as a recommended pattern
- Ghost canvas background (code-rain or domain-specific) as a nerd callout option
- OG + Twitter meta tags as required in every site

Only update if the skill is genuinely missing these — don't add noise.
