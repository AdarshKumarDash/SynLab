"use client";
import { useState } from "react";
import { COMPARISON } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Building, Monitor, Radio, Package } from "lucide-react";

const STAGE = {
  Traditional: { icon: Building, line: "A fixed room you visit — real benches, booked hours." },
  Virtual: { icon: Monitor, line: "A screen you watch — anywhere, simulated." },
  Remote: { icon: Radio, line: "Real equipment, at a distance — through a connection." },
  SynLab: { icon: Package, line: "A lab that comes to you — hands-on, where you are." },
} as const;

export default function Comparison() {
  const [col, setCol] = useState<string>("SynLab");
  const reduce = useReducedMotion();
  const V = STAGE[col as keyof typeof STAGE];
  return (
    <section id="compare" className="py-24 md:py-32 border-t border-line tint-grey scroll-mt-16" aria-label="SynLab in context">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="IN CONTEXT"
          title={<>WHY NOT JUST A<br />TRADITIONAL <span className="text-cyanx">LAB?</span></>}
          lede="Every way of learning science has strengths. SynLab isn't here to replace them — it's designed to complement the laboratory ecosystem."
        />
        <Reveal className="mt-8">
          <p className="text-sm text-body">Traditional · Virtual · Remote · SynLab. Tap a column to spotlight it.</p>
          <div className="mt-4 flex gap-2 flex-wrap" role="group" aria-label="Spotlight column">
            {["Traditional", "Virtual", "Remote", "SynLab"].map((c) => (
              <button key={c} onClick={() => setCol(c)} aria-pressed={col === c} className={`font-grotesk text-[12px] font-bold px-4 py-2 rounded-full border transition ${col === c ? "border-ink text-white bg-ink" : "border-line bg-white text-body hover:border-cyanx"}`}>{c.toUpperCase()}</button>
            ))}
          </div>
          {/* Transformation stage — the central visual reshapes with your choice */}
          <div className="card mt-4 p-6 md:p-8 relative overflow-hidden !bg-gradient-to-b !from-white !to-tint" aria-live="polite">
            <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div
                key={col}
                initial={{ opacity: 0, y: reduce ? 0 : 14, scale: reduce ? 1 : 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: reduce ? 0 : -10, scale: reduce ? 1 : 0.99 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center gap-5"
              >
                <span className={`shrink-0 grid place-items-center w-14 h-14 rounded-2xl transition-colors ${col === "SynLab" ? "bg-cyanx text-white shadow-lift" : "bg-tint text-cyanx"}`}>
                  <V.icon size={26} aria-hidden />
                </span>
                <span>
                  <span className="block font-grotesk text-[11px] font-bold tracking-[0.14em] text-cyanx">{col.toUpperCase()}</span>
                  <span className="block font-editorial italic text-xl md:text-2xl text-ink mt-1 leading-snug">“{V.line}”</span>
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="card mt-4 overflow-x-auto !p-0">
            <table className="w-full text-sm min-w-[640px]">
              <thead><tr className="font-grotesk text-[11px] font-bold tracking-[0.1em] text-muted border-b border-line bg-paper">
                <th className="text-left p-4">ASPECT</th>{["Traditional", "Virtual", "Remote", "SynLab"].map((h) => <th key={h} className={`p-4 text-left ${col === h ? "text-cyanx" : ""}`}>{h.toUpperCase()}</th>)}
              </tr></thead>
              <tbody>
                {COMPARISON.map((r) => (
                  <tr key={r.aspect} className="border-b border-line last:border-0 hover:bg-tint/60">
                    <th className="text-left p-4 font-semibold text-ink">{r.aspect}</th>
                    <td className={`p-4 ${col === "Traditional" ? "text-ink font-semibold" : "text-body"}`}>{r.trad}</td>
                    <td className={`p-4 ${col === "Virtual" ? "text-ink font-semibold" : "text-body"}`}>{r.virt}</td>
                    <td className={`p-4 ${col === "Remote" ? "text-ink font-semibold" : "text-body"}`}>{r.remote}</td>
                    <td className={`p-4 font-semibold ${col === "SynLab" ? "text-cyanx" : "text-ink"}`}>{r.syn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-muted mt-2">* Remote access still depends on infrastructure and connectivity. Simplified summary — each approach has contexts where it shines.</p>
        </Reveal>
        <Takeaway>Think addition, not replacement: SynLab is designed to complement the laboratory ecosystem — portable where others are fixed, hands-on where others are simulated.</Takeaway>
        <Reveal className="mt-8">
          <a href="#future" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">WHAT&apos;S NEXT? ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
