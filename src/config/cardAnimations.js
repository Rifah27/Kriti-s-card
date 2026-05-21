export const easeLuxury = [0.22, 1, 0.36, 1];

export const CARD_OPEN = {
  duration: 1.45,
  ease: easeLuxury,
  rotateY: -172,
  rotateX: 2,
};

export const FLOAT_IDLE = {
  y: [0, -12, 0],
  transition: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
};

export const HOVER_TILT = {
  scale: 1.018,
  rotateX: -4,
  rotateY: 6,
  transition: { duration: 0.4, ease: easeLuxury },
};

export const GLOW_OPEN = {
  opacity: [0, 0.9, 0.5],
  scale: [0.82, 1.12, 1],
  transition: { duration: 1.45, ease: easeLuxury },
};

export const CONTENT_REVEAL = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay, duration: 0.95, ease: easeLuxury },
  }),
};

export const SIGNATURE_REVEAL = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.95, duration: 0.5 },
  },
};
