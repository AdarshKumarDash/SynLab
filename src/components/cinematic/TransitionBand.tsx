"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "../ui/primitives";

/**
 * TRANSITION BAND — the continuous bridge from hero into the idea.
 * "BEYOND FIXED LABS" resolves as you scroll; a single dot travels the
 * hairline below, carrying the portable-lab metaphor into the next scene.
 * Scroll-linked transforms only (no layout animation), calm by design.
 */
export default function TransitionBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const driftL = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [36, -36]);
  const driftR = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-36, 36]);
  const dotX = useTransform(scrollYProgress, [0.15, 0.85], reduce ? ["0%", "0%"] : ["0%", "100%"]);
  const fade = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.25, 1, 1, 0.25]);

  return (
    <div ref={ref} className="relative border-y border-line tint-hero overflow-hidden" aria-label="Beyond fixed labs">
      <div className="pointer-events-none absolute inset-0 sci-grid opacity-50" aria-hidden />
      <motion.div style={{ opacity: fade }} className="relative mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28 text-center">
        <Reveal>
          <p className="font-grotesk text-[11px] font-bold tracking-[0.22em] text-muted">THE PORTABLE CONCEPT MOVES WITH YOU</p>
        </Reveal>
        <h2 className="font-grotesk font-bold tracking-tight leading-[0.95] text-5xl md:text-7xl text-ink mt-4">
          <motion.span style={{ x: driftL }} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "108%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              BEYOND
            </motion.span>
          </motion.span>
          <motion.span style={{ x: driftR }} className="block overflow-hidden">
            <motion.span
              className="block text-cyanx"
              initial={{ y: "108%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              FIXED LABS
            </motion.span>
          </motion.span>
        </h2>
        <div className="mx-auto mt-8 h-[2px] max-w-md rounded-full bg-cream relative overflow-visible" aria-hidden>
          <motion.span style={{ left: dotX }} className="absolute -top-[5px] w-3 h-3 -ml-1.5 rounded-full bg-cyanx shadow-soft" />
        </div>
        <p className="mt-4 text-[12px] text-muted">Keep scrolling — the idea is just ahead.</p>
      </motion.div>
    </div>
  );
}
