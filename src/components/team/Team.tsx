import { ADARSH_LINKS, TEAM } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { User, ExternalLink, Code, Briefcase, Globe } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="Team">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="TEAM INNOVEXA"
          title={<>THE PEOPLE BEHIND<br />THE <span className="text-cyanx">IDEA.</span></>}
          lede="The people working to turn an idea into something tangible — students who researched the problem, shaped the concept and built the first prototype."
        />
        <Reveal className="mt-8">
          <dl className="grid sm:grid-cols-3 gap-3 max-w-5xl">
            {[
              ["Listening", "Conversations with students, educators, parents and others shaped every decision."],
              ["Designing", "A portable, modular concept that keeps the learner — not the equipment — at the centre."],
              ["Building", "A first working prototype that makes the idea real enough to try and discuss."],
            ].map(([t, b]) => (
              <div key={t} className="card px-4 py-4 card-hover">
                <dt className="font-grotesk text-[11px] font-bold tracking-[0.12em] text-cyanx">{t.toUpperCase()}</dt>
                <dd className="text-[13px] text-body mt-1.5 leading-relaxed">{b}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <ul className="mt-10 grid sm:grid-cols-2 gap-4 max-w-4xl">
          {TEAM.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <li className="card p-8 text-center card-hover group h-full relative overflow-hidden pressable">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyanx/0 via-cyanx/60 to-cyanx/0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity" aria-hidden />
                <span className="mx-auto w-20 h-20 rounded-full bg-gradient-to-b from-tint to-cream border border-line grid place-items-center text-cyanx transition-all duration-300 group-hover:scale-105 group-hover:border-cyanx/40 group-hover:shadow-lift" aria-hidden><User size={30} /></span>
                <p className="font-grotesk font-bold text-lg mt-5 text-ink">{t.name}</p>
                <p className="inline-block mt-2 text-[11px] font-bold tracking-[0.12em] font-grotesk text-cyanx border border-cyanx/30 bg-tint rounded-full px-3 py-1 transition-colors group-hover:bg-cyanx group-hover:text-white">{t.note}</p>
                <p className="text-[13px] text-body mt-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">{t.body ?? "Working across research, concept design and prototyping to bring SynLab to life."}</p>
                {"links" in t && (t as { links?: boolean }).links ? (
                  <span className="mt-5 flex flex-wrap justify-center gap-2 opacity-80 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
                    <a href={ADARSH_LINKS.portfolio} target="_blank" rel="noreferrer" aria-label="Adarsh Kumar Dash portfolio (opens in new tab)" className="inline-flex items-center gap-1.5 font-grotesk text-[11px] font-bold tracking-[0.06em] border border-line bg-white rounded-full px-3.5 py-2 text-body hover:border-cyanx hover:text-cyanx transition-colors">
                      <Globe size={13} aria-hidden /> PORTFOLIO <ExternalLink size={11} aria-hidden />
                    </a>
                    <a href={ADARSH_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="Adarsh Kumar Dash LinkedIn (opens in new tab)" className="inline-flex items-center gap-1.5 font-grotesk text-[11px] font-bold tracking-[0.06em] border border-line bg-white rounded-full px-3.5 py-2 text-body hover:border-cyanx hover:text-cyanx transition-colors">
                      <Briefcase size={13} aria-hidden /> LINKEDIN <ExternalLink size={11} aria-hidden />
                    </a>
                    <a href={ADARSH_LINKS.github} target="_blank" rel="noreferrer" aria-label="Adarsh Kumar Dash GitHub (opens in new tab)" className="inline-flex items-center gap-1.5 font-grotesk text-[11px] font-bold tracking-[0.06em] border border-line bg-white rounded-full px-3.5 py-2 text-body hover:border-cyanx hover:text-cyanx transition-colors">
                      <Code size={13} aria-hidden /> GITHUB <ExternalLink size={11} aria-hidden />
                    </a>
                  </span>
                ) : (
                  <span className="mt-5 block text-[12px] text-muted">Team Innovexa · research, concept & prototyping</span>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
        <p className="mt-4 text-[11px] text-muted max-w-5xl">Only verified names and team affiliation are shown. Individual biographies are intentionally kept minimal for a public student project.</p>
        <Takeaway>Two builders, one shared goal — practical science within everyone&apos;s reach.</Takeaway>
        <Reveal className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4">CONTACT THE TEAM →</a>
          <a href={ADARSH_LINKS.portfolio} target="_blank" rel="noreferrer" className="btn-ghost inline-flex items-center gap-2 font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">VIEW PORTFOLIO <ExternalLink size={14} aria-hidden /></a>
        </Reveal>
      </div>
    </section>
  );
}
