/* ============================================================
   PORTFOLIO SCRIPT — Vanilla JavaScript
   Author : Alex Rivera
   ============================================================ */

'use strict';

/* =====================================================================
   ██████╗  █████╗ ████████╗ █████╗
   ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗
   ██║  ██║███████║   ██║   ███████║
   ██║  ██║██╔══██║   ██║   ██╔══██║
   ██████╔╝██║  ██║   ██║   ██║  ██║
   ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
   =====================================================================
   Edit the objects below to customise Skills, Projects, and Experience.
   No other changes needed!
   ===================================================================== */

/**
 * SKILLS DATA
 * Each category has a title and an array of skills.
 * level: 0–100 (shown as a progress bar)
 * icon: devicon class name (https://devicon.dev/)
 */
const SKILLS_DATA = [
  {
    category: '🖥️ Frontend Core',
    skills: [
      { name: 'HTML5',       icon: 'devicon-html5-plain colored',        level: 95 },
      { name: 'CSS3',        icon: 'devicon-css3-plain colored',         level: 92 },
      { name: 'JavaScript',  icon: 'devicon-javascript-plain colored',   level: 90 },
      { name: 'TypeScript',  icon: 'devicon-typescript-plain colored',   level: 82 },
    ],
  },
  {
    category: '⚛️ Frameworks & Libraries',
    skills: [
      { name: 'React',       icon: 'devicon-react-original colored',     level: 88 },
      { name: 'Vue.js',      icon: 'devicon-vuejs-plain colored',        level: 75 },
      { name: 'Next.js',     icon: 'devicon-nextjs-original',            level: 78 },
      { name: 'Tailwind',    icon: 'devicon-tailwindcss-plain colored',  level: 90 },
      { name: 'GSAP',        icon: 'devicon-javascript-plain',           level: 70 },
    ],
  },
  {
    category: '🛠️ Tools & DevOps',
    skills: [
      { name: 'Git',         icon: 'devicon-git-plain colored',          level: 88 },
      { name: 'Figma',       icon: 'devicon-figma-plain colored',        level: 80 },
      { name: 'Node.js',     icon: 'devicon-nodejs-plain colored',       level: 72 },
      { name: 'Docker',      icon: 'devicon-docker-plain colored',       level: 60 },
      { name: 'VS Code',     icon: 'devicon-vscode-plain colored',       level: 95 },
    ],
  },
];

/**
 * PROJECTS DATA
 * category: 'web' | 'ui' | 'tool'  — used by the filter buttons
 * gradient: CSS gradient for the placeholder thumbnail (if no image)
 * liveUrl / codeUrl: links for buttons (set null to hide)
 */
