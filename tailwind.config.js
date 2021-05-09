module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bluish-green': '#0095AA',
        'creamy-green': '#DEF6E5'
      },
      fontFamily: {
        'sans': ['Open Sans', 'Verdana', 'sans-serif'],
      },
      borderWidth: theme => ({
        '1': '1px'
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
