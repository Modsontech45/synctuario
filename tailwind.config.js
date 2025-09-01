/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00C853',
          600: '#00A843',
          700: '#008a36',
          800: '#006d2a',
          900: '#00571f',
        },
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
        'slideInRight': 'slideInRight 0.8s ease-out forwards',
        'textReveal': 'textReveal 1s ease-out forwards',
        'glowPulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scaleIn': 'scaleIn 0.6s ease-out forwards',
        'slideDown': 'slideDown 0.6s ease-out forwards',
        'magneticHover': 'magneticHover 0.6s ease-out',
        'cardFlip': 'cardFlip 0.6s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
        'blink': 'blink 1s infinite',
      },
      backdropBlur: {
        'glass': '10px',
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(0, 200, 83, 0.3)',
        'glow-green-lg': '0 0 30px rgba(0, 200, 83, 0.5)',
      },
    },
  },
  plugins: [],
};