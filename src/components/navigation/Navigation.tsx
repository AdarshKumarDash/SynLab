"use client";
import { useEffect, useState } from "react";
import { Atom, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Current section indication (lightweight, no observer churn)
      const ids = ["#top", ...NAV_LINKS.map((l) => l.href)];
      const y = window.scrollY + window.innerHeight * 0.3;
      let current = "#top";
      for (const href of ids) {
        const el = document.querySelector(href);
        if (el && (el as HTMLElement).offsetTop <= y) current = href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-[#FAFAF7]/90 backdrop-blur-md border-b border-line shadow-[0_1px_12px_rgba(23,25,28,0.06)]" : "bg-transparent"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ink focus:text-white focus:px-3 focus:py-2 focus:rounded-lg">Skip to content</a>
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="SynLab home">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-ink text-white group-hover:bg-cyanx transition-colors"><Atom size={18} /></span>
          <span className="font-grotesk font-bold tracking-tight text-lg text-ink">SynLab</span>
          <span className="hidden sm:inline text-[11px] font-medium tracking-wide text-muted">The Portable Lab</span>
        </a>
        <ul className="hidden lg:flex items-center gap-6 text-[12px] font-semibold tracking-[0.12em] text-body">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-2 transition-colors hover:text-cyanx ${isActive ? "text-cyanx" : ""}`}
                >
                  {l.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-cyanx transition-all duration-200 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#idea" className="hidden sm:inline-flex btn-primary font-grotesk text-[12px] font-bold tracking-[0.12em] px-5 py-2.5 pressable">EXPLORE SYNLAB</a>
          <button className="lg:hidden p-2 border border-line rounded-xl bg-white text-ink" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="lg:hidden border-t border-line bg-[#FAFAF7]/95 backdrop-blur-md px-6 py-4 space-y-1 text-sm font-semibold font-grotesk text-ink shadow-card">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-2.5 border-b border-line last:border-0 ${active === l.href ? "text-cyanx" : ""}`}
              >
                {l.label}
                {active === l.href && <span className="w-1.5 h-1.5 rounded-full bg-cyanx" aria-hidden />}
              </a>
            </li>
          ))}
          <li><a href="#idea" onClick={() => setOpen(false)} className="block py-3 text-cyanx">Explore SynLab →</a></li>
        </ul>
      )}
    </header>
  );
}
