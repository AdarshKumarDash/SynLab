import { TEAM } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { User } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="Team">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="16"
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
        <ul className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl">
          {TEAM.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <li className="card p-8 text-center card-hover group h-full">
                <span className="mx-auto w-20 h-20 rounded-full bg-gradient-to-b from-tint to-cream border border-line grid place-items-center text-cyanx transition" aria-hidden><User size={30} /></span>
                <p className="font-grotesk font-bold text-lg mt-5 text-ink">{t.name}</p>
                <p className="text-[11px] font-semibold tracking-[0.12em] font-grotesk text-muted mt-1">{t.note}</p>
                <p className="text-[12px] text-body mt-3 leading-relaxed">Working across research, concept design and prototyping to bring SynLab to life.</p>
              </li>
            </Reveal>
          ))}
        </ul>
        <p className="mt-4 text-[11px] text-muted max-w-5xl">Only verified names and team affiliation are shown. Individual biographies are intentionally kept minimal for a public student project.</p>
        <Takeaway>Two builders, one shared goal — practical science within everyone&apos;s reach.</Takeaway>
        <Reveal className="mt-8">
          <a href="#contact" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4">LET&apos;S TALK ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
