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
        sub: "#E63946",
        shark: "#1D2023",
      },
      screens: {
        bp: "840px",
        sc: "839px",
      },
    },
  },
  plugins: [],
};
export default config;
