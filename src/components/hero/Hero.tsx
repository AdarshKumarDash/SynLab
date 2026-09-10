"use client";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Magnet, Microscope, Sparkles } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false, loading: () => <div className="w-full h-full sci-grid-fine opacity-60" aria-hidden /> });

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative min-h-screen flex flex-col overflow-hidden tint-hero" aria-label="SynLab hero">
      <div className="pointer-events-none absolute inset-0 sci-grid opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_70%_30%,rgba(12,111,189,0.10),transparent_70%)]" aria-hidden />
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E8A33D]/10 blur-2xl" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 md:px-8 w-full pt-28 md:pt-32 grid lg:grid-cols-2 gap-10 items-center flex-1">
        <div>
          <motion.p initial={{ opacity: 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 font-grotesk text-[12px] font-semibold tracking-[0.14em] text-cyanx bg-cyanx/10 border border-cyanx/25 rounded-full px-4 py-1.5">
            BY TEAM INNOVEXA · THE PORTABLE LAB
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: reduce ? 0 : 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-grotesk font-bold leading-[0.98] md:leading-[0.98] tracking-tight mt-5 text-6xl md:text-8xl text-ink">
            Syn<span className="text-cyanx">Lab</span>
            <span className="block text-lg md:text-2xl font-semibold tracking-[0.08em] text-body mt-4">THE PORTABLE LAB</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.8 }} className="font-editorial italic mt-6 text-2xl md:text-[2rem] text-body max-w-xl leading-snug">
            “Bringing the lab closer to every learner.”
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42, duration: 0.8 }} className="mt-4 text-body text-[15px] md:text-base leading-relaxed max-w-xl">
            SynLab is a <strong className="text-ink font-semibold">portable, modular laboratory concept</strong> designed
            to make practical science learning more accessible, flexible and approachable — beyond fixed rooms and rigid schedules.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 flex flex-wrap gap-4">
            <a href="#idea" className="btn-primary font-grotesk text-[13px] tracking-[0.08em] px-7 py-4 font-bold pressable">EXPLORE SYNLAB →</a>
            <a href="#story" className="btn-ghost font-grotesk text-[13px] tracking-[0.08em] px-7 py-4 font-semibold pressable">OUR STORY</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.62 }} className="mt-5">
            <a
              href="#idea"
              className="group inline-flex items-center gap-2.5 text-[12px] font-grotesk font-semibold tracking-[0.14em] text-body hover:text-cyanx transition-colors"
              aria-label="Explore the lab — begin the guided story"
            >
              <span className="relative grid place-items-center w-8 h-8 rounded-full border border-cyanx/40 bg-white shadow-card overflow-hidden">
                <span className="absolute inset-0 rounded-full bg-cyanx/10 scale-100 group-hover:scale-125 transition-transform" aria-hidden />
                <ArrowDown size={14} className="relative text-cyanx group-hover:translate-y-0.5 transition-transform" aria-hidden />
              </span>
              EXPLORE THE LAB
              <span className="hidden sm:inline text-muted font-medium tracking-normal normal-case">— a guided walk through the idea</span>
            </a>
          </motion.div>
          <dl className="mt-10 grid grid-cols-3 max-w-md gap-4 text-center">
            {[["Portable", "Beyond fixed labs"], ["Hands-on", "Real experimentation"], ["Guided", "Structured learning"]].map(([v, l]) => (
              <div key={l} className="card py-4 px-2">
                <dt className="sr-only">{l}</dt>
                <dd className="font-grotesk font-bold text-base md:text-lg text-ink">{v}</dd>
                <dd className="text-[11px] font-medium text-muted mt-1">{l}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-[11px] text-muted flex items-center gap-1.5"><Sparkles size={12} className="text-cyanx" /> An exciting new way to experience practical science.</p>
        </div>
        <div className="relative h-[420px] md:h-[560px] card overflow-hidden group" role="img" aria-label="Abstract concept of the SynLab portable modular laboratory idea">
          <div className="absolute inset-0 dot-grid opacity-60" aria-hidden />
          <HeroScene />
          <div className="pointer-events-none absolute top-5 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-full text-[11px] font-semibold font-grotesk text-ink shadow-card border border-line transition-transform duration-300 group-hover:-translate-y-0.5">Portable concept</div>
          <div className="pointer-events-none absolute top-1/2 right-3 bg-white/90 backdrop-blur px-3 py-2 rounded-full text-[11px] font-semibold font-grotesk text-ink shadow-card border border-line flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-0.5"><Microscope size={12} /> Guided observation</div>
          <div className="pointer-events-none absolute bottom-5 left-4 bg-ink text-white px-3 py-2 rounded-full text-[11px] font-semibold font-grotesk flex items-center gap-2 transition-transform duration-300 group-hover:translate-y-0.5"><Magnet size={12} /> Modular design</div>
          <div className="pointer-events-none absolute bottom-5 right-4 hidden md:block text-[10px] font-grotesk font-semibold tracking-[0.12em] text-muted bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-line">CONCEPT VISUAL · NOT A BUILD GUIDE</div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-8 w-full">
        <nav aria-label="Start the journey" className="flex flex-wrap gap-2 mb-5">
          {[["The idea", "#idea"], ["Why it exists", "#why"], ["The answer", "#answer"], ["Who it's for", "#audiences"], ["The prototype", "#one"], ["What's next", "#future"]].map(([label, href]) => (
            <a key={href} href={href} className="font-grotesk text-[11px] font-semibold tracking-[0.08em] px-3.5 py-2 rounded-full border border-line bg-white text-body hover:border-cyanx hover:text-cyanx transition">{label.toUpperCase()}</a>
          ))}
        </nav>
        <div className="flex items-center gap-6 text-[11px] font-semibold tracking-[0.14em] text-muted font-grotesk border-t border-line pt-5">
          <span className="hidden md:inline">SCROLL TO BEGIN</span>
          <ArrowDown size={14} className="animate-bounce text-cyanx" aria-hidden />
        </div>
      </div>
    </section>
  );
}