const PROJECTS_DATA = [
  {
    title: 'Lumina Design System',
    desc: 'A comprehensive component library with 60+ accessible UI components, dark mode support, and full documentation site.',
    emoji: '🌟',
    gradient: 'linear-gradient(135deg, #7c6bff 0%, #00e5ff 100%)',
    stack: ['React', 'TypeScript', 'Storybook', 'CSS-in-JS'],
    category: 'ui',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    title: 'Pulse Analytics Dashboard',
    desc: 'Real-time analytics platform with interactive charts, customisable widgets, and live WebSocket data streams.',
    emoji: '📊',
    gradient: 'linear-gradient(135deg, #ff6ec7 0%, #7c6bff 100%)',
    stack: ['Vue.js', 'D3.js', 'WebSocket', 'Vite'],
    category: 'web',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    title: 'Momentum Task Manager',
    desc: 'Productivity app featuring Kanban boards, drag-and-drop task management, and AI-powered priority suggestions.',
    emoji: '✅',
    gradient: 'linear-gradient(135deg, #00e5ff 0%, #00ff88 100%)',
    stack: ['React', 'TypeScript', 'Zustand', 'Framer Motion'],
    category: 'web',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    title: 'CSS Gradient Forge',
    desc: 'Visual tool for generating complex CSS gradients with live preview, export functionality, and animation support.',
    emoji: '🎨',
    gradient: 'linear-gradient(135deg, #ff9a00 0%, #ff6ec7 100%)',
    stack: ['Vanilla JS', 'CSS3', 'Canvas API'],
    category: 'tool',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
  {
    title: 'NovaBlog CMS',
    desc: 'Headless CMS with a beautiful editorial interface, markdown editor, real-time collaboration, and SEO tooling.',
    emoji: '📝',
    gradient: 'linear-gradient(135deg, #7c6bff 0%, #ff6ec7 50%, #ff9a00 100%)',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    category: 'web',
    liveUrl: 'https://example.com',
    codeUrl: null,
  },
  {
    title: 'Portfolio Generator',
    desc: 'No-code builder that lets developers create stunning portfolio sites in minutes with customisable templates.',
    emoji: '🚀',
    gradient: 'linear-gradient(135deg, #00ff88 0%, #00e5ff 100%)',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'tool',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com',
  },
];

/**
 * EXPERIENCE DATA (most recent first)
 */
const EXPERIENCE_DATA = [
  {
    period: 'Jan 2023 — Present',
    role: 'Senior Frontend Developer',
    company: 'Vercel Inc. · San Francisco, CA',
    description: 'Lead frontend architecture for enterprise dashboard products serving 50k+ users. Spearheaded the migration to Next.js 14 with App Router, achieving a 40% improvement in Core Web Vitals scores. Mentored a team of 4 junior developers.',
    tags: ['Next.js', 'TypeScript', 'Vercel Edge', 'Design Systems'],
  },
  {
    period: 'Mar 2021 — Dec 2022',
    role: 'Frontend Developer',
    company: 'Stripe Inc. · Remote',
    description: 'Built and maintained the Stripe Dashboard UI components used by millions of businesses worldwide. Contributed to the Stripe Elements library, improving developer experience and accessibility compliance across 20+ components.',
    tags: ['React', 'TypeScript', 'WCAG 2.1', 'Storybook'],
  },
  {
    period: 'Jun 2019 — Feb 2021',
    role: 'UI Developer',
    company: 'Figma Inc. · San Francisco, CA',
    description: 'Developed interactive prototyping features and contributed to Figma\'s web renderer. Worked closely with the design team to implement pixel-perfect UI at scale. Improved canvas rendering performance by 25% through WebGL optimisations.',
    tags: ['WebGL', 'Canvas API', 'React', 'Rust WASM'],
  },
  {
    period: 'Aug 2018 — May 2019',
    role: 'Junior Web Developer',
    company: 'Freelance · San Francisco, CA',
    description: 'Designed and developed websites for 15+ clients across various industries. Specialised in responsive design, performance optimisation, and SEO. Built reusable component libraries that reduced project delivery time by 30%.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
  },
];

/* =====================================================================
   END OF EDITABLE DATA — Core logic below
   ===================================================================== */


/* ----- Utility: query selectors ----- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];


/* =====================================================================
   1. THEME TOGGLE (Dark ↔ Light)
   ===================================================================== */
(function initTheme() {
  const html        = document.documentElement;
  const toggleBtn   = $('#themeToggle');
  const stored      = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply saved or system theme
  html.dataset.theme = stored || (prefersDark ? 'dark' : 'light');

  toggleBtn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('theme', next);
    // Update particles colour
    initParticles();
  });
})();


/* =====================================================================
   2. NAVBAR — scroll effect + active section highlight + mobile menu
   ===================================================================== */
(function initNavbar() {
  const navbar     = $('.navbar');
  const hamburger  = $('#hamburger');
  const mobileMenu = $('#mobileMenu');
  const navLinks   = $$('.nav-link');
  const sections   = $$('section[id]');

  // Scroll-based navbar styling
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    highlightActiveSection();
  }, { passive: true });

  // Active section highlight via IntersectionObserver
  function highlightActiveSection() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 150) {
        current = sec.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }
  highlightActiveSection();

  // Mobile hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.hidden = !isOpen;
  });

  // Close mobile menu when a link is clicked
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
    });
  });
})();


/* =====================================================================
   3. TYPED TEXT ANIMATION
   ===================================================================== */
