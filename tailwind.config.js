module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'amazon-orange': {
          DEFAULT: '#FF9900',
          50: '#FFE2B8',
          100: '#FFDAA3',
          200: '#FFCA7A',
          300: '#FFBA52',
          400: '#FFA929',
          500: '#FF9900',
          600: '#D68100',
          700: '#AD6800',
          800: '#855000',
          900: '#5C3700',
        },
        'amazon-blue': {
          DEFAULT: '#146EB4',
          50: '#8DC6F2',
          100: '#7BBDF0',
          200: '#56ABEC',
          300: '#3198E8',
          400: '#1884D9',
          500: '#146EB4',
          600: '#10588F',
          700: '#0C416B',
          800: '#082B46',
          900: '#041421',
        },
        'amazon-yellow': {
          DEFAULT: '#F0C14B',
          50: '#FEFBF4',
          100: '#FDF5E2',
          200: '#F9E8BC',
          300: '#F6DB96',
          400: '#F3CE71',
          500: '#F0C14B',
          600: '#EDB425',
          700: '#D79F12',
          800: '#B2830F',
          900: '#8C680C',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
