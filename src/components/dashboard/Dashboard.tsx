"use client";
import { useEffect, useMemo, useState } from "react";
import { DASHBOARD_URL, DASHBOARD_METRICS, READING_GUIDE } from "@/data/content";
import { Reveal, SectionHead, Takeaway, MethodNote } from "../ui/primitives";
import { Activity, Droplets, Eye, FlaskConical, Lightbulb, Thermometer, Wind, Waves, ExternalLink } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";

function useSimulatedStream() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1500);
    return () => clearInterval(id);
  }, []);
  const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const t = reduced ? 4 : tick;
  return useMemo(() => ({
    temp: 25.4 + Math.sin(t / 3) * 0.8,
    humidity: 46 + Math.cos(t / 4) * 4,
    air: 118 + Math.sin(t / 2.2) * 14,
    light: 320 + Math.cos(t / 3.4) * 60,
    water: 24.1 + Math.sin(t / 5) * 0.5,
    series: Array.from({ length: 24 }, (_, i) => ({
      i,
      conditions: +(25.4 + Math.sin((t + i) / 3) * 0.9).toFixed(2),
      observation: +(46 + Math.cos((t + i) / 4) * 4).toFixed(1),
    })),
  }), [t]);
}

export default function Dashboard() {
  const s = useSimulatedStream();
  const cards = [
    { icon: Thermometer, label: "CONDITIONS", value: `${s.temp.toFixed(1)} °C`, sub: "Sensing layer · simulated" },
    { icon: Droplets, label: "ATMOSPHERE", value: `${s.humidity.toFixed(0)} %`, sub: "Sensing layer · simulated" },
    { icon: Wind, label: "AIR", value: `${Math.round(s.air)} idx`, sub: "Sensing layer · simulated" },
    { icon: Lightbulb, label: "LIGHT", value: `${Math.round(s.light)} lx`, sub: "Sensing layer · simulated" },
    { icon: Waves, label: "SAMPLE", value: `${s.water.toFixed(1)} °C`, sub: "Sensing layer · simulated" },
    { icon: Eye, label: "OBSERVATION", value: "Slide live", sub: "Observation layer · concept" },
  ];
  return (
    <section id="dashboard" className="py-24 md:py-32 border-t border-line tint-deep scroll-mt-16" aria-label="Dashboard preview">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead index="11" eyebrow="THE DIGITAL SIDE · SIMULATION MODE" title={<>THE LAB, <span className="text-cyanx">ON SCREEN.</span></>} lede="The dashboard concept is the digital layer of SynLab — a calm screen for observing readings and following guided activities. What you see here is a simulation of that idea." />
        <Reveal className="mt-6 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 text-[12px] font-grotesk font-semibold tracking-[0.10em] border border-[#F0D9A8] text-[#8a5a12] px-4 py-2 rounded-full bg-[#FDF3E2]">
            <span className="w-2 h-2 rounded-full bg-sunny" aria-hidden /> SIMULATION MODE — DEMO VALUES ONLY
          </span>
          <span className="text-[12px] text-muted">Watch a few seconds: values drift to suggest how a guided session could feel.</span>
        </Reveal>
        <div className="card mt-8 overflow-hidden !rounded-[22px]">
          <div className="flex items-center justify-between border-b border-line bg-paper px-5 py-3">
            <div className="flex items-center gap-2 text-[12px] font-grotesk font-bold tracking-[0.08em] text-ink">
              <span className="w-2.5 h-2.5 rounded-full bg-leaf" aria-hidden />
              SESSION VIEW · GUIDED ACTIVITY (SIMULATED)
            </div>
            <div className="flex gap-1.5" aria-hidden><i className="w-2.5 h-2.5 rounded-full bg-line inline-block" /><i className="w-2.5 h-2.5 rounded-full bg-line inline-block" /><i className="w-2.5 h-2.5 rounded-full bg-leaf inline-block" /></div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line">
            <div className="bg-white p-5 md:col-span-2">
              <p className="font-grotesk text-[12px] font-semibold tracking-[0.08em] text-muted flex items-center gap-2"><Activity size={14} className="text-cyanx" /> ACTIVITY TREND · CONDITIONS OVER TIME (SIMULATED)</p>
              <div className="h-56 mt-4 rounded-card bg-paper border border-line p-2" role="img" aria-label="Simulated illustration of activity trends over time">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={s.series}>
                    <XAxis dataKey="i" hide />
                    <YAxis hide domain={["auto", "auto"]} />
                    <Tooltip contentStyle={{ background: "#FFFFFF", border: "1px solid #E3E6EA", borderRadius: 12, fontSize: 12, color: "#17191C" }} />
                    <Legend wrapperStyle={{ fontSize: 11, color: "#697078" }} />
                    <Line type="monotone" dataKey="conditions" stroke="#0C6FBD" strokeWidth={2.5} dot={false} isAnimationActive={false} name="Conditions trend" />
                    <Line type="monotone" dataKey="observation" stroke="#0E9F9A" strokeWidth={2} dot={false} isAnimationActive={false} name="Observation trend" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-2 text-[11px] text-muted">Illustrative trends only — the concept is about following change, not these numbers.</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-line bg-paper p-3"><p className="text-muted font-semibold font-grotesk text-[10px] tracking-[0.1em]">SESSION STATUS</p><p className="mt-1 text-ink">Guided activity in progress <span className="text-muted">(simulated)</span></p></div>
                <div className="rounded-xl border border-line bg-paper p-3 flex items-center gap-2 text-ink"><FlaskConical size={16} className="text-cyanx shrink-0" /><p>Observe, note, discuss <span className="text-muted">(concept flow)</span></p></div>
              </div>
            </div>
            <ul className="bg-white grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-px">
              {cards.map((c) => (
                <li key={c.label} className="bg-white p-4 border border-transparent hover:bg-paper transition">
                  <span className="inline-grid place-items-center w-8 h-8 rounded-xl bg-tint text-cyanx"><c.icon size={16} aria-hidden /></span>
                  <p className="mt-2 font-grotesk text-[10px] font-semibold tracking-[0.1em] text-muted">{c.label}</p>
                  <p className="font-grotesk font-bold text-lg mt-0.5 text-ink" aria-live="off">{c.value}</p>
                  <p className="text-[11px] text-muted">{c.sub}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-line bg-paper px-5 py-4 flex flex-wrap items-center gap-4 justify-between">
            <p className="text-[11px] text-muted">Concept preview. No backend, protocol or implementation detail is exposed here.</p>
            <a href={DASHBOARD_URL} target="_blank" rel="noreferrer" className="btn-accent inline-flex items-center gap-2 font-grotesk text-[13px] font-bold px-5 py-3">OPEN DEMO DASHBOARD <ExternalLink size={14} /></a>
          </div>
        </div>
        <Reveal className="card mt-6 overflow-x-auto !p-0">
          <table className="w-full text-sm min-w-[620px]">
            <thead><tr className="font-grotesk text-[11px] font-bold tracking-[0.1em] text-muted border-b border-line bg-paper">
              <th className="text-left p-4">WHAT YOU FOLLOW</th><th className="text-left p-4">LAYER</th><th className="text-left p-4">WHY IT HELPS LEARNING</th>
            </tr></thead>
            <tbody>
              {DASHBOARD_METRICS.map((m) => (
                <tr key={m.metric} className="border-b border-line last:border-0 hover:bg-tint/60">
                  <th className="text-left p-4 font-semibold text-ink">{m.metric}</th>
                  <td className="p-4 text-cyanx font-grotesk font-semibold text-[13px]">{m.layer}</td>
                  <td className="p-4 text-body">{m.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Takeaway>The screen supports the bench: observe change, follow guidance, discuss what happened — technology in service of understanding.</Takeaway>
        <MethodNote>{READING_GUIDE.dashboard}</MethodNote>
        <Reveal className="mt-8">
          <a href="#research" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">THE EVIDENCE BEHIND IT ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
