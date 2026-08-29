# Moveshot Studio

A cinematic portfolio site for an audiovisual production studio. The interface combines full-screen video, motion-driven transitions, project reels, an editorial profile, and a contact experience in a responsive React application.

## Highlights

- Responsive single-page composition
- Motion-based navigation and section transitions
- Video-first hero and project portfolio
- Alternate visual explorations preserved in screenshots
- Cloudflare Pages deployment workflow
- TypeScript, React 19, Vite, Tailwind CSS, and Motion

## Getting started

Requirements: Node.js 20+ and pnpm.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The site runs at `http://localhost:3000` by default. The Gemini key is optional for the current static portfolio experience; never commit a real key.

## Validation

```bash
pnpm lint
pnpm build
```

## Structure

```text
src/components/  Page sections and reusable visual elements
src/assets/      Images, logos, and the local hero reel
screenshots/     Captures of the implemented design directions
```

This repository is a portfolio snapshot. Brand media remains the property of its respective owners and is included only to demonstrate the implemented experience.
