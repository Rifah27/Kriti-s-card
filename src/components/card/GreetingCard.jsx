import { motion } from 'framer-motion';
import { useCardOpen } from '../../hooks/useCardOpen';
import { CardFront } from './CardFront';
import { CardInside } from './CardInside';
import { SparkleBurst } from './SparkleBurst';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { HOVER_TILT } from '../../config/cardAnimations';

/**
 * Birthday greeting card with a front cover that opens to reveal the inside.
 */
export function GreetingCard() {
  const { rotateX, rotateY, reset } = useMouseParallax(12);
  const { isOpen, open } = useCardOpen(reset);

  return (
    <section
      className="relative z-10 flex min-h-[100dvh] w-full items-center justify-center px-3 py-3 sm:px-4 sm:py-6 md:py-10"
      aria-label="Birthday greeting card"
    >
      <div className="perspective-scene flex w-full justify-center">
        <motion.div
          className="card-float relative preserve-3d cursor-pointer"
          style={{
            width: 'min(94vw, 760px)',
            maxWidth: '760px',
            height: 'min(calc(100dvh - 48px), 620px)',
            maxHeight: '620px',
            rotateX,
            rotateY,
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={HOVER_TILT}
          onMouseLeave={reset}
          onClick={open}
          role="button"
          tabIndex={0}
          aria-label={isOpen ? 'Opened birthday card' : 'Closed birthday card, click to open'}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              open();
            }
          }}
        >
          <motion.div
            className="card-ground-shadow pointer-events-none absolute -bottom-10 left-1/2 h-11 w-[88%] -translate-x-1/2 rounded-[100%] bg-black/45 blur-2xl"
            animate={{ opacity: 0.75, scale: 1 }}
            transition={{ duration: 1.2 }}
          />

          <div
            className="card-book relative h-full w-full overflow-hidden rounded-3xl sm:rounded-[2rem]"
            style={{ boxShadow: 'var(--shadow-luxury)' }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-3xl paper-texture sm:rounded-[2rem]">
              {!isOpen && <CardFront />}
              <CardInside isOpen={isOpen} />
            </div>

            <div className="card-open-shine pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(154,82,186,0.26),transparent_18%),radial-gradient(circle_at_80%_80%,rgba(99,45,136,0.18),transparent_20%)] opacity-0" />
            <div className="card-inner-glow pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1a0c24] via-[#220f34] to-[#2f154a] opacity-0 sm:rounded-[2rem]" />
            <SparkleBurst />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
