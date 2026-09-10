"use client";
import { SURVEY, KEY_FINDINGS, READING_GUIDE } from "@/data/content";
import { Reveal, SectionHead, FactStrip, Takeaway, MethodNote, useCountUp, useInViewOnce } from "../ui/primitives";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";

function ChartCard({ title, note, insight, children }: { title: string; note: string; insight: string; children: React.ReactNode }) {
  return (
    <div className="card p-5 card-hover flex flex-col">
      <h3 className="font-grotesk text-[13px] font-bold tracking-[0.06em] text-ink">{title}</h3>
      <div className="h-52 mt-3" role="img" aria-label={title}>{children}</div>
      <p className="text-[11px] text-muted mt-2">{note}</p>
      <p className="text-[12px] text-ink mt-2 pt-2 border-t border-line leading-relaxed"><strong className="text-cyanx font-grotesk text-[11px] tracking-[0.08em]">WHAT IT SUGGESTS — </strong>{insight}</p>
    </div>
  );
}

export default function Research() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const v80 = useCountUp(80, inView);
  const v30 = useCountUp(30, inView);
  const tip = { background: "#FFFFFF", border: "1px solid #E3E6EA", borderRadius: 12, fontSize: 12, color: "#17191C" };

  return (
    <section id="research" className="py-24 md:py-32 border-t border-line tint-hero scroll-mt-16" aria-label="Research and validation">
      <div className="mx-auto max-w-7xl px-5 md:px-8" ref={ref}>
        <SectionHead
          index="12"
          eyebrow="RESEARCH & VALIDATION"
          title={<>BUILT AROUND A<br /><span className="text-cyanx">REAL PROBLEM.</span></>}
          lede="Team Innovexa spoke with students, educators, parents, hobbyists, institutions and researchers — then shaped SynLab around what they heard. No raw responses or personal data here; just the patterns that guided the design."
        />

        <Reveal className="mt-8">
          <FactStrip facts={KEY_FINDINGS} />
        </Reveal>
        <MethodNote>{READING_GUIDE.survey}</MethodNote>

        <Reveal className="card mt-6 p-5 md:p-6 !bg-gradient-to-r !from-white !to-tint">
          <h3 className="font-grotesk text-[13px] font-bold tracking-[0.06em] text-ink">WHO WE LISTENED TO</h3>
          <div className="mt-3 flex flex-wrap gap-2" aria-label="Stakeholders">
            {SURVEY.stakeholders.map((s) => (
              <span key={s} className="font-grotesk text-[12px] font-semibold border border-line text-body px-4 py-2 rounded-full bg-white shadow-card">{s}</span>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-body leading-relaxed">Usage, difficulty, access and openness to better systems — plus the reasons behind the difficulties. Small sample, honestly reported, used to guide design rather than claim universality.</p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          <Reveal className="card p-8 text-center !bg-gradient-to-b !from-tint !to-white">
            {/* Static target until in view: SSR / no-JS paint must read 80%, never 0%. */}
            <p className="font-grotesk font-bold text-6xl md:text-7xl text-cyanx">{inView ? Math.round(v80) : 80}%</p>
            <p className="font-grotesk font-bold tracking-[0.06em] text-sm mt-2 text-ink">STUDENTS INTERESTED IN SCIENCE</p>
            <p className="text-[11px] text-muted mt-2">Source: IIT Madras 2026 presentation, as referenced in project materials.</p>
            <p className="text-[12px] text-body mt-2">The curiosity is there — the question is whether practical access keeps up.</p>
          </Reveal>
          <Reveal delay={0.1} className="card p-8 text-center">
            {/* Static target until in view: SSR / no-JS paint must read 30%, never 0%. */}
            <p className="font-grotesk font-bold text-6xl md:text-7xl text-ink">{inView ? Math.round(v30) : 30}%</p>
            <p className="font-grotesk font-bold tracking-[0.06em] text-sm mt-2 text-body">ENGAGE IN PRACTICAL ACTIVITIES</p>
            <p className="text-[11px] text-muted mt-2">Source: IIT Madras 2026 presentation, as referenced in project materials.</p>
            <p className="text-[12px] text-body mt-2">Interest outpaces hands-on opportunity — exactly the gap SynLab addresses.</p>
          </Reveal>
        </div>

        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <ChartCard title="HOW OFTEN PRACTICAL WORK HAPPENS" note="Very frequent 27.7% · Occasional 33.8% · Rare 27.7% · None 10.8%" insight="Most people do some practical work — the audience exists; access is the gap.">
            <ResponsiveContainer><BarChart data={SURVEY.usage} layout="vertical">
              <XAxis type="number" hide domain={[0, 40]} /><YAxis type="category" dataKey="label" width={90} tick={{ fill: "#697078", fontSize: 11 }} />
              <Tooltip contentStyle={tip} /><Bar dataKey="value" fill="#0C6FBD" radius={[0, 6, 6, 0]} isAnimationActive={false} />
            </BarChart></ResponsiveContainer>
          </ChartCard>
          <ChartCard title="HOW OFTEN DIFFICULTIES APPEAR" note="Often 13.8% + Sometimes 50.8% = 64.6% at least sometimes." insight="Difficulty is common, not exceptional — the experience needs rethinking.">
            <ResponsiveContainer><PieChart>
              <Pie data={SURVEY.difficulty} dataKey="value" nameKey="label" innerRadius={45} outerRadius={75} paddingAngle={3} isAnimationActive={false} stroke="#fff" strokeWidth={2}>
                {SURVEY.difficulty.map((_, i) => <Cell key={i} fill={["#0C6FBD", "#0E9F9A", "#E8A33D", "#E3E6EA"][i]} />)}
              </Pie><Tooltip contentStyle={tip} />
            </PieChart></ResponsiveContainer>
          </ChartCard>
          <ChartCard title="ACCESS WHEN NEEDED" note="Only 16.9% easy access → 83.1% face some limitation." insight="The clearest case for portability: access fails far more than it works.">
            <ResponsiveContainer><BarChart data={SURVEY.access}>
              <XAxis dataKey="label" tick={false} /><YAxis hide domain={[0, 60]} /><Tooltip contentStyle={tip} />
              <Bar dataKey="value" fill="#0C6FBD" radius={[6, 6, 0, 0]} isAnimationActive={false} />
            </BarChart></ResponsiveContainer>
          </ChartCard>
          <ChartCard title="WHAT MAKES IT DIFFICULT?" note="Time 54.2% · equipment 50.8% · guidance 42.4% · safety 32.2% · outdated 32.2% (multi-select)." insight="Time, equipment and guidance lead — the three bets SynLab is designed around.">
            <ResponsiveContainer><BarChart data={SURVEY.causes} layout="vertical">
              <XAxis type="number" hide /><YAxis type="category" dataKey="label" width={110} tick={{ fill: "#697078", fontSize: 11 }} />
              <Tooltip contentStyle={tip} /><Bar dataKey="pct" fill="#0E9F9A" radius={[0, 6, 6, 0]} isAnimationActive={false} name="Share (%)" />
            </BarChart></ResponsiveContainer>
          </ChartCard>
          <ChartCard title="OPENNESS TO BETTER SYSTEMS" note="Extremely helpful 66.2% + Helpful 29.2% = 95.4% positive." insight="Near-unanimous welcome — nobody rated a better system unhelpful.">
            <ResponsiveContainer><BarChart data={SURVEY.demand}>
              <XAxis dataKey="label" tick={false} /><YAxis hide domain={[0, 70]} /><Tooltip contentStyle={tip} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} isAnimationActive={false}>{SURVEY.demand.map((_, i) => <Cell key={i} fill={i < 2 ? "#0C6FBD" : "#E3E6EA"} />)}</Bar>
            </BarChart></ResponsiveContainer>
          </ChartCard>
          <div className="card p-5 !bg-gradient-to-b !from-white !to-tint">
            <h3 className="font-grotesk text-[13px] font-bold tracking-[0.06em] text-ink">WHAT THIS MEANS FOR YOU</h3>
            <ul className="mt-3 space-y-2.5 text-sm text-body">
              <li><strong className="text-ink">Students — </strong>you&apos;re not alone if practical work feels hard to reach.</li>
              <li><strong className="text-ink">Educators — </strong>the constraints you navigate are widely shared.</li>
              <li><strong className="text-ink">Schools — </strong>interest is high; flexible formats can help meet it.</li>
            </ul>
            <p className="text-[11px] text-muted mt-3">Honest framing: a small stakeholder study guiding a concept — further validation is part of the road ahead.</p>
          </div>
        </div>

        <Takeaway>Accessibility matters. Time, safety and guidance matter. And interest in better ways to learn practically is overwhelming — that&apos;s the foundation SynLab is built on.</Takeaway>
        <Reveal className="mt-8">
          <a href="#compare" className="btn-ghost inline-block font-grotesk text-[13px] font-semibold tracking-[0.08em] px-7 py-4">SYNLAB IN CONTEXT ↓</a>
        </Reveal>
      </div>
    </section>
  );
}
