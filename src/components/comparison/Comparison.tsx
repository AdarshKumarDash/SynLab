"use client";
import { useState } from "react";
import { COMPARISON } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";

export default function Comparison() {
  const [col, setCol] = useState<string>("SynLab");
  return (
    <section id="compare" className="py-24 md:py-32 border-t border-line tint-grey scroll-mt-16" aria-label="SynLab in context">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="12"
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
