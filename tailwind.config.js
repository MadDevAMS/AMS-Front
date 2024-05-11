/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        Blue01:'#1B1C31',
        Blue02:'#222338',
        LightBlue:'#006AFF',
        Cyan:'#15BFFD',
        Green:'#52C93F',
        Green2:'#009D92',
        Red:'#FF2727',
        Blood:'#DC3939',
        Gray01:'#525256',
        Gray02:'#656575',
        Gray03:'#A3A3A3',
        Gray04:'#A6ABC8',
        Gray05:'#F8F7F1',
        LightGreen01:'#C6EAFD',
        LIghtGreen02:'#B2FFDB',
        smoke1:'#F8F7F1',
        smoke2:'#F4F5F7',
        white:'#FDFDFD',
        LinearLightGreen: {
          '0%': '#00B2FF',
          '14%': '#00B2FF',
          '15%': '#15BFFD',
          '40%': '#15BFFD',
          '100%': '#15BFFD',
        },
        warning:'#FFD680',
        warning2: '#FFA600',
      },
      backgroundImage: theme => ({
        'gradient-linear-light-green': `linear-gradient(to right, ${theme('colors.LinearLightGreen')['0%']}, ${theme('colors.LinearLightGreen')['14%']}, ${theme('colors.LinearLightGreen')['15%']}, ${theme('colors.LinearLightGreen')['40%']}, ${theme('colors.LinearLightGreen')['100%']})`,
      }),

    },
  },
  fontFamily: {
    poppins: ['Poppins', 'sans-serif'],
    inter: ['Inter', 'sans-serif'],
  },
  plugins: [],
}

