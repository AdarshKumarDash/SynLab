"use client";
import { useEffect, useState } from "react";
import { KEY_FINDINGS } from "@/data/content";
import { CineScene, useStep } from "../cinematic/CineScene";
import { AnimatePresence, motion, useTransform, type MotionValue } from "framer-motion";

function CountNum({ target }: { target: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const dur = 900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return <>{n.toFixed(1)}%</>;
}

/** Pinned data film — each statistic gets its moment. Desktop + motion OK only. */
export function DataFilm() {
  return (
    <CineScene height="380vh" label="Research statistics, scroll-driven film" className="mt-10 -mx-5 md:-mx-8">
      {(progress) => <DataStage progress={progress} />}
    </CineScene>
  );
}

const ARC_C = 2 * Math.PI * 84;

function DataStage({ progress }: { progress: MotionValue<number> }) {
  const step = useStep(progress, KEY_FINDINGS.length);
  const f = KEY_FINDINGS[step];
  const target = parseFloat(f.value);
  const start = step / KEY_FINDINGS.length;
  const end = (step + 1) / KEY_FINDINGS.length;
  // Arc draws across the active beat, number breathes in with it.
  const arcQ = useTransform(progress, [start, end], [0, 1]);
  const arcOff = useTransform(arcQ, (q) => ARC_C * (1 - q));
  const numScale = useTransform(progress, [start, start + 0.04], [0.94, 1]);
  const bar = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-full tint-grey border-y border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_40%,rgba(12,111,189,0.08),transparent_70%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 h-full grid lg:grid-cols-2 gap-8 items-center py-16">
        <div aria-live="polite">
          <p className="font-grotesk text-[11px] font-bold tracking-[0.18em] text-muted">0{step + 1} / 04 · WHAT WE HEARD</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={f.value}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.p style={{ scale: numScale }} className="font-grotesk font-bold tracking-tight text-7xl md:text-8xl text-cyanx tabular-nums origin-left">
                <CountNum target={Number.isFinite(target) ? target : 0} />
              </motion.p>
              <p className="font-grotesk font-bold text-2xl md:text-3xl tracking-tight text-ink mt-3 uppercase">{f.label}</p>
              <p className="text-body text-base md:text-lg mt-3 leading-relaxed max-w-md">{f.note}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center gap-2 max-w-md" aria-hidden>
            {KEY_FINDINGS.map((k, i) => (
              <span key={k.value} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-cyanx" : "bg-line"}`} />
            ))}
          </div>
          <div className="mt-3 h-[3px] max-w-md rounded-full bg-cream overflow-hidden" aria-hidden>
            <motion.div className="h-full bg-gradient-to-r from-bluex to-cyanx rounded-full" style={{ width: bar }} />
          </div>
        </div>
        <div className="relative hidden sm:flex items-center justify-center" aria-hidden>
          <svg viewBox="0 0 220 220" className="w-64 h-64 md:w-80 md:h-80 text-cyanx">
            <circle cx="110" cy="110" r="84" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="10" />
            <motion.circle
              cx="110" cy="110" r="84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round"
              strokeDasharray={ARC_C}
              style={{ strokeDashoffset: arcOff }}
              transform="rotate(-90 110 110)"
            />
            <text x="110" y="118" textAnchor="middle" fontSize="26" fontWeight="800" fill="currentColor" fontFamily="'Plus Jakarta Sans', Inter, sans-serif">
              {f.value}
            </text>
          </svg>
        </div>
      </div>
      <p className="absolute bottom-4 inset-x-0 text-center text-[11px] text-muted px-5">
        Based on a small directional stakeholder study — guiding product thinking, not a population-wide survey.
      </p>
    </div>
  );
}
