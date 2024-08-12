import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4332",
        secondary: "#E9D8A6",
        accent: "#CA6702",
      },
      fontFamily: {
        title: ["var(--font-title)"],
        text: ["var(--font-text)"],
      },
    },
  },
  plugins: [],
};
export default config;
