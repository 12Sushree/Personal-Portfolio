/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scans all components
  darkMode: "class", // Enables dark mode support
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo-600 (custom primary color)
        secondary: "#1E40AF",
      },
      animation: {
        slideFade: "slideFade 1.2s ease-out",
        fadeIn: "fadeIn 1.5s ease-in",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        slideFade: {
          "0%": { opacity: 0, transform: "translateX(-40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
