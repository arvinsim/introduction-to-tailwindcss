import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'viki-green': {
          '50': '#f2fcf1',
          '100': '#e0f9df',
          '200': '#c2f2c0',
          '300': '#a1ea9f',
          '400': '#59d256',
          '500': '#31b82f',
          '600': '#249722',
          '700': '#20771e',
          '800': '#1c5f1c',
          '900': '#194e19',
          '950': '#082b09',
        },
      },
    },
  },
  plugins: [],
}
export default config
