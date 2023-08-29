import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: ''
        }
      },
      fontSize: {
        pageTitle: '24px',
        title: '20px',
        subtitle: '18px'
      }
    },
  },
  plugins: [],
} satisfies Config

