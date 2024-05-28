import type { Config } from "tailwindcss"
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: '#3A6DFF',
        accent: '#6130FF',
        'alice-blue': '#dcf8ff',
        'light-blue': '#E6ECFF',

      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        buttonPress: {
          '0%, 100%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.05)'},
        },

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
         buttonPress: 'buttonPress 200ms ease-in-out',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar'),
    plugin(function ({addComponents}) {
      addComponents({
        '.btn-common': {
          display: 'flex',
          height: '2.5rem',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.5rem',
          padding: '12px 32px 8px 32px',
          backgroundColor: 'rgb(240 248 255)',
          color: ' rgb(58 109 255)',
          transition: 'all',
          transitionDuration: '.3s',
        },
      });
    }),
  ],
} satisfies Config

export default config