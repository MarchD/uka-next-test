import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#249f21',
        danger: '#d00b0f',
        info: '#0c3185',
        accent: '#aefbf9',
        highlight: '#f4f553',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'], // default
        poppins: ['var(--font-poppins)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700' }],
        h2: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        body1: ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        body2: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}

export default config
