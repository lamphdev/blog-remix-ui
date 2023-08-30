import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0891b2',
          foreground: '#fff'
        },
        danger: {
          DEFAULT: '#ef4444',
          foreground: '#fff'
        },
        card: '#fff',
        background: '#f1f5f9'
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

