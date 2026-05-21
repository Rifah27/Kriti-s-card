import { useCallback, useState } from 'react';

/** Hidden fish hover easter eggs */
export function useFishEasterEgg() {
  const [hint, setHint] = useState(null);

  const reveal = useCallback((message) => {
    setHint(message);
    const t = setTimeout(() => setHint(null), 2200);
    return () => clearTimeout(t);
  }, []);

  const onFishHover = useCallback(() => {
    reveal('machli energy detected 🐟');
  }, [reveal]);

  const onStarHover = useCallback(() => {
    reveal('tiny splash of joy ✨');
  }, [reveal]);

  return { hint, onFishHover, onStarHover };
}
