import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#071022',
          850: '#0a1530',
          800: '#0f1e42',
          700: '#15295c',
        },
        royal: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        neon: {
          400: '#00d4ff',
          300: '#7ee8fa',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0,212,255,0.25), 0 0 28px -6px rgba(0,212,255,0.4)',
        card: '0 4px 24px -4px rgba(0,0,0,0.4)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blobFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(3%, -4%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.95)' },
        },
        drift: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-120px) translateX(12px)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow:
              '0 0 0 1px rgba(0,212,255,0.35), 0 0 20px 2px rgba(0,212,255,0.35), 0 0 40px 10px rgba(0,212,255,0.15)',
          },
          '50%': {
            boxShadow:
              '0 0 0 1px rgba(0,212,255,0.65), 0 0 34px 6px rgba(0,212,255,0.6), 0 0 64px 16px rgba(0,212,255,0.3)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out both',
        blobFloat: 'blobFloat 14s ease-in-out infinite',
        blobFloatSlow: 'blobFloat 22s ease-in-out infinite',
        drift: 'drift 9s ease-in infinite',
        glowPulse: 'glowPulse 2.2s ease-in-out infinite',
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
