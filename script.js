"use strict";

const SKILLS_DATA = [
  {
    category: "🖥️ Frontend Core",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain colored", level: 95 },
      { name: "CSS3", icon: "devicon-css3-plain colored", level: 90 },
      {
        name: "JavaScript",
        icon: "devicon-javascript-plain colored",
        level: 90,
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
        level: 78,
      },
    ],
  },
  {
    category: "⚛️ Frameworks & Libraries",
    skills: [
      { name: "React", icon: "devicon-react-original colored", level: 85 },
      { name: "Vue.js", icon: "devicon-vuejs-plain colored", level: 70 },
      { name: "Next.js", icon: "devicon-nextjs-plain", level: 72 },
      { name: "Nuxt.js", icon: "devicon-nuxtjs-plain colored", level: 65 },
      { name: "Redux", icon: "devicon-redux-original colored", level: 75 },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", level: 80 },
      { name: "Sass/SCSS", icon: "devicon-sass-original colored", level: 82 },
      { name: "Zustand", icon: "devicon-react-original", level: 70 },
      { name: "Element Plus", icon: "devicon-vuejs-plain", level: 68 },
      {
        name: "Tailwind",
        icon: "devicon-tailwindcss-plain colored",
        level: 85,
      },
    ],
  },
  {
    category: "🛠️ Tools, CMS & Platforms",
    skills: [
      { name: "Vite", icon: "devicon-vuejs-plain", level: 95 },
      { name: "Git", icon: "devicon-git-plain colored", level: 88 },
      { name: "GitHub", icon: "devicon-github-original", level: 88 },
      { name: "VS Code", icon: "devicon-vscode-plain colored", level: 95 },
      { name: "Cursor", icon: "devicon-vscode-plain", level: 85 },
      { name: "Claude", icon: "devicon-vuejs-plain", level: 80 },
      { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 65 },
      {
        name: "AI Engineering",
        icon: "devicon-python-plain colored",
        level: 70,
      },
      { name: "Firebase", icon: "devicon-firebase-plain", level: 70 },
      {
        name: "Responsive & Mobile-First Design",
        icon: "devicon-css3-plain colored",
        level: 92,
      },
      {
        name: "Debugging & Troubleshooting",
        icon: "devicon-chrome-plain colored",
        level: 90,
      },
      { name: "Performance", icon: "devicon-chrome-plain", level: 85 },
      {
        name: "Google Analytics (Basic Integration)",
        icon: "devicon-google-plain colored",
        level: 72,
      },
      {
        name: "User Behavior Tracking",
        icon: "devicon-google-plain",
        level: 70,
      },
      {
        name: "Chrome DevTools ",
        icon: "devicon-chrome-plain colored",
        level: 90,
      },
      { name: "REST APIs", icon: "devicon-fastapi-plain colored", level: 85 },
    ],
  },
];

