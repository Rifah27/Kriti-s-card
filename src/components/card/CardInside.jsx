import { motion } from 'framer-motion';
import { INSIDE_MESSAGE } from '../../config/theme';
import { CONTENT_REVEAL } from '../../config/cardAnimations';
import { SignatureReveal } from './SignatureReveal';

const paragraphs = INSIDE_MESSAGE.split('\n\n');

export function CardInside({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex flex-col sm:flex-row preserve-3d">
      {/* Left panel — decorative */}
      <div className="paper-texture fold-crease relative h-[28%] w-full shrink-0 overflow-hidden border-b border-stone-300/35 sm:h-full sm:w-1/2 sm:border-r sm:border-b-0">
        <div
          className="absolute inset-0 opacity-55"
          style={{
            background:
              'radial-gradient(ellipse at 70% 50%, rgba(201,168,124,0.22), transparent 68%)',
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={CONTENT_REVEAL}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          <div className="px-4 text-center">
            <motion.p
              className="font-display text-3xl text-violet-900/35"
              animate={{ opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ✨
            </motion.p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.32em] text-stone-500/55">
              With warm wishes
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right panel — message */}
      <div className="paper-texture relative min-h-0 flex-1 overflow-hidden sm:w-1/2">
        <div className="absolute inset-0 flex flex-col justify-center overflow-y-auto p-4 md:p-6">
          {paragraphs.map((block, i) => (
            <motion.p
              key={i}
              className={`font-display leading-relaxed text-violet-950/88 ${
                i === 0
                  ? 'mb-3 text-lg md:text-xl'
                  : i === paragraphs.length - 1
                    ? 'mt-3 text-sm italic md:text-base'
                    : 'mb-2.5 text-[13px] md:text-sm'
              }`}
              variants={CONTENT_REVEAL}
              initial="hidden"
              animate="visible"
              custom={0.4 + i * 0.11}
            >
              {block}
            </motion.p>
          ))}
          <SignatureReveal />
        </div>

        <motion.div
          className="absolute right-6 bottom-6 left-6 h-px bg-linear-to-r from-transparent via-rose-gold/45 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
