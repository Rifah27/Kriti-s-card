import confetti from 'canvas-confetti';

const PALETTE = ['#c9a87c', '#f5d6e8', '#a78bfa', '#fde68a', '#fff'];

/** Subtle luxury confetti when card opens */
export function confettiBurst() {
  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: 0.55 },
    colors: PALETTE,
    ticks: 120,
    gravity: 0.8,
    scalar: 0.9,
  });

  setTimeout(() => {
    confetti({
      particleCount: 25,
      angle: 60,
      spread: 50,
      origin: { x: 0.35, y: 0.5 },
      colors: PALETTE,
    });
    confetti({
      particleCount: 25,
      angle: 120,
      spread: 50,
      origin: { x: 0.65, y: 0.5 },
      colors: PALETTE,
    });
  }, 200);
}
