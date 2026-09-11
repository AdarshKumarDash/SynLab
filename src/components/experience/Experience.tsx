"use client";
import { useState } from "react";
import { EXPERIENCE_STEPS } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { CineScene, useStep } from "../cinematic/CineScene";
import { useCinematicEnabled } from "../cinematic/useCinematic";
import { AnimatePresence, motion, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { MousePointerClick, PackageOpen, FlaskConical, Eye, Lightbulb, Sparkles } from "lucide-react";

const ICONS = [MousePointerClick, PackageOpen, FlaskConical, Eye, Lightbulb, Sparkles];
const HINTS = [
  "Pick what sparks you",
  "Get ready, simply",
  "Try it with your hands",
  "Notice what changes",
  "Link it to the idea",
  "Ask what comes next",
];

/** Opacity window: fade in after `start`, hold, fade out before `end`. */
function useWindow(progress: MotionValue<number>, start: number, end: number, fade = 0.025) {
  return useTransform(progress, [start, start + fade, end - fade, end], [0, 1, 1, 0]);
}

/**
 * JOURNEY VISUAL — evolving conceptual metaphor, scroll-driven.
 * One abstract bench; each beat transforms it. Pure SVG + currentColor
 * (inherits the theme-aware text palette, so dark mode just works).
 * No engineering, no instructions — curiosity rendered as geometry.
 */
function JourneyVisual({ progress }: { progress: MotionValue<number> }) {
  const B = 1 / 6;
  const choose = useWindow(progress, 0, B);
  const prepA = useWindow(progress, B * 0.9, B * 2.05);
  const explore = useWindow(progress, B * 1.9, B * 3.05);
  const observe = useWindow(progress, B * 2.9, B * 4.05);
  const learn = useWindow(progress, B * 3.9, B * 5.05);
  const discover = useWindow(progress, B * 4.9, 1.001);

  // PREPARE: three module-shapes glide into alignment
  const m1x = useTransform(progress, [B * 0.9, B * 1.8], [-64, -44]);
  const m2x = useTransform(progress, [B * 0.9, B * 1.8], [64, 44]);
  const m3y = useTransform(progress, [B * 0.9, B * 1.8], [44, 34]);
  // EXPLORE: activity pulse
  const pulse = useTransform(progress, [B * 2, B * 3], [0.5, 1.5]);
  const pulseO = useTransform(progress, [B * 2, B * 3], [0.7, 0]);
  // OBSERVE: signal draws across the bench
  const wave = useTransform(progress, [B * 3, B * 3.9], [0, 1]);
  // LEARN: connections light up
  const link = useTransform(progress, [B * 4, B * 4.9], [0, 1]);

  return (
    <div className="card relative h-[380px] md:h-[460px] overflow-hidden !bg-gradient-to-b !from-white !to-cream" aria-hidden>
      <div className="absolute inset-0 sci-grid-fine opacity-70" />
      <div className="absolute inset-0 dot-grid opacity-30" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full text-cyanx" role="presentation">
        {/* persistent bench + orbits */}
        <ellipse cx="200" cy="210" rx="150" ry="86" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
        <ellipse cx="200" cy="210" rx="108" ry="60" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
        <rect x="140" y="176" width="120" height="72" rx="18" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />

        {/* 01 CHOOSE — the question appears */}
        <motion.g style={{ opacity: choose }}>
          <text x="200" y="150" textAnchor="middle" fontSize="64" fontStyle="italic" fill="currentColor" opacity="0.9" fontFamily="'Instrument Serif', Georgia, serif">?</text>
          <circle cx="120" cy="120" r="4" fill="currentColor" opacity="0.6" />
          <circle cx="284" cy="128" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="252" cy="292" r="4" fill="currentColor" opacity="0.4" />
        </motion.g>

        {/* 02 PREPARE — shapes align */}
        <motion.g style={{ opacity: prepA }} stroke="currentColor" fill="none" strokeWidth="1.5">
          <motion.rect x="0" y="196" width="36" height="28" rx="9" style={{ x: m1x }} transform="translate(200 0)" />
          <motion.rect x="0" y="196" width="36" height="28" rx="9" style={{ x: m2x }} transform="translate(164 0)" />
          <motion.rect x="182" y="0" width="36" height="28" rx="9" style={{ y: m3y }} transform="translate(0 150)" />
        </motion.g>

        {/* 03 EXPLORE — activity begins */}
        <motion.g style={{ opacity: explore }}>
          <motion.circle cx="200" cy="212" r="26" fill="none" stroke="currentColor" strokeWidth="2" style={{ scale: pulse, opacity: pulseO, transformOrigin: "200px 212px" }} />
          <circle cx="200" cy="212" r="12" fill="currentColor" />
        </motion.g>

        {/* 04 OBSERVE — signals appear */}
        <motion.g style={{ opacity: observe }} fill="none" stroke="currentColor" strokeWidth="2">
          <motion.path d="M120 250 Q 160 220 200 244 T 280 236" style={{ pathLength: wave }} strokeLinecap="round" />
          <circle cx="120" cy="250" r="3.5" fill="currentColor" stroke="none" />
          <circle cx="280" cy="236" r="3.5" fill="currentColor" stroke="none" />
        </motion.g>

        {/* 05 LEARN — ideas connect */}
        <motion.g style={{ opacity: learn }}>
          <motion.g style={{ opacity: link }} stroke="currentColor" strokeWidth="1.5">
            <line x1="150" y1="150" x2="250" y2="150" />
            <line x1="150" y1="150" x2="200" y2="260" />
            <line x1="250" y1="150" x2="200" y2="260" />
          </motion.g>
          <circle cx="150" cy="150" r="7" fill="currentColor" />
          <circle cx="250" cy="150" r="7" fill="currentColor" />
          <circle cx="200" cy="260" r="7" fill="currentColor" />
        </motion.g>

        {/* 06 DISCOVER — a new question leaves the bench */}
        <motion.g style={{ opacity: discover }}>
          <text x="200" y="120" textAnchor="middle" fontSize="40" fontStyle="italic" fill="currentColor" fontFamily="'Instrument Serif', Georgia, serif">?</text>
          <circle cx="150" cy="300" r="3" fill="currentColor" opacity="0.6" />
          <circle cx="200" cy="312" r="3" fill="currentColor" opacity="0.5" />
          <circle cx="250" cy="300" r="3" fill="currentColor" opacity="0.6" />
          <path d="M200 268 L200 288" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        </motion.g>
      </svg>
      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-x-2 gap-y-0.5 items-baseline">
        <span className="text-[10px] font-semibold tracking-[0.12em] font-grotesk text-muted">LEARNER JOURNEY · CONCEPTUAL METAPHOR</span>
      </div>
    </div>
  );
}

/** Pinned cinematic journey — desktop + motion OK only. Full-bleed: rendered
    outside the padded container, so no negative-margin breakout is needed. */
function JourneyPinned() {
  return (
    <CineScene height="420vh" label="Learner journey, scroll-driven" className="mt-10">
      {(progress) => <JourneyStage progress={progress} />}
    </CineScene>
  );
}

function JourneyStage({ progress }: { progress: MotionValue<number> }) {
  const step = useStep(progress, 6);
  const s = EXPERIENCE_STEPS[step];
  const Icon = ICONS[step % ICONS.length];
  const bar = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="h-full tint-white border-y border-line relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 sci-grid opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 h-full grid lg:grid-cols-2 gap-8 items-center py-16">
        <div aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-grotesk font-bold text-6xl md:text-7xl text-cyanx/20 select-none" aria-hidden>{s.step}</p>
              <p className="font-grotesk text-[11px] font-bold tracking-[0.18em] text-cyanx mt-2">STEP {s.step} OF 06</p>
              <h3 className="font-grotesk font-bold text-4xl md:text-6xl tracking-tight text-ink mt-2">{s.title}</h3>
              <p className="text-body text-base md:text-lg mt-4 leading-relaxed max-w-md">{s.body}</p>
              <p className="text-[13px] font-medium text-cyanx mt-3 italic">{HINTS[step]}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center gap-2 max-w-md" aria-hidden>
            {EXPERIENCE_STEPS.map((_, i) => (
              <span key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-cyanx" : "bg-line"}`} />
            ))}
          </div>
          <div className="mt-3 h-[3px] max-w-md rounded-full bg-cream overflow-hidden" aria-hidden>
            <motion.div className="h-full bg-gradient-to-r from-bluex to-cyanx rounded-full" style={{ width: bar }} />
          </div>
        </div>
        <div className="relative">
          <span className="absolute -top-9 left-1 inline-grid place-items-center w-11 h-11 rounded-2xl bg-cyanx text-white shadow-lift z-10">
            <Icon size={20} aria-hidden />
          </span>
          <JourneyVisual progress={progress} />
        </div>
      </div>
    </div>
  );
}

