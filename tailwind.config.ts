import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {

      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'dblue': '#314CA3'
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'lato': ['Lato', 'sans-serif']
    }
  },
  plugins: [
    daisyui
  ]
}
export default config
