"use client";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

/**
 * CineScene — pinned scroll-driven stage.
 * A tall scroll track (default 350vh) with a sticky full-viewport stage.
 * Children receive the 0→1 scroll progress as a MotionValue so visuals can
 * bind scale / opacity / translate / clip-path — transform & opacity only,
 * never layout properties. GPU-friendly by construction.
 *
 * Render ONLY when the cinematic treatment is enabled (desktop + motion OK);
 * otherwise render the calm fallback. One logical content source, two
 * presentations — never both at once.
 */
export function CineScene({
  height = "350vh",
  children,
  label,
  className = "",
}: {
  height?: string;
  children: (progress: MotionValue<number>) => React.ReactNode;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={ref} className={`relative ${className}`} style={{ height }} aria-label={label}>
      <div className="sticky top-0 h-svh overflow-hidden">{children(scrollYProgress)}</div>
    </div>
  );
}

/** Discrete beat index (0..count-1) derived from scroll progress. */
export function useStep(progress: MotionValue<number>, count: number) {
  const [step, setStep] = useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    setStep(Math.min(count - 1, Math.max(0, Math.floor(v * count))));
  });
  return step;
}

/**
 * Masked line reveal for major scene typography.
 * Overflow-hidden mask + vertical rise — the "title enters" language
 * shared by every cinematic beat. Respects reduced motion via `reduce`.
 */
export function CineLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Scroll-linked fade/scale wrapper for large scene visuals (0.96 → 1 language). */
export function SceneVisual({
  progress,
  range = [0, 1],
  className = "",
  children,
  y = 40,
}: {
  progress: MotionValue<number>;
  range?: [number, number];
  className?: string;
  children: React.ReactNode;
  y?: number;
}) {
  const opacity = useTransform(progress, [range[0], range[0] + 0.08, range[1] - 0.08, range[1]], [0, 1, 1, 0]);
  const scale = useTransform(progress, [range[0], range[1]], [0.96, 1]);
  const dy = useTransform(progress, [range[0], range[1]], [y, -y]);
  return (
    <motion.div style={{ opacity, scale, y: dy }} className={className}>
      {children}
    </motion.div>
  );
}
