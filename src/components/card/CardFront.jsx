import { motion } from 'framer-motion';
import { CARD } from '../../config/theme';

export function CardFront({ onFishHover, onStarHover }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl p-8 md:p-10">
      {/* Ribbon */}
      <div className="pointer-events-none absolute top-0 right-0 h-28 w-28 overflow-hidden">
        <div
          className="absolute top-5 -right-10 h-7 w-36 rotate-45"
          style={{
            background: 'linear-gradient(90deg, #c9a87c, #e8d4b8, #c9a87c)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
          }}
        />
      </div>

      {/* Wax seal */}
      <motion.div
        className="absolute right-10 bottom-12 z-10 flex h-14 w-14 items-center justify-center rounded-full text-lg shadow-lg md:right-14"
        style={{
          background: 'radial-gradient(circle at 35% 32%, #e8c4a0, #b76e79 68%, #8b5a5a)',
          boxShadow:
            'inset 0 2px 5px rgba(255,255,255,0.35), 0 6px 16px rgba(0,0,0,0.38), 0 0 20px rgba(201,168,124,0.25)',
        }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      >
        <span className="font-display text-sm font-semibold text-white/92">{CARD.from}</span>
      </motion.div>

      {/* Fish sticker easter egg */}
      <motion.button
        type="button"
        className="absolute top-8 left-8 z-10 text-lg opacity-35 transition-opacity hover:opacity-95"
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
          className="absolute cursor-default text-sm text-amber-200/75"
          style={{ top: s.top, left: s.left }}
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.88, 1.12, 0.88] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: s.delay }}
          onMouseEnter={i === 0 ? onStarHover : undefined}
          onFocus={i === 0 ? onStarHover : undefined}
          tabIndex={i === 0 ? 0 : -1}
        >
          ✦
        </motion.span>
      ))}

      <motion.h1
        className="font-display z-10 text-center text-3xl leading-tight text-champagne md:text-4xl lg:text-[2.85rem]"
        style={{ textShadow: '0 2px 28px rgba(201, 168, 124, 0.4)' }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9 }}
      >
        Happy Birthday {CARD.to} ✨
      </motion.h1>

      <motion.p
        className="z-10 mt-6 text-xs tracking-[0.38em] text-rose-gold/85 uppercase md:text-sm"
        animate={{ opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 2.6, repeat: Infinity }}
      >
        Tap to open
      </motion.p>
    </div>
  );
}
