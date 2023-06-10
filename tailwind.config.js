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
      }
    },
  },
  plugins: [],
}

