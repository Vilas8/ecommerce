/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./HTML/*.{html, js}"],
  theme: {
    fontFamily: {
      sans: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', "-apple-system", "system-ui", "sans-serif"],
      mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      avenirNext: ['Avenir Next W01','Avenir Next',"Avenir",'HelveticaNeue-Light','Helvetica Neue Light','Helvetica Neue',"Helvetica","Arial",'Lucida Grande',"sans-serif"],
      chronicle: ['HCo Chronicle Display','Georgia','Times','Times New Roman','serif'],
      nunito: ["Nunito Sans", "sans-serif"]
    },
    colors:{
      green: "#64ffda",
      Navy: "#0a192f",
      lighest_Navy: "#233554",
      light_Navy: "#112240",
      slate: "#8892B0",
      light_Slate: "#a8b2d1",
      lightest_Slate: "#ccd6f6",
      white: "white",
      black: "black",
      red: "red",
      blue: "blue",
      yellow: "yellow",
      transparent: "transparent",
      light_grey: "rgb(221, 221, 221)",
      light_brown: "#b5aa8f"
    },
    extend: {
      maxWidth: {
        "64": "20rem"
      }
      ,
      maxHeight:{
        "82": "32rem"
      }
    },
  },
  plugins: [],
}
