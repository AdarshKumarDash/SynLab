"use client";
import { DASHBOARD_URL, CONTACT_EMAIL } from "@/data/content";
import { Reveal, useInViewOnce } from "../ui/primitives";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MessagesSquare } from "lucide-react";

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
  const lines = ["The lab shouldn't be", "a place.", "It should be", "a possibility."];

  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-line overflow-hidden tint-hero scroll-mt-16" aria-label="Collaboration and closing">
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
          <p className="font-grotesk text-[12px] font-semibold tracking-[0.18em] text-cyanx">16 · LET&apos;S EXPLORE WHAT&apos;S POSSIBLE</p>
          <h2 className="font-grotesk font-bold tracking-tight text-4xl md:text-6xl mt-4 text-ink leading-[1.05] md:leading-[1.05]">
            Curious? Teaching?<br />Building the future <span className="text-cyanx">with us?</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-body text-base md:text-lg leading-relaxed">
            Whether you&apos;re a student, an educator, a school or simply someone who loves science —
            we&apos;d love to hear how portable practical learning could help you.
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
          <a href={DASHBOARD_URL} target="_blank" rel="noreferrer" className="btn-ghost font-grotesk text-[13px] tracking-[0.08em] px-8 py-4 font-semibold inline-flex items-center gap-2 pressable">Try the demo <ArrowUpRight size={15} /></a>
          <a href={`mailto:${CONTACT_EMAIL}?subject=SynLab%20—%20Let's%20start%20a%20conversation`} className="btn-ghost font-grotesk text-[13px] tracking-[0.08em] px-8 py-4 font-semibold inline-flex items-center gap-2 pressable"><Mail size={15} /> Start a conversation</a>
        </Reveal>
        <p className="mt-4 text-[12px] text-muted flex items-center justify-center gap-1.5"><MessagesSquare size={13} /> No carts, no checkout — just a conversation about what&apos;s possible.</p>

        {/* "Lab is a possibility" — line-by-line reveal */}
        <div className="mt-16" aria-label="The lab shouldn't be a place. It should be a possibility.">
          <p className="font-editorial italic leading-[1.08] text-5xl md:text-7xl text-ink">
            {lines.map((line, i) => (
              <motion.span
                key={line}
                className={`block ${i >= 2 ? "text-cyanx" : ""}`}
                initial={{ opacity: 0, y: reduce ? 0 : 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
                {i === 1 || i === 3 ? <br /> : null}
              </motion.span>
            ))}
          </p>
        </div>
        <Reveal delay={0.1}>
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-grotesk font-bold tracking-tight text-2xl mt-10 text-ink">SynLab</p>
            <p className="text-body mt-2 text-lg">Bringing the Lab to Every Learner</p>
            <p className="text-[11px] font-semibold tracking-[0.18em] font-grotesk text-muted mt-2">TEAM INNOVEXA</p>
          </motion.div>
        </Reveal>
        <footer className="mt-16 border-t border-line pt-6 text-[11px] text-muted leading-relaxed">
          <p>SynLab — The Portable Lab · Team Innovexa. Research: a small directional stakeholder study. Dashboard on this site is simulated. SynLab PRO is a future vision, not a current product.</p>
          <p className="mt-2">Public concept website — implementation details are intentionally not shared. Background reading: <a className="underline hover:text-cyanx" href="https://www.unesco.org/en/stem" target="_blank" rel="noreferrer">UNESCO STEM</a> · <a className="underline hover:text-cyanx" href="https://www.unesco.org/gem-report/en/publication/technology" target="_blank" rel="noreferrer">GEM Report</a> · <a className="underline hover:text-cyanx" href="https://edu.rsc.org/analysis/practical-advice-for-practical-work/3008114.article" target="_blank" rel="noreferrer">RSC Practical Work</a></p>
        </footer>
      </div>
    </section>
  );
}
