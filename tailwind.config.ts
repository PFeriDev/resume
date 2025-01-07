import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      sintony: ["Sintony", "sans-serif"],
    },
    extend: {
      colors: {
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
} satisfies Config;
