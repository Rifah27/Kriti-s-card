import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

/** Subtle card tilt from pointer position */
export function useMouseParallax(intensity = 12) {
  const rotateX = useSpring(0, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      rotateY.set(dx * intensity * 0.35);
      rotateX.set(-dy * intensity * 0.25);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [intensity, rotateX, rotateY]);

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return { rotateX, rotateY, reset };
}
