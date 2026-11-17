# Prithiviraj R. — Portfolio

A premium, futuristic personal portfolio built with React, Vite, Tailwind CSS,
Framer Motion, Three.js and React Three Fiber.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

Requires Node.js 18+.

## Adding your real assets

The site ships with clean placeholders everywhere real media is missing.
Drop your files into the exact paths below and they will automatically
replace the placeholders — no code changes needed.

| Asset | Path |
|---|---|
| Profile photo | `public/images/profile/profile-photo.png` |
| Resume (PDF) | `public/resume/R.Prithiviraj Resume.pdf` |
| IT Support project image/video | `public/images/projects/it-support.png`, `public/videos/projects/it-support-demo.mp4` |
| ScamShield AI image/video | `public/images/projects/scamshield.png`, `public/videos/projects/scamshield-demo.mp4` |
| Gesture YOLO image/video | `public/images/projects/gesture-yolo.png`, `public/videos/projects/gesture-yolo-demo.mp4` |
| Staff Duty Allocation image/video | `public/images/projects/staff-duty.png`, `public/videos/projects/staff-duty-demo.mp4` |
| DD Art Academy client image/video | `public/images/client/ddartacademy.png`, `public/videos/client/ddartacademy-demo.mp4` |
| Book cover | `public/images/book/agentic-shift-cover.png` |
| Certificates | `public/images/certificates/claude-101.png`, `claude-cowork.png`, `ai-fluency-capabilities.png`, `ai-fluency-builders.png`, `python.png` |

If an image or video file is missing at build time, the component detects
the load failure and shows a premium placeholder instead of a broken image —
nothing will ever look broken.

## Editing content

All text content lives in `src/data/*.js` — edit those files to update
project descriptions, experience, skills, certifications, and achievements
without touching any component code.

Update the placeholder email and social links in `src/components/Contact.jsx`
and `src/components/SocialLinks.jsx` (marked with `TODO` comments) with your
real GitHub, LinkedIn and email address before deploying.

## Tech stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Three.js + React Three Fiber (lazy-loaded for performance)

## Design system

Colors are defined as CSS/Tailwind tokens in `tailwind.config.js`:
black, dark background, metallic gold, silver, white — no blue anywhere,
per the brand brief.
