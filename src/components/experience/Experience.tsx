"use client";
import { EXPERIENCE_STEPS } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="How the experience feels">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="04"
          eyebrow="HOW THE EXPERIENCE FEELS"
          title={<>FROM CURIOUS<br />TO <span className="text-cyanx">CAPABLE.</span></>}
          lede="No engineering manual needed — here's what a SynLab session feels like from the learner's seat: six simple moves, same rhythm every time."
        />
        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPERIENCE_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={Math.min(i * 0.06, 0.3)}>
              <li className="card p-6 md:p-7 card-hover h-full relative overflow-hidden">
                <span className="font-grotesk font-bold text-5xl text-tint select-none absolute top-3 right-4" aria-hidden>{s.step}</span>
                <p className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-cyanx relative">STEP {s.step}</p>
                <h3 className="font-grotesk font-bold text-xl mt-2 text-ink relative">{s.title}</h3>
                <p className="text-body mt-2 leading-relaxed text-[15px] relative">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Takeaway>The pattern never changes — choose, prepare, explore, observe, learn, discover — so confidence builds with every session.</Takeaway>
        <Reveal className="mt-8 flex flex-wrap gap-4">
          <a href="#story" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">READ OUR STORY ↓</a>
          <a href="#one" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4">MEET SYNLAB ONE →</a>
        </Reveal>
      </div>
    </section>
  );
}
