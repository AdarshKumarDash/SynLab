"use client";
import { useRef, useState } from "react";
import { ROADMAP } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import CoreNetwork from "../cinematic/CoreNetwork";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Telescope, Building2 } from "lucide-react";

const ICONS = [Check, Telescope, Building2];

/**
 * DepthWrap — foreground / midground / horizon drift.
 * ONE travels least and arrives sharpest; CORE drifts furthest and stays
 * softest, so maturity reads as depth. Transform + opacity only.
 */
function DepthWrap({ index, children }: { index: number; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "end 0.45"] });
  const cfg = [
    { y: [26, -14] as [number, number], s: [0.985, 1] as [number, number], o: [0.65, 1] as [number, number] },
    { y: [54, -22] as [number, number], s: [0.965, 0.995] as [number, number], o: [0.5, 1] as [number, number] },
    { y: [88, -30] as [number, number], s: [0.945, 0.99] as [number, number], o: [0.4, 1] as [number, number] },
  ][index];
  const y = useTransform(scrollYProgress, [0, 1], cfg.y);
  const scale = useTransform(scrollYProgress, [0, 1], cfg.s);
  const opacity = useTransform(scrollYProgress, [0, 1], cfg.o);
  if (reduce) return <div className="h-full">{children}</div>;
  return (
    <motion.div ref={ref} style={{ y, scale, opacity }} className="h-full will-change-transform">
      {children}
    </motion.div>
  );
}

