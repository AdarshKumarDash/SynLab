/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#F7F7F2",
        charcoal: "#FFFFFF",
        panel: "#FFFFFF",
        paper: "#FAFAF7",
        cream: "#F4F5F2",
        tint: "#EEF4FA",
        ink: "#17191C",
        body: "#3D4248",
        line: "#E3E6EA",
        cyanx: "#0C6FBD",
        bluex: "#0E9F9A",
        sunny: "#E8A33D",
        leaf: "#3E9B6B",
        muted: "#697078",
      },
      fontFamily: {
        grotesk: ["'Plus Jakarta Sans'", "'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
        editorial: ["'Instrument Serif'", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(23,25,28,0.05), 0 8px 24px -12px rgba(23,25,28,0.14)",
        lift: "0 2px 4px rgba(23,25,28,0.06), 0 16px 32px -16px rgba(23,25,28,0.20)",
        soft: "0 6px 20px -8px rgba(14,127,214,0.25)",
      },
      borderRadius: {
        card: "18px",
      },
    },
  },
  plugins: [],
};

