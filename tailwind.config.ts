// More information here
// https://tailwindcss.com/docs/configuration
// Full Config: https://gist.github.com/benfurfie/2290b626b8964b6b0dd68394827868db
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      /*
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: {
          light: '#4f46e5',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        secondary: {
          light: '#6b7280',
          DEFAULT: '#4b5563',
          dark: '#374151',
        },
        accent: {
          light: '#d1fae5',
          DEFAULT: '#10b981',
          dark: '#047857',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      */
      colors: {
        "viki-blue": {
          "50": "#edfbff",
          "100": "#d7f4ff",
          "200": "#b9eeff",
          "300": "#88e5ff",
          "400": "#50d4ff",
          "500": "#28b9ff",
          "600": "#0c9cff",
          "700": "#0a84eb",
          "800": "#0f69be",
          "900": "#135995",
          "950": "#11365a",
        },
        "viki-gray": {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#292929",
        },
      },
    },
  },
  plugins: [],
};
export default config;
