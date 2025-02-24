import type { Config } from "tailwindcss";


const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "var(--primary-color)",
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
      },
        background: "var(--bg-color)",
        text: "var(--text-color)",
        accent: "var(--accent-color)",
        "accent-dark": "var(--accent-dark)",
        "accent-light": "var(--accent-light)",
        border: "var(--border-color)",
        "primary-bg": "var(--primary-bg)",
        "primary-text": "var(--primary-text)",
        "soft-border": "var(--soft-border)",
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
  // plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config