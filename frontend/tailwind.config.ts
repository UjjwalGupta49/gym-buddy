const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blossomPink: '#FFC0CB',
        lightGreen: '#90EE90',
        skyBlue: '#87CEEB',
        creamWhite: '#FFFDD0',
        earthBrown: '#A0522D',
      },
    },
  },
  // darkMode: 'class',
  plugins: [nextui()],
};
