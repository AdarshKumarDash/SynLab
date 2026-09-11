"use client";
import { CONTACTS } from "@/data/content";
import { Reveal, SectionHead } from "../ui/primitives";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="Contact SynLab">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="CONTACT SYNLAB"
          title={<>LET&apos;S BUILD <span className="text-cyanx">WHAT&apos;S NEXT.</span></>}
          lede="Questions, ideas, collaboration — reach the team behind SynLab directly. Public project contact details only."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-4xl">
          {CONTACTS.map((c, i) => (
            <Reveal key={c.email} delay={i * 0.08}>
              <article className="card p-6 md:p-8 card-hover h-full flex flex-col">
                <p className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-cyanx">POINT OF CONTACT · 0{i + 1}</p>
                <h3 className="font-grotesk font-bold text-xl mt-2 text-ink">{c.name}</h3>
                <p className="text-[13px] text-muted mt-1">{c.role}</p>
                <div className="mt-5 space-y-2.5 text-sm">
                  <p>
                    <a
                      href={`mailto:${c.email}?subject=SynLab%20—%20Hello`}
                      className="inline-flex items-center gap-2 text-ink hover:text-cyanx font-medium break-all transition-colors"
                      aria-label={`Email ${c.name} at ${c.email}`}
                    >
                      <span className="grid place-items-center w-8 h-8 rounded-xl bg-tint text-cyanx shrink-0"><Mail size={15} aria-hidden /></span>
                      {c.email}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${c.phoneHref}`} className="inline-flex items-center gap-2 text-ink hover:text-cyanx font-medium transition-colors" aria-label={`Call ${c.name} at ${c.phone}`}>
                      <span className="grid place-items-center w-8 h-8 rounded-xl bg-tint text-cyanx shrink-0"><Phone size={15} aria-hidden /></span>
                      {c.phone}
                    </a>
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 pt-2">
                  <a href={`mailto:${c.email}?subject=SynLab%20—%20Hello`} className="btn-primary font-grotesk text-[12px] font-bold tracking-[0.08em] px-5 py-3 pressable inline-flex items-center gap-2">
                    EMAIL US <span aria-hidden>→</span>
                  </a>
                  <a href={`tel:${c.phoneHref}`} className="btn-ghost font-grotesk text-[12px] font-bold tracking-[0.08em] px-5 py-3 pressable inline-flex items-center gap-2">
                    CALL <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <p className="text-[12px] text-muted max-w-4xl leading-relaxed">
            Only the project contact details above are public. Please don&apos;t share private or sensitive information over email — a short hello and your question is plenty to start.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
