"use client";
import { USE_CASES } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 md:py-32 border-t border-line tint-blue scroll-mt-16" aria-label="Where SynLab could go">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="11"
          eyebrow="USE CASES"
          title={<>WHERE COULD<br />SYNLAB <span className="text-cyanx">GO?</span></>}
          lede="Not promises — possibilities. Places where a portable, guided laboratory could open new doors for practical learning."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {USE_CASES.map((u, i) => (
            <Reveal key={u.title} delay={Math.min(i * 0.06, 0.3)}>
              <div className="card p-6 md:p-7 card-hover h-full">
                <p className="font-grotesk text-[11px] font-bold tracking-[0.12em] text-cyanx">0{i + 1}</p>
                <h3 className="font-grotesk font-bold text-lg mt-2 text-ink">{u.title}</h3>
                <p className="text-body mt-2 text-[14px] leading-relaxed">{u.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Takeaway>From classrooms to field tables to exhibition halls — anywhere curiosity gathers is somewhere SynLab could belong.</Takeaway>
        <Reveal className="mt-8">
          <a href="#technology" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">THE TECHNOLOGY BEHIND IT ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
