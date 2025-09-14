/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#00071c',
        'accent-gold': '#c8a972',
        'off-white': '#fffeff',
        'banner-text': '#b89360',
        'banner-bg': '#e1d0bc',
      },
            animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  // Add this plugins section
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
