"use client";
import { TINKERCAD_URL } from "@/data/content";
import { Reveal, SectionHead, Takeaway } from "../ui/primitives";
import { Box, ExternalLink, MousePointer2, Rotate3d } from "lucide-react";

export default function Model3D() {
  return (
    <section id="model3d" className="py-24 md:py-32 border-t border-line tint-blue scroll-mt-16 relative overflow-hidden" aria-label="See SynLab in 3D">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_30%_20%,rgba(12,111,189,0.10),transparent_70%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHead
            index="08"
            eyebrow="SEE SYNLAB IN 3D"
            title={<>EXPLORE THE<br />CONCEPT <span className="text-cyanx">IN 3D.</span></>}
            lede="Explore the physical concept from another angle — orbit, zoom and inspect the form of the idea."
          />
          <Reveal className="mt-6 flex flex-wrap gap-3">
            <a
              href={TINKERCAD_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-accent inline-flex items-center gap-2 font-grotesk text-[13px] font-bold tracking-[0.08em] px-7 py-4 pressable"
            >
              OPEN 3D MODEL <ExternalLink size={15} aria-hidden />
            </a>
            <a href="#roadmap" className="btn-ghost inline-flex items-center gap-2 font-grotesk text-[13px] font-semibold tracking-[0.08em] px-6 py-4 pressable">
              SEE THE ROADMAP →
            </a>
          </Reveal>
          <Reveal className="mt-4">
            <p className="text-[12px] text-muted">Opens the official Tinkercad model in a new tab. Tinkercad&apos;s viewer lets you rotate and zoom.</p>
            <p className="mt-2 inline-block text-[11px] font-grotesk font-bold tracking-[0.1em] text-body border border-dashed border-line rounded-full px-3 py-1.5 bg-white">
              CONCEPT MODEL — SHOWN FOR VISUALIZATION, NOT AS A BUILD GUIDE.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <a
            href={TINKERCAD_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Explore the SynLab 3D concept model on Tinkercad (opens in a new tab)"
            className="card group block overflow-hidden relative pressable"
          >
            <span className="absolute inset-0 bg-gradient-to-b from-white to-cream dark:from-[#1B222B] dark:to-[#141920]" aria-hidden />
            <span className="absolute inset-0 sci-grid-fine opacity-60" aria-hidden />
            <span className="absolute inset-0 dot-grid opacity-30" aria-hidden />
            <span className="relative block p-8 md:p-10 text-center">
              <span className="mx-auto grid place-items-center w-16 h-16 rounded-3xl bg-ink text-white group-hover:bg-cyanx transition-colors shadow-lift">
                <Box size={28} aria-hidden />
              </span>
              <span className="block font-grotesk font-bold text-2xl md:text-3xl mt-5 text-ink tracking-tight">
                SynLab <span className="text-cyanx">in 3D</span>
              </span>
              <span className="block text-body text-sm mt-2 max-w-sm mx-auto leading-relaxed">
                A premium preview of the physical concept — drag to orbit inside Tinkercad, scroll to zoom, right-drag to pan.
              </span>
              <span className="mt-5 flex flex-wrap justify-center gap-2 text-[11px] font-grotesk font-bold tracking-[0.08em]">
                <span className="inline-flex items-center gap-1.5 border border-line bg-white rounded-full px-3 py-1.5 text-body group-hover:border-cyanx group-hover:text-cyanx transition-colors">
                  <Rotate3d size={13} aria-hidden /> ORBIT
                </span>
                <span className="inline-flex items-center gap-1.5 border border-line bg-white rounded-full px-3 py-1.5 text-body group-hover:border-cyanx group-hover:text-cyanx transition-colors">
                  <MousePointer2 size={13} aria-hidden /> ZOOM
                </span>
                <span className="inline-flex items-center gap-1.5 bg-ink text-white rounded-full px-4 py-1.5 group-hover:bg-cyanx transition-colors">
                  EXPLORE THE 3D MODEL →
                </span>
              </span>
              <span className="block mt-4 text-[11px] text-muted">Concept model — shown for visualization, not as a build guide.</span>
            </span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyanx via-bluex to-cyanx opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
          </a>
        </Reveal>
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Takeaway>The fastest way to feel the form: open the model, orbit once, and imagine it on your desk, in your classroom, at your club.</Takeaway>
      </div>
    </section>
  );
}
