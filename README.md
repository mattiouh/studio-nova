# STUDIO NÒVA

**Independent Concept / Portfolio Project** — website concept for a fictional international architecture and interior design practice. Created as a high-end web design and front-end case study for ByPalombi.

## Concept — Quiet Monumentality

STUDIO NÒVA does not compete for attention through visual noise. It uses generous negative space, type with a strong editorial presence and materially rich photography to make each room feel considered before it is explained. The point of view is *quiet monumentality*: spaces that are memorable because they are precise, tactile and calm.

## Sitemap

- **Home** — studio manifesto, selected projects, disciplines, method, expertise, studio introduction and contact CTA.
- **Projects** — filterable editorial portfolio: Residential, Hospitality and Commercial.
- **Project detail** — hero, project facts, concept, gallery, challenge, solution, materials and next project.
- **Services** — Architecture, Interior Design, Renovation, Art Direction and Project Management.
- **Studio** — origin, philosophy, team and expertise.
- **Contact** — frontend-validated enquiry flow.
- **404** — custom recovery page.

## Design system

- **Palette:** Ivory `#f4f0e8`, Stone `#d7d0c3`, Warm grey `#b9ad9c`, Charcoal `#1d1d1a`.
- **Typography:** Playfair Display for the editorial voice; DM Sans for reading; DM Mono for labels, metadata and navigation.
- **Layout:** 12-column desktop grid, intentionally offset project cards, full-bleed visual moments and thin architectural rules.
- **Tone:** warm, editorial, composed. No gradients, glass panels or generic product-interface conventions.

## Interaction system

- A restrained opening sequence establishes the studio signature.
- Type and content reveal once when entering the viewport.
- Project imagery has a slow scale hover; lists shift only enough to reward attention.
- Route changes use a short vertical page transition; images in project galleries open in a keyboard-dismissible lightbox.
- The portfolio filters without a page reload; the contact form offers native validation plus sending/success feedback.
- `prefers-reduced-motion` removes non-essential motion.

## Technical notes

Built as a dependency-light Vite experience. Semantic landmarks, labels, skip link, visible focus behavior, keyboard-dismissable overlay, responsive image candidates, lazy loading, Open Graph metadata, sitemap, robots file and a custom 404 are included.

## Run locally

```powershell
npm install
npm run dev
```
