import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050914',
          900: '#0a1024',
          850: '#0c1330',
          800: '#101a3a',
          700: '#16214a',
        },
        royal: {
          400: '#5b7ff0',
          500: '#3b63e0',
          600: '#2952d6',
          700: '#2140ad',
        },
        neon: {
          400: '#38bdf8',
          300: '#7dd3fc',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.25), 0 0 24px -6px rgba(56,189,248,0.35)',
        card: '0 4px 24px -4px rgba(0,0,0,0.4)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out both',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
