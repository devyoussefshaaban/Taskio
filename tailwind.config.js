/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f8fafc', // slate-50
          dark: '#0f172a', // slate-900
        },
        surface: {
          light: '#ffffff',
          dark: '#1e293b', // slate-800
        },
        border: {
          light: '#e2e8f0', // slate-200
          dark: '#334155', // slate-700
        },
        text: {
          light: '#0f172a', // slate-900
          dark: '#f8fafc', // slate-50
        },
        textMuted: {
          light: '#64748b', // slate-500
          dark: '#94a3b8', // slate-400
        },
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          dark: '#60a5fa', // blue-400
        },
        danger: '#ef4444' // red-500
      }
    },
  },
  plugins: [],
}

