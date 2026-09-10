"use client";
import { useState } from "react";
import { Reveal, SectionHead } from "../ui/primitives";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Leaf, Droplets, Microscope, Thermometer, FlaskConical, Globe } from "lucide-react";

const CHOICES = [
  {
    id: "env",
    icon: Leaf,
    label: "Environment",
    prompt: "What is changing around us?",
    reply: "Start with a question. Observe what changes. Follow the evidence. Discover what comes next.",
  },
  {
    id: "water",
    icon: Droplets,
    label: "Water",
    prompt: "What story does a sample tell?",
    reply: "Look closely. Compare what you see. Ask why it differs. Imagine what to explore further.",
  },
  {
    id: "observe",
    icon: Microscope,
    label: "Observation",
    prompt: "What do you notice up close?",
    reply: "Slow down and look again. Small details often lead to the biggest questions.",
  },
  {
    id: "conditions",
    icon: Thermometer,
    label: "Conditions",
    prompt: "How do surroundings shape outcomes?",
    reply: "Track what shifts over time. Patterns appear when you watch patiently.",
  },
  {
    id: "experiments",
    icon: FlaskConical,
    label: "Experiments",
    prompt: "What would you try first?",
    reply: "Begin with curiosity. Change one thing at a time. Let each result guide the next step.",
  },
  {
    id: "new",
    icon: Globe,
    label: "Something new",
    prompt: "What question is yours alone?",
    reply: "Every exploration starts the same way — with someone wondering “what if?”. Yours counts.",
  },
];

/**
 * "WHAT WOULD YOU EXPLORE?" — imagination / engagement only.
 * NOT an experiment guide. No procedures, recipes, measurements or
 * instructions of any kind.
 */
export default function WhatWouldYouExplore() {
  const [sel, setSel] = useState<string>("env");
  const reduce = useReducedMotion();
  const active = CHOICES.find((c) => c.id === sel)!;

  return (
    <section id="wonder" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="What would you explore?">
      <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
        <SectionHead
          index="15"
          eyebrow="IMAGINE"
          title={<>WHAT WOULD <span className="text-cyanx">YOU EXPLORE?</span></>}
          lede="SynLab is built around questions. Pick one and imagine where the exploration could begin."
        />
        <Reveal className="mt-8">
          <div className="flex flex-wrap justify-center gap-2.5" role="group" aria-label="Exploration themes">
            {CHOICES.map((c) => {
              const isSel = sel === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSel(c.id)}
                  aria-pressed={isSel}
                  className={`inline-flex items-center gap-2 font-grotesk text-[13px] font-bold px-5 py-3 rounded-full border transition-all duration-200 pressable ${
                    isSel
                      ? "bg-ink text-white border-ink shadow-lift"
                      : "bg-white text-body border-line hover:border-cyanx hover:text-cyanx"
                  }`}
                >
                  <c.icon size={15} aria-hidden />
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>
        <Reveal className="mt-6">
          <div className="card p-8 md:p-10 relative overflow-hidden !bg-gradient-to-b !from-white !to-tint max-w-2xl mx-auto" aria-live="polite">
            <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -8 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <span className="mx-auto grid place-items-center w-12 h-12 rounded-2xl bg-cyanx text-white">
                  <active.icon size={22} aria-hidden />
                </span>
                <p className="font-editorial italic text-2xl md:text-3xl mt-4 text-ink">“{active.prompt}”</p>
                <p className="text-body mt-3 leading-relaxed max-w-md mx-auto">{active.reply}</p>
                <p className="mt-4 text-[11px] text-muted">A moment to imagine — not instructions. Real activities happen with guidance and care.</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
