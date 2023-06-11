/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        syncopate: 'Syncopate',
        raleway: 'Raleway',
        poppins: 'Poppins',
        montserrat: 'Montserrat',
        roboto: 'Roboto',
        robotoMono: 'Roboto Mono',
        lato: 'Lato',
        inter: 'Inter'
      },
      screens:{
        '520': "520px",
        '600': "600px",
        '820': "820px",
        '900': "900px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