const PROJECTS_DATA = [
  {
    title: "Mars IT CRM (Management Platform)",
    desc: "Mars IT CRM is the company’s core management and monitoring platform for students, employees, and project coordination.",
    images: [
      "images/MarsCore.png",
      "images/MarsCore (2).png",
      "images/MarsCore (3).png",
      "images/MarsCore (4).png",
      "images/MarsCore (5).png",
      "images/MarsCore (6).png",
      "images/MarsCore (7).png",
      "images/MarsCore (8).png",
    ],
    gradient: "linear-gradient(135deg, #7557fa 0%, #6284ff 100%)",
    stack: [
      "Vue 3",
      "Element Plus",
      "Chart.js",
      "Socket.io",
      "TailwindCSS",
      "xlsx",
      "v-calendar",
      "vue-draggable-plus",
      "i18n",
    ],
    category: "web",
    liveUrl: null,
    liveLocked: true,
    codeUrl: null,
  },
  {
    title: "Mars IT LMS (Site for Students)",
    desc: "Mars IT LMS is a learning management system designed for students and teachers. Enables continuous learning, online gradebook, homework submission, and monitoring. A fully modern and functional platform.",
    images: [
      "images/MarsLms.png",
      "images/MarsLms0.png",
      "images/MarsLms1.png",
      "images/MarsLms2.png",
      "images/MarsLms3.png",
      "images/MarsLms4.png",
      "images/MarsLms45.png",
    ],
    gradient: "linear-gradient(135deg, #38b6ff 0%, #1f4068 100%)",
    stack: [
      "Vue 3",
      "Element Plus",
      "FullCalendar",
      "Axios",
      "Sentry",
      "V-Calendar",
    ],
    category: "web",
    liveUrl: null,
    liveLocked: true,
    codeUrl: null,
  },
  {
    title: "Qazo Namoz",
    desc: "An app to help Muslims track and make up missed prayers (qazo). Simple, clean interface for managing daily prayer schedules.",
    image: "images/Qazonamozi.png",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Fontawesome",
      "Vue 3",
      "Pinia",
      "Tailwind",
      "Vite",
      "Firebase",
      "Firestore",
      "ElementPlus",
    ],
    category: "web",
    liveUrl: null,
    codeUrl: "https://github.com/Yuter777/Qazo-Namoz",
  },

  {
    title: "Which Flag Game",
    desc: "An interactive flag guessing game where players identify countries by their flags. A fun educational quiz built to test geography knowledge.",
    image: "images/Flag game.png",
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "web",
    liveUrl: "https://which-flag-game.vercel.app/",
    codeUrl: "https://github.com/Yuter777/Which-flag-game",
  },
  {
    title: "Toyana",
    desc: "A modern e-commerce website for a toy store. Features a clean product catalog, shopping experience, and responsive design.",
    image: "images/Toyana.png",
    gradient: "linear-gradient(135deg, #f953c6 0%, #b91d73 100%)",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TailwindCSS",
      "Vue 3",
      "Vite",
      "Pinia",
      "Chart.js",
    ],
    category: "web",
    liveUrl: "https://toyana.vercel.app/",
    codeUrl: "https://github.com/Yuter777/Toyana",
  },
  {
    title: "Husniddin Light",
    desc: "A professional landing page for a lighting and electrical services company. Showcases services, portfolio, and contact information.",
    image: "images/CarsLight.png",
    gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TailwindCSS",
      "Vue 3",
      "Vite",
      "GSAP",
      "Lenis",
      "Three.js",
    ],
    category: "web",
    liveUrl: "https://husniddin-light.vercel.app/",
    codeUrl: "https://github.com/Yuter777/HusniddinLight",
  },
  {
    title: "Alucabond Master",
    desc: "A corporate website for an alucabond and facade construction company. Clean design with service showcase and project portfolio.",
    image: "images/Alucabond.png",
    gradient: "linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TailwindCSS",
      "Vue 3",
      "Vite",
      "GSAP",
      "Lenis",
      "Three.js",
    ],
    category: "web",
    liveUrl: "https://alucabond-master.vercel.app/",
    codeUrl: "https://github.com/Yuter777/Alucabond-Master",
  },
  {
    title: "By Cakelend",
    desc: "A beautiful bakery and cake ordering website. Features an elegant product gallery, ordering system, and responsive layout.",
    image: "images/By_cakelend.png",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TailwindCSS",
      "Vue 3",
      "Vite",
      "GSAP",
      "Lenis",
      "Three.js",
    ],
    category: "web",
    liveUrl: "https://by-cakelend.vercel.app/",
    codeUrl: "https://github.com/Yuter777/by.cakelend",
  },
];

const EXPERIENCE_DATA = [
  {
    period: "Mar 2025 — Dec 2025",
    role: "Developer",
    company: "Mars IT · Tashkent, Uzbekistan",
    description:
      "Full-time development at Mars IT: building and maintaining software with a focus on delivery, code quality, and collaboration. Daily workflows include Cursor, Claude Code, and practical iteration — shipping features end-to-end.",
    tags: ["Mars IT", "Cursor", "Claude Code", "Teamwork"],
  },
  {
    period: "Mar 2024 — Feb 2025",
    role: "Freelance Developer",
    company: "Freelance · Remote",
    description:
      "One year of freelance work before Mars IT: taking projects from requirements to deployment, communicating with clients, and prioritising maintainable solutions over unnecessary complexity.",
    tags: ["Freelance", "Remote", "JavaScript", "Web"],
  },
];

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

