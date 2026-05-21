# Happy Birthday Kriti ✨

A single-section luxury interactive greeting card from **RK** — realistic 3D hinge open, cinematic lighting, and subtle Machli-themed easter eggs (decorative only).

## Stack

React · Vite · Tailwind CSS 4 · Framer Motion · GSAP · canvas-confetti

## Run

```bash
cd machli-birthday
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Music

Add `public/music/birthday-lofi.mp3` for calm instrumental audio. If the file is missing, the toggle falls back to a soft ambient pad.

## Structure

```
src/
  components/
    background/   GradientMesh, ParticleField, MachliWhispers, AmbientBackground
    card/         GreetingCard, CardFront, CardInside, SignatureReveal, SparkleBurst
    layout/       MusicToggle
  config/         theme.js, cardAnimations.js
  hooks/          useCardOpen, useMusic, useMouseParallax, useFishEasterEgg
  utils/          confettiBurst.js
```

## Experience

- **Closed:** floating card, parallax tilt, wax seal, ribbon, tap to open
- **Open:** realistic left-hinge `rotateY` with `preserve-3d`, inner glow, confetti, message reveal, handwritten signature stroke
- **Easter eggs:** hover 🐟 sticker, top ✦ star, background “machli energy” whispers

## Build

```bash
npm run build
npm run preview
```
