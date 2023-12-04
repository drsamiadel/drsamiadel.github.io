import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vT323: ["var(--font-VT323)"],
        coming_Soon: ["var(--font-Coming_Soon)"],
      },
    },
  },
  plugins: [],
};
export default config;