async function loadSectionIncludes() {
  const targets = $$("[data-include]");
  if (!targets.length) return;

  await Promise.all(
    targets.map(async (target) => {
      const path = target.getAttribute("data-include");
      if (!path) return;
      try {
        const res = await fetch(path);
        if (!res.ok) throw new Error(`Failed to load ${path}`);
        target.outerHTML = await res.text();
      } catch (err) {
        try {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", path, false);
          xhr.send(null);
          if (xhr.status === 200 || xhr.status === 0) {
            target.outerHTML = xhr.responseText;
            return;
          }
          throw new Error(`XHR include failed: ${path}`);
        } catch {
          target.innerHTML = `<div class="container py-8 text-red-300">Could not load section: ${path}</div>`;
          console.error(err);
        }
      }
    }),
  );
}

function initTheme() {
  const html = document.documentElement;
  const toggleBtn = $("#themeToggle");
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  html.dataset.theme = stored || (prefersDark ? "dark" : "light");

  toggleBtn.addEventListener("click", () => {
    const next = html.dataset.theme === "dark" ? "light" : "dark";
    html.dataset.theme = next;
    localStorage.setItem("theme", next);
    initParticles();
  });
}

function initNavbar() {
  const navbar = $(".navbar");
  const hamburger = $("#hamburger");
  const mobileMenu = $("#mobileMenu");
  const navLinks = $$(".nav-link");
  const sections = $$("section[id]");

  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
      highlightActiveSection();
    },
    { passive: true },
  );

  function highlightActiveSection() {
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 150) {
        current = sec.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.section === current);
    });
  }
  highlightActiveSection();

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
    mobileMenu.hidden = !isOpen;
  });

  $$(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    });
  });
}

function initTypedText() {
  const el = $("#typedText");
  if (!el) return;
  const phrases = [
    "Frontend Developer",
    "Performance Nerd",
    "Cursor Power User",
    "Ships Real Products",
    "Creative Coder",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function type() {
    const phrase = phrases[phraseIndex];
    const speed = isDeleting ? 45 : 90;

    el.textContent = phrase.substring(0, charIndex);

    if (!isDeleting && charIndex === phrase.length) {
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
        isDeleting = true;
      }, 1800);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    if (!isPaused) {
      charIndex += isDeleting ? -1 : 1;
    }

    setTimeout(type, isPaused ? 1800 : speed);
  }
  type();
}

