import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      sintony: ["Sintony", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          50: "#f5f3ff",
          100: "#e0e7ff",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        mainblack: "#131313",
        mainwhite: "#F2F2F2",
        maingray: "#454955",
        darkblue: "#007CED",
        lightblue: "#5CC8FF",
        lightgray: "#93867F",
        mainbg: "#222222",
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Alapértelmezett Tailwind beállítások
    preflight: true,
  },
  future: {
    // Enable `future` features in Tailwind CSS
  },
} satisfies Config;
