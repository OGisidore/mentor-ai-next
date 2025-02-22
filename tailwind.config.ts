import type { Config } from "tailwindcss";
const { keyframes } = require('@emotion/react');


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        // Animation pour l'indicateur vocal
        'voice-pulse': 'pulse 2s infinite',
        'voice-wave': 'wave 1s infinite',
      },
      keyframes: {
        pulse: {
          '0%': { 
            transform: 'scale(0.95)', 
            boxShadow: '0 0 0 0 rgba(71, 85, 105, 0.4)' 
          },
          '70%': { 
            transform: 'scale(1)', 
            boxShadow: '0 0 0 20px rgba(71, 85, 105, 0)' 
          },
          '100%': { 
            transform: 'scale(0.95)', 
            boxShadow: '0 0 0 0 rgba(71, 85, 105, 0)' 
          }
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.1)' },
          '50%': { transform: 'scaleY(1)' }
        }
      },
      animationDelay: {
        '100': '0.1s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s'
      }
    },
  },
  plugins: [],
} satisfies Config;