function initScrollTop() {
  const btn = $("#scrollTopBtn");

  window.addEventListener(
    "scroll",
    () => {
      btn.hidden = !(window.scrollY > 400);
    },
    { passive: true },
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          const bar = entry.target.querySelector(".skill-bar");
          if (bar) {
            bar.style.width = bar.dataset.level + "%";
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
  );

  $$(".fade-up").forEach((el) => observer.observe(el));
  window._revealObserver = observer;
}

function renderSkills() {
  const container = $("#skillsContainer");
  if (!container) return;

  let html = "";

  SKILLS_DATA.forEach((category) => {
    html += `
      <div class="skill-category fade-up">
        <h3 class="mb-5 flex items-center gap-3 font-['Syne'] text-base font-bold uppercase tracking-[0.12em] text-[var(--text-secondary)] after:h-px after:flex-1 after:bg-[var(--glass-border)]">${category.category}</h3>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4">
          ${category.skills
            .map(
              (skill) => `
            <div class="skill-card glass flex cursor-default flex-col items-center gap-3 rounded-[18px] px-4 py-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_var(--accent-glow)]" role="listitem" aria-label="${skill.name} — ${skill.level}% proficiency">
              <i class="${skill.icon} skill-icon text-[2.4rem] transition duration-200" aria-hidden="true"></i>
              <span class="text-center text-xs font-semibold text-[var(--text-secondary)]">${skill.name}</span>
              <div class="h-1 w-full overflow-hidden rounded-full bg-[var(--glass-bg)]" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${skill.name} level">
                <div class="skill-bar h-full w-0 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] shadow-[0_0_8px_var(--accent-glow)] transition-[width] duration-[1200ms]" data-level="${skill.level}" style="width:0%"></div>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  $$(".skill-category").forEach((el) => window._revealObserver.observe(el));
  $$(".skill-card").forEach((el) => window._revealObserver.observe(el));
}

function initImageModal() {
  const modal = document.createElement("div");
  modal.id = "imgModal";
  modal.className =
    "fixed inset-0 z-[9999] hidden items-center justify-center bg-black/80 backdrop-blur-sm p-4";
  modal.innerHTML = `
    <button id="imgModalClose" class="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white text-xl transition hover:bg-white/25" aria-label="Close">✕</button>
    <img id="imgModalImg" src="" alt="" class="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl select-none">
    <p id="imgModalCaption" class="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-sm text-white backdrop-blur"></p>
  `;
  document.body.appendChild(modal);

  const close = () => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  };

  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  modal.querySelector("#imgModalClose").addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function openImageModal(src, caption = "") {
  const modal = document.getElementById("imgModal");
  if (!modal) return;
  modal.querySelector("#imgModalImg").src = src;
  modal.querySelector("#imgModalCaption").textContent = caption;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function renderProjects() {
  const grid = $("#projectsGrid");
  const filterBtns = $$(".filter-btn");
  if (!grid) return;

  function renderCards(filter = "all") {
    grid.innerHTML = "";

    PROJECTS_DATA.forEach((project, i) => {
      const isHidden = filter !== "all" && project.category !== filter;

      const btnBase =
        "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition";
      const btnActive = `border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:shadow-[0_0_12px_var(--accent-glow)]`;
      const btnLocked =
        "border-white/20 bg-white/5 text-white/40 cursor-not-allowed";

      const liveBtn = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="${btnBase} ${btnActive}" aria-label="Live demo of ${project.title}">🔗 Live Server</a>`
        : project.liveLocked
          ? `<span class="${btnBase} ${btnLocked}" title="Private — access restricted">🔒 Live Server</span>`
          : "";
      const codeBtn = project.codeUrl
        ? `<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="${btnBase} ${btnActive}" aria-label="Source code of ${project.title}">⚡ Code</a>`
        : "";

      const imgs = project.images || (project.image ? [project.image] : []);
      const hasCarousel = imgs.length > 1;

      const carouselId = `carousel-${i}`;
      const thumbnail = imgs.length
        ? `<img id="${carouselId}" src="${imgs[0]}" alt="${project.title}" class="h-full w-full object-cover" loading="lazy" data-imgs='${JSON.stringify(imgs)}' data-idx="0">`
        : `<div class="flex h-full w-full items-center justify-center text-5xl" aria-hidden="true">${project.emoji || ""}</div>`;

      const navBtns = hasCarousel
        ? `<button class="carousel-prev absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70" data-target="${carouselId}" aria-label="Previous image">‹</button>
           <button class="carousel-next absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70" data-target="${carouselId}" aria-label="Next image">›</button>
           <span class="carousel-counter absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-2 py-0.5 text-[0.65rem] text-white backdrop-blur" data-counter="${carouselId}">1 / ${imgs.length}</span>`
        : "";

      const card = document.createElement("article");
      card.className = `project-card glass overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_var(--glass-shadow),0_0_30px_var(--accent-glow)]${isHidden ? " hidden" : ""}`;
      card.style.transitionDelay = `${i * 0.08}s`;
      card.setAttribute("aria-label", project.title);

      card.innerHTML = `
        <div class="relative h-[200px] overflow-hidden" style="background: ${project.gradient}">
          ${thumbnail}
          ${navBtns}
          <span class="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-white backdrop-blur">${project.category}</span>
        </div>
        <div class="p-6">
          <h3 class="mb-2 font-['Syne'] text-lg font-bold">${project.title}</h3>
          <p class="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">${project.desc}</p>
          <div class="mb-5 flex flex-wrap gap-2" aria-label="Technologies used">
            ${project.stack.map((t) => `<span class="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-2.5 py-1 text-[0.72rem] font-semibold text-[var(--text-secondary)]">${t}</span>`).join("")}
          </div>
          <div class="flex flex-wrap gap-3">${liveBtn}${codeBtn}</div>
        </div>
      `;

      grid.appendChild(card);

      const imgWrapper = card.querySelector(".relative");
      if (imgWrapper) {
        imgWrapper.style.cursor = "zoom-in";
        imgWrapper.addEventListener("click", (e) => {
          if (
            e.target.closest(".carousel-prev") ||
            e.target.closest(".carousel-next")
          )
            return;
          const currentImg = card.querySelector(`#${carouselId}`);
          const src = currentImg ? currentImg.src : imgs[0] || "";
          if (src) openImageModal(src, project.title);
        });
      }

      if (hasCarousel) {
        card.querySelector(".carousel-prev").addEventListener("click", (e) => {
          e.stopPropagation();
          const img = card.querySelector(`#${carouselId}`);
          const allImgs = JSON.parse(img.dataset.imgs);
          const idx =
            (parseInt(img.dataset.idx) - 1 + allImgs.length) % allImgs.length;
          img.src = allImgs[idx];
          img.dataset.idx = idx;
          card.querySelector(`[data-counter="${carouselId}"]`).textContent =
            `${idx + 1} / ${allImgs.length}`;
        });
        card.querySelector(".carousel-next").addEventListener("click", (e) => {
          e.stopPropagation();
          const img = card.querySelector(`#${carouselId}`);
          const allImgs = JSON.parse(img.dataset.imgs);
          const idx = (parseInt(img.dataset.idx) + 1) % allImgs.length;
          img.src = allImgs[idx];
          img.dataset.idx = idx;
          card.querySelector(`[data-counter="${carouselId}"]`).textContent =
            `${idx + 1} / ${allImgs.length}`;
        });
      }

      requestAnimationFrame(() => window._revealObserver.observe(card));
    });
  }

  renderCards();

  const activeFilterClasses = [
    "bg-gradient-to-br",
    "from-[var(--accent-primary)]",
    "to-[var(--accent-secondary)]",
    "text-white",
    "shadow-[0_4px_18px_var(--accent-glow)]",
    "border-transparent",
  ];
  const inactiveFilterClasses = [
    "bg-[var(--glass-bg)]",
    "text-[var(--text-secondary)]",
    "border-[var(--glass-border)]",
  ];

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active", ...activeFilterClasses);
        b.classList.add(...inactiveFilterClasses);
      });
      btn.classList.add("active", ...activeFilterClasses);
      btn.classList.remove(...inactiveFilterClasses);
      renderCards(btn.dataset.filter);
    });
  });
}

