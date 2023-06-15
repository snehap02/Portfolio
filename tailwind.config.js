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
        inter: 'Inter',
        georgian: 'Noto Sans Georgian'
      },
      screens:{
        '520': "520px",
        '540': "540px",
        '600': "600px",
        '820': "820px",
        '900': "900px",
        'md-2': '468px',
        'sm-0': '633px',
        'md-3': '871px',
        'md-4': '914px',
        'md-5': '943px',
        'lg-1': '1430px',
        'lg-2': '1199px',
        'lg-3': '1200px',
        'lg-4': '1095px',
        'lg-5': '1380px'
      },
      animation:{
        'fast-pulse': 'pulse 0.5s linear infinite'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

