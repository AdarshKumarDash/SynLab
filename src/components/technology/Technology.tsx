"use client";
import { useState } from "react";
import { TECH_PILLARS } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { Radar, SlidersHorizontal, Boxes, MonitorSmartphone } from "lucide-react";

const ICONS = { sense: Radar, control: SlidersHorizontal, modules: Boxes, digital: MonitorSmartphone } as const;

export default function Technology() {
  const [sel, setSel] = useState(TECH_PILLARS[0].name);
  const c = TECH_PILLARS.find((t) => t.name === sel)!;
  const Icon = ICONS[c.icon as keyof typeof ICONS];
  return (
    <section id="technology" className="py-24 md:py-32 border-t border-line tint-blue scroll-mt-16" aria-label="Technology behind the experience">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="12"
          eyebrow="TECHNOLOGY"
          title={<>THE TECHNOLOGY<br />BEHIND THE <span className="text-cyanx">EXPERIENCE.</span></>}
          lede="Enough to trust the concept — never enough to copy it. Four ideas work together so learners can focus on science, not setup."
        />
        <div className="mt-10 grid lg:grid-cols-[1fr_1fr] gap-6">
          <ul className="grid sm:grid-cols-2 gap-2" aria-label="Technology pillars">
            {TECH_PILLARS.map((t) => (
              <li key={t.name}>
                <button onClick={() => setSel(t.name)} aria-pressed={sel === t.name}
                  className={`w-full text-left font-grotesk px-4 py-5 rounded-card border transition card-hover ${sel === t.name ? "border-cyanx bg-white shadow-lift ring-2 ring-cyanx/20" : "border-line bg-white/80"}`}>
                  <span className="block font-bold tracking-tight text-ink">{t.name}</span>
                  <span className="block text-[11px] text-muted mt-1 tracking-wider">{t.fn}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="card p-6 md:p-8 relative overflow-hidden" aria-live="polite">
            <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />
            <div className="relative" key={c.name}>
              <span className="w-12 h-12 rounded-2xl bg-ink text-white grid place-items-center"><Icon size={22} /></span>
              <p className="font-grotesk text-[12px] font-semibold tracking-[0.14em] text-cyanx mt-5">CAPABILITY</p>
              <h3 className="font-grotesk text-3xl font-bold mt-2 text-ink">{c.name}</h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div><dt className="text-[11px] font-semibold tracking-[0.14em] text-muted font-grotesk">WHAT IT DOES</dt><dd className="mt-1 text-ink font-medium">{c.fn}</dd></div>
                <div><dt className="text-[11px] font-semibold tracking-[0.14em] text-muted font-grotesk">WHY IT MATTERS FOR LEARNING</dt><dd className="mt-1 text-body leading-relaxed">{c.role}</dd></div>
              </dl>
              <p className="mt-5 text-[11px] text-muted">Conceptual illustration — implementation details stay with the team.</p>
            </div>
          </div>
        </div>
        <Takeaway>Sensing, control, modularity and a digital layer — combined so the experience feels simple, even though the thinking behind it isn&apos;t.</Takeaway>
        <Reveal className="mt-8 flex flex-wrap gap-4">
          <a href="#dashboard" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4">EXPLORE THE DEMO →</a>
          <span className="self-center text-[12px] text-muted">Interactive concept demonstration using simulated values.</span>
        </Reveal>
      </div>
    </section>
  );
}
