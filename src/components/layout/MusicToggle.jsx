import { motion } from 'framer-motion';

export function MusicToggle({ playing, onToggle }) {
  return (
    <motion.button
      type="button"
      aria-label={playing ? 'Pause ambient music' : 'Play ambient music'}
      onClick={onToggle}
      className="fixed top-5 right-5 z-50 glass-chip w-11 h-11 rounded-full flex items-center justify-center text-base text-white/80 hover:text-white hover:bg-white/10 transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      whileTap={{ scale: 0.92 }}
    >
      <motion.span
        animate={playing ? { rotate: 360 } : {}}
        transition={playing ? { duration: 4, repeat: Infinity, ease: 'linear' } : {}}
      >
        {playing ? '♫' : '♪'}
      </motion.span>
    </motion.button>
  );
}
