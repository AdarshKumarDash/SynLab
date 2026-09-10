import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYNLAB — The Portable Lab | By Team Innovexa",
  description:
    "SynLab brings the lab to every learner. A portable, modular laboratory system by Team Innovexa — prototype SynLab ONE, live-style dashboard simulation, research and the future SynLab PRO concept.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-void text-ink antialiased">{children}</body>
    </html>
  );
}
