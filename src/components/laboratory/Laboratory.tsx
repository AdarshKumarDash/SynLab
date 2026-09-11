"use client";
import { useState } from "react";
import { LAB_ZONES } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const POS: Record<string, { assembled: { x: number; y: number }; exploded: { x: number; y: number }; w: string; h: string }> = {
  hub: { assembled: { x: 0, y: 0 }, exploded: { x: 0, y: -10 }, w: "w-56 md:w-72", h: "h-40 md:h-52" },
  carry: { assembled: { x: 0, y: 0 }, exploded: { x: -170, y: 110 }, w: "w-40 md:w-52", h: "h-20 md:h-24" },
  modules: { assembled: { x: 0, y: 0 }, exploded: { x: 180, y: 20 }, w: "w-36 md:w-44", h: "h-36 md:h-44" },
  sensing: { assembled: { x: 0, y: 0 }, exploded: { x: 170, y: -110 }, w: "w-44 md:w-56", h: "h-12" },
  support: { assembled: { x: 0, y: 0 }, exploded: { x: -160, y: -100 }, w: "w-36 md:w-48", h: "h-16" },
};

/** Camera spotlight — a soft "look here" glow that glides to the selected region. */
const SPOT: Record<string, { x: number; y: number }> = {
  hub: { x: 0, y: 0 },
  carry: { x: -52, y: 66 },
  modules: { x: 58, y: 12 },
  sensing: { x: 54, y: -66 },
  support: { x: -52, y: -62 },
};

