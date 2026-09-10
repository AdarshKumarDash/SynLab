"use client";
import { DASHBOARD_URL, CONTACT_EMAIL } from "@/data/content";
import { Reveal } from "../ui/primitives";
import { ArrowUpRight, Mail, MessagesSquare } from "lucide-react";

export default function Finale() {
  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-line overflow-hidden tint-hero scroll-mt-16" aria-label="Collaboration and closing">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_40%,rgba(12,111,189,0.10),transparent_70%)]" aria-hidden />
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
            {[
              ["Students & clubs", "Try the concept, ask questions, imagine what you'd explore."],
              ["Educators & schools", "Discuss how portable practical work could complement your labs."],
              ["Collaborators", "Share ideas, feedback or possibilities for what comes next."],
            ].map(([t, b]) => (
              <div key={t} className="card px-4 py-4">
                <p className="font-grotesk text-[12px] font-bold tracking-[0.08em] text-ink">{t.toUpperCase()}</p>
                <p className="text-[13px] text-body mt-1.5 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#top" className="btn-primary font-grotesk text-[13px] tracking-[0.08em] px-8 py-4 font-bold inline-flex items-center gap-2">EXPLORE SYNLAB <ArrowUpRight size={15} /></a>
          <a href={DASHBOARD_URL} target="_blank" rel="noreferrer" className="btn-ghost font-grotesk text-[13px] tracking-[0.08em] px-8 py-4 font-semibold inline-flex items-center gap-2">Try the demo <ArrowUpRight size={15} /></a>
          <a href={`mailto:${CONTACT_EMAIL}?subject=SynLab%20—%20Let's%20start%20a%20conversation`} className="btn-ghost font-grotesk text-[13px] tracking-[0.08em] px-8 py-4 font-semibold inline-flex items-center gap-2"><Mail size={15} /> Start a conversation</a>
        </Reveal>
        <p className="mt-4 text-[12px] text-muted flex items-center justify-center gap-1.5"><MessagesSquare size={13} /> No carts, no checkout — just a conversation about what&apos;s possible.</p>
        <Reveal delay={0.25}>
          <p className="font-editorial italic leading-[1.05] md:leading-[1.05] text-5xl md:text-7xl text-ink mt-16">
            The lab shouldn&apos;t be<br />a place.<br />
            <span className="text-cyanx">It should be<br />a possibility.</span>
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-grotesk font-bold tracking-tight text-xl mt-8 text-ink">SynLab</p>
          <p className="text-body mt-2 text-lg">Bringing the Lab to Every Learner</p>
          <p className="text-[11px] font-semibold tracking-[0.18em] font-grotesk text-muted mt-2">TEAM INNOVEXA</p>
        </Reveal>
        <footer className="mt-16 border-t border-line pt-6 text-[11px] text-muted leading-relaxed">
          <p>SynLab — The Portable Lab · Team Innovexa. Research: a small directional stakeholder study. Dashboard on this site is simulated. SynLab PRO is a future vision, not a current product.</p>
          <p className="mt-2">Public concept website — implementation details are intentionally not shared. Background reading: <a className="underline hover:text-cyanx" href="https://www.unesco.org/en/stem" target="_blank" rel="noreferrer">UNESCO STEM</a> · <a className="underline hover:text-cyanx" href="https://www.unesco.org/gem-report/en/publication/technology" target="_blank" rel="noreferrer">GEM Report</a> · <a className="underline hover:text-cyanx" href="https://edu.rsc.org/analysis/practical-advice-for-practical-work/3008114.article" target="_blank" rel="noreferrer">RSC Practical Work</a></p>
        </footer>
      </div>
    </section>
  );
}
