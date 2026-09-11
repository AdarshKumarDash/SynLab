"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="pressable inline-flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 font-grotesk text-[12px] font-bold tracking-[0.08em] text-body hover:border-cyanx hover:text-cyanx transition-colors"
    >
      <span aria-hidden className="grid place-items-center">
        {dark ? <Sun size={15} /> : <Moon size={15} />}
      </span>
      {!compact && <span className="hidden min-[420px]:inline">{dark ? "☼ LIGHT" : "☾ DARK"}</span>}
      {compact && <span className="sr-only">{dark ? "Light" : "Dark"}</span>}
    </button>
  );
}
