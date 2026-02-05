import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#00231d',
        'primary-green': '#8dc71d',
        'secondary-green': '#104f25',
        'background-cream': '#f4f9f1',
        'surface-white': '#ffffff',
      },
      fontFamily: {
        heading: ['var(--font-lexend)', 'sans-serif'],
        sans: ['var(--font-ubuntu)', 'sans-serif'],
        // keeping these for backward compatibility if needed, but semantic names are preferred
        lexend: ['var(--font-lexend)', 'sans-serif'],
        ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
      },
      fontSize: {
        'h1': ['70px', { lineHeight: '90px', fontWeight: '700' }],
        'h2': ['46px', { lineHeight: '64px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: '600' }], // Adjusted size
        'body-lg': ['16px', { lineHeight: '28px', fontWeight: '400' }],
      }
    },
  },
  plugins: [],
}
export default config
