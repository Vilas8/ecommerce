/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./HTML/*.{html, js}"],
  theme: {
    fontFamily: {
      mono: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', "-apple-system", "system-ui", "sans-serif"],
      sans: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      avenirNext: ["Georgia","Times",'Times New Roman',"serif"],
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
    },
  },
  plugins: [],
}
