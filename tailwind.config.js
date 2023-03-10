/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sniglet: ["Sniglet", "cursive"],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        infinityAnimation: 'infinityAnimation 6s ease-out forwards',
        maxWidth: 'maxWidth 10.9s linear forwards'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        infinityAnimation: {
          '0%': {backgroundSize: '1000vw 1000vh'},
          '100%': {backgroundSize: '80% 60%'}
        },
        maxWidsdfth: {
          '0%': {maxWidth: 'none'},
          '100%': {maxWidth: '64rem'}
        }
      },
    },
  },
  plugins: [],
};
