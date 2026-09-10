"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * HeroScene — very subtle abstract "connected lab idea" treatment.
 * Lightweight 2D canvas: soft particles + gentle orbit ellipses + faint
 * constellation links. Represents the IDEA of connection, never construction
 * (no circuits, wiring, components, sensors, GPIO or architecture).
 * - Desktop: follows cursor with very low intensity (few px parallax).
 * - Mobile / no-hover: gentle autonomous drift.
 * - Respects prefers-reduced-motion (single static frame).
 * - Pauses offscreen via IntersectionObserver; caps DPR for performance.
 */
export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      reduce ||
      (typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    type P = { bx: number; by: number; r: number; hue: string; ph: number; sp: number; depth: number };
    let parts: P[] = [];

    const COLORS = ["#0C6FBD", "#0E9F9A", "#E8A33D", "#5B7FA6"];

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      const count = w < 420 ? 22 : 34;
      parts = Array.from({ length: count }, (_, i) => ({
        bx: Math.random() * w,
        by: Math.random() * h,
        r: 1 + Math.random() * 2.2,
        hue: COLORS[i % COLORS.length],
        ph: Math.random() * Math.PI * 2,
        sp: 0.3 + Math.random() * 0.7,
        depth: 0.3 + Math.random() * 0.7, // parallax depth
      }));
    }

    // Cursor influence (very low intensity), lerped for softness.
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let autoT = Math.random() * 100;

    function onMove(e: PointerEvent) {
      if (e.pointerType === "touch") return;
      const rect = canvas!.getBoundingClientRect();
      tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1..1
      ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    }
    function onLeave() {
      tx = 0;
      ty = 0;
    }

    const host = canvas.parentElement;
    host?.addEventListener("pointermove", onMove as EventListener, { passive: true });
    host?.addEventListener("pointerleave", onLeave);

    const ob = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !reduced) loop();
        else if (!running) cancelAnimationFrame(raf);
        if (running && reduced) drawFrame(0);
      },
      { threshold: 0.05 }
    );
    ob.observe(canvas);

    function drawFrame(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const cxp = w / 2 + cx * 8;
      const cyp = h / 2 + cy * 8;

      // Soft central glow — abstract "lab idea", not a device render.
      const glow = ctx.createRadialGradient(cxp, cyp, 0, cxp, cyp, Math.min(w, h) * 0.42);
      glow.addColorStop(0, "rgba(12,111,189,0.10)");
      glow.addColorStop(0.6, "rgba(14,159,154,0.05)");
      glow.addColorStop(1, "rgba(12,111,189,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Central abstract mark: two soft rounded forms + orbit rings.
      ctx.save();
      ctx.translate(cxp, cyp);
      // Main soft form
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.strokeStyle = "rgba(12,111,189,0.28)";
      ctx.lineWidth = 1.2;
      roundRect(ctx, -72, -52, 144, 104, 26);
      ctx.fill();
      ctx.stroke();
      // Inner accent bar (abstract, not a sensor strip)
      ctx.fillStyle = "rgba(12,111,189,0.75)";
      roundRect(ctx, -52, -42, 104, 7, 4);
      ctx.fill();
      // Secondary soft card
      ctx.fillStyle = "rgba(244,245,242,0.95)";
      ctx.strokeStyle = "rgba(23,25,28,0.10)";
      ctx.lineWidth = 1;
      roundRect(ctx, -52, -24, 64, 62, 14);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "rgba(14,159,154,0.85)";
      ctx.beginPath();
      ctx.arc(28, 8, 14 + Math.sin(t * 0.0012) * 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(232,163,61,0.9)";
      ctx.beginPath();
      ctx.arc(-38, -34, 5, 0, Math.PI * 2);
      ctx.fill();
      // Orbit ellipses — gentle, thin
      ctx.strokeStyle = "rgba(12,111,189,0.22)";
      ctx.lineWidth = 1;
      ctx.save();
      ctx.rotate(-0.28 + cx * 0.04);
      ctx.beginPath();
      ctx.ellipse(0, 0, 118, 66, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      ctx.save();
      ctx.rotate(0.22 + cy * 0.04);
      ctx.strokeStyle = "rgba(14,159,154,0.20)";
      ctx.beginPath();
      ctx.ellipse(0, 0, 148, 92, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      // Orbit dots
      const o1 = t * 0.00022;
      const o2 = -t * 0.00016;
      ctx.fillStyle = "#0C6FBD";
      ctx.beginPath();
      ctx.arc(Math.cos(o1) * 118, Math.sin(o1) * 66 * Math.cos(-0.28) - 0, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#E8A33D";
      ctx.beginPath();
      ctx.arc(Math.cos(o2) * 148, Math.sin(o2) * 92, 2.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Particles + faint links (constellation = connection idea)
      const pts = parts.map((p) => {
        const drift = reduced ? 0 : Math.sin(t * 0.0006 * p.sp + p.ph) * 7;
        const driftY = reduced ? 0 : Math.cos(t * 0.0005 * p.sp + p.ph) * 7;
        return {
          x: p.bx + drift + cx * 14 * p.depth,
          y: p.by + driftY + cy * 14 * p.depth,
          p,
        };
      });
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 88) {
            ctx.strokeStyle = `rgba(12,111,189,${(1 - d / 88) * 0.13})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      for (const { x, y, p } of pts) {
        ctx.globalAlpha = 0.5 + 0.3 * Math.sin(t * 0.001 * p.sp + p.ph);
        ctx.fillStyle = p.hue;
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function roundRect(c: CanvasRenderingContext2D, x: number, y: number, rw: number, rh: number, r: number) {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + rw, y, x + rw, y + rh, r);
      c.arcTo(x + rw, y + rh, x, y + rh, r);
      c.arcTo(x, y + rh, x, y, r);
      c.arcTo(x, y, x + rw, y, r);
      c.closePath();
    }

    function loop() {
      cancelAnimationFrame(raf);
      if (!running || reduced) return;
      const step = () => {
        if (!running) return;
        // Ease cursor
        cx += (tx - cx) * 0.045;
        cy += (ty - cy) * 0.045;
        // Autonomous drift on coarse pointers / when idle
        const coarse = window.matchMedia?.("(hover: none)").matches;
        if (coarse || (Math.abs(tx) < 0.01 && Math.abs(ty) < 0.01)) {
          autoT += 0.008;
          cx += (Math.sin(autoT) * 0.35 - cx) * 0.01;
          cy += (Math.cos(autoT * 0.8) * 0.35 - cy) * 0.01;
        }
        drawFrame(performance.now());
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    if (reduced) drawFrame(0);
    else loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      host?.removeEventListener("pointermove", onMove as EventListener);
      host?.removeEventListener("pointerleave", onLeave);
      ob.disconnect();
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
