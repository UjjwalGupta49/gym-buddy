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
        royalBlue: '#2120F8',
        azureBlue: '#0D75EE',
        skyBlue: '#0795E8',
        softWhite: '#FAFAFA',
        midnightBlack: '#030407',
        sunshineYellow: '#E7DE13',
        peachBeige: '#F8D2A3',
        coralRed: '#E0554F',
      },
    },
  },
  // darkMode: 'class',
  plugins: [nextui({
    themes:{
      light: {
        colors:{
          danger: {
            DEFAULT: "#E0554F",
          },
          focus: "#E0554F"
        }
      }
    }
  })],
  
};
