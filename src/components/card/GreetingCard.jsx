import { motion, AnimatePresence } from 'framer-motion';
import { CardFront } from './CardFront';
import { CardInside } from './CardInside';
import { SparkleBurst } from './SparkleBurst';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { useFishEasterEgg } from '../../hooks/useEasterEgg';
import { useCardOpen } from '../../hooks/useCardOpen';
import { CARD_OPEN, FLOAT_IDLE, HOVER_TILT } from '../../config/cardAnimations';

/**
 * Luxury bi-fold greeting card — realistic left-hinge 3D open.
 */
export function GreetingCard() {
  const { rotateX, rotateY, reset } = useMouseParallax(11);
  const { hint, onFishHover, onStarHover } = useFishEasterEgg();
  const { isOpen, open } = useCardOpen(reset);

  const handleOpen = () => open();

  return (
    <section
      className="relative z-10 flex min-h-full w-full items-center justify-center px-4 py-10 md:py-14"
      aria-label="Birthday greeting card"
    >
      <AnimatePresence>
        {hint && (
          <motion.p
            className="fixed top-8 left-1/2 z-50 -translate-x-1/2 glass-chip rounded-full px-4 py-2 text-xs tracking-widest text-white/75"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            {hint}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="perspective-scene flex w-full justify-center">
        <motion.div
          className={`card-float relative preserve-3d ${!isOpen ? 'cursor-pointer' : 'cursor-default'}`}
          style={{
            width: 'min(92vw, 420px)',
            height: 'min(78vh, 560px)',
            rotateX: isOpen ? 0 : rotateX,
            rotateY: isOpen ? 0 : rotateY,
          }}
          animate={!isOpen ? FLOAT_IDLE : { y: 0, rotateX: 0, rotateY: 0 }}
          whileHover={!isOpen ? HOVER_TILT : undefined}
          onClick={!isOpen ? handleOpen : undefined}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && !isOpen) {
              e.preventDefault();
              handleOpen();
            }
          }}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Birthday card opened' : 'Tap to open birthday card'}
        >
          {/* Ground shadow */}
          <motion.div
            className="card-ground-shadow pointer-events-none absolute -bottom-10 left-1/2 h-10 w-[88%] -translate-x-1/2 rounded-[100%] bg-black/45 blur-2xl"
            animate={{ opacity: isOpen ? 0.55 : 0.75, scale: isOpen ? 1.05 : 1 }}
            transition={{ duration: 1.2 }}
          />

          <div
            className="card-book relative h-full w-full preserve-3d rounded-2xl"
            style={{ boxShadow: 'var(--shadow-luxury)' }}
          >
            {/* Inside spread (stationary) */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl paper-texture">
              <CardInside isOpen={isOpen} />
            </div>

            {/* Inner glow while / after opening */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="card-inner-glow pointer-events-none absolute inset-0 z-[1] rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    background:
                      'radial-gradient(ellipse at 58% 42%, rgba(255,248,240,0.95), rgba(245,214,232,0.35) 48%, transparent 72%)',
                    boxShadow: 'inset 0 0 70px rgba(255, 228, 200, 0.45)',
                  }}
                />
              )}
            </AnimatePresence>

            {/* Light sweep across inside */}
            {isOpen && (
              <div
                className="card-open-shine pointer-events-none absolute inset-0 z-[2] overflow-hidden rounded-2xl opacity-0"
                aria-hidden
              >
                <div className="absolute top-0 bottom-0 w-1/3 bg-linear-to-r from-transparent via-white/25 to-transparent blur-sm" />
              </div>
            )}

            {/* Front cover — hinge left */}
            <motion.div
              className="card-cover absolute inset-0 z-20 preserve-3d rounded-2xl"
              style={{
                transformOrigin: 'left center',
                transformStyle: 'preserve-3d',
                pointerEvents: isOpen ? 'none' : 'auto',
              }}
              animate={{
                rotateY: isOpen ? CARD_OPEN.rotateY : 0,
                rotateX: isOpen ? CARD_OPEN.rotateX : 0,
              }}
              transition={{
                duration: CARD_OPEN.duration,
                ease: CARD_OPEN.ease,
              }}
            >
              {/* Cover thickness edge */}
              <div
                className="absolute top-2 bottom-2 left-0 w-[3px] rounded-l-sm bg-linear-to-b from-white/10 via-rose-gold/25 to-violet-900/30"
                style={{ transform: 'translateZ(-2px)' }}
                aria-hidden
              />

              {/* Front face */}
              <div
                className="card-cover-face paper-cover backface-hidden absolute inset-0 overflow-hidden rounded-2xl"
                style={{
                  transform: 'translateZ(1px)',
                  boxShadow:
                    'inset -6px 0 28px rgba(0,0,0,0.18), 0 24px 48px rgba(45,27,78,0.38)',
                }}
              >
                <CardFront onFishHover={onFishHover} onStarHover={onStarHover} />
                <div className="ambient-sheen pointer-events-none absolute inset-0" aria-hidden />
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-linear-to-b from-white/25 via-rose-gold/35 to-transparent" />
              </div>

              {/* Inside of cover */}
              <div
                className="paper-texture fold-crease backface-hidden absolute inset-0 rounded-2xl"
                style={{ transform: 'rotateY(180deg) translateZ(1px)' }}
              >
                <div className="flex h-full items-center justify-center p-6">
                  <p className="font-display text-center text-xl italic text-violet-800/25">
                    For you ✨
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Spine crease when closed */}
            {!isOpen && (
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-30 w-4 rounded-l-2xl bg-linear-to-r from-black/25 via-black/10 to-transparent" />
            )}
          </div>

          <AnimatePresence>{isOpen && <SparkleBurst />}</AnimatePresence>
        </motion.div>
      </div>

      {!isOpen && (
        <p className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.22em] text-white/22">
          hover the stars · find the fish
        </p>
      )}
    </section>
  );
}
