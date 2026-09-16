"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal, SectionHead, Takeaway, MethodNote, useCountUp, useInViewOnce } from "../ui/primitives";

const BARRIERS = [
  { value: 33, label: "Limited availability of equipment" },
  { value: 32, label: "Time constraints within lab sessions" },
  { value: 26, label: "Lack of clear guidance / instructions" },
] as const;

function EvidenceBar({ pct, delay = 0 }: { pct: number; delay?: number }) {
  const reduce = useReducedMotion();
  const target = `${pct}%`;
  return (
    <div className="h-2.5 w-full bg-cream rounded-full overflow-hidden" aria-hidden>
      <motion.div
        className="h-full bg-gradient-to-r from-bluex to-cyanx rounded-full"
        initial={reduce ? { width: target } : { width: "0%" }}
        whileInView={{ width: target }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default function Problem() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Subtle scroll-linked depth for decorative washes only (transform only).
  const washY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [36, -36]);
  const heroScale = useTransform(scrollYProgress, [0.05, 0.35], reduce ? [1, 1] : [0.96, 1]);

  const { ref: primaryRef, inView: primaryInView } = useInViewOnce<HTMLDivElement>();
  const { ref: needRef, inView: needInView } = useInViewOnce<HTMLDivElement>();
  const { ref: barriersRef, inView: barriersInView } = useInViewOnce<HTMLDivElement>();

  const v917 = useCountUp(91.7, primaryInView, 1500);
  const v708 = useCountUp(70.8, needInView, 1400);
  const b33 = useCountUp(33, barriersInView, 1100);
  const b32 = useCountUp(32, barriersInView, 1100);
  const b26 = useCountUp(26, barriersInView, 1100);
  const barrierCounts = [b33, b32, b26];

  return (
    <section id="why" className="relative py-24 md:py-32 border-t border-line tint-grey scroll-mt-16" aria-label="Why SynLab exists">
      <div className="mx-auto max-w-7xl px-5 md:px-8" ref={sectionRef}>
        <SectionHead
          eyebrow="WHY SYNLAB EXISTS"
          title={<>SCIENCE IS MEANT<br />TO BE <span className="text-cyanx">EXPLORED.</span></>}
          lede="But practical experimentation can be limited by where it happens, when there's time, what equipment is available, and how clearly learners are guided. Team Innovexa's stakeholder research confirmed these barriers are widely felt."
        />

        <Reveal className="mt-8">
          <p className="font-grotesk text-[11px] font-bold tracking-[0.18em] text-muted">VALIDATED BY 72 RESPONSES</p>
          <p className="mt-2 text-sm text-body leading-relaxed max-w-2xl">
            <span className="font-grotesk font-bold text-ink">72 stakeholders surveyed</span> — students, educators, parents, hobbyists, institutions and researchers. What follows is what they told us.
          </p>
        </Reveal>

        {/* STAT 01 — the core validation */}
        <div ref={primaryRef}>
          <Reveal className="mt-6 card p-8 md:p-12 text-center relative overflow-hidden !bg-gradient-to-b !from-white !to-tint">
            <motion.div className="pointer-events-none absolute inset-0 dot-grid opacity-40" style={{ y: washY }} aria-hidden />
            <div className="relative">
              {/* Static target until in view: SSR / no-JS paint must read 91.7%, never 0%. */}
              <motion.p
                style={{ scale: heroScale }}
                className="font-grotesk font-bold tracking-tight text-7xl md:text-8xl text-cyanx tabular-nums origin-center"
                role="img"
                aria-label="91.7 percent found an improved lab system helpful or extremely helpful"
              >
                {primaryInView ? v917.toFixed(1) : "91.7"}%
              </motion.p>
              <Reveal delay={0.15} y={18}>
                <p className="font-grotesk font-bold tracking-[0.04em] text-base md:text-xl mt-3 text-ink max-w-2xl mx-auto leading-snug">
                  found an improved lab system helpful or extremely helpful
                </p>
              </Reveal>
              <Reveal delay={0.25} y={14}>
                <p className="text-[12px] md:text-[13px] text-muted mt-3 max-w-xl mx-auto leading-relaxed">
                  66 of 72 respondents rated an improved lab system positively.
                </p>
              </Reveal>
              <div className="mt-6 max-w-xl mx-auto">
                <EvidenceBar pct={91.7} />
              </div>
              <p className="text-[11px] text-muted mt-3">Extremely helpful 43 · Helpful 23 · Neutral 4 · Not helpful 2</p>
            </div>
          </Reveal>
        </div>

        {/* STAT 02 — what people need */}
        <div ref={needRef}>
          <Reveal className="mt-4 card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_38%,rgba(12,111,189,0.08),transparent_70%)]" aria-hidden />
            <div className="relative">
              {/* Static target until in view: SSR / no-JS paint must read 70.8%, never 0%. */}
              <p
                className="font-grotesk font-bold tracking-tight text-6xl md:text-7xl text-ink tabular-nums"
                role="img"
                aria-label="70.8 percent prioritized step-by-step guided experiments"
              >
                {needInView ? v708.toFixed(1) : "70.8"}<span className="text-cyanx">%</span>
              </p>
              <Reveal delay={0.15} y={18}>
                <p className="font-grotesk font-bold tracking-[0.04em] text-base md:text-xl mt-3 text-body max-w-2xl mx-auto leading-snug">
                  prioritized <span className="text-ink">step-by-step guided experiments</span>
                </p>
              </Reveal>
              <Reveal delay={0.25} y={14}>
                <p className="text-[12px] md:text-[13px] text-muted mt-3 max-w-xl mx-auto leading-relaxed">
                  Guided experimentation was the most selected future feature in the survey.
                </p>
              </Reveal>
              <div className="mt-6 max-w-xl mx-auto">
                <EvidenceBar pct={70.8} delay={0.1} />
              </div>
              <p className="text-[11px] text-muted mt-3">51 of 72 respondents</p>
            </div>
          </Reveal>
        </div>

        {/* BARRIERS — what gets in the way */}
        <div ref={barriersRef}>
          <Reveal className="mt-4 card p-6 md:p-10 relative overflow-hidden !bg-gradient-to-b !from-white !to-tint">
            <p className="font-grotesk text-[11px] font-bold tracking-[0.18em] text-muted">WHAT GETS IN THE WAY?</p>
            <p className="text-[12px] md:text-[13px] text-muted mt-2">The three strongest challenge signals — multi-select responses.</p>
            <div className="mt-6 space-y-6">
              {BARRIERS.map((b, i) => (
                <Reveal key={b.label} delay={i * 0.12} y={20}>
                  <div className="flex items-baseline gap-4">
                    {/* Static targets until in view: SSR / no-JS paint must read 33 / 32 / 26, never 0. */}
                    <p className="font-grotesk font-bold tabular-nums text-4xl md:text-5xl text-cyanx w-20 shrink-0" aria-label={`${b.label}: ${b.value} responses`}>
                      {barriersInView ? Math.round(barrierCounts[i]) : b.value}
                    </p>
                    <div className="flex-1 min-w-0">
                      <p className="font-grotesk font-bold text-sm md:text-base text-ink tracking-tight">{b.label}</p>
                      <div className="mt-2">
                        <EvidenceBar pct={(b.value / 33) * 100} delay={i * 0.12} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <MethodNote>Source: SynLab Problem Survey, n=72. Directional stakeholder survey conducted during SynLab development — guiding product thinking, not a population-wide survey.</MethodNote>

        <Takeaway title="The gap is clear">Equipment is limited. Time is constrained. Guidance matters. That&apos;s the gap SynLab is designed to address.</Takeaway>
        <Reveal className="mt-12 text-center">
          <p className="font-grotesk text-body font-semibold tracking-[0.18em] text-xs">SO WE ASKED:</p>
          <p className="font-editorial italic text-4xl md:text-6xl mt-4 text-ink leading-[1.08] md:leading-[1.08]">What if the laboratory <span className="text-cyanx not-italic font-grotesk font-bold">could come to you?</span></p>
          <a href="#answer" className="btn-accent inline-block mt-8 font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4">SEE THE ANSWER ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
