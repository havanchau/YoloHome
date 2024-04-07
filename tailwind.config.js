// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./views/*.js","./assets/components/*.js"],
  theme: {
    extend: {
      colors:{
        'bluebg':'#254BEC',
        'lightblue':'#BED4FF',
        'superlight':'#DAEBFF',
      }
    },
    
  },
  plugins: [],
}

