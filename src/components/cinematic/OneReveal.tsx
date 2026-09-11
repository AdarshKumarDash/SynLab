"use client";
import { CineScene, useStep } from "../cinematic/CineScene";
import { AnimatePresence, motion, useTransform, type MotionValue } from "framer-motion";

const SHAPES = [
  { x: -140, y: -52, c: "#0C6FBD", o: 0.16 },
  { x: 140, y: -58, c: "#0E9F9A", o: 0.16 },
  { x: -88, y: 104, c: "#E8A33D", o: 0.18 },
  { x: 104, y: 98, c: "#0C6FBD", o: 0.14 },
];

const LABELS = ["Portable", "Modular", "Guided", "Hands-on"];

const PHASES = [
  { k: "An idea is taking shape.", sub: "Four simple ideas drift toward each other." },
  { k: "SYNLAB ONE", sub: "The first tangible implementation of the portable laboratory concept." },
  { k: "BASE MODEL", sub: "Portable · modular · hands-on · guided." },
  { k: "ONE turns the idea into something tangible and testable.", sub: "Demonstrable today. Built to grow tomorrow." },
];

/**
 * ONE REVEAL — pinned product moment. Abstract shapes converge into one
 * coherent form as you scroll; words arrive only when the form is ready.
 * Conceptual throughout: no parts, no wiring, no instructions.
 */
export function OneReveal() {
  return (
    <CineScene height="360vh" label="SynLab ONE product reveal, scroll-driven" className="mt-8 -mx-5 md:-mx-8">
      {(progress) => <OneStage progress={progress} />}
    </CineScene>
  );
}

function OneStage({ progress }: { progress: MotionValue<number> }) {
  const step = useStep(progress, 4);
  const phase = PHASES[step];

  const shapeO = useTransform(progress, [0.02, 0.2, 0.9, 1], [0.35, 1, 1, 1]);
  const coreScale = useTransform(progress, [0.28, 0.46], [0.82, 1]);
  const coreO = useTransform(progress, [0.28, 0.42], [0, 1]);
  const badgeO = useTransform(progress, [0.5, 0.6], [0, 1]);
  const badgeY = useTransform(progress, [0.5, 0.6], [12, 0]);
  const bar = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-full tint-white border-y border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 sci-grid-fine opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_45%,rgba(12,111,189,0.08),transparent_70%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 h-full grid lg:grid-cols-2 gap-8 items-center py-16">
        {/* Assembly visual */}
        <div className="relative h-[360px] md:h-[440px] rounded-card border border-line bg-gradient-to-b from-white to-cream overflow-hidden" aria-hidden>
          <div className="absolute inset-0 dot-grid opacity-40" />
          {SHAPES.map((s, i) => (
            <ShapeDot key={i} progress={progress} sx={s.x} sy={s.y} c={s.c} baseO={s.o} opacity={shapeO} />
          ))}
          <motion.div style={{ scale: coreScale, opacity: coreO }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 md:w-52 rounded-2xl bg-white border border-cyanx/30 shadow-lift px-5 py-4 text-center">
            <p className="font-grotesk font-bold tracking-tight text-xl text-ink">SynLab <span className="text-cyanx">ONE</span></p>
            <motion.p style={{ opacity: badgeO, y: badgeY }} className="text-[10px] font-grotesk font-bold tracking-[0.14em] text-cyanx mt-1">BASE MODEL</motion.p>
            <span className="mx-auto mt-2 block h-1.5 w-16 rounded-full bg-gradient-to-r from-cyanx to-bluex" />
          </motion.div>
          {LABELS.map((l, i) => (
            <RevealLabel key={l} progress={progress} index={i} />
          ))}
        </div>
        {/* Phased words */}
        <div aria-live="polite">
          <p className="font-grotesk text-[11px] font-bold tracking-[0.18em] text-muted">0{step + 1} / 04 · THE REVEAL</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={phase.k}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className={`font-grotesk font-bold tracking-tight text-ink mt-3 ${step === 0 || step === 3 ? "text-3xl md:text-4xl leading-tight" : "text-5xl md:text-7xl"}`}>
                {step === 1 ? <>SYNLAB <span className="text-cyanx">ONE</span></> : step === 2 ? <span className="text-cyanx">{phase.k}</span> : phase.k}
              </h3>
              <p className="text-body text-base md:text-lg mt-4 leading-relaxed max-w-md">{phase.sub}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center gap-2 max-w-md" aria-hidden>
            {PHASES.map((ph, i) => (
              <span key={ph.k} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-cyanx" : "bg-line"}`} />
            ))}
          </div>
          <div className="mt-3 h-[3px] max-w-md rounded-full bg-cream overflow-hidden" aria-hidden>
            <motion.div className="h-full bg-gradient-to-r from-bluex to-cyanx rounded-full" style={{ width: bar }} />
          </div>
          <p className="mt-4 text-[11px] text-muted">Concept visual — implementation details intentionally not shown.</p>
        </div>
      </div>
    </div>
  );
}

function ShapeDot({ progress, sx, sy, c, baseO, opacity }: {
  progress: MotionValue<number>; sx: number; sy: number; c: string; baseO: number;
  opacity: MotionValue<number>;
}) {
  const x = useTransform(progress, [0.02, 0.32], [sx * 1.5, 0]);
  const y = useTransform(progress, [0.02, 0.32], [sy * 1.5, 0]);
  const o = useTransform(opacity, (v) => v * baseO);
  return (
    <motion.span
      style={{ x, y, opacity: o, background: c }}
      className="absolute left-1/2 top-1/2 -ml-8 -mt-8 block w-16 h-16 rounded-3xl blur-[1px]"
      aria-hidden
    />
  );
}

function RevealLabel({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const start = 0.62 + index * 0.08;
  const opacity = useTransform(progress, [start, start + 0.06], [0, 1]);
  const y = useTransform(progress, [start, start + 0.06], [8, 0]);
  const pos = ["left-4 top-4", "right-4 top-8", "left-6 bottom-5", "right-5 bottom-4"][index];
  return (
    <motion.span
      style={{ opacity, y }}
      className={`absolute ${pos} bg-white/90 backdrop-blur border border-line rounded-full px-3 py-1.5 text-[10px] font-grotesk font-bold tracking-[0.1em] text-body shadow-card`}
    >
      {LABELS[index]}
    </motion.span>
  );
}
