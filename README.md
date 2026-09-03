# Tejasv Nigam — Personal 3D Portfolio

> **AI Engineer · Founder · Product Builder**  
> *"Engineer by craft. Builder by obsession. Founder by choice."*

A dark cinematic personal portfolio website built with a smooth scroll-driven 3D camera experience, dynamic canvas frame scrubbing, and an editorial design system.

---

## 🌟 Overview

- **3D Scroll Engine**: Butter-smooth frame scrubbing using high-DPI canvas rendering and lerp inertia damping.
- **Cinematic Experience**: Dark minimal luxury aesthetic with electric blue accents (`#02050B` / `#07101D` / `#3B82F6`).
- **Structured Content Architecture**:
  - `01 / ABOUT` — The Way I Build (Engineering, AI, Product, Experimentation)
  - `02 / SELECTED WORK` — Deep-dive case studies (e.g. Smart Schemes)
  - `03 / FOUNDER` — Kinship: Healthcare & preventive wellness startup
  - `04 / EXPERIENCE` — Architecture, roles, and technical direction
  - `05 / TOOLKIT` — AI, Software, Frontend, Data & Infrastructure capabilities
  - `06 / PROOF` — Track record & hackathon achievements
  - `07 / NOW` — Founder mode status panel
  - `08 / BEYOND CODE` — Outside the terminal
  - `09 / CONNECT` — Direct communication channels
- **Centralized Data Layer (`data.js`)**: Update portfolio content without modifying any animation logic.

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser or serve it with a local static server:

```bash
# Using python
python3 -m http.server 3000

# Using npx serve
npx serve .
```

---

## 🛠️ Tech Stack

- **HTML5 & Vanilla CSS**
- **JavaScript (ES6+)**
- **Canvas 2D API** with sub-pixel DPR scaling & async frame decoding
- **Geist / Inter** typography
