"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0, y = 28, className = "" }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ index, eyebrow, title, lede, align = "left" }: { index: string; eyebrow: string; title: React.ReactNode; lede?: string; align?: "left" | "center" }) {
  const centered = align === "center";
  return (
    <div className={`max-w-5xl ${centered ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <div className={`flex items-center gap-3 text-[12px] font-semibold tracking-[0.18em] text-cyanx font-grotesk ${centered ? "justify-center" : ""}`}>
          <span className="grid place-items-center min-w-9 h-9 px-2 rounded-full bg-cyanx/10 border border-cyanx/25 text-cyanx text-[12px]">{index}</span>
          <span className="h-px w-10 bg-cyanx/40" aria-hidden />
          <span className="text-body">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-grotesk mt-4 text-3xl md:text-5xl font-bold leading-[1.08] md:leading-[1.08] tracking-tight text-ink">{title}</h2>
      </Reveal>
      {lede ? (
        <Reveal delay={0.16}>
          <p className={`mt-4 max-w-2xl text-body text-base md:text-lg leading-relaxed ${centered ? "mx-auto" : ""}`}>{lede}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

/** Key takeaway callout — same card language, adds a verdict line per section. */
export function Takeaway({ title = "Key takeaway", children }: { title?: string; children: React.ReactNode }) {
  return (
    <Reveal className="card mt-8 p-5 md:p-6 flex gap-4 items-start !border-cyanx/30 !bg-gradient-to-r !from-tint !to-white">
      <span className="shrink-0 w-9 h-9 rounded-xl bg-cyanx text-white grid place-items-center font-grotesk font-bold text-sm" aria-hidden>✓</span>
      <div>
        <p className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-cyanx">{title.toUpperCase()}</p>
        <p className="mt-1.5 text-ink text-sm md:text-[15px] leading-relaxed font-medium">{children}</p>
      </div>
    </Reveal>
  );
}

/** Small honest-methodology footnote strip. */
export function MethodNote({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="mt-6 flex gap-3 items-start rounded-card border border-dashed border-line bg-paper px-4 py-3">
      <span className="shrink-0 font-grotesk text-[10px] font-bold tracking-[0.12em] text-muted border border-line rounded-full px-2.5 py-1 bg-white mt-0.5">HOW TO READ</span>
      <p className="text-[12px] md:text-[13px] text-muted leading-relaxed">{children}</p>
    </Reveal>
  );
}

/** Number + label fact chips row. */
export function FactStrip({ facts }: { facts: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {facts.map((f) => (
        <div key={f.label} className="card px-4 py-4 text-center card-hover">
          <dd className="font-grotesk font-bold text-xl md:text-2xl text-ink">{f.value}</dd>
          <dt className="text-[11px] font-medium text-muted mt-1 leading-snug">{f.label}</dt>
        </div>
      ))}
    </dl>
  );
}

export function useCountUp(target: number, active: boolean, duration = 1400) {
  // NOTE: callers render the static `target` until `active` is true, so the
  // server-rendered / pre-intersection paint already shows the intended value
  // and the public stats can never get stuck at 0%.
  const [val, setVal] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!active) return;
    if (reduce) { setVal(target); return; }
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(target * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduce]);
  return val;
}

export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); ob.disconnect(); } }, { threshold: 0.3 });
    ob.observe(el); return () => ob.disconnect();
  }, []);
  return { ref, inView };
}
