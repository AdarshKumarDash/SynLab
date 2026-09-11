"use client";
import { useEffect, useState } from "react";

/** Floating story progress — 9-chapter journey, elegant, unobtrusive, mobile-friendly. */
const STEPS = [
  { n: "01", label: "IDEA", href: "#idea" },
  { n: "02", label: "WHY", href: "#why" },
  { n: "03", label: "ONE", href: "#one" },
  { n: "04", label: "CONCEPT", href: "#lab" },
  { n: "05", label: "ROADMAP", href: "#roadmap" },
  { n: "06", label: "TECH", href: "#technology" },
  { n: "07", label: "DEMO", href: "#dashboard" },
  { n: "08", label: "TEAM", href: "#team" },
  { n: "09", label: "CONTACT", href: "#contact" },
];

export default function StoryProgress() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ids = STEPS.map((s) => s.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > window.innerHeight * 0.55);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
      // Current section = last section whose top passed mid-viewport.
      let idx = 0;
      const mid = y + window.innerHeight * 0.4;
      sections.forEach((el, i) => {
        if (el.offsetTop <= mid) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (href: string) => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile: slim top progress hairline */}
      <div
        className={`fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent transition-opacity duration-300 lg:hidden ${visible ? "opacity-100" : "opacity-0"}`}
        aria-hidden
      >
        <div
          className="h-full bg-gradient-to-r from-cyanx to-bluex rounded-r-full transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Desktop: minimal right-rail dots */}
      <nav
        aria-label="Explore SynLab — section progress"
        className={`hidden lg:flex fixed right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-1 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-end gap-[3px] rounded-2xl border border-line bg-white/90 dark:bg-[#171C23]/90 backdrop-blur-md px-3 py-3 shadow-card max-h-[82vh] overflow-y-auto no-scrollbar">
          <p className="font-grotesk text-[9px] font-bold tracking-[0.16em] text-muted px-1 pb-1.5 whitespace-nowrap">EXPLORE SYNLAB</p>
          {STEPS.map((s, i) => {
            const isActive = i === active;
            const isPast = i < active;
            return (
              <button
                key={s.href}
                onClick={() => go(s.href)}
                aria-label={`Go to ${s.label}`}
                aria-current={isActive ? "true" : undefined}
                tabIndex={visible ? 0 : -1}
                className="group flex items-center gap-2 py-[4px] text-right whitespace-nowrap"
              >
                <span
                  className={`font-grotesk text-[10px] font-bold tracking-[0.1em] transition-colors duration-200 ${
                    isActive ? "text-cyanx" : "text-muted group-hover:text-body"
                  }`}
                >
                  {s.n} {s.label}
                </span>
                <span
                  className={`rounded-full transition-all duration-200 ${
                    isActive
                      ? "w-6 h-[3px] bg-cyanx shadow-soft"
                      : isPast
                        ? "w-2 h-2 bg-cyanx/50"
                        : "w-2 h-2 bg-line group-hover:bg-cyanx/60"
                  }`}
                />
              </button>
            );
          })}
          <div className="mt-2 flex flex-col items-center gap-2">
            <div className="h-10 w-[3px] mr-[3px] rounded-full bg-cream overflow-hidden" aria-hidden>
              <div className="w-full bg-cyanx rounded-full transition-[height] duration-150" style={{ height: `${progress * 100}%` }} />
            </div>
            <button
              onClick={() => go("#top")}
              aria-label="Back to top"
              title="Back to top"
              tabIndex={visible ? 0 : -1}
              className="grid place-items-center w-6 h-6 rounded-full border border-line bg-white text-muted text-[11px] leading-none hover:border-cyanx hover:text-cyanx transition-colors"
            >
              ↑
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile: compact bottom pill with current chapter + bar */}
      <button
        onClick={() => go(STEPS[Math.min(active + 1, STEPS.length - 1)].href)}
        aria-label={`Continue to ${STEPS[Math.min(active + 1, STEPS.length - 1)].label}`}
        className={`lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5 rounded-full border border-line bg-white/92 dark:bg-[#171C23]/92 backdrop-blur-md pl-4 pr-3 py-2 shadow-lift transition-all duration-500 max-w-[92vw] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
      >
        <span className="font-grotesk text-[10px] font-bold tracking-[0.12em] text-cyanx whitespace-nowrap">
          {STEPS[active]?.n} · {STEPS[active]?.label}
        </span>
        <span className="w-16 h-1 rounded-full bg-cream overflow-hidden shrink-0" aria-hidden>
          <span className="block h-full bg-cyanx rounded-full" style={{ width: `${progress * 100}%` }} />
        </span>
        <span className="grid place-items-center w-7 h-7 rounded-full bg-ink text-white text-xs shrink-0" aria-hidden>↓</span>
      </button>
    </>
  );
}
