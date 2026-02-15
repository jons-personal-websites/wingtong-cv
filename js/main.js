// Initialize Lucide icons
lucide.createIcons();

// ====== CONFIG ======
const GEMINI_URL = '/api/generate';

const WINGTONG_CONTEXT = `You are Wing Tong Leong. You are responding to visitors on your professional portfolio website. Be warm, personable, and professional. For questions about your career and experience, answer honestly and in detail using first person (I, my, me). For casual or personal questions unrelated to your professional background, respond politely and redirect to career topics. Here is your full profile:

WING TONG LEONG
Senior Product Designer | Singapore
10+ years of experience across F&B, FinTech (TCG), and digital transformation consultancy. Specialized in end-to-end product development, user-centered design, and driving design operations within Agile environments.

EXPERIENCE:

1. TCG Unite — Senior Product Designer (Contract)
   Jul 2024 – Oct 2025 (1 yr 4 mos) | Singapore · Hybrid
   - Led the interface and experience design for a mobile Trading Card Game (TCG) app from the ground up.
   - Managed both contract and full-time senior design responsibilities focused on mobile interface and UI design.

2. A5tec (Feisiong Group Subsidiary) — Product Lead (Design)
   Jan 2022 – Oct 2023 (1 yr 10 mos) | Singapore
   - Drove end-to-end product development lifecycle for digital F&B products.
   - Collaborated with stakeholders to define product strategy and gather requirements.
   - Designed low and high-fidelity screens based on user research.
   - Implemented Agile methodologies, including sprint reviews and manual QA testing.
   - Spearheaded Design Ops and educated cross-functional teams on Figma best practices.

3. Career Break — Apr 2021 – Dec 2021 (9 mos)
   Focused on rest while maintaining select freelance projects.

4. EY (Ernst & Young) — UI/UX Designer
   Oct 2018 – Apr 2021 (2 yrs 7 mos) | Singapore · Hybrid
   - Led UI/UX design for strategic accounts, facilitating digital transformation across various industries.
   - Assisted in user research, including stakeholder interviews and workshops.

5. Adelphi Digital (Acquired by EY) — UI/UX Designer
   Jan 2017 – Oct 2018 (1 yr 10 mos) | Singapore
   - Focused on User-Centered Design and Interaction Design prior to EY acquisition.

6. Comwerks Interactive — Digital Developer
   May 2013 – Aug 2013 (4 mos)
   - Front-end development for microsites, Flash applications, and EDMs.
   - Content for clients including Microsoft, 3M, Xbox, and Ponds.

PORTFOLIO PROJECTS:
1. POS Management Dashboard — Redesigned POS management for multi-location restaurants. Master categories for bulk updates, localised pricing, manual sync control.
2. POS Checkout App — Optimized checkout for quick-service restaurants. Decreased transaction time by 10%, user error rate by 20%.
3. ISCA Course Platform — Redesigned accountancy membership platform. Reduced bounce rate by 10%, app got 5,000+ downloads.
4. Biz360 — Guided entrepreneurs through business setup. Adopted by 547,000+ businesses.
5. Gateway & Catering — Corporate website redesign. Website visits increased 78% in 6 months.
6. Science Centre Singapore — Trip planning redesign. Won 2018 STEVIE Awards for Best UX.

EDUCATION:
- NTU Singapore: BFA, Art, Design & Media (Interactive Media), Second Class Upper Honours
- Nanyang Polytechnic: Diploma, Digital Media Design (Interaction Design), Merit, 4x Director's List

CERTIFICATIONS:
- Data-Driven Design: Quantitative Research for UX (IxDF, 2024)
- Mobile UX Design (IxDF, 2024)
- Mobile UI Design (IxDF, 2024)
- EY Digital Bronze (2020)

SKILLS:
- Design: Product Design, UI/UX, Mobile Interface Design, UCD, Wireframing, Interaction Design
- Process: Product Management, Product Lifecycle, Agile, User Research, Usability Testing, Design Ops
- Tools: Figma, Adobe Illustrator, jQuery, MySQL

IMPORTANT GUIDELINES:
- Always respond in FIRST PERSON as Wing Tong (I, my, me).
- Be honest. If asked about something not in my experience, say so clearly.
- Be warm and professional in tone, with a design-literate vocabulary.
- When expanding on achievements, provide plausible context but note when inferring.
- Keep answers focused and relevant.`;

