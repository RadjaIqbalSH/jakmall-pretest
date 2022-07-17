const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      standar: '2px 10px 20px rgba(255, 138, 0, 0.1)',
    },
    borderWidth: {
      1: '1px',
      2: '2px',
    },
    borderRadius: {
      4: '4px',
      full: '9999px',
    },
    fontFamily: {
      sans: ['Inter UI', ...defaultTheme.fontFamily.sans],
      monts: ['Montserrat', ...defaultTheme.fontFamily.sans],
      mat: ['Material Icons', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      13: '13px',
      14: '14px',
      16: '16px',
      18: '18px',
      24: '24px',
      36: '36px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    colors: {
      green: {
        500: '#1BD97B',
      },
      black: {
        900: '#000000',
        300: '#2D2A40',
        200: '#CCCCCC',
        100: '#EEEEEE',
      },
      yellow: {
        100: '#FFFAE6',
      },
      orange: {
        500: '#FF8A00',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      red: {
        900: '#C70014',
        800: '#D51122',
        700: '#E21D2A',
        600: '#F42A30',
        500: '#FF3630',
        400: '#FD4B4D',
        300: '#F17072',
        200: '#F8999A',
        100: '#FFCDD3',
        50: '#FFEBEE',
      },
    },
    opacity: {
      100: '1',
      20: '.20',
      40: '.40',
      60: '.60',
      80: '.80',
    },
    spacing: {
      0: '0px',
      '2/5': '40%',
      '1/2': '50%',
      '3/5': '60%',
      2: '2px',
      4: '4px',
      8: '8px',
      9: '9px',
      10: '10px',
      13: '13px',
      15: '15px',
      18: '18px',
      19: '19px',
      20: '20px',
      21: '21px',
      22: '22px',
      24: '24px',
      26: '26px',
      30: '30px',
      36: '36px',
      38: '38px',
      40: '40px',
      50: '50px',
      55: '55px',
      60: '60px',
      70: '70px',
      80: '80px',
      95: '95px',
      120: '120px',
      180: '180px',
      260: '260px',
      300: '300px',
      400: '400px',
      460: '460px',
      fit: 'fit-content',
    },
    minHeight: {
      70: '70px',
      120: '120px',
      460: '460px',
    },
    zIndex: {
      '-10': '-10',
      10: 10,
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      const text = {
        'heading-1': {
          fontSize: theme('fontSize.36'),
          fontWeight: theme('fontWeight.bold'),
        },
        'heading-2': {
          fontSize: theme('fontSize.24'),
          fontWeight: theme('fontWeight.bold'),
        },
      };
    }),
  ],
};
