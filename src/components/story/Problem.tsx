"use client";
import { useState } from "react";
import { PROBLEMS, KEY_FINDINGS } from "@/data/content";
import { Reveal, SectionHead, FactStrip, Takeaway, MethodNote } from "../ui/primitives";
import { AnimatePresence, motion } from "framer-motion";

export default function Problem() {
  const [active, setActive] = useState(0);
  const p = PROBLEMS[active];
  return (
    <section id="why" className="relative py-24 md:py-32 border-t border-line tint-grey scroll-mt-16" aria-label="Why SynLab exists">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="02"
          eyebrow="WHY SYNLAB EXISTS"
          title={<>SCIENCE IS MEANT<br />TO BE <span className="text-cyanx">EXPLORED.</span></>}
          lede="But practical experimentation can be limited by where it happens, when there's time, how it's guided — and whether it feels safe and reachable. Team Innovexa's stakeholder research confirmed these barriers are widely felt."
        />
        <Reveal className="mt-8">
          <FactStrip facts={KEY_FINDINGS} />
        </Reveal>
        <p className="mt-3 text-[12px] text-muted">From a 65-stakeholder survey (59 answered difficulty reasons). Select each lens to see it from a learner&apos;s perspective.</p>
        <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div role="tablist" aria-label="Barriers" className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
            {PROBLEMS.map((item, i) => (
              <button key={item.key} role="tab" aria-selected={active === i} onClick={() => setActive(i)}
                className={`text-left font-grotesk px-5 py-4 rounded-card border transition-all min-w-[180px] card-hover ${active === i ? "border-cyanx bg-white text-ink shadow-lift ring-2 ring-cyanx/20" : "bg-white/70 border-line text-body"}`}>
                <span className="inline-grid place-items-center w-7 h-7 rounded-full bg-tint text-cyanx text-[12px] font-bold">0{i + 1}</span>
                <span className="block text-2xl md:text-[1.7rem] font-bold tracking-tight mt-2 text-ink">{item.title}</span>
                <span className="block text-[12px] text-muted mt-1 font-medium">{item.question}</span>
              </button>
            ))}
          </div>
          <div className="card p-8 md:p-12 relative overflow-hidden min-h-[280px]">
            <div className="absolute inset-0 dot-grid opacity-50" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div key={p.key} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-grotesk text-[12px] font-semibold tracking-[0.14em] text-cyanx">{p.question.toUpperCase()}</p>
                  <span className="font-grotesk text-[12px] font-bold bg-ink text-white px-3 py-1 rounded-full">{p.stat}</span>
                </div>
                <p className="mt-4 text-xl md:text-2xl leading-relaxed max-w-xl text-ink font-medium">{p.body}</p>
                <dl className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-line bg-paper px-4 py-3">
                    <dt className="font-grotesk text-[10px] font-bold tracking-[0.12em] text-muted">WHAT WE HEARD</dt>
                    <dd className="mt-1 text-ink font-medium leading-relaxed">{p.detail}</dd>
                  </div>
                  <div className="rounded-xl border border-cyanx/25 bg-tint px-4 py-3">
                    <dt className="font-grotesk text-[10px] font-bold tracking-[0.12em] text-cyanx">WHAT IT MEANS</dt>
                    <dd className="mt-1 text-ink leading-relaxed">{p.implication}</dd>
                  </div>
                </dl>
                <div className="mt-8 h-2 w-full bg-cream rounded-full overflow-hidden" aria-hidden>
                  <motion.div className="h-full bg-gradient-to-r from-bluex to-cyanx rounded-full" initial={{ width: "8%" }} animate={{ width: `${((active + 1) / PROBLEMS.length) * 100}%` }} transition={{ duration: 0.5 }} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <Takeaway>SynLab was created to rethink that experience — not to replace every laboratory, but to bring practical exploration closer to more learners.</Takeaway>
        <MethodNote>Difficulty reasons use n=59 with multi-select, so shares sum above 100%. Access + demand use n=65. A small stakeholder sample — direction for design, not a census.</MethodNote>
        <Reveal className="mt-12 text-center">
          <p className="font-grotesk text-body font-semibold tracking-[0.18em] text-xs">SO WE ASKED:</p>
          <p className="font-editorial italic text-4xl md:text-6xl mt-4 text-ink">What if the laboratory <span className="text-cyanx not-italic font-grotesk font-bold">could come to you?</span></p>
          <a href="#answer" className="btn-accent inline-block mt-8 font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4">SEE THE ANSWER ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
