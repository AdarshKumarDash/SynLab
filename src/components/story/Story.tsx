"use client";
import { useState } from "react";
import { TIMELINE } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Story() {
  const [open, setOpen] = useState<string | null>("prototype");
  return (
    <section id="story" className="py-24 md:py-32 border-t border-line tint-grey scroll-mt-16" aria-label="Invention story">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="05"
          eyebrow="OUR STORY"
          title={<>THE JOURNEY OF<br />AN <span className="text-cyanx">INVENTION.</span></>}
          lede="How a frustration with fixed laboratories became a portable concept — told the way we'd tell it in person. Each chapter expands."
        />
        <Reveal className="mt-8">
          <ol className="flex flex-wrap gap-2" aria-label="Story at a glance">
            {TIMELINE.map((t) => (
              <li key={t.id}>
                <button onClick={() => { setOpen(t.id); document.getElementById(`story-${t.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }); }}
                  className={`font-grotesk text-[11px] font-bold tracking-[0.08em] px-3 py-2 rounded-full border transition ${open === t.id ? "bg-ink text-white border-ink" : "bg-white border-line text-body hover:border-cyanx hover:text-cyanx"}`}>
                  {t.step} · {t.title}
                </button>
              </li>
            ))}
          </ol>
        </Reveal>
        <div className="mt-12 max-w-4xl">
          {TIMELINE.map((t, i) => {
            const isOpen = open === t.id;
            return (
              <Reveal key={t.id} delay={Math.min(i * 0.04, 0.2)}>
                <div id={`story-${t.id}`} className={`border-l-2 pl-6 md:pl-8 pb-2 relative scroll-mt-28 ${isOpen ? "border-cyanx" : "border-line"}`}>
                  <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${isOpen ? "bg-cyanx border-cyanx shadow-soft" : "bg-white border-line"}`} aria-hidden />
                  <button onClick={() => setOpen(isOpen ? null : t.id)} aria-expanded={isOpen} className="w-full text-left py-4 group">
                    <span className="flex items-center justify-between gap-4">
                      <span className="font-grotesk font-bold text-xl md:text-2xl tracking-tight text-ink group-hover:text-cyanx transition-colors">
                        <span className="text-sm text-cyanx font-bold tracking-[0.12em] mr-4">{t.step}</span>{t.title}
                      </span>
                      <Plus size={18} className={`shrink-0 transition-transform ${isOpen ? "rotate-45 text-cyanx" : "text-muted"}`} aria-hidden />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                        <p className="pb-1 text-body leading-relaxed max-w-2xl bg-cream/60 border border-line rounded-card px-5 py-4">{t.body}</p>
                        <p className="py-3 text-[12px] text-muted font-grotesk font-semibold tracking-[0.06em]">
                          {i < TIMELINE.length - 1 ? `CHAPTER ${t.step} OF 06 — ${TIMELINE[i + 1].title} comes next.` : "THE STORY CONTINUES — meet the prototype below."}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Takeaway>From question to prototype in six chapters — each step tested against what learners and educators told us.</Takeaway>
        <Reveal className="mt-8">
          <a href="#one" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4">MEET SYNLAB ONE ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
