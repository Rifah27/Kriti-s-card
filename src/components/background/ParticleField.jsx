import { useMemo } from 'react';
import { motion } from 'framer-motion';

const FLOATERS = ['✦', '♡', '·', '✧', '◦'];

export function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 32 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        char: FLOATERS[i % FLOATERS.length],
        size: 0.3 + Math.random() * 0.55,
        delay: Math.random() * 5,
        dur: 3.5 + Math.random() * 4.5,
      })),
    []
  );

  const fishParticles = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => ({
        id: i,
        left: `${10 + i * 22}%`,
        delay: 1 + i * 2.2,
        dur: 8 + i * 1.5,
      })),
    []
  );

  return (
    <>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute font-light text-rose-gold/35 select-none"
          style={{ left: p.left, top: p.top, fontSize: `${p.size}rem` }}
          animate={{ y: [0, -22, 0], opacity: [0.12, 0.45, 0.12] }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        >
          {p.char}
        </motion.span>
      ))}

      {/* Subtle fish / bubble drift — decorative only */}
      {fishParticles.map((f) => (
        <motion.span
          key={`fish-${f.id}`}
          className="absolute text-[11px] opacity-[0.12] select-none"
          style={{ left: f.left, bottom: '12%' }}
          animate={{ y: [0, -50, 0], x: [0, 8, 0], opacity: [0.08, 0.2, 0.08] }}
          transition={{
            duration: f.dur,
            repeat: Infinity,
            delay: f.delay,
            ease: 'easeInOut',
          }}
        >
          🐟
        </motion.span>
      ))}

      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full border border-white/8 bg-white/4"
          style={{
            width: 14 + i * 7,
            height: 14 + i * 7,
            left: `${8 + i * 11}%`,
            bottom: `${4 + (i % 4) * 10}%`,
          }}
          animate={{ y: [0, -36 - i * 4, 0], opacity: [0.08, 0.22, 0.08] }}
          transition={{ duration: 5.5 + i * 0.7, repeat: Infinity, delay: i * 0.65 }}
        />
      ))}
    </>
  );
}
