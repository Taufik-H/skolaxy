module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: ['router-link-active'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        72: '274px',
      },
      colors: {
        primary: '#6977F3',
        'primary-2': '#9694FB',
        'primary-hover': '#F2F2FF',
        default: '#666666', // text
        background: '#F4F4F4',
      },
      fontFamily: {
        sans: ['Nunito'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
