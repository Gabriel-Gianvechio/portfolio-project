/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'claude-beige': '#f5f2e8',
        'dark-blue': '#090a24',
        'medium-blue': '#294380',
        'light-blue': '#69d2cd',
        'light-green': '#b9f1d6',
        'avocado': '#f1f6ce',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      backgroundOpacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
      }
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive'],
      backgroundOpacity: ['responsive'],
    }
  },
  plugins: [],
}