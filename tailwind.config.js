module.exports = {
  theme: {    
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        white: '#fff',
        light: '#929292',
        dark: '#4e4e4e',
        important: '#ffc400',
        background: '#000d2f'
      }
    }
  },
  variants: {
    margin: ['first', 'last']
  },
  plugins: []
}
