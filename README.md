# Portfolio · Frontend Developer

A single-page, **vanilla** personal portfolio: responsive layout, dark/light theme, animated background, and accessible navigation. Built without frameworks so it stays fast and easy to host anywhere.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Features

- **Sections:** Hero, About, Skills (with levels), Projects (with filters), Experience, Contact
- **Theme:** System-aware dark/light toggle, persisted in `localStorage`
- **Motion:** CSS orbs + canvas particle layer for a subtle tech aesthetic
- **Mobile:** Hamburger menu, touch-friendly controls
- **Icons:** [Devicon](https://devicon.dev/) for skill badges
- **Typography:** [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts
- **A11y:** Semantic landmarks, `aria` labels, skip-friendly structure

## Tech stack

| Layer   | Details                          |
|--------|-----------------------------------|
| Markup | Semantic HTML5                    |
| Style  | Custom CSS (variables, glass UI)   |
| Logic  | ES modules–style strict vanilla JS |

No build step, no `node_modules` — open and run.

## Getting started

### Option 1: Open locally

1. Clone the repository (or download the folder).
2. Open `index.html` in a modern browser.

### Option 2: Local server (recommended)

Some browsers restrict certain APIs when opening files as `file://`. Use any static server, for example:

```bash
# Python 3
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080` (port may vary).

## Customisation

Content is driven by data objects at the top of **`script.js`**:

- **`SKILLS_DATA`** — categories, skill names, levels (0–100), Devicon class names
- **`PROJECTS_DATA`** — titles, tags, links, filter category (`web` | `ui` | `tool`)
- **`EXPERIENCE_DATA`** — roles, companies, dates, bullet points

Update **`index.html`** for your name, meta description, and section copy. Adjust look and feel in **`style.css`** (CSS variables are a good starting point).

## Project structure

```
Portfolio/
├── index.html    # Page structure & content
├── style.css     # Layout, themes, animations
├── script.js     # Data + interactivity (particles, nav, theme)
└── README.md
```

## Deployment

Push this repo to GitHub and enable **GitHub Pages** (Settings → Pages → deploy from `main`/`master` branch, root). Alternatively host the same files on **Netlify**, **Vercel**, or any static host.

## License

This project is open for personal use and learning. If you fork it, a star on the original repo is appreciated.

---

Built as a frontend developer portfolio template — fork, rebrand, and ship.
