"use client";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { MapPin, CalendarClock, FlaskConical } from "lucide-react";

export default function Idea() {
  return (
    <section id="idea" className="relative py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="The idea">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="01"
          eyebrow="THE IDEA"
          title={<>WHAT IF THE LAB DIDN&apos;T HAVE<br />TO STAY IN <span className="text-cyanx">ONE PLACE?</span></>}
          lede="Science is meant to be explored — touched, tried, observed. But for many learners, practical work only happens in one room, on one timetable, with one fixed setup."
        />
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { icon: MapPin, title: "Access", body: "What if practical learning could happen where learners already are — classrooms, clubs, communities?" },
            { icon: CalendarClock, title: "Flexibility", body: "What if exploration wasn't squeezed into a single slot, but could flex around curiosity?" },
            { icon: FlaskConical, title: "Practical learning", body: "What if more learners could try, observe and understand — not just read about science?" },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="card p-6 md:p-8 card-hover h-full">
                <span className="inline-grid place-items-center w-11 h-11 rounded-2xl bg-tint text-cyanx"><c.icon size={20} aria-hidden /></span>
                <h3 className="font-grotesk font-bold text-xl mt-4 text-ink">{c.title}</h3>
                <p className="text-body mt-2 leading-relaxed text-[15px]">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Takeaway>That question is where SynLab begins: a laboratory concept designed around the learner — portable, adaptable and approachable.</Takeaway>
        <Reveal className="mt-8">
          <a href="#why" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">WHY DOES THIS MATTER? ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
