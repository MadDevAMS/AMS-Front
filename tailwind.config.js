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
        'green':'#45B880',
        'green2':'#009D92',
        'light-green01':'#15BFFD1A',
        'light-green02':'#00FFC24D',
        'cyan':'#15BFFD',
        'light-cyan01': '#00B2FF24',
        'light-cyan02': '#15BFFD66',
        'red':'#FF2727',
        'blood':'#DC3939',
        'gray01':'#525256',
        'gray02':'#656575',
        'gray03':'#A3A3A3',
        'gray04':'#A6ABC8',
        'gray05':'#F8F7F1',
        'smoke1':'#F8F7F1',
        'smoke2':'#F4F5F7',
        'white':'#FDFDFD',
        'warning01':'#FFD680',
        'warning02': '#FFA600',
      },
      boxShadow: {
        'mui-ams': '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
        'expand-ams': '0px 3px 28px 0px rgba(69 69 80 / 0.10)',
        'sm-ams-01': '0px 4px 12px 0px rgba(0 0 0 / 0.15)',
        'sm-ams-02': '0px 4px 4px 0px rgba(0 0 0 / 0.25)',
        'md-ams-01': '0px 8px 12px 0px rgba(0 0 0 / 0.25)',
        'md-ams-02': '0px 8px 16px 0px rgba(0 0 0 / 0.25)',
        'md-ams-03': '0px 8px 24px 0px rgba(0 0 0 / 0.25)',
        'lg-ams-01': '0px 8px 36px 0px rgb(0 0 0 / 0.35)',
        'lg-ams-02': '0px 8px 56px 0px rgb(0 0 0 / 0.45)',
      },
      borderWidth: {
        '1': '1px'
      },
      fontFamily: {
        'poppins': ['Poppins', 'Roboto', 'Verdana'],
        'inter': ['Inter', 'Roboto', 'Verdana']
      },
    },
  },
  
  plugins: [],
}

