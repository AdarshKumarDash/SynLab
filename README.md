# SynLab — The Portable Lab (Public Website)

Public-facing website for **SynLab**, a portable, modular laboratory concept by **Team Innovexa** —
designed to bring practical science learning closer to every learner.

> This repository contains the **website only**. It intentionally describes the concept at a
> high level (portability, modularity, guided experimentation, vision). Internal engineering
> details — circuits, wiring, firmware, CAD, dimensions, assembly steps, protocols,
> calibration implementation, unpublished research/data, credentials — must **never** be
> added here or to the site content.

## What the site covers

- The idea: practical science beyond fixed rooms and rigid schedules
- Why it exists: access, time, guidance, safety and flexibility barriers (stakeholder survey, n=65/59)
- The answer: portable, modular, safety-conscious, guided, accessible
- The experience: choose → prepare → explore → observe → learn → discover
- Our story, SynLab ONE (base-model prototype, high level), and a concept showcase
- Who it's for (students, educators, schools, parents, hobbyists, researchers) and use cases
- Technology at capability level only, a simulated dashboard concept, public research summary
- Context vs traditional/virtual/remote labs, SynLab PRO future vision, impact, team, collaboration CTA

## Tech stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS, Framer Motion, Recharts, Three.js (`@react-three/fiber` / `drei`), `lucide-react`

## Getting started

```bash
npm install
npm run dev      # local development at http://localhost:3000
npm run build    # production build (also type-checks)
npm start        # serve the production build
```

## Project structure

```
src/
  app/            # routes, layout, global styles
  components/     # section components (hero, idea, story, lab, technology, dashboard, research, ...)
  data/content.ts # PUBLIC content source of truth (visitor-safe facts only)
public/assets/    # concept illustrations
```

## Content rules for contributors

1. Only add information suitable for a public audience. When in doubt, generalize.
2. Keep claims source-supported: survey figures (n=65 main / n=59 reasons), attributed context stats.
3. Label PRO content as future/proposed vision — never current capability.
4. Never claim the site replaces teachers or traditional labs; position SynLab as complementary.
5. No pricing, checkout, fake testimonials, partners, awards, or invented bios.

## Team

Team Innovexa — Adarsh Kumar Dash, Sharon Chakraborty.

## Status

Student concept project. The dashboard on the site runs in simulation mode for illustration.