/**
 * Calm presentation — ONE source (EXPERIENCE_STEPS), responsive CSS decides
 * the layout: swipeable snap cards on small screens, calm grid on large.
 * Used on mobile and whenever reduced motion is requested.
 */
function StepCards() {
  const [active, setActive] = useState(2);
  const reduce = useReducedMotion();
  return (
    <>
      <ol className="mt-10 flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-5 px-5 lg:grid lg:grid-cols-3 lg:overflow-visible lg:mx-0 lg:px-0" aria-label="Experience steps">
        {EXPERIENCE_STEPS.map((s, i) => {
          const Icon = ICONS[i % ICONS.length];
          const isActive = active === i;
          return (
            <li key={s.step} className="snap-center shrink-0 w-[78%] sm:w-[46%] lg:w-auto lg:shrink">
              <button
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                aria-expanded={isActive}
                aria-label={`Step ${s.step}: ${s.title}`}
                className={`w-full text-left card p-6 relative overflow-hidden transition-all duration-300 min-h-[220px] ${
                  isActive ? "!border-cyanx ring-2 ring-cyanx/20 shadow-lift" : ""
                }`}
              >
                <span className="font-grotesk font-bold text-5xl text-cream select-none absolute top-3 right-4" aria-hidden>{s.step}</span>
                <span className={`inline-grid place-items-center w-10 h-10 rounded-xl relative transition-colors ${isActive ? "bg-cyanx text-white" : "bg-tint text-cyanx"}`}>
                  <Icon size={18} aria-hidden />
                </span>
                <span className="block font-grotesk text-[11px] font-bold tracking-[0.14em] text-cyanx mt-3 relative">STEP {s.step}</span>
                <span className="block font-grotesk font-bold text-xl mt-1 text-ink relative">{s.title}</span>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: reduce ? 0 : 0.28 }}
                      className="overflow-hidden block relative"
                    >
                      <span className="block text-body mt-2 leading-relaxed text-[14px]">{s.body}</span>
                      <span className="block text-[11px] font-medium text-cyanx mt-2 italic">{HINTS[i]}</span>
                    </motion.span>
                  )}
                </AnimatePresence>
                {!isActive && <span className="block text-[12px] text-muted mt-2 relative">Tap to expand +</span>}
              </button>
            </li>
          );
        })}
      </ol>
      <p className="lg:hidden mt-2 text-[11px] text-muted">Swipe sideways · tap a card to expand.</p>
      <div className="mt-6 flex items-center gap-2" aria-hidden>
        {EXPERIENCE_STEPS.map((st, i) => (
          <span key={st.step} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= active ? "bg-cyanx" : "bg-line"}`} />
        ))}
      </div>
    </>
  );
}

export default function Experience() {
  const cinematic = useCinematicEnabled();
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line tint-white scroll-mt-16" aria-label="How the experience feels">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="HOW THE EXPERIENCE FEELS"
          title={<>FROM CURIOUS<br />TO <span className="text-cyanx">CAPABLE.</span></>}
          lede="No engineering manual needed — here's what a SynLab session feels like from the learner's seat: six simple moves, same rhythm every time."
        />
      </div>
      {cinematic ? <JourneyPinned /> : (
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <StepCards />
        </div>
      )}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Takeaway>The pattern never changes — choose, prepare, explore, observe, learn, discover — so confidence builds with every session.</Takeaway>
        <Reveal className="mt-8 flex flex-wrap gap-4">
          <a href="#story" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4 pressable">READ OUR STORY ↓</a>
          <a href="#one" className="btn-primary inline-block font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4 pressable">MEET SYNLAB ONE →</a>
        </Reveal>
      </div>
    </section>
  );
}
