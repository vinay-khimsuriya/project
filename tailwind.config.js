/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "845px",
        'lg900':"900px",
        'max900': { 'max': '900px' },
        'max485':{'max':'485px'},
      },
    },
  },
  plugins: [],
};
