import { useCallback, useEffect, useRef, useState } from 'react';

const MUSIC_SRC = '/music/birthday-lofi.mp3';
const FADE_MS = 800;

/** Ambient pad fallback when mp3 is missing */
function createAmbientPad(ctx) {
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc1.type = 'sine';
  osc1.frequency.value = 220;
  osc2.type = 'triangle';
  osc2.frequency.value = 330;
  filter.type = 'lowpass';
  filter.frequency.value = 800;
  gain.gain.value = 0.04;

  osc1.connect(filter);
  osc2.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc1.start();
  osc2.start();

  return { osc1, osc2, gain, stop: () => { osc1.stop(); osc2.stop(); } };
}

export function useMusic() {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const audioRef = useRef(null);
  const ambientRef = useRef(null);
  const ctxRef = useRef(null);
  const fadeRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';

    audio.addEventListener('canplaythrough', () => setReady(true));
    audio.addEventListener('error', () => setReady(true));

    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const fadeVolume = useCallback((target, onDone) => {
    const audio = audioRef.current;
    if (!audio) return onDone?.();

    clearInterval(fadeRef.current);
    const start = audio.volume;
    const steps = 20;
    let step = 0;

    fadeRef.current = setInterval(() => {
      step++;
      audio.volume = start + (target - start) * (step / steps);
      if (step >= steps) {
        clearInterval(fadeRef.current);
        onDone?.();
      }
    }, FADE_MS / steps);
  }, []);

  const startAmbient = useCallback(() => {
    if (ambientRef.current) return;
    const ctx = new AudioContext();
    ctxRef.current = ctx;
    ambientRef.current = createAmbientPad(ctx);
  }, []);

  const stopAmbient = useCallback(() => {
    ambientRef.current?.stop();
    ambientRef.current = null;
    ctxRef.current?.close();
    ctxRef.current = null;
  }, []);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      fadeVolume(0, () => {
        audio.pause();
        stopAmbient();
        setPlaying(false);
      });
      return;
    }

    try {
      await audio.play();
      fadeVolume(0.35);
      stopAmbient();
      setPlaying(true);
    } catch {
      startAmbient();
      setPlaying(true);
    }
  }, [playing, fadeVolume, startAmbient, stopAmbient]);

  return { playing, ready, toggle };
}
