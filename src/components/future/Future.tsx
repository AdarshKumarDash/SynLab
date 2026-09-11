"use client";
import { useState } from "react";
import { PRO_CAPABILITIES, ONE_VS_PRO, READING_GUIDE } from "@/data/content";
import { Reveal, SectionHead, Takeaway, MethodNote } from "../ui/primitives";
import { BrainCircuit, Dna, FlaskConical, Gauge, Boxes } from "lucide-react";

const ICONS = [Gauge, FlaskConical, Dna, BrainCircuit, Boxes];

export default function Future() {
  const [sel, setSel] = useState(0);
  const C = PRO_CAPABILITIES[sel];
  const Icon = ICONS[sel];
  return (
    <section id="future" className="py-24 md:py-32 border-t border-line relative overflow-hidden tint-blue scroll-mt-16" aria-label="SynLab PRO future vision">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_15%,rgba(12,111,189,0.12),transparent_70%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="SYNLAB PRO · THE NEXT CHAPTER"
          title={<>WHERE COULD THIS <span className="text-cyanx text-glow">GO NEXT?</span></>}
          lede="SynLab PRO is envisioned as the advanced research-oriented direction of the platform, extending the portable laboratory concept toward deeper scientific investigation and more sophisticated measurement capabilities. Everything here is future / proposed — vision, not current capability."
        />
        <Reveal className="mt-6 flex flex-wrap items-center gap-2">
          <span className="inline-block font-grotesk text-[12px] font-bold tracking-[0.10em] bg-sunny/15 text-sunny border border-[#F0D9A8] px-4 py-2 rounded-full">FUTURE / PROPOSED — VISION, NOT A PRODUCT</span>
          <a href="#roadmap" className="font-grotesk text-[12px] font-bold tracking-[0.08em] text-body hover:text-cyanx border border-line bg-white rounded-full px-4 py-2 transition-colors">← BACK TO ROADMAP</a>
        </Reveal>
        <Reveal className="card mt-6 overflow-x-auto !p-0">
          <table className="w-full text-sm min-w-[640px]">
            <thead><tr className="font-grotesk text-[11px] font-bold tracking-[0.1em] text-muted border-b border-line bg-paper">
              <th className="text-left p-4">ASPECT</th><th className="text-left p-4">ONE · FIRST STEP</th><th className="text-left p-4 text-cyanx">PRO · VISION</th>
            </tr></thead>
            <tbody>
              {ONE_VS_PRO.map((r) => (
                <tr key={r.aspect} className="border-b border-line last:border-0 hover:bg-tint/60">
                  <th className="text-left p-4 font-semibold text-ink">{r.aspect}</th>
                  <td className="p-4 text-body">{r.one}</td>
                  <td className="p-4 text-body"><span className="font-grotesk text-[10px] font-bold tracking-[0.08em] text-sunny border border-[#F0D9A8] bg-[#FDF3E2] rounded-full px-2 py-0.5 mr-2">PROPOSED</span>{r.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-2 text-[12px] text-muted">Read left → right as “where we are” → “what we dream of”. Only the left column exists today.</p>
        <div className="mt-8 grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <ul className="space-y-2" aria-label="Future directions">
            {PRO_CAPABILITIES.map((p, i) => (
              <li key={p.title}>
                <button onClick={() => setSel(i)} aria-pressed={sel === i} className={`w-full text-left font-grotesk px-5 py-4 rounded-card border transition card-hover ${sel === i ? "border-cyanx bg-white shadow-lift ring-2 ring-cyanx/20" : "border-line bg-white/80"}`}>
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-muted">0{i + 1} · FUTURE DIRECTION</span>
                  <span className="block font-bold mt-1 text-ink">{p.title}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="card p-8 md:p-10 relative overflow-hidden !bg-gradient-to-b !from-white !to-tint" aria-live="polite" key={C.title}>
            {/* Blueprint of possibility — abstract drafting language, zero implementation */}
            <div className="absolute inset-0 sci-grid-fine opacity-70" aria-hidden />
            <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-dashed border-cyanx/25 pointer-events-none" aria-hidden />
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full border border-cyanx/15 pointer-events-none" aria-hidden />
            <div className="absolute -left-16 -bottom-16 w-52 h-52 rounded-full border border-dashed border-cyanx/20 pointer-events-none" aria-hidden />
            <div className="relative">
              <span className="w-12 h-12 rounded-2xl bg-ink text-white grid place-items-center"><Icon size={22} /></span>
              <h3 className="font-grotesk text-2xl md:text-3xl font-bold mt-5 text-ink">{C.title}</h3>
              <p className="text-body mt-3 leading-relaxed">{C.body}</p>
              <p className="mt-5 text-[11px] font-semibold tracking-[0.1em] font-grotesk text-sunny">FUTURE / PROPOSED DIRECTION — NO IMPLEMENTATION DETAIL SHARED</p>
            </div>
          </div>
        </div>
        <figure className="card mt-8 p-4 md:p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/future-sketch.png" alt="Concept sketch of a future portable SynLab direction" className="w-full rounded-xl" loading="lazy" />
          <figcaption className="text-[11px] text-muted mt-3">Early concept sketch from Team Innovexa — an illustration of ambition, not a product render or blueprint.</figcaption>
        </figure>
        <Takeaway>ONE turns the portable-science idea into something tangible and testable. PRO imagines how far it could go — broader questions, deeper insight, more learners reached.</Takeaway>
        <Reveal className="mt-6 card p-5 md:p-6 !border-dashed flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div>
            <p className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-muted">BEYOND PRO · SYNLAB CORE — FUTURE / VISION</p>
            <p className="text-sm text-body mt-1.5 leading-relaxed max-w-xl">SynLab CORE is envisioned as the broader institutional direction — bringing SynLab-style practical learning into schools, science programs and larger learning environments.</p>
          </div>
          <a href="#roadmap" className="btn-ghost shrink-0 font-grotesk text-[12px] font-bold tracking-[0.08em] px-6 py-3.5 pressable text-center">READ THE CORE DIRECTION →</a>
        </Reveal>
        <MethodNote>{READING_GUIDE.pro}</MethodNote>
        <Reveal className="mt-8 flex flex-wrap gap-4">
          <a href="#roadmap" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">BACK TO ROADMAP ↑</a>
          <a href="#impact" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">THE BIGGER PICTURE ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
