"use client";
import { useLayoutEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Desktop viewport (lg+) — evaluated client-side only. */
export function useIsDesktop() {
  const [desktop, setDesktop] = useState(false);
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return desktop;
}

/**
 * Master switch for pinned cinematic scenes.
 * ON only when: desktop viewport AND motion is welcome.
 * Mobile / reduced-motion get the calm static (or swipe) presentation instead.
 * SSR-safe: starts false so the first client paint matches the server HTML,
 * then upgrades below the fold without shifting content above it.
 */
export function useCinematicEnabled() {
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();
  const [ready, setReady] = useState(false);
  useLayoutEffect(() => {
    setReady(true);
  }, []);
  return ready && desktop && !reduce;
}
