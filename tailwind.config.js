/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#489CC1',
      },
      screens: {
        smMax: { max: '639px' },
      },
    },
  },
  plugins: [],
};
