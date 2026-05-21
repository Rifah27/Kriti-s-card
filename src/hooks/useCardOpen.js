import { useCallback, useState } from 'react';
import { gsap } from 'gsap';
import { confettiBurst } from '../utils/confettiBurst';

/** Card open state + GSAP-synced inner glow */
export function useCardOpen(onResetParallax) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    if (isOpen) return false;
    setIsOpen(true);
    confettiBurst();
    onResetParallax?.();

    requestAnimationFrame(() => {
      gsap.fromTo(
        '.card-inner-glow',
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 1.35, ease: 'power2.out', delay: 0.15 }
      );
      gsap.fromTo(
        '.card-open-shine',
        { opacity: 0 },
        { opacity: 0.65, duration: 1.2, ease: 'power2.out', delay: 0.2 }
      );
    });
    return true;
  }, [isOpen, onResetParallax]);

  return { isOpen, open };
}
