import { motion } from 'framer-motion';
import { INSIDE_MESSAGE, CARD } from '../../config/theme';
import { CONTENT_REVEAL } from '../../config/cardAnimations';
import { SignatureReveal } from './SignatureReveal';
import { Heart, Sparkles } from 'lucide-react';

const paragraphs = (INSIDE_MESSAGE || 'Happy Birthday 💖').split('\n\n');

const floatingDecor = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    opacity: [0.3, 0.8, 0.3],
  },
};

export function CardInside({ isOpen }) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.98,
      }}
      transition={{ duration: 0.45 }}
      className="absolute inset-0 z-20 overflow-hidden rounded-3xl bg-gradient-to-br from-[#2d154a]/90 to-[#18081f]/95"
      style={{
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-0 text-pink-300"
          style={{
            top: `${8 + i * 10}%`,
            left: `${6 + i * 11}%`,
          }}
          variants={floatingDecor}
          animate="animate"
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {i % 2 === 0 ? <Sparkles size={16} /> : <Heart size={14} />}
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(198,140,235,0.15),transparent_26%)]" />

      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0 overflow-y-auto p-3 sm:p-4 md:p-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-violet-300/10 bg-[#140a23]/95 p-4 shadow-2xl ring-1 ring-violet-400/10 backdrop-blur-sm sm:rounded-3xl sm:p-6 md:p-8">
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center text-2xl font-semibold text-violet-200 sm:text-3xl"
            >
              {CARD.to} Machliii 🐟✨
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 mb-4 text-center text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:mb-6 sm:text-xs sm:tracking-[0.25em]"
            >
Official birthday appreciation message incoming 🎂✨            </motion.p>

            {paragraphs.map((block, i) => (
              <motion.p
                key={i}
                variants={CONTENT_REVEAL}
                initial="hidden"
                animate="visible"
                custom={0.4 + i * 0.08}
                className={`leading-relaxed ${
                  i === 0
                    ? 'text-base text-slate-100 sm:text-lg'
                  : i === paragraphs.length - 1
                    ? 'mt-4 text-sm italic text-fuchsia-300 sm:mt-5 sm:text-base'
                    : 'mt-3 text-sm text-slate-200 sm:mt-4 sm:text-base'
                }`}
              >
                {i === 0 ? (
                  <>
                    <span className="mr-2 float-left text-4xl leading-none text-fuchsia-300 sm:mr-3 sm:text-5xl">
                      {block.charAt(0)}
                    </span>
                    {block.slice(1)}
                  </>
                ) : (
                  i === paragraphs.length - 1 ? `${block} ${CARD.from} Kabootar` : block
                )}
              </motion.p>
            ))}

            <div className="my-5 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent sm:my-8" />

            <SignatureReveal />
          </div>
        </div>

        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 text-lg shadow-xl sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 sm:text-xl"
        >
          💖
        </motion.div>
      </div>
    </motion.div>
  );
}
