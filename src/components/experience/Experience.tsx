"use client";
import { useState } from "react";
import { EXPERIENCE_STEPS } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MousePointerClick, PackageOpen, FlaskConical, Eye, Lightbulb, Sparkles } from "lucide-react";

const ICONS = [MousePointerClick, PackageOpen, FlaskConical, Eye, Lightbulb, Sparkles];
const HINTS = [
  "Pick what sparks you",
  "Get ready, simply",
  "Try it with your hands",
  "Notice what changes",
  "Link it to the idea",
  "Ask what comes next",
];

export default function Experience() {
  const [active, setActive] = useState(2); // default to EXPLORE — the heart
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="How the experience feels">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="04"
          eyebrow="HOW THE EXPERIENCE FEELS"
          title={<>FROM CURIOUS<br />TO <span className="text-cyanx">CAPABLE.</span></>}
          lede="No engineering manual needed — here's what a SynLab session feels like from the learner's seat: six simple moves, same rhythm every time. Hover or tap a step."
        />
        {/* Desktop: expanding steps */}
        <ol className="mt-10 hidden lg:flex gap-3 items-stretch" aria-label="Experience steps">
          {EXPERIENCE_STEPS.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isActive = active === i;
            return (
              <li key={s.step} className="flex-1 min-w-0">
                <motion.button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-label={`Step ${s.step}: ${s.title}`}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0.72 }}
                  transition={{ duration: reduce ? 0 : 0.3 }}
                  className={`w-full text-left rounded-card border p-5 relative overflow-hidden transition-all duration-300 min-h-[240px] flex flex-col ${
                    isActive
                      ? "border-cyanx bg-white shadow-lift ring-2 ring-cyanx/20"
                      : "border-line bg-white/80 hover:border-cyanx/50 hover:opacity-100"
                  }`}
                  style={{ flexGrow: isActive ? 1.7 : 1 }}
                >
                  <span className={`font-grotesk font-bold text-4xl select-none transition-colors ${isActive ? "text-cyanx/20" : "text-cream"}`} aria-hidden>
                    {s.step}
                  </span>
                  <span className={`inline-grid place-items-center w-9 h-9 rounded-xl mt-2 transition-colors ${isActive ? "bg-cyanx text-white" : "bg-tint text-cyanx"}`}>
                    <Icon size={17} aria-hidden />
                  </span>
                  <span className="font-grotesk text-[10px] font-bold tracking-[0.14em] text-cyanx mt-3">STEP {s.step}</span>
                  <span className="font-grotesk font-bold text-lg text-ink mt-1">{s.title}</span>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: reduce ? 0 : 0.28 }}
                        className="overflow-hidden"
                      >
                        <span className="block text-body text-[14px] leading-relaxed mt-2">{s.body}</span>
                        <span className="block text-[11px] font-medium text-cyanx mt-2 italic">{HINTS[i]}</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {!isActive && <span className="block text-[12px] text-muted mt-2 leading-snug">{HINTS[i]}</span>}
                </motion.button>
              </li>
            );
          })}
        </ol>

        {/* Mobile / tablet: swipeable cards + tap to expand */}
        <ol className="mt-10 lg:hidden flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-5 px-5" aria-label="Experience steps">
          {EXPERIENCE_STEPS.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isActive = active === i;
            return (
              <li key={s.step} className="snap-center shrink-0 w-[78%] sm:w-[46%]">
                <button
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-expanded={isActive}
                  className={`w-full text-left card p-6 relative overflow-hidden transition-all duration-300 min-h-[220px] ${
                    isActive ? "!border-cyanx ring-2 ring-cyanx/20 shadow-lift" : ""
                  }`}
                >
                  <span className="font-grotesk font-bold text-5xl text-tint select-none absolute top-3 right-4" aria-hidden>{s.step}</span>
                  <span className={`inline-grid place-items-center w-10 h-10 rounded-xl relative transition-colors ${isActive ? "bg-cyanx text-white" : "bg-tint text-cyanx"}`}>
                    <Icon size={18} aria-hidden />
                  </span>
                  <span className="block font-grotesk text-[11px] font-bold tracking-[0.14em] text-cyanx mt-3 relative">STEP {s.step}</span>
                  <span className="block font-grotesk font-bold text-xl mt-1 text-ink relative">{s.title}</span>
                  <span className={`block text-body mt-2 leading-relaxed text-[14px] relative transition-all ${isActive ? "opacity-100" : "opacity-80 line-clamp-2"}`}>{s.body}</span>
                  <span className="block text-[11px] font-semibold text-cyanx mt-2 relative">{isActive ? HINTS[i] : "Tap to expand +"}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <p className="lg:hidden mt-2 text-[11px] text-muted">Swipe sideways · tap a card to expand.</p>

        {/* Progress through the six moves */}
        <div className="mt-6 flex items-center gap-2" aria-hidden>
          {EXPERIENCE_STEPS.map((s, i) => (
            <span key={s.step} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= active ? "bg-cyanx" : "bg-line"}`} />
          ))}
        </div>

        <Takeaway>The pattern never changes — choose, prepare, explore, observe, learn, discover — so confidence builds with every session.</Takeaway>
        <Reveal className="mt-8 flex flex-wrap gap-4">
          <a href="#story" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4 pressable">READ OUR STORY ↓</a>
          <a href="#one" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4 pressable">MEET SYNLAB ONE →</a>
        </Reveal>
      </div>
    </section>
  );
}
