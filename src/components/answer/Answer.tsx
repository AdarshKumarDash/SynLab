"use client";
import { ANSWER_PILLARS, AT_A_GLANCE } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { Move, Boxes, ShieldCheck, Compass, Sparkles } from "lucide-react";

const ICONS = { move: Move, modules: Boxes, shield: ShieldCheck, compass: Compass, spark: Sparkles } as const;

export default function Answer() {
  return (
    <section id="answer" className="py-24 md:py-32 border-t border-line tint-hero scroll-mt-16" aria-label="The SynLab answer">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="03"
          eyebrow="THE SYNLAB ANSWER"
          title={<>A LAB THAT COMES<br />TO THE <span className="text-cyanx">LEARNER.</span></>}
          lede="SynLab is a portable, modular laboratory concept designed to bring practical experimentation closer to the learner — hands-on, adaptable and guided."
        />
        <Reveal className="mt-8">
          <dl className="card px-5 py-4 !bg-gradient-to-r !from-white !to-tint flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="SynLab at a glance">
            <dt className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-cyanx">AT A GLANCE</dt>
            {AT_A_GLANCE.map((g) => (
              <div key={g.title} className="flex items-baseline gap-1.5" title={g.body}>
                <dd className="font-grotesk font-bold text-[13px] tracking-[0.06em] text-ink">{g.title}</dd>
                <dd className="text-[11px] text-muted hidden xl:inline">{g.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {ANSWER_PILLARS.map((a, i) => {
            const Icon = ICONS[a.icon as keyof typeof ICONS];
            return (
              <Reveal key={a.title} delay={Math.min(i * 0.06, 0.24)}>
                <div className="card p-5 card-hover h-full">
                  <span className="inline-grid place-items-center w-10 h-10 rounded-xl bg-tint text-cyanx"><Icon size={18} aria-hidden /></span>
                  <h3 className="font-grotesk font-bold text-base mt-3 text-ink tracking-tight">{a.title}</h3>
                  <p className="text-[13px] text-body mt-1.5 leading-relaxed">{a.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="card mt-8 p-5 md:p-6 !bg-gradient-to-r !from-white !to-tint">
          <p className="text-[13px] md:text-sm text-body leading-relaxed">
            <strong className="text-ink">A careful note on safety:</strong> nothing involving real materials is ever
            risk-free. SynLab is <em>designed with safety-conscious experimentation in mind</em> — controlled
            conditions, monitored activity and guided structure — so learners can explore with greater confidence,
            always with appropriate supervision.
          </p>
        </Reveal>
        <Takeaway>Portable where you learn. Modular for what you&apos;re learning. Guided so you know what to try next.</Takeaway>
        <Reveal className="mt-8">
          <a href="#experience" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">HOW DOES IT FEEL? ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
