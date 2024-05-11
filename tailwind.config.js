/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'blue01':'#1B1C31',
        'blue02':'#222338',
        'light-blue':'#006AFF',
        'cyan':'#15BFFD',
        'green':'#52C93F',
        'green2':'#009D92',
        'red':'#FF2727',
        'blood':'#DC3939',
        'gray01':'#525256',
        'gray02':'#656575',
        'gray03':'#A3A3A3',
        'gray04':'#A6ABC8',
        'gray05':'#F8F7F1',
        'light-green01':'#C6EAFD',
        'light-green02':'#B2FFDB',
        'smoke1':'#F8F7F1',
        'smoke2':'#F4F5F7',
        'white':'#FDFDFD',
        'linear-light-green': '#00B2FF',
        'warning':'#FFD680',
        'warning2': '#FFA600',
      },
      
      boxShadow: {
        'sm_ams': '0px 1px 2px 0 rgba(0 0 0 / 0.5)',
        'md_ams': '0px 4px 6px -1px rgba(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg_ams': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl_ams': '0 -20px 25px -5px rgba(0 0 0 / 0.1), 0 10px 10px -5px rgba(0 0 0/ 0.04)',
        
      },
      fontFamily: {
        regular_poppins: ['Poppins','sans-serif','Helvetica'],
        regular_inter: ['Inter','sans-serif','Helvetica']
      },
    },
  },
  
  plugins: [],
}