function renderExperience() {
  const timeline = $("#timeline");
  if (!timeline) return;

  timeline.innerHTML = EXPERIENCE_DATA.map(
    (exp, i) => `
    <div class="relative pb-10 pl-14 last:pb-0" style="transition-delay:${i * 0.12}s">
      <div class="absolute left-[10px] top-[6px] h-[22px] w-[22px] rounded-full border-[3px] border-[var(--bg-base)] bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] shadow-[0_0_15px_var(--accent-glow)]" aria-hidden="true"></div>
      <div class="glass rounded-[18px] px-7 py-6 transition duration-200 hover:translate-x-1.5">
        <p class="mb-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent-primary)]">${exp.period}</p>
        <h3 class="mb-1 font-['Syne'] text-[1.1rem] font-bold">${exp.role}</h3>
        <p class="mb-3 text-sm text-[var(--text-secondary)]">${exp.company}</p>
        <p class="mb-3 text-sm leading-7 text-[var(--text-secondary)]">${exp.description}</p>
        <div class="flex flex-wrap gap-2" aria-label="Skills used">
          ${exp.tags.map((tag) => `<span class="rounded-full border border-[rgba(124,107,255,0.3)] bg-[var(--accent-glow)] px-2.5 py-1 text-[0.7rem] font-semibold text-[var(--accent-primary)]">${tag}</span>`).join("")}
        </div>
      </div>
    </div>
  `,
  ).join("");

  $$("#timeline > div").forEach((el) => window._revealObserver.observe(el));
}

