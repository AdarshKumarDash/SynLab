"use client";
import { Reveal, SectionHead, Takeaway, useInViewOnce } from "../ui/primitives";
import { motion, useReducedMotion } from "framer-motion";
import { Package, Eye, Activity, Blocks, ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Package, title: "Portable structure", body: "A modular form designed to pack down, travel and set up where learning happens." },
  { icon: Eye, title: "Hands-on observation", body: "Close observation with a guided slide setup — see more than the textbook shows." },
  { icon: Activity, title: "Sensing + support", body: "Built-in sensing follows conditions while supportive systems help shape them for each activity." },
  { icon: Blocks, title: "Expandable possibilities", body: "Interchangeable areas leave room to grow into new activities and subjects." },
];

/** Abstract assembly visual — soft shapes converging. Idea becoming tangible, never a build guide. */
function AssemblyVisual({ assemble }: { assemble: boolean }) {
  const reduce = useReducedMotion();
  const shapes = [
    { x: -86, y: -30, c: "#0C6FBD", r: 30, o: 0.16, d: 0 },
    { x: 86, y: -34, c: "#0E9F9A", r: 26, o: 0.16, d: 0.1 },
    { x: -52, y: 62, c: "#E8A33D", r: 22, o: 0.18, d: 0.2 },
    { x: 62, y: 58, c: "#0C6FBD", r: 24, o: 0.14, d: 0.3 },
  ];
  return (
    <div className="relative h-56 md:h-64 overflow-hidden rounded-card border border-line bg-gradient-to-b from-white to-cream" aria-hidden>
      <div className="absolute inset-0 sci-grid-fine opacity-60" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      {/* Converging abstract forms */}
      {shapes.map((s, i) => (
        <motion.span
          key={i}
          initial={false}
          animate={{
            x: assemble || reduce ? 0 : s.x * 1.6,
            y: assemble || reduce ? 0 : s.y * 1.6,
            opacity: assemble ? 1 : 0.35,
            scale: assemble ? 1 : 0.8,
          }}
          transition={{ duration: 0.9, delay: s.d, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-1/2 -ml-8 -mt-8 block w-16 h-16 rounded-3xl blur-[1px]"
          style={{ background: s.c, opacity: s.o }}
        />
      ))}
      {/* Central tangible form */}
      <motion.div
        initial={false}
        animate={{ scale: assemble ? 1 : 0.86, opacity: assemble ? 1 : 0.6, y: assemble ? 0 : 10 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-48 rounded-2xl bg-white border border-cyanx/30 shadow-lift px-5 py-4 text-center"
      >
        <p className="font-grotesk font-bold tracking-tight text-lg text-ink">SynLab <span className="text-cyanx">ONE</span></p>
        <p className="text-[10px] font-grotesk font-bold tracking-[0.14em] text-cyanx mt-1">BASE MODEL</p>
        <span className="mx-auto mt-2 block h-1.5 w-16 rounded-full bg-gradient-to-r from-cyanx to-bluex" />
      </motion.div>
      {/* Supporting labels fade/slide in */}
      {[
        { t: "Portable", cls: "left-4 top-4" },
        { t: "Modular", cls: "right-4 top-8" },
        { t: "Guided", cls: "left-6 bottom-5" },
        { t: "Hands-on", cls: "right-5 bottom-4" },
      ].map((l, i) => (
        <motion.span
          key={l.t}
          initial={false}
          animate={{ opacity: assemble ? 1 : 0, y: assemble ? 0 : 8 }}
          transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
          className={`absolute ${l.cls} bg-white/90 backdrop-blur border border-line rounded-full px-3 py-1.5 text-[10px] font-grotesk font-bold tracking-[0.1em] text-body shadow-card`}
        >
          {l.t}
        </motion.span>
      ))}
    </div>
  );
}

export default function SynLabOne() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  return (
    <section id="one" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="SynLab ONE">
      <div className="mx-auto max-w-7xl px-5 md:px-8" ref={ref}>
        <SectionHead
          index="06"
          eyebrow="SYNLAB ONE · THE FIRST STEP"
          title={<>MEET SYNLAB <span className="text-cyanx">ONE.</span></>}
          lede="The base-model prototype — proof that a portable, modular laboratory can feel like one coherent experience, not a box of parts."
        />
        <motion.div
          initial={false}
          animate={{ opacity: inView ? 1 : 0.4, y: inView ? 0 : 12 }}
          transition={{ duration: 0.7 }}
          className="mt-6 inline-flex flex-wrap items-center gap-2"
        >
          <span className="font-grotesk text-[12px] font-bold tracking-[0.10em] border border-cyanx/40 text-cyanx px-4 py-2 rounded-full bg-white shadow-card">WORKING PROTOTYPE · BASE MODEL</span>
          <span className="text-[13px] text-muted font-medium">What it is — not how to build it.</span>
        </motion.div>

        {/* Product-reveal moment */}
        <Reveal className="mt-8">
          <AssemblyVisual assemble={inView} />
          <p className="mt-2 text-[11px] text-muted text-center">Concept visual — an idea becoming tangible. Implementation details intentionally not shown.</p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={Math.min(i * 0.06, 0.2)}>
              <div className="card p-6 card-hover h-full group">
                <span className="inline-grid place-items-center w-11 h-11 rounded-2xl bg-tint text-cyanx transition-colors group-hover:bg-cyanx group-hover:text-white"><h.icon size={20} aria-hidden /></span>
                <h3 className="font-grotesk font-bold text-lg mt-4 text-ink">{h.title}</h3>
                <p className="text-body mt-2 text-[14px] leading-relaxed">{h.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="card p-5">
            <h3 className="font-grotesk text-[13px] font-bold tracking-[0.06em] text-leaf">SYNLAB ONE IS ✓</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-body list-disc pl-5">
              <li>A tangible starting point for portable practical learning</li>
              <li>A modular platform for varied activities</li>
              <li>A guided experience pairing doing with observing</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="font-grotesk text-[13px] font-bold tracking-[0.06em] text-muted">SYNLAB ONE IS NOT ✕</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-body list-disc pl-5">
              <li>A finished commercial product</li>
              <li>A replacement for every school laboratory</li>
              <li>A DIY kit with public build instructions</li>
            </ul>
          </div>
        </div>
        <Takeaway>ONE turns the idea into something tangible and testable — now explore it visually, then see who it could help.</Takeaway>
        <Reveal className="mt-8 flex flex-wrap gap-4">
          <a href="#lab" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4 pressable">SEE THE CONCEPT ↓</a>
          <a href="#audiences" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4 pressable">WHO IS IT FOR? →</a>
        </Reveal>
        {/* TODAY → NEXT interactive transition */}
        <Reveal className="mt-6 grid sm:grid-cols-[1fr_auto_1fr] gap-3 items-stretch" aria-label="Today and next">
          <div className="card p-5 !bg-gradient-to-r !from-tint !to-white card-hover group">
            <p className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-cyanx">TODAY · SYNLAB ONE</p>
            <p className="text-[13px] text-body mt-1.5 leading-relaxed">Base-model prototype — tangible, demonstrable and testable.</p>
            <span className="mt-2 inline-block text-[11px] font-grotesk font-bold text-ink">You are here ●</span>
          </div>
          <div className="hidden sm:grid place-items-center text-muted" aria-hidden>
            <span className="grid place-items-center w-9 h-9 rounded-full border border-line bg-white font-bold">↓</span>
          </div>
          <a href="#future" className="card p-5 card-hover block group relative overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyanx/0 via-cyanx/60 to-cyanx/0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
            <p className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-muted group-hover:text-cyanx transition-colors">NEXT · SYNLAB PRO <ArrowRight size={12} className="inline group-hover:translate-x-1 transition-transform" /></p>
            <p className="text-[13px] text-body mt-1.5 leading-relaxed">Future / proposed direction — a vision, not a current product.</p>
            <span className="mt-2 inline-block text-[11px] font-grotesk font-semibold text-muted border border-dashed border-line rounded-full px-2.5 py-1">FUTURE / PROPOSED — VISION, NOT A PRODUCT</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