export default function Laboratory() {
  const [mode, setMode] = useState<"assembled" | "deconstructed">("assembled");
  const [sel, setSel] = useState("hub");
  const reduce = useReducedMotion();
  const exploded = mode === "deconstructed";
  const zone = LAB_ZONES.find((z) => z.id === sel)!;

  return (
    <section id="lab" className="py-24 md:py-32 border-t border-line tint-hero relative overflow-hidden scroll-mt-16" aria-label="SynLab concept showcase">
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="THE CONCEPT, VISUALLY"
          title={<>ONE LAB. <span className="text-cyanx">MANY POSSIBILITIES.</span></>}
          lede="A conceptual look at the SynLab ONE experience — what each part means for the learner. This is an illustration of the idea, not a build guide."
        />
        <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Assemble or deconstruct">
          {(["assembled", "deconstructed"] as const).map((m) => (
            <button key={m} onClick={() => setMode(m)} aria-pressed={mode === m}
              className={`font-grotesk text-[13px] font-bold tracking-[0.08em] px-6 py-3 rounded-xl border transition card-hover ${mode === m ? "bg-ink text-white border-ink" : "bg-white text-body border-line"}`}>
              {m === "assembled" ? "◈ ASSEMBLED" : "◇ EXPLODED VIEW"}
            </button>
          ))}
          <p className="w-full text-xs text-muted mt-1" role="status">{exploded ? "Concept view — see how the experience separates into ideas. Select an area for what it means." : "One portable lab — select an area to see what it means for learning."}</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="card relative h-[440px] md:h-[520px] overflow-hidden flex items-center justify-center !bg-gradient-to-b !from-white !to-cream">
            <div className="absolute inset-0 sci-grid-fine opacity-70" aria-hidden />
            {/* Camera spotlight — glides behind the selected region: "look here" */}
            <motion.span
              aria-hidden
              className="absolute left-1/2 top-1/2 -ml-32 -mt-32 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(12,111,189,0.13), transparent 65%)" }}
              initial={false}
              animate={reduce ? { x: 0, y: 0 } : { x: SPOT[sel].x, y: SPOT[sel].y }}
              transition={{ type: "spring", stiffness: 60, damping: 18 }}
            />
            <div className="relative w-[300px] h-[300px]" role="group" aria-label={exploded ? "Conceptual exploded view of the SynLab experience — select an area" : "SynLab portable lab concept — select an area"}>
              {LAB_ZONES.map((z) => {
                const cfg = POS[z.id];
                const t = exploded ? cfg.exploded : cfg.assembled;
                const isSel = sel === z.id;
                return (
                  <motion.button
                    key={z.id}
                    onClick={() => setSel(z.id)}
                    aria-pressed={isSel}
                    aria-label={z.name}
                    initial={false}
                    animate={{ x: reduce ? 0 : t.x, y: reduce ? 0 : t.y, scale: isSel ? 1.07 : 1 }}
                    transition={{ type: "spring", stiffness: 90, damping: 16 }}
                    whileHover={reduce ? undefined : { scale: isSel ? 1.07 : 1.03 }}
                    className={`absolute left-1/2 top-1/2 -ml-20 md:-ml-28 -mt-16 ${cfg.w} ${cfg.h} rounded-card border text-left p-3 transition-all duration-300 focus-visible:outline-2
                      ${isSel ? "border-cyanx bg-white z-10 ring-2 ring-cyanx/25 shadow-lift -translate-y-0.5" : "border-line bg-white/95 shadow-card hover:border-cyanx/60 hover:-translate-y-0.5 hover:shadow-lift"}`}
                  >
                    <span className="font-grotesk text-[10px] font-bold tracking-[0.12em] text-cyanx">{z.name}</span>
                    <span className="block text-[11px] text-muted mt-1">{z.tag}</span>
                    {/* subtle glow cue for the selected area */}
                    {isSel && <span className="absolute inset-0 rounded-card pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(12,111,189,0.18), 0 0 24px -6px rgba(12,111,189,0.35)" }} aria-hidden />}
                    {exploded && <span className={`absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full border-2 border-white shadow-card ${isSel ? "bg-cyanx" : "bg-sunny"}`} aria-hidden />}
                  </motion.button>
                );
              })}
              {exploded && !reduce && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none text-cyanx" aria-hidden>
                  <line x1="50%" y1="45%" x2="18%" y2="75%" stroke="currentColor" strokeDasharray="5 5" opacity="0.55" strokeWidth="1.5" />
                  <line x1="50%" y1="45%" x2="82%" y2="50%" stroke="currentColor" strokeDasharray="5 5" opacity="0.55" strokeWidth="1.5" />
                  <line x1="50%" y1="45%" x2="80%" y2="18%" stroke="currentColor" strokeDasharray="5 5" opacity="0.55" strokeWidth="1.5" />
                </svg>
              )}
            </div>
            <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
              <span className="text-[10px] font-semibold tracking-[0.12em] font-grotesk text-muted">CONCEPT ILLUSTRATION · NOT A BUILD GUIDE</span>
              <span className="text-[10px] text-muted">Conceptual illustration only. Implementation details are intentionally not shown.</span>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Concept areas">
              {LAB_ZONES.map((z) => (
                <button key={z.id} role="tab" aria-selected={sel === z.id} onClick={() => setSel(z.id)}
                  className={`font-grotesk text-[12px] font-semibold px-3 py-2 rounded-full border ${sel === z.id ? "border-cyanx text-white bg-cyanx" : "border-line bg-white text-body hover:border-cyanx"}`}>{z.name}</button>
              ))}
            </div>
            <div className="card p-6 md:p-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={zone.id}
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduce ? 0 : -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-grotesk text-[12px] font-semibold tracking-[0.14em] text-cyanx">{zone.tag.toUpperCase()}</p>
                  <h3 className="font-grotesk text-2xl font-bold mt-2 text-ink">{zone.name}</h3>
                  <p className="text-body mt-3 leading-relaxed text-sm md:text-base">{zone.body}</p>
                  <dl className="mt-5 rounded-xl border border-line bg-paper px-4 py-3 text-[13px]">
                    <div className="flex gap-2"><dt className="font-grotesk font-bold text-muted text-[11px] tracking-[0.1em] shrink-0 mt-0.5">THE IDEA —</dt><dd className="text-body">{zone.concept}</dd></div>
                    <div className="flex gap-2 mt-2"><dt className="font-grotesk font-bold text-cyanx text-[11px] tracking-[0.1em] shrink-0 mt-0.5">FOR YOU —</dt><dd className="text-body">{zone.value}</dd></div>
                  </dl>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <figure className="card mt-8 p-4 md:p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/pilot-model.png" alt="Design concept illustration of the SynLab modular laboratory idea" className="w-full rounded-xl" loading="lazy" />
          <figcaption className="text-[11px] text-muted mt-3">Design concept illustration from Team Innovexa — shown to communicate the idea, not construction details.</figcaption>
        </figure>
        <Takeaway>One connected experience, five simple ideas — carry it, connect it, adapt it, follow it, explore with it.</Takeaway>
        <Reveal className="mt-8">
          <a href="#audiences" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4">WHO IS IT FOR? →</a>
        </Reveal>
      </div>
    </section>
  );
}
