"use client";
import { useEffect, useState } from "react";
import { CONTACT_EMAIL } from "@/data/content";
import { Reveal, useInViewOnce } from "../ui/primitives";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const GROUPS = [
  { t: "Students & clubs", b: "Try the concept, ask questions, imagine what you'd explore.", verb: "Explore" },
  { t: "Educators & schools", b: "Discuss how portable practical work could complement your labs.", verb: "Discuss" },
  { t: "Collaborators", b: "Share ideas, feedback or possibilities for what comes next.", verb: "Imagine" },
];

function DriftShapes({ on }: { on: boolean }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  const shapes = [
    { l: "8%", t: "18%", s: 54, c: "rgba(12,111,189,0.10)", d: 0, dur: 9 },
    { l: "86%", t: "24%", s: 42, c: "rgba(14,159,154,0.12)", d: 1.2, dur: 11 },
    { l: "12%", t: "72%", s: 36, c: "rgba(232,163,61,0.14)", d: 0.6, dur: 10 },
    { l: "88%", t: "68%", s: 62, c: "rgba(12,111,189,0.08)", d: 2, dur: 12 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {shapes.map((sh, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={on ? { opacity: 1, y: [0, -14, 0] } : { opacity: 0 }}
          transition={
            on
              ? { opacity: { duration: 1.2, delay: sh.d * 0.3 }, y: { duration: sh.dur, repeat: Infinity, ease: "easeInOut", delay: sh.d } }
              : { duration: 0.4 }
          }
          className="absolute rounded-full border border-cyanx/15"
          style={{ left: sh.l, top: sh.t, width: sh.s, height: sh.s, background: sh.c }}
        />
      ))}
    </div>
  );
}

export default function Finale() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const reduce = useReducedMotion();

  return (
    <section id="finale" className="relative py-28 md:py-40 border-t border-line overflow-hidden tint-hero scroll-mt-16" aria-label="Final call to action">
      <div ref={ref} className="absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: inView ? 1 : 0.4, background: "radial-gradient(ellipse 55% 45% at 50% 40%, rgba(12,111,189,0.10), transparent 70%)" }}
        aria-hidden
      />
      <DriftShapes on={inView} />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="font-grotesk text-[12px] font-semibold tracking-[0.18em] text-cyanx">WHERE THIS LEADS</p>
          <h2 className="font-grotesk font-bold tracking-tight text-4xl md:text-6xl mt-4 text-ink leading-[1.05] md:leading-[1.05]">
            THE LAB SHOULDN&apos;T HAVE<br />TO STAY IN <span className="text-cyanx">ONE PLACE.</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-body text-base md:text-lg leading-relaxed">
            Let&apos;s make practical science easier to reach.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-8 grid sm:grid-cols-3 gap-3 text-left max-w-3xl mx-auto">
            {GROUPS.map((g) => (
              <div key={g.t} className="card px-4 py-4 card-hover group relative overflow-hidden">
                <p className="font-grotesk text-[12px] font-bold tracking-[0.08em] text-ink">{g.t.toUpperCase()}</p>
                <p className="text-[13px] text-body mt-1.5 leading-relaxed">{g.b}</p>
                <span className="mt-2.5 inline-flex items-center gap-1.5 font-grotesk text-[11px] font-bold tracking-[0.12em] text-cyanx opacity-60 group-hover:opacity-100 group-hover:gap-2.5 transition-all">
                  {g.verb.toUpperCase()} <span aria-hidden>→</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#top" className="btn-primary font-grotesk text-[13px] tracking-[0.08em] px-8 py-4 font-bold inline-flex items-center gap-2 pressable">EXPLORE SYNLAB <ArrowUpRight size={15} /></a>
          <a href="#contact" className="btn-accent font-grotesk text-[13px] tracking-[0.08em] px-8 py-4 font-bold inline-flex items-center gap-2 pressable">CONTACT THE TEAM →</a>
          <a href={`mailto:${CONTACT_EMAIL}?subject=SynLab%20—%20Let's%20start%20a%20conversation`} className="btn-ghost font-grotesk text-[13px] tracking-[0.08em] px-8 py-4 font-semibold inline-flex items-center gap-2 pressable"><Mail size={15} /> Start a conversation</a>
        </Reveal>
        <p className="mt-4 text-[12px] text-muted">Public concept website — implementation details are intentionally not shared.</p>

        <Reveal delay={0.1}>
          <Credits start={inView} reduce={reduce ?? false} />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * END CREDITS — a quiet resolving sequence before the footer.
 * SYN · LAB → SYNLAB → THE PORTABLE LAB → the wordmark. Film-like,
 * restrained, and instant when reduced motion is requested.
 */
function Credits({ start, reduce }: { start: boolean; reduce: boolean }) {
  const [beat, setBeat] = useState(0);
  useEffect(() => {
    if (!start || reduce) {
      if (reduce) setBeat(3);
      return;
    }
    if (beat >= 3) return;
    const id = setTimeout(() => setBeat((b) => b + 1), beat === 0 ? 1500 : 1050);
    return () => clearTimeout(id);
  }, [beat, start, reduce]);

  return (
    <div className="mt-14 min-h-[120px] grid place-items-center" aria-label="SynLab, the portable lab, by Team Innovexa">
      <AnimatePresence mode="wait">
        {beat < 3 ? (
          <motion.p
            key={beat}
            aria-hidden
            initial={{ opacity: 0, y: reduce ? 0 : 14, letterSpacing: beat === 0 ? "0.6em" : "0.3em" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -12 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`font-grotesk text-muted ${
              beat === 0 ? "text-sm md:text-base font-semibold" : beat === 1 ? "text-3xl md:text-4xl font-bold text-ink" : "text-xs md:text-sm font-bold"
            }`}
          >
            {beat === 0 ? "SYN · LAB" : beat === 1 ? "SYNLAB" : "THE PORTABLE LAB"}
          </motion.p>
        ) : (
          <motion.div
            key="mark"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-grotesk font-bold tracking-tight text-2xl text-ink">SynLab</p>
            <p className="text-body mt-2 text-lg">Bringing the Lab to Every Learner</p>
            <p className="text-[11px] font-semibold tracking-[0.18em] font-grotesk text-muted mt-2">TEAM INNOVEXA</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
