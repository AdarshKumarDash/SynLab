"use client";
import { IMPACT_THEMES } from "@/data/content";
import { Reveal } from "../ui/primitives";

export default function Impact() {
  return (
    <section id="impact" className="relative py-28 md:py-36 border-t border-line overflow-hidden tint-deep" aria-label="Impact vision">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_30%,rgba(12,111,189,0.12),transparent_70%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="font-grotesk text-[12px] font-semibold tracking-[0.18em] text-cyanx">14 · IMPACT</p>
          <h2 className="font-grotesk mt-4 text-4xl md:text-6xl font-bold tracking-tight text-ink leading-[1.05] md:leading-[1.05]">
            MORE ACCESS TO<br />PRACTICAL <span className="text-cyanx">SCIENCE.</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-body text-base md:text-lg leading-relaxed">
            SynLab isn&apos;t simply about making a smaller laboratory. It&apos;s about making
            practical scientific exploration more accessible — to more learners, in more places, more often.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {IMPACT_THEMES.map((t, i) => (
            <Reveal key={t.title} delay={Math.min(i * 0.06, 0.24)}>
              <div className="card px-4 py-6 card-hover">
                <p className="font-grotesk font-bold tracking-[0.08em] text-cyanx">{t.title}</p>
                <p className="text-[12px] text-body mt-2 leading-relaxed">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <a href="#team" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-8 py-4">MEET THE TEAM ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
