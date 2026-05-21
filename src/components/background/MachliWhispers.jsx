import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MACHLI_WHISPERS } from '../../config/theme';

/** Occasional subtle Machli-themed floating text — decorative only */
export function MachliWhispers() {
  const whispers = useMemo(
    () =>
      MACHLI_WHISPERS.map((text, i) => ({
        text,
        left: `${8 + i * 22}%`,
        top: `${15 + (i % 3) * 28}%`,
        delay: 2 + i * 3.5,
      })),
    []
  );

  return (
    <>
      {whispers.map((w, i) => (
        <motion.span
          key={i}
          className="absolute text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/15 font-sans pointer-events-none select-none"
          style={{ left: w.left, top: w.top }}
          animate={{ opacity: [0, 0.35, 0], y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: w.delay,
            repeatDelay: 8,
            ease: 'easeInOut',
          }}
        >
          {w.text}
        </motion.span>
      ))}
    </>
  );
}
