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
        'amazon-black': {
          DEFAULT: '#415772',
          50: '#A1B3C9',
          100: '#94A9C2',
          200: '#7A94B3',
          300: '#607FA4',
          400: '#506B8C',
          500: '#415772',
          600: '#324358',
          700: '#232F3E',
          800: '#151C24',
          900: '#06080A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
