"use client";
import { useState } from "react";
import { AUDIENCES } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Presentation, School, HeartHandshake, FlaskConical, Telescope } from "lucide-react";

const ICONS = { student: GraduationCap, educator: Presentation, school: School, parent: HeartHandshake, hobby: FlaskConical, research: Telescope } as const;
const TINTS = ["#0C6FBD", "#0E9F9A", "#0C6FBD", "#E8A33D", "#0E9F9A", "#0C6FBD"];

export default function Audiences() {
  const [sel, setSel] = useState(0);
  const reduce = useReducedMotion();
  const a = AUDIENCES[sel];
  const Icon = ICONS[a.icon as keyof typeof ICONS];
  const tint = TINTS[sel % TINTS.length];
  return (
    <section id="audiences" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="Who SynLab is for">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="10"
          eyebrow="WHO IS IT FOR?"
          title={<>SCIENCE LOOKS DIFFERENT<br />FOR <span className="text-cyanx">EVERYONE.</span></>}
          lede="SynLab is designed as a flexible concept — the same portable idea, shaped to different needs. Find yourself below."
        />
        <div className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-2" aria-label="Audiences">
            {AUDIENCES.map((x, i) => {
              const isSel = sel === i;
              return (
              <li key={x.title}>
                <button onClick={() => setSel(i)} aria-pressed={isSel}
                  className={`w-full text-left font-grotesk px-5 py-4 rounded-card border transition-all duration-200 card-hover pressable ${isSel ? "border-cyanx bg-white shadow-lift ring-2 ring-cyanx/20" : "border-line bg-white/80"}`}>
                  <span className="flex items-center gap-2.5">
                    <span className={`w-1.5 h-8 rounded-full transition-colors ${isSel ? "bg-cyanx" : "bg-line"}`} aria-hidden />
                    <span>
                      <span className="block font-bold tracking-tight text-ink">{x.title}</span>
                      <span className="block text-[12px] text-muted mt-0.5">{x.line}</span>
                    </span>
                  </span>
                </button>
              </li>
              );
            })}
          </ul>
          <div className="card p-8 md:p-10 relative overflow-hidden !bg-gradient-to-b !from-white !to-tint" aria-live="polite">
            <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />
            <motion.div
              aria-hidden
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-2xl pointer-events-none"
              animate={{ backgroundColor: tint, opacity: 0.12 }}
              transition={{ duration: 0.5 }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -8 }}
                transition={{ duration: 0.32 }}
                className="relative"
              >
                <span className="w-12 h-12 rounded-2xl bg-ink text-white grid place-items-center"><Icon size={22} /></span>
                <p className="font-grotesk text-[12px] font-semibold tracking-[0.14em] text-cyanx mt-5">{a.title}</p>
                <h3 className="font-editorial italic text-3xl md:text-4xl mt-2 text-ink leading-tight md:leading-tight">“{a.line}”</h3>
                <p className="text-body mt-4 leading-relaxed">{a.body}</p>
                <p className="mt-5 text-[11px] text-muted">Positioned as possibilities for each group — not guarantees. SynLab complements existing learning, it doesn&apos;t replace teachers or labs.</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <Takeaway>One portable idea, six doorways in — whether you teach, learn, support or simply love asking why.</Takeaway>
        <Reveal className="mt-8">
          <a href="#usecases" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4 pressable">WHERE COULD IT GO? ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
