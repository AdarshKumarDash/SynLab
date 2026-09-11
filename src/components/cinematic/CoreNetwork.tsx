"use client";
import { motion } from "framer-motion";

/**
 * CORE NETWORK — visual metaphor for expansion, not architecture.
 * One portable experience at the center; learning environments around it,
 * joined by abstract threads. No protocols, no topology, no tech.
 * currentColor-driven, so both themes render natively.
 */
const NODES = [
  { x: 200, y: 52, label: "CLASSROOM" },
  { x: 322, y: 140, label: "SCIENCE CLUB" },
  { x: 272, y: 262, label: "FIELD" },
  { x: 128, y: 262, label: "INSTITUTION" },
  { x: 78, y: 140, label: "LAB" },
];

export default function CoreNetwork() {
  return (
    <div className="mt-6 rounded-2xl border border-dashed border-line bg-paper px-4 py-5" aria-label="Core ecosystem concept">
      <svg viewBox="0 0 400 320" className="w-full max-w-md mx-auto text-cyanx" role="img" aria-label="Concept: one portable experience connected to classrooms, clubs, field learning and institutions">
        {NODES.map((n, i) => (
          <motion.line
            key={n.label}
            x1="200" y1="168" x2={n.x} y2={n.y}
            stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="5 5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: "easeOut" }}
          />
        ))}
        <circle cx="200" cy="168" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="200" cy="168" r="38" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 4" />
        <text x="200" y="173" textAnchor="middle" fontSize="13" fontWeight="800" fill="currentColor" fontFamily="'Plus Jakarta Sans', Inter, sans-serif">ONE</text>
        {NODES.map((n, i) => (
          <motion.g
            key={n.label}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <circle cx={n.x} cy={n.y} r="11" fill="currentColor" opacity="0.16" />
            <circle cx={n.x} cy={n.y} r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx={n.x} cy={n.y} r="3.5" fill="currentColor" />
            <text x={n.x} y={n.y + 28} textAnchor="middle" fontSize="10" fontWeight="700" letterSpacing="1" fill="currentColor" opacity="0.85" fontFamily="'Plus Jakarta Sans', Inter, sans-serif">{n.label}</text>
          </motion.g>
        ))}
      </svg>
      <p className="text-center text-[11px] text-muted mt-2">ONE portable experience → a wider learning ecosystem. Metaphor, not architecture.</p>
    </div>
  );
}
