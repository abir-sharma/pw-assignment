/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue":"#02031B",
        "blue-opacity":"#09033E",
        "light-blue":"#464AAE",
        "submitToConnect":"#1D2064",
        "light-orange":"#FF6B00",
        "dark-orange":"#F21D00",
        "banner9gradientfrom":"#000230",
        "banner9gradientto":"#2A00A0",
        "extra-light-blue":"#232880",
        "left":"#1F1F92",
        "right":"#7A02C6"
      },
      height:{
        "108px":"108px",
        "1000px":"1000px",
        "517px":"517px",
        "476px":"476px",
        "555px":"555px",
        "66px":"66px",
        "264px":"264px",
        "124px":"124px",
        "409.08px":"409.08px",
        "105.18px":"105.18px",
        "2062.84px":"2062.84px",
        "599.45px":"599.45px",
        "654.12px":"654.12px",
        "745.48px":"745.48px",
        "745.48px":"745.48px",
        "2162.28px":"2162.28px",
        "166.46px":"166.46px",
        "270px":"270px"
      },
      width:{
        "360px":"360px",
        "519px":"519px",
        "1356px":"1356px",
        "1447px":"1447px",
        "896px":"896px",
        "264px":"264px",
        "1260px":"1260px",
        "1187px":"1187px",
        "1329.95px":"1329.95px",
        "416.65px":"416.65px",
        "1368.41px":"1368.41px",
        "665.83px":"665.83px",
        "1520.58px":"1520.58px",
        "567.79px":"567.79px",
        "2493.79px":"2493.79px",
        "1372.5px":"1372.5px",
        "716.57px":"716.57px",
        "886px":"886px"
      },
      backgroundImage:{
        "banner1":"url('/public/assets/cheerful-indian.png')",
      },
      screens:{
        'mo':'412px',
        'ta': '640px',
      // @media (max-width: 640px) { ... }

        'la': '1024px',
      //  @media (min-width: 1024px) { ... }

        'de': '1280px',
      },
    },
  },
  plugins: [],
}