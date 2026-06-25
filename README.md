# Interior Studio 🛋️

A premium, multi-page interior design studio website built with pure HTML, CSS, and JavaScript — no frameworks, no build tools. Designed for a fictional interior design firm to showcase services, portfolio, and an inquiry workflow, with a single-page-app navigation experience.

## ✨ Features

- **Single-page navigation experience** — Home, About, Services, Portfolio, Contact, FAQ, Login, and Signup sections are toggled dynamically without page reloads
- **Elegant typography** — pairs Cormorant Garamond (serif headings) with Jost (clean sans-serif body text) via Google Fonts
- **Login & Signup forms** — includes password visibility toggle and toast notifications on submit
- **Contact form** — shows a success confirmation message and toast on submission
- **Portfolio filter buttons** — interactive category filtering for project showcase
- **Expandable FAQ accordion** — click-to-expand question/answer items
- **Toast notification system** — lightweight popup feedback for user actions (login, signup, contact)
- **Fully responsive design** with smooth scroll behavior

## 🛠️ Built With

- **HTML5** — semantic page structure
- **CSS3** — custom properties (CSS variables) for theming, Flexbox layout
- **Vanilla JavaScript** — DOM manipulation for page routing, form handling, and UI interactions
- **Google Fonts** — Cormorant Garamond & Jost
- **Font Awesome** — icons (via kit CDN)

## 📁 Project Structure

```
Interior-studio/
├── Design/
│   ├── index.html      # All page sections (home, about, services, portfolio, contact, faq, login, signup)
│   ├── index.css       # Styling, theming, and responsive layout
│   └── index.js        # Page routing, form handlers, toasts, FAQ accordion, portfolio filters
└── .vscode/
    └── settings.json
```

## 🚀 Getting Started

No installation or build step required — this is a static site.

1. Clone the repository
   ```bash
   git clone https://github.com/nandinicloud/Interior-studio.git
   ```
2. Navigate into the project folder
   ```bash
   cd Interior-studio/Design
   ```
3. Open `index.html` directly in your browser, or serve it locally:
   ```bash
   npx serve .
   ```
   (or use the VS Code "Live Server" extension for auto-reload)

## 🎨 Design System

The site uses a warm, earthy color palette defined as CSS custom properties:

| Variable | Color |
|---|---|
| `--sage` | Sage green (primary accent) |
| `--gold` | Warm gold (secondary accent) |
| `--dark` / `--darker` | Near-black tones for text/backgrounds |
| `--offwhite` | Soft background tone |

## 📌 Notes

- Login and Signup forms are front-end only (no backend/auth integration) — submitting shows a toast and redirects to Home, simulating the flow for demo purposes.
- Built as a portfolio project to demonstrate responsive UI design and vanilla JS interactivity without relying on frameworks.

## 🔗 Related

A React + Vite version of this project also exists, rebuilding the same design with componentized architecture.

## 👩‍💻 Author

**Nandini Bharti**
GitHub: [@nandinicloud](https://github.com/nandinicloud)
