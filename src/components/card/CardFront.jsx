import { motion } from 'framer-motion';
import { CARD } from '../../config/theme';

export function CardFront({ onFishHover, onStarHover }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl p-5 sm:p-6 md:p-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,#10071b_0%,#190d2d_100%)]">
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_70%_30%,rgba(255,216,239,0.12),transparent_24%),radial-gradient(circle_at_20%_75%,rgba(153,104,179,0.14),transparent_30%)]" />

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full text-lg shadow-2xl sm:bottom-12"
        style={{
          background: 'radial-gradient(circle at 35% 32%, #d58ede, #8f3d8f 68%, #451c43)',
          boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.08), 0 10px 26px rgba(0,0,0,0.45)',
        }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      >
        <span className="font-display text-sm font-semibold text-slate-100">{CARD.from}</span>
      </motion.div>

      <motion.button
        type="button"
        className="absolute top-4 left-4 z-10 flex h-12 w-12 items-center justify-center text-3xl opacity-50 transition-opacity hover:opacity-90 text-slate-200 sm:top-7 sm:left-7 sm:text-4xl"
        onMouseEnter={onFishHover}
        onFocus={onFishHover}
        onClick={(e) => e.stopPropagation()}
        aria-label="Hidden fish easter egg"
      >
        🐟
      </motion.button>

      {[
        { top: '16%', left: '74%', delay: 0 },
        { top: '26%', left: '16%', delay: 0.45 },
        { top: '58%', left: '80%', delay: 0.9 },
      ].map((s, i) => (
        <motion.span
          key={i}
          className="absolute cursor-default text-sm text-violet-200/70"
          style={{ top: s.top, left: s.left }}
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.92, 1.08, 0.92] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: s.delay }}
          onMouseEnter={i === 0 ? onStarHover : undefined}
          onFocus={i === 0 ? onStarHover : undefined}
          tabIndex={i === 0 ? 0 : -1}
        >
          ✦
        </motion.span>
      ))}

      <motion.h1
        className="font-display relative z-10 text-center text-xl leading-tight text-slate-100 sm:text-2xl md:text-3xl lg:text-[2.85rem]"
        style={{ textShadow: '0 2px 28px rgba(0, 0, 0, 0.45)' }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9 }}
      >
        Happy Birthday {CARD.to} ✨
      </motion.h1>

      <motion.p
        className="z-10 mt-4 text-[10px] tracking-[0.28em] text-slate-300 uppercase sm:mt-6 sm:text-xs sm:tracking-[0.38em] md:text-sm"
        animate={{ opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2.6, repeat: Infinity }}
      >
        Tap to open
      </motion.p>
    </div>
  );
}