(function initTypedText() {
  const el      = $('#typedText');
  const phrases = [
    'Frontend Developer',
    'UI/UX Enthusiast',
    'Performance Nerd',
    'Open-Source Lover',
    'Creative Coder',
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let isPaused    = false;

  function type() {
    const phrase   = phrases[phraseIndex];
    const speed    = isDeleting ? 45 : 90;

    el.textContent = phrase.substring(0, charIndex);

    if (!isDeleting && charIndex === phrase.length) {
      // Pause at end of phrase
      isPaused = true;
      setTimeout(() => { isPaused = false; isDeleting = true; }, 1800);
    } else if (isDeleting && charIndex === 0) {
      isDeleting   = false;
      phraseIndex  = (phraseIndex + 1) % phrases.length;
    }

    if (!isPaused) {
      charIndex += isDeleting ? -1 : 1;
    }

    setTimeout(type, isPaused ? 1800 : speed);
  }
  type();
})();


/* =====================================================================
   4. SCROLL-TO-TOP BUTTON
   ===================================================================== */
(function initScrollTop() {
  const btn = $('#scrollTopBtn');

  window.addEventListener('scroll', () => {
    btn.hidden = !(window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* =====================================================================
   5. SCROLL REVEAL (Intersection Observer)
   ===================================================================== */
(function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Trigger skill bars if inside a skill card
          const bar = entry.target.querySelector('.skill-bar');
          if (bar) {
            bar.style.width = bar.dataset.level + '%';
          }

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
  );

  // Observe fade-up elements
  $$('.fade-up').forEach(el => observer.observe(el));

  // Will also observe dynamically rendered cards/items (called after render)
  window._revealObserver = observer;
})();


/* =====================================================================
   6. SKILLS RENDERER
   ===================================================================== */
(function renderSkills() {
  const container = $('#skillsContainer');
  if (!container) return;

  let html = '';

  SKILLS_DATA.forEach(category => {
    html += `
      <div class="skill-category fade-up">
        <h3 class="skill-category-title">${category.category}</h3>
        <div class="skills-grid">
          ${category.skills.map(skill => `
            <div class="skill-card glass" role="listitem" aria-label="${skill.name} — ${skill.level}% proficiency">
              <i class="${skill.icon} skill-icon" aria-hidden="true"></i>
              <span class="skill-name">${skill.name}</span>
              <div class="skill-bar-wrap" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${skill.name} level">
                <div class="skill-bar" data-level="${skill.level}" style="width:0%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Observe newly added elements
  $$('.skill-category').forEach(el => window._revealObserver.observe(el));
  $$('.skill-card').forEach(el => window._revealObserver.observe(el));
})();


/* =====================================================================
   7. PROJECTS RENDERER + FILTER
   ===================================================================== */
(function renderProjects() {
  const grid       = $('#projectsGrid');
  const filterBtns = $$('.filter-btn');
  if (!grid) return;

  // Render all project cards
  function renderCards(filter = 'all') {
    grid.innerHTML = '';

    PROJECTS_DATA.forEach((project, i) => {
      const isHidden = filter !== 'all' && project.category !== filter;

      const liveBtn = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Live demo of ${project.title}">🔗 Live</a>`
        : '';
      const codeBtn = project.codeUrl
        ? `<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Source code of ${project.title}">⚡ Code</a>`
        : '';

      const card = document.createElement('article');
      card.className = `project-card glass${isHidden ? ' hidden' : ''}`;
      card.style.transitionDelay = `${i * 0.08}s`;
      card.setAttribute('aria-label', project.title);

      card.innerHTML = `
        <div class="project-thumb" style="background: ${project.gradient}">
          <div class="project-thumb-placeholder" aria-hidden="true">${project.emoji}</div>
          <span class="project-badge">${project.category}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.desc}</p>
          <div class="project-stack" aria-label="Technologies used">
            ${project.stack.map(t => `<span class="stack-tag">${t}</span>`).join('')}
          </div>
          <div class="project-links">${liveBtn}${codeBtn}</div>
        </div>
      `;

      grid.appendChild(card);

      // Observe for scroll reveal
      requestAnimationFrame(() => window._revealObserver.observe(card));
    });
  }

  renderCards();

  // Filter logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(btn.dataset.filter);
    });
  });
})();


/* =====================================================================
   8. EXPERIENCE RENDERER
   ===================================================================== */
(function renderExperience() {
  const timeline = $('#timeline');
  if (!timeline) return;

  timeline.innerHTML = EXPERIENCE_DATA.map((exp, i) => `
    <div class="timeline-item" style="transition-delay:${i * 0.12}s">
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-card glass">
        <p class="timeline-period">${exp.period}</p>
        <h3 class="timeline-role">${exp.role}</h3>
        <p class="timeline-company">${exp.company}</p>
        <p class="timeline-desc">${exp.description}</p>
        <div class="timeline-tags" aria-label="Skills used">
          ${exp.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  $$('.timeline-item').forEach(el => window._revealObserver.observe(el));
})();


/* =====================================================================
   9. CONTACT FORM — Validation + Simulated Submit
   ===================================================================== */
(function initContactForm() {
  const form       = $('#contactForm');
  if (!form) return;

  const submitBtn  = $('#submitBtn');
  const successMsg = $('#formSuccess');

  // Simple validators
  const validators = {
    name:    v => v.trim().length >= 2   ? '' : 'Please enter your full name (min 2 chars).',
    email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.',
    subject: v => v.trim().length >= 3   ? '' : 'Subject must be at least 3 characters.',
    message: v => v.trim().length >= 15  ? '' : 'Message must be at least 15 characters.',
  };

  function validateField(fieldId) {
    const input = $(`#${fieldId}Input`);
    const error = $(`#${fieldId}Error`);
    const msg   = validators[fieldId](input.value);
    input.classList.toggle('error', !!msg);
    error.textContent = msg;
    return !msg;
  }

  // Live validation on blur
  ['name', 'email', 'subject', 'message'].forEach(fieldId => {
    $(`#${fieldId}Input`).addEventListener('blur', () => validateField(fieldId));
    $(`#${fieldId}Input`).addEventListener('input', () => {
      if ($(`#${fieldId}Input`).classList.contains('error')) validateField(fieldId);
    });
  });

  // Submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fields  = ['name', 'email', 'subject', 'message'];
    const allValid = fields.every(f => validateField(f));
    if (!allValid) return;

    // Show loading state
    submitBtn.disabled = true;
    $('[data-text]', submitBtn);
    $('.btn-text', submitBtn).hidden = true;
    $('.btn-loading', submitBtn).hidden = false;

    // Simulate API call (replace with your real endpoint)
    await new Promise(resolve => setTimeout(resolve, 1600));

    // Show success
    form.reset();
    fields.forEach(f => $(`#${f}Input`).classList.remove('error'));
    submitBtn.disabled = false;
    $('.btn-text', submitBtn).hidden = false;
    $('.btn-loading', submitBtn).hidden = true;
    successMsg.hidden = false;

    setTimeout(() => { successMsg.hidden = true; }, 5000);
  });
})();