// ====== GSAP ANIMATIONS ======
gsap.registerPlugin(ScrollTrigger);

// Hero entrance
gsap.set('.hero-child', { y: 30, opacity: 0 });

const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTl
  .to('.hero-child', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
  });

// Scroll-triggered reveal
gsap.utils.toArray('.gsap-reveal').forEach((el) => {
  gsap.fromTo(el,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// Stats bar counter animation
ScrollTrigger.create({
  trigger: '#statsBar',
  start: 'top 80%',
  onEnter: animateCounters,
  once: true,
});

// ====== CURSOR GLOW ON EXPERIENCE SECTIONS ======
document.querySelectorAll('.flavor-tcg, .flavor-a5tec, .flavor-ey, .flavor-adelphi, .flavor-comwerks').forEach(section => {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.style.cssText = 'position:absolute;width:300px;height:300px;border-radius:50%;pointer-events:none;opacity:0;transition:opacity 0.4s ease;z-index:0;';
  section.appendChild(glow);

  const colors = {
    'flavor-tcg': 'rgba(108, 92, 231, 0.08)',
    'flavor-a5tec': 'rgba(225, 112, 85, 0.08)',
    'flavor-ey': 'rgba(212, 160, 23, 0.06)',
    'flavor-adelphi': 'rgba(9, 132, 227, 0.08)',
    'flavor-comwerks': 'rgba(0, 184, 148, 0.08)',
  };

  for (const [cls, color] of Object.entries(colors)) {
    if (section.classList.contains(cls)) {
      glow.style.background = `radial-gradient(circle, ${color}, transparent 70%)`;
      break;
    }
  }

  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left - 150) + 'px';
    glow.style.top = (e.clientY - rect.top - 150) + 'px';
    glow.style.opacity = '1';
  });

  section.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });
});

// ====== NAVIGATION ======
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('border-stroke', window.scrollY > 50);
  nav.classList.toggle('border-transparent', window.scrollY <= 50);
});

function toggleMobileNav() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  const isOpen = !menu.classList.contains('hidden');

  if (isOpen) {
    menu.classList.add('hidden');
    btn.children[0].style.transform = '';
    btn.children[1].style.opacity = '';
    btn.children[2].style.transform = '';
  } else {
    menu.classList.remove('hidden');
    btn.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    btn.children[1].style.opacity = '0';
    btn.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  }
}

function closeMobileNav() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.add('hidden');
  const btn = document.getElementById('hamburger');
  if (btn) {
    btn.children[0].style.transform = '';
    btn.children[1].style.opacity = '';
    btn.children[2].style.transform = '';
  }
}

// ====== COUNTER ANIMATION ======
let countersAnimated = false;
function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;

  document.querySelectorAll('.stat-counter').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    gsap.to(counter, {
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: function() {
        counter.textContent = Math.round(this.progress() * target) + '+';
      },
    });
  });
}

