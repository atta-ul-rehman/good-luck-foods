/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './context/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00C801',
          red: '#EB184F',
          dark: '#024804',
          lime: '#C4FF03',
          red50: '#FDECEC'
        }
      }
    }
  },
  plugins: []
};