/* =====================================================================
   10. PARTICLE CANVAS BACKGROUND
   ===================================================================== */
function initParticles() {
  const canvas = $('#particles-canvas');
  if (!canvas) return;

  const ctx   = canvas.getContext('2d');
  const isDark = document.documentElement.dataset.theme === 'dark';

  // Set canvas size
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Particle config
  const PARTICLE_COUNT = Math.min(60, Math.floor(window.innerWidth / 20));
  const particles = [];

  const colours = isDark
    ? ['rgba(124,107,255,0.6)', 'rgba(0,229,255,0.5)', 'rgba(255,100,200,0.4)']
    : ['rgba(124,107,255,0.25)', 'rgba(0,229,255,0.2)', 'rgba(255,100,200,0.15)'];

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x    = Math.random() * canvas.width;
      this.y    = init ? Math.random() * canvas.height : canvas.height + 10;
      this.r    = Math.random() * 2 + 0.5;
      this.vy   = -(Math.random() * 0.4 + 0.15);
      this.vx   = (Math.random() - 0.5) * 0.2;
      this.alpha = Math.random() * 0.6 + 0.2;
      this.color = colours[Math.floor(Math.random() * colours.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle   = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Initialise particles
  particles.length = 0;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  // Animation loop (cancel old loop if re-initialised)
  if (window._particleRAF) cancelAnimationFrame(window._particleRAF);

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 110) * 0.15;
          ctx.strokeStyle = isDark ? '#7c6bff' : '#a899ff';
          ctx.lineWidth   = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    particles.forEach(p => { p.update(); p.draw(); });
    window._particleRAF = requestAnimationFrame(loop);
  }
  loop();
}

// Init particles on load and pause when tab hidden (perf)
initParticles();
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(window._particleRAF);
  } else {
    initParticles();
  }
});


/* =====================================================================
   11. SMOOTH SCROLL for anchor links (polyfill for older Safari)
   ===================================================================== */
$$('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


/* =====================================================================
   12. HERO SECTION — initial animation trigger
   ===================================================================== */
window.addEventListener('load', () => {
  $$('#hero .fade-up').forEach(el => {
    // slight delay then reveal
    setTimeout(() => el.classList.add('visible'), 100);
  });
});
