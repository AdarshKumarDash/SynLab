"use client";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { Package, Eye, Activity, Blocks } from "lucide-react";

const HIGHLIGHTS = [
  { icon: Package, title: "Portable structure", body: "A modular form designed to pack down, travel and set up where learning happens." },
  { icon: Eye, title: "Hands-on observation", body: "Close observation with a guided slide setup — see more than the textbook shows." },
  { icon: Activity, title: "Sensing + support", body: "Built-in sensing follows conditions while supportive systems help shape them for each activity." },
  { icon: Blocks, title: "Expandable possibilities", body: "Interchangeable areas leave room to grow into new activities and subjects." },
];

export default function SynLabOne() {
  return (
    <section id="one" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="SynLab ONE">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="06"
          eyebrow="SYNLAB ONE · THE FIRST STEP"
          title={<>MEET SYNLAB <span className="text-cyanx">ONE.</span></>}
          lede="The base-model prototype — proof that a portable, modular laboratory can feel like one coherent experience, not a box of parts."
        />
        <Reveal className="mt-6 inline-flex flex-wrap items-center gap-2">
          <span className="font-grotesk text-[12px] font-bold tracking-[0.10em] border border-cyanx/40 text-cyanx px-4 py-2 rounded-full bg-white shadow-card">WORKING PROTOTYPE · BASE MODEL</span>
          <span className="text-[13px] text-muted font-medium">What it is — not how to build it.</span>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={Math.min(i * 0.06, 0.2)}>
              <div className="card p-6 card-hover h-full">
                <span className="inline-grid place-items-center w-11 h-11 rounded-2xl bg-tint text-cyanx"><h.icon size={20} aria-hidden /></span>
                <h3 className="font-grotesk font-bold text-lg mt-4 text-ink">{h.title}</h3>
                <p className="text-body mt-2 text-[14px] leading-relaxed">{h.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="card p-5">
            <h3 className="font-grotesk text-[13px] font-bold tracking-[0.06em] text-leaf">SYNLAB ONE IS ✓</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-body list-disc pl-5">
              <li>A tangible starting point for portable practical learning</li>
              <li>A modular platform for varied activities</li>
              <li>A guided experience pairing doing with observing</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="font-grotesk text-[13px] font-bold tracking-[0.06em] text-muted">SYNLAB ONE IS NOT ✕</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-body list-disc pl-5">
              <li>A finished commercial product</li>
              <li>A replacement for every school laboratory</li>
              <li>A DIY kit with public build instructions</li>
            </ul>
          </div>
        </div>
        <Takeaway>ONE proves the idea works in the real world — now explore it visually, then see who it could help.</Takeaway>
        <Reveal className="mt-8 flex flex-wrap gap-4">
          <a href="#lab" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">SEE THE CONCEPT ↓</a>
          <a href="#audiences" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4">WHO IS IT FOR? →</a>
        </Reveal>
      </div>
    </section>
  );
}
