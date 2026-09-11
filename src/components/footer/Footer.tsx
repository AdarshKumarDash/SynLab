"use client";
import { Atom } from "lucide-react";
import { ADARSH_LINKS, CONTACTS, NAV_LINKS } from "@/data/content";
import { Reveal } from "../ui/primitives";

const EXPLORE_FALLBACK: Record<string, string> = {
  "#idea": "The Idea",
  "#why": "Why SynLab",
  "#one": "SynLab ONE",
  "#model3d": "3D Model",
  "#roadmap": "Roadmap",
  "#technology": "Technology",
  "#dashboard": "Demo",
  "#research": "Research",
  "#team": "Team",
  "#contact": "Contact",
};

export default function Footer() {
  return (
    <footer className="border-t border-line tint-hero" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-16">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <p className="flex items-center gap-2.5">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-ink text-white"><Atom size={18} aria-hidden /></span>
                <span className="font-grotesk font-bold tracking-tight text-lg text-ink">SynLab</span>
                <span className="text-[11px] font-medium text-muted">The Portable Lab</span>
              </p>
              <p className="font-editorial italic text-lg text-body mt-4 leading-snug">“Bringing the lab closer to every learner.”</p>
              <p className="text-[13px] text-muted mt-3 leading-relaxed max-w-xs">Team Innovexa — an interactive innovation showcase for a real student-built scientific product.</p>
              <p className="mt-4 text-[12px] text-body leading-relaxed max-w-xs">SynLab complements traditional laboratories; it does not replace them.</p>
            </div>
            <nav aria-label="Explore">
              <p className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-muted">EXPLORE</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[...NAV_LINKS, { label: "RESEARCH", href: "#research" }].slice(0, 10).map((l) => (
                  <li key={l.href + l.label}>
                    <a href={l.href} className="text-body hover:text-cyanx transition-colors">{EXPLORE_FALLBACK[l.href] ?? l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="SynLab products">
              <p className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-muted">SYNLAB</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><a href="#one" className="text-body hover:text-cyanx transition-colors"><strong className="text-ink font-semibold">ONE</strong> · Base Model <span className="ml-1 text-[10px] font-grotesk font-bold tracking-[0.08em] text-cyanx border border-cyanx/30 rounded-full px-2 py-0.5">CURRENT</span></a></li>
                <li><a href="#future" className="text-body hover:text-cyanx transition-colors"><strong className="text-ink font-semibold">PRO</strong> · Future Vision <span className="ml-1 text-[10px] font-grotesk font-bold tracking-[0.08em] text-muted border border-dashed border-line rounded-full px-2 py-0.5">FUTURE</span></a></li>
                <li><a href="#roadmap" className="text-body hover:text-cyanx transition-colors"><strong className="text-ink font-semibold">CORE</strong> · Future Direction <span className="ml-1 text-[10px] font-grotesk font-bold tracking-[0.08em] text-muted border border-dashed border-line rounded-full px-2 py-0.5">VISION</span></a></li>
              </ul>
              <p className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-muted mt-6">CONNECT</p>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li><a href={`mailto:${CONTACTS[0].email}`} className="text-body hover:text-cyanx transition-colors">Email</a></li>
                <li><a href={ADARSH_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-body hover:text-cyanx transition-colors">LinkedIn</a></li>
                <li><a href={ADARSH_LINKS.portfolio} target="_blank" rel="noreferrer" className="text-body hover:text-cyanx transition-colors">Portfolio</a></li>
                <li><a href={ADARSH_LINKS.github} target="_blank" rel="noreferrer" className="text-body hover:text-cyanx transition-colors">GitHub</a></li>
              </ul>
            </nav>
            <div>
              <p className="font-grotesk text-[11px] font-bold tracking-[0.14em] text-muted">CONTACT</p>
              <ul className="mt-4 space-y-4 text-sm">
                {CONTACTS.map((c) => (
                  <li key={c.email}>
                    <p className="font-semibold text-ink">{c.name}</p>
                    <a href={`mailto:${c.email}`} className="text-body hover:text-cyanx transition-colors break-all text-[13px]">{c.email}</a>
                    <a href={`tel:${c.phoneHref}`} className="block text-body hover:text-cyanx transition-colors text-[13px] mt-0.5">{c.phone}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 border-t border-line pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[11px] text-muted leading-relaxed">
          <p>© 2026 Team Innovexa · SynLab</p>
          <p className="max-w-xl">Public concept website — implementation details are intentionally not shared. SynLab complements traditional laboratories; it does not replace them.</p>
        </div>
      </div>
    </footer>
  );
}