// ====== PROJECT MODAL ======
function renderProjectHTML(p) {
  let html = '';

  // Banner image
  if (p.banner) {
    html += `<div class="rounded-2xl overflow-hidden mb-8 -mx-2 cursor-zoom-in" onclick="openLightbox('${p.banner}','${p.title.replace(/'/g, "\\'")}')"><img src="${p.banner}" alt="${p.title}" class="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]" loading="lazy"></div>`;
  }

  // Header
  html += `<div class="h-1 w-20 rounded-full mb-8" style="background:${p.color}"></div>`;
  html += `<p class="text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3" style="color:${p.color}">${p.label}</p>`;
  html += `<h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-3">${p.title}</h2>`;
  html += `<p class="text-sm text-[#999] mb-8">${p.subtitle}</p>`;

  html += '<div class="prose max-w-none">';

  // Sections
  for (const sec of p.sections) {
    html += `<h3 class="font-display text-xl font-semibold text-[#1A1A1A] mt-10 mb-3">${sec.heading}</h3>`;

    if (sec.text) {
      html += `<p class="text-[0.95rem] text-[#5A5A5A] leading-relaxed mb-6">${sec.text}</p>`;
    }

    if (sec.items) {
      for (const item of sec.items) {
        html += `<p class="text-[0.95rem] text-[#5A5A5A] leading-relaxed mb-4"><strong class="text-[#1A1A1A]">${item.bold}</strong> ${item.text}</p>`;
      }
    }

    if (sec.images && sec.images.length) {
      const cols = sec.images.length === 1 ? 1 : sec.images.length === 2 ? 2 : sec.images.length >= 4 ? 2 : 3;
      html += `<div class="modal-grid grid gap-4 mt-6 mb-6" style="grid-template-columns:repeat(${cols},1fr)">`;
      for (const img of sec.images) {
        html += `<div class="rounded-xl overflow-hidden border border-[#E5E4E1] bg-[#F2F1EE] aspect-[4/3] cursor-zoom-in" onclick="openLightbox('${img.src}','${img.alt.replace(/'/g, "\\'")}')"><img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy"></div>`;
      }
      html += '</div>';
    }
  }

  // Metrics
  if (p.metrics && p.metrics.length) {
    html += '<h3 class="font-display text-xl font-semibold text-[#1A1A1A] mt-10 mb-3">Outcomes</h3>';
    const metricCols = p.metrics.length <= 2 ? p.metrics.length : 3;
    html += `<div class="modal-grid grid gap-4 mt-6" style="grid-template-columns:repeat(${metricCols},1fr)">`;
    for (const m of p.metrics) {
      const fontSize = m.small ? 'text-2xl' : 'text-3xl';
      html += `<div class="rounded-xl p-5 text-center" style="background:${p.color}0A;border:1px solid ${p.color}20">`;
      html += `<div class="font-display ${fontSize} font-bold mb-1" style="color:${p.color}">${m.value}</div>`;
      html += `<div class="text-xs text-[#999]">${m.label}</div></div>`;
    }
    html += '</div>';
  }

  html += '</div>';
  return html;
}

function openProject(projectId) {
  const modal = document.getElementById('projectModal');
  const body = document.getElementById('projectModalBody');
  const project = PROJECTS[projectId];
  if (!project) return;

  body.innerHTML = renderProjectHTML(project);
  lucide.createIcons({ nodes: [body] });
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

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const lb = document.getElementById('lightbox');
    if (lb && !lb.classList.contains('pointer-events-none')) return; // lightbox handles its own Escape
    closeProject();
  }
});

// ====== GEMINI API ======
const chatHistory = [];

async function callGemini(prompt, isChat = true) {
  const contents = [];

  if (isChat) {
    if (chatHistory.length === 0) {
      contents.push({ role: 'user', parts: [{ text: WINGTONG_CONTEXT + '\n\nUser question: ' + prompt }] });
    } else {
      contents.push({ role: 'user', parts: [{ text: WINGTONG_CONTEXT }] });
      contents.push({ role: 'model', parts: [{ text: 'Understood. I will answer questions as Wing Tong Leong in first person, based on my professional profile.' }] });
      chatHistory.forEach(msg => {
        contents.push({ role: msg.role, parts: [{ text: msg.text }] });
      });
      contents.push({ role: 'user', parts: [{ text: prompt }] });
    }
  } else {
    contents.push({ role: 'user', parts: [{ text: WINGTONG_CONTEXT + '\n\n' + prompt }] });
  }

  const res = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      generationConfig: { temperature: 0.7, maxOutputTokens: 800 },
    }),
  });

  if (!res.ok) throw new Error('API error');
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
}