export default function Roadmap() {
  const [sel, setSel] = useState("one");
  const reduce = useReducedMotion();
  const active = ROADMAP.find((r) => r.id === sel)!;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <section id="roadmap" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16 relative overflow-hidden" aria-label="The SynLab roadmap">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_8%,rgba(12,111,189,0.08),transparent_70%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="THE SYNLAB ROADMAP · ONE → PRO → CORE"
          title={<>ONE IDEA.<br />A CLEAR <span className="text-cyanx">PATH FORWARD.</span></>}
          lede="ONE is tangible today. PRO and CORE describe where the concept could go next — clearly labelled as future directions, never as current products."
        />

        {/* Quick navigation [ ONE ] [ PRO ] [ CORE ] */}
        <Reveal className="mt-8">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-line bg-paper p-2" role="group" aria-label="Product selector — ONE, PRO, CORE">
            {ROADMAP.map((r) => {
              const isSel = sel === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => { setSel(r.id); }}
                  aria-pressed={isSel}
                  className={`pressable font-grotesk text-[13px] font-bold tracking-[0.08em] px-6 py-3 rounded-xl border transition-all ${
                    isSel
                      ? r.id === "one"
                        ? "bg-ink text-white border-ink shadow-lift"
                        : "bg-white border-cyanx text-ink shadow-card ring-2 ring-cyanx/20"
                      : "bg-transparent border-transparent text-body hover:text-ink hover:bg-white"
                  }`}
                >
                  {r.id.toUpperCase()}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-[13px] text-body" aria-live="polite">
            {active.id === "one" && <><strong className="text-ink">ONE:</strong> CURRENT · BASE MODEL</>}
            {active.id === "pro" && <><strong className="text-ink">PRO:</strong> FUTURE · ADVANCED DIRECTION</>}
            {active.id === "core" && <><strong className="text-ink">CORE:</strong> FUTURE · INSTITUTIONAL DIRECTION</>}
          </p>
        </Reveal>

        {/* Visual progression TODAY → NEXT → BROADER FUTURE */}
        <ol className="mt-8 grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 items-stretch" aria-label="Roadmap progression">
          {ROADMAP.map((r, i) => {
            const Icon = ICONS[i];
            const isCurrent = r.id === "one";
            const isSel = sel === r.id;
            return (
              <li key={r.id} className="contents">
                <DepthWrap index={i}>
                <button
                  onClick={() => setSel(r.id)}
                  aria-pressed={isSel}
                  className={`h-full w-full text-left rounded-card border p-6 relative overflow-hidden transition-all duration-300 card-hover pressable group ${
                    isCurrent
                      ? "border-cyanx bg-white shadow-lift ring-2 ring-cyanx/25"
                      : "border-dashed border-line bg-white/70 hover:border-cyanx/50"
                  } ${isSel ? "!border-cyanx" : ""}`}
                >
                  {isCurrent && <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyanx to-bluex" aria-hidden />}
                  {!isCurrent && <span className="absolute inset-0 dot-grid opacity-30" aria-hidden />}
                  <span className="flex items-center justify-between gap-2">
                    <span className={`font-grotesk text-[10px] font-bold tracking-[0.14em] px-2.5 py-1 rounded-full border ${
                      isCurrent ? "bg-cyanx text-white border-cyanx" : "text-muted border-line bg-paper"
                    }`}>
                      {r.badgeShort} · {r.stage}
                    </span>
                    <span className={`grid place-items-center w-9 h-9 rounded-xl transition-colors ${isCurrent ? "bg-cyanx text-white" : "bg-paper text-muted group-hover:bg-tint group-hover:text-cyanx"}`}>
                      <Icon size={17} aria-hidden />
                    </span>
                  </span>
                  <span className="block font-grotesk font-bold text-2xl mt-4 text-ink tracking-tight">{r.name}</span>
                  <span className="block font-grotesk text-[11px] font-bold tracking-[0.12em] text-muted mt-1">{r.sub}</span>
                  <span className="block text-[13px] text-body mt-3 leading-relaxed line-clamp-3">{r.body}</span>
                  <span className={`mt-4 inline-flex items-center gap-1.5 font-grotesk text-[11px] font-bold tracking-[0.1em] ${isCurrent ? "text-cyanx" : "text-muted group-hover:text-cyanx"} transition-colors`}>
                    {isSel ? "SELECTED" : "VIEW"} <ArrowRight size={12} aria-hidden />
                  </span>
                  {!isCurrent && <span className="absolute top-4 right-4 sr-only">Future direction</span>}
                </button>
                </DepthWrap>
                {i < ROADMAP.length - 1 && (
                  <span className="hidden md:grid place-items-center text-muted px-1" aria-hidden>
                    <span className="grid place-items-center w-9 h-9 rounded-full border border-line bg-white font-bold text-cyanx">→</span>
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {/* Active detail panel */}
        <div className="mt-6 card p-6 md:p-10 relative overflow-hidden" aria-live="polite">
          <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -8 }}
              transition={{ duration: 0.32 }}
              className="relative grid lg:grid-cols-[1.2fr_1fr] gap-8"
            >
              <div>
                <p className={`font-grotesk text-[11px] font-bold tracking-[0.14em] ${active.id === "one" ? "text-cyanx" : "text-sunny"}`}>
                  {active.status}
                </p>
                <h3 className="font-grotesk text-3xl md:text-4xl font-bold mt-2 text-ink tracking-tight">
                  {active.name} <span className="text-cyanx">·</span> <span className="text-lg md:text-xl font-semibold text-body">{active.sub}</span>
                </h3>
                <p className="text-body mt-4 leading-relaxed max-w-xl">{active.body}</p>
                <div className="mt-5 flex flex-wrap gap-2" aria-label={`${active.name} focus areas`}>
                  {active.points.map((p) => (
                    <span key={p} className={`font-grotesk text-[12px] font-semibold px-3.5 py-1.5 rounded-full border ${
                      active.id === "one" ? "border-cyanx/30 bg-tint text-ink" : "border-dashed border-line bg-paper text-body"
                    }`}>
                      {p}
                    </span>
                  ))}
                </div>
                {active.id !== "one" && (
                  <p className="mt-4 text-[11px] font-grotesk font-bold tracking-[0.1em] text-sunny border border-dashed border-[#F0D9A8] bg-[#FDF3E2] rounded-xl px-4 py-2.5 inline-block">
                    FUTURE / PROPOSED — VISION, NOT A CURRENT CAPABILITY
                  </p>
                )}
                {active.id === "core" && <CoreNetwork />}
              </div>
              <div className="flex flex-col justify-center gap-3">
                <div className={`rounded-2xl border p-5 ${active.id === "one" ? "border-cyanx/30 bg-gradient-to-b from-white to-tint" : "border-line bg-paper"}`}>
                  <p className="font-grotesk text-[11px] font-bold tracking-[0.12em] text-muted">
                    {active.id === "one" ? "TODAY · WHAT EXISTS" : active.id === "pro" ? "NEXT · WHAT IT COULD BECOME" : "BROADER FUTURE · WHERE IT COULD REACH"}
                  </p>
                  <p className="text-sm text-body mt-2 leading-relaxed">
                    {active.id === "one" && "A tangible base-model prototype — portable, modular, guided, demonstrable and testable."}
                    {active.id === "pro" && "An advanced research-oriented direction — broader measurements and deeper investigation, proposed for the future."}
                    {active.id === "core" && "An institutional direction — bringing SynLab-style practical learning into schools and larger learning environments."}
                  </p>
                </div>
                <button
                  onClick={() => scrollTo(active.href)}
                  className={`${active.id === "one" ? "btn-primary" : "btn-ghost"} font-grotesk text-[13px] font-bold tracking-[0.08em] px-6 py-4 pressable text-center`}
                >
                  {active.id === "one" ? "MEET SYNLAB ONE →" : active.id === "pro" ? "EXPLORE THE PRO VISION →" : "READ THE CORE DIRECTION ↓"}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Persistent CORE anchor so footer/product links always resolve */}
        <span id="roadmap-core" className="block h-0 w-0" aria-hidden />

        <p className="mt-4 text-[12px] text-muted text-center max-w-2xl mx-auto">
          Only SynLab ONE represents the current base-model prototype. PRO and CORE describe future directions.
        </p>
        <Takeaway>ONE is the tangible beginning. PRO imagines deeper investigation. CORE imagines wider reach — one idea, growing with purpose.</Takeaway>
      </div>
    </section>
  );
}
