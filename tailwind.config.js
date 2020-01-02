module.exports = {
  theme: {    
    screens: {
      xxs: '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      title: ['Gilroy', 'sans-serif'],
      body: ['Merriweather', 'serif'],
      prata: ['Prata']
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
        dark: '#282828',
        important: '#ffc400',
        background: '#000d2f'
      },
      fontSize: {
        '7xl': '5rem'
      }
    }
  },
  variants: {
    margin: ['first', 'last']
  },
  plugins: []
}