// ====== MARKDOWN RENDERER ======
function renderMarkdown(text) {
  const lines = text.split('\n');
  let html = '';
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (line.match(/^##\s+(.+)/)) {
      if (inList) { html += '</ul>'; inList = false; }
      const heading = line.replace(/^##\s+/, '');
      html += `<h3 class="text-base font-semibold mt-5 mb-2">${inlineMd(heading)}</h3>`;
      continue;
    }

    if (line.match(/^[-•*]\s+(.+)/)) {
      if (!inList) { html += '<ul class="list-disc pl-5 mt-1 space-y-1.5">'; inList = true; }
      const content = line.replace(/^[-•*]\s+/, '');
      html += `<li class="text-sm leading-relaxed">${inlineMd(content)}</li>`;
      continue;
    }

    if (line.trim() === '') {
      if (inList) { html += '</ul>'; inList = false; }
      continue;
    }

    if (inList) { html += '</ul>'; inList = false; }
    html += `<p class="mt-2 text-sm leading-relaxed">${inlineMd(line)}</p>`;
  }

  if (inList) html += '</ul>';
  return html;
}

function inlineMd(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

// ====== AI CONTEXT EXPANSION ======
async function expandContext(btn, context) {
  const contextDiv = btn.nextElementSibling;

  if (!contextDiv.classList.contains('hidden')) {
    contextDiv.classList.add('hidden');
    contextDiv.innerHTML = '';
    btn.textContent = 'Learn more';
    return;
  }

  contextDiv.classList.remove('hidden');
  contextDiv.innerHTML = '<div class="loading-dots inline-flex gap-1"><span class="w-1.5 h-1.5 rounded-full bg-accent animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-accent animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-accent animate-dot-bounce"></span></div>';
  btn.textContent = 'Collapse';

  try {
    const response = await callGemini(
      `Write a concise 2-3 sentence narrative expanding on this CV achievement. Write in FIRST PERSON as Wing Tong (use "I", "my"). Output ONLY the narrative — no preamble, no headers, no "here is" intro, no conversational filler. Just the expanded context directly.\n\nAchievement: ${context}`,
      false
    );
    contextDiv.innerHTML = renderMarkdown(response);
    gsap.fromTo(contextDiv, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  } catch (err) {
    contextDiv.innerHTML = 'Unable to load — please try again.';
  }
}

// ====== CHAT WIDGET ======
let chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  const panel = document.getElementById('chatPanel');
  const fab = document.getElementById('chatFab');

  if (chatOpen) {
    panel.classList.remove('opacity-0', 'translate-y-5', 'scale-95', 'pointer-events-none');
    panel.classList.add('opacity-100', 'translate-y-0', 'scale-100', 'pointer-events-auto');
    fab.classList.add('bg-bg-surface', 'text-accent', 'border', 'border-stroke');
    fab.classList.remove('bg-accent', 'text-white');
    setTimeout(() => document.getElementById('chatInput').focus(), 350);
  } else {
    panel.classList.add('opacity-0', 'translate-y-5', 'scale-95', 'pointer-events-none');
    panel.classList.remove('opacity-100', 'translate-y-0', 'scale-100', 'pointer-events-auto');
    fab.classList.remove('bg-bg-surface', 'text-accent', 'border', 'border-stroke');
    fab.classList.add('bg-accent', 'text-white');
  }
}

async function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  input.value = '';
  addChatMessage(msg, 'user');
  chatHistory.push({ role: 'user', text: msg });

  const typingId = addChatMessage('<div class="loading-dots inline-flex gap-1"><span class="w-1.5 h-1.5 rounded-full bg-accent animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-accent animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-accent animate-dot-bounce"></span></div>', 'bot', true);

  input.disabled = true;
  const chatSendBtn = document.getElementById('chatSend');
  if (chatSendBtn) chatSendBtn.disabled = true;

  try {
    const response = await callGemini(msg, true);
    chatHistory.push({ role: 'model', text: response });
    removeChatMessage(typingId);
    addChatMessage(response, 'bot');
  } catch (err) {
    removeChatMessage(typingId);
    addChatMessage('Sorry, I encountered an error. Please try again.', 'bot');
  }

  input.disabled = false;
  if (chatSendBtn) chatSendBtn.disabled = false;
  input.focus();
}

function addChatMessage(text, type, isHtml = false) {
  const messages = document.getElementById('chatMessages');
  const div = document.createElement('div');
  const id = 'msg-' + Date.now();
  div.id = id;

  if (type === 'bot') {
    div.className = 'max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed bg-bg-elevated text-text border border-stroke self-start';
    if (isHtml) {
      div.innerHTML = text;
    } else {
      div.innerHTML = renderMarkdown(text);
    }
  } else {
    div.className = 'max-w-[85%] px-4 py-3 rounded-2xl rounded-br-sm text-sm leading-relaxed bg-accent text-white self-end';
    div.textContent = text;
  }

  messages.appendChild(div);
  gsap.from(div, { y: 10, opacity: 0, duration: 0.3, ease: 'power2.out' });
  messages.scrollTop = messages.scrollHeight;
  return id;
}

function removeChatMessage(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

// ====== FIT ASSESSMENT ======
async function assessFit() {
  const fitTextarea = document.getElementById('fitTextarea');
  const jd = fitTextarea ? fitTextarea.value.trim() : '';
  if (!jd) return;

  const btn = document.getElementById('fitBtn');
  const result = document.getElementById('fitResult');

  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Analyzing...';
  }
  if (result) {
    result.classList.remove('hidden');
    result.innerHTML = '<div class="loading-dots inline-flex gap-1"><span class="w-1.5 h-1.5 rounded-full bg-white animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-white animate-dot-bounce"></span><span class="w-1.5 h-1.5 rounded-full bg-white animate-dot-bounce"></span></div>';
    gsap.from(result, { y: 10, opacity: 0, duration: 0.4 });
  }

  try {
    const response = await callGemini(
      `You are Wing Tong Leong writing in FIRST PERSON. A hiring manager has pasted the following job description. Provide an honest fit assessment written as Wing Tong himself (use "I", "my", "me").

Use this EXACT structure with bullet points for readability:

## Where I'm a Strong Fit
- (bullet point for each strength, referencing my specific product design experience)

## Where I'd Need to Grow
- (bullet point for each gap — be honest, this builds trust)

## My Overall Take
(a candid 1-2 sentence first-person summary)

Use markdown bullet points (- ) and bold (**text**) for key terms. Be specific, referencing actual experience. Be honest — if I'm not a great fit, say so respectfully.

Job Description:
${jd}`,
      false
    );
    if (result) {
      result.innerHTML = renderMarkdown(response);
      gsap.from(result, { opacity: 0, duration: 0.4 });
    }
  } catch (err) {
    if (result) result.textContent = 'Unable to assess fit. Please try again.';
  }

  if (btn) {
    btn.disabled = false;
    btn.textContent = 'Assess Fit';
  }
}

// ====== IMAGE LIGHTBOX ======
function openLightbox(src, alt) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');

  img.src = src;
  img.alt = alt || '';
  caption.textContent = alt || '';

  lb.classList.remove('opacity-0', 'pointer-events-none');
  img.classList.remove('scale-90');
  img.classList.add('scale-100');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');

  lb.classList.add('opacity-0', 'pointer-events-none');
  img.classList.remove('scale-100');
  img.classList.add('scale-90');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('pointer-events-none')) {
      closeLightbox();
      e.stopPropagation();
    }
  }
});
