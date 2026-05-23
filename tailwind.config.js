/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

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
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
            a: {
              color: '#00C801',
              '&:hover': {
                color: '#C4FF03'
              }
            },
            'h1, h2, h3, h4, h5, h6': {
              color: '#1f2937',
              fontWeight: '700'
            },
            strong: {
              color: '#1f2937',
              fontWeight: '600'
            },
            code: {
              color: '#dc2626',
              backgroundColor: '#fef2f2',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em'
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#f3f4f6',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto'
            },
            blockquote: {
              borderLeftColor: '#00C801',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#4b5563'
            },
            'ol, ul': {
              paddingLeft: '1.5rem'
            },
            'li::marker': {
              color: '#00C801'
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem'
            },
            table: {
              borderCollapse: 'collapse',
              width: '100%'
            },
            'th, td': {
              borderWidth: '1px',
              borderColor: '#e5e7eb',
              padding: '0.75rem'
            }
          }
        }
      }
    }
  },
  plugins: [typography]
};
