/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#031a33',
          50: '#e7edf5',
          100: '#c5d2e6',
          200: '#9db5d2',
          300: '#6d92bd',
          400: '#3b75b5',
          500: '#2a5d99',
          600: '#1f4a7d',
          700: '#163a64',
          800: '#0d2a4b',
          900: '#031a33',
          950: '#020f1f',
        },
        sky: {
          DEFAULT: '#3b75b5',
          light: '#bdd4f0',
        },
        accent: {
          DEFAULT: '#3b75b5',
          light: '#bdd4f0',
        },
      },
      fontFamily: {
        headline: ['"Oswald"', '"Franklin Gothic Medium"', 'sans-serif'],
        body: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'count-tick': 'countTick 0.4s ease-out',
        'scan': 'scan 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,117,181,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59,117,181,0.6)' },
        },
        countTick: {
          '0%': { transform: 'scale(1.2)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
