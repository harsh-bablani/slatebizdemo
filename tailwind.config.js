/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2F7',
          100: '#CCE6EF',
          200: '#99CCE0',
          300: '#66B3D0',
          400: '#3399C0',
          500: '#1B78A6', // Primary Blue - 69%
          600: '#166287',
          700: '#114B68',
          800: '#0C3649',
          900: '#07212A',
        },
        accent: {
          50: '#FEF0EB',
          100: '#FDDED3',
          200: '#FBBDA7',
          300: '#F99C7B',
          400: '#F77B4F',
          500: '#F05A28', // Orange - 30%
          600: '#C04820',
          700: '#903618',
          800: '#602410',
          900: '#301208',
        },
        custom: {
          grey: '#3A3A3A', // Grey - 10%
        }
      },
    },
  },
  plugins: [],
};
