/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#0A0E1A',
        charcoal: '#101826',
        umber: '#1D4ED8',
        bronze: '#3B82F6',
        ink: '#F1F5F9',
        mist: '#8B96AC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.06) 1px, transparent 0)",
      },
      boxShadow: {
        'bronze-glow': '0 0 40px rgba(59, 130, 246, 0.18)',
        'card': '0 20px 60px -15px rgba(0,0,0,0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
