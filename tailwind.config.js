module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width : {
        'sm-s' : '380px'
      },
      colors : {
        primary : {
          100:'hsl(150, 100%, 66%)',
          200 : 'hsl(193, 38%, 86%)',
          300 : 'hsl(217, 19%, 38%)',
          400 : 'hsl(217, 19%, 24%)'
        }
      },
      fontFamily : {
        body : ["'Manrope', sans-serif"]
      }
    },
  },
  plugins: [],
}
