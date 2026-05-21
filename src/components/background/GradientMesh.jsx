import { motion } from 'framer-motion';

/** Dreamy animated gradient mesh behind glass layer */
export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute w-[140%] h-[140%] -left-[20%] -top-[20%] opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 45% 40% at 20% 30%, rgba(109,40,217,0.45), transparent 55%), radial-gradient(ellipse 50% 45% at 80% 25%, rgba(201,168,124,0.28), transparent 50%), radial-gradient(ellipse 55% 50% at 55% 85%, rgba(245,214,232,0.22), transparent 55%)',
        }}
        animate={{
          x: [0, 24, -12, 0],
          y: [0, -18, 10, 0],
          rotate: [0, 2, -1, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            'conic-gradient(from 200deg at 50% 50%, rgba(45,27,78,0.4), transparent 25%, rgba(109,40,217,0.25), transparent 50%, rgba(201,168,124,0.15), transparent 75%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-0 backdrop-blur-[2px] bg-midnight/20" />
    </div>
  );
}
