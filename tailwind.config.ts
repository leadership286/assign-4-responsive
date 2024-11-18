import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', ...fontFamily.sans],
        integralcf: ['"Integral CF"', ...fontFamily.sans],
       
      },
    },
  },
  plugins: [],
} satisfies Config;
