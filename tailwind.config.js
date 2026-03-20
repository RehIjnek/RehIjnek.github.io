/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme
        primary: '#52668d',
        accent:  '#e6e0ba',
        // Dark theme
        'dk-bg':      '#0f1319',
        'dk-surface': '#161d2b',
        'dk-primary': '#8fadd4',
        'dk-text':    '#c8c2aa',
        'dk-muted':   '#566272',
        'dk-border':  '#2a3547',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
