import { motion } from 'framer-motion';
import { SIGNATURE_REVEAL } from '../../config/cardAnimations';
import { CARD } from '../../config/theme';

/** Handwritten-style signature stroke reveal */
export function SignatureReveal() {
  return (
    <motion.div
      className="mt-5 flex flex-col items-start gap-1"
      variants={SIGNATURE_REVEAL}
      initial="hidden"
      animate="visible"
    >
      <svg
        viewBox="0 0 120 36"
        className="h-8 w-28 text-violet-900"
        aria-hidden
      >
        <motion.path
          d="M8 22 C18 8, 28 28, 38 18 S58 8, 72 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.4 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1.05, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M78 12 L88 28 M88 12 L78 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <motion.p
        className="font-display text-base italic text-stone-900 tracking-wide"
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        — {CARD.from} Kabootar
      </motion.p>
    </motion.div>
  );
}
