# Assets Structure

Suggested organization for optional media (placeholders work without these):

```
src/assets/
  images/
    placeholder-hero.webp    # Optional hero backdrop
    placeholder-card.webp    # Card texture overlay
  icons/
    fish.svg                 # Custom fish icon
    dove.svg                 # Kabootar dove icon
public/
  music/
    birthday-lofi.mp3        # Background track (required for real audio)
  favicon.svg
```

## Placeholders

The app uses emoji + CSS gradients + Three.js for visuals. Add images only if you want photo memories:

```jsx
// Example in MemoryCard.jsx
<img src="/images/memory-1.jpg" alt="Machli moment" className="rounded-2xl" />
```

## Performance

- Prefer WebP/AVIF for photos
- Keep music under 3MB, loop-friendly
- Lazy-load heavy images with `loading="lazy"`
