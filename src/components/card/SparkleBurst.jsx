import { motion } from 'framer-motion';

const SPARKLES = Array.from({ length: 10 }, (_, i) => ({
  angle: (i / 10) * Math.PI * 2,
  delay: 0.28 + i * 0.04,
}));

export function SparkleBurst() {
  return (
    <>
      {SPARKLES.map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-amber-200/90 pointer-events-none select-none"
          style={{ left: '50%', top: '42%', fontSize: '0.7rem' }}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.3, 0.4],
            x: Math.cos(s.angle) * (65 + (i % 3) * 12),
            y: Math.sin(s.angle) * (55 + (i % 2) * 15),
          }}
          transition={{ duration: 1.1, delay: s.delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {i % 3 === 0 ? '✦' : '✧'}
        </motion.span>
      ))}
    </>
  );
}