function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;

  const submitBtn = $("#submitBtn");
  const successMsg = $("#formSuccess");

  const validators = {
    name: (v) =>
      v.trim().length >= 2 ? "" : "Please enter your full name (min 2 chars).",
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
        ? ""
        : "Please enter a valid email address.",
    subject: (v) =>
      v.trim().length >= 3 ? "" : "Subject must be at least 3 characters.",
    message: (v) =>
      v.trim().length >= 15 ? "" : "Message must be at least 15 characters.",
  };

  function validateField(fieldId) {
    const input = $(`#${fieldId}Input`);
    const error = $(`#${fieldId}Error`);
    const msg = validators[fieldId](input.value);
    input.classList.toggle("error", !!msg);
    input.classList.toggle("border-[#ff4e6a]", !!msg);
    input.classList.toggle("shadow-[0_0_0_3px_rgba(255,78,106,0.2)]", !!msg);
    error.textContent = msg;
    return !msg;
  }

  ["name", "email", "subject", "message"].forEach((fieldId) => {
    $(`#${fieldId}Input`).addEventListener("blur", () =>
      validateField(fieldId),
    );
    $(`#${fieldId}Input`).addEventListener("input", () => {
      if ($(`#${fieldId}Input`).classList.contains("error"))
        validateField(fieldId);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fields = ["name", "email", "subject", "message"];
    const allValid = fields.every((f) => validateField(f));
    if (!allValid) return;

    submitBtn.disabled = true;
    $("[data-text]", submitBtn);
    $(".btn-text", submitBtn).hidden = true;
    $(".btn-loading", submitBtn).hidden = false;

    await new Promise((resolve) => setTimeout(resolve, 1600));

    form.reset();
    fields.forEach((f) => {
      $(`#${f}Input`).classList.remove(
        "error",
        "border-[#ff4e6a]",
        "shadow-[0_0_0_3px_rgba(255,78,106,0.2)]",
      );
    });
    submitBtn.disabled = false;
    $(".btn-text", submitBtn).hidden = false;
    $(".btn-loading", submitBtn).hidden = true;
    successMsg.hidden = false;

    setTimeout(() => {
      successMsg.hidden = true;
    }, 5000);
  });
}

function initParticles() {
  const canvas = $("#particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const isDark = document.documentElement.dataset.theme === "dark";

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });

  const PARTICLE_COUNT = Math.min(60, Math.floor(window.innerWidth / 20));
  const particles = [];

  const colours = isDark
    ? ["rgba(124,107,255,0.6)", "rgba(0,229,255,0.5)", "rgba(255,100,200,0.4)"]
    : [
        "rgba(124,107,255,0.25)",
        "rgba(0,229,255,0.2)",
        "rgba(255,100,200,0.15)",
      ];

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(init = false) {
      this.x = Math.random() * canvas.width;
      this.y = init ? Math.random() * canvas.height : canvas.height + 10;
      this.r = Math.random() * 2 + 0.5;
      this.vy = -(Math.random() * 0.4 + 0.15);
      this.vx = (Math.random() - 0.5) * 0.2;
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
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  particles.length = 0;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  if (window._particleRAF) cancelAnimationFrame(window._particleRAF);

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 110) * 0.15;
          ctx.strokeStyle = isDark ? "#7c6bff" : "#a899ff";
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    window._particleRAF = requestAnimationFrame(loop);
  }
  loop();
}

function initSmoothScroll() {
  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initHeroReveal() {
  $$("#hero .fade-up").forEach((el) => {
    setTimeout(() => el.classList.add("visible"), 100);
  });
}

function initVisibilityPause() {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(window._particleRAF);
    } else {
      initParticles();
    }
  });
}

async function bootstrap() {
  await loadSectionIncludes();
  initTheme();
  initNavbar();
  initTypedText();
  initScrollTop();
  initScrollReveal();
  initImageModal();
  renderSkills();
  renderProjects();
  renderExperience();
  initContactForm();
  initParticles();
  initVisibilityPause();
  initSmoothScroll();
  initHeroReveal();
}

bootstrap();
