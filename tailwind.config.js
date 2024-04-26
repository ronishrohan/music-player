/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: {
          100: "#0B0B0C",
          200: "#131316",
          300: "rgb(45,45,45)",
          400: "#040404",
          500: "#1B1B1D",
          600: "#060607"
        },
        accent: {
          900: "#e2473d"
        },
        text:{
          100: "#4B4B4B",
          200: "#5A5A5A"
        }
      },
      fontFamily: {
        "overused" : '"Overused Grotesk"'
      }
    },
  },
  plugins: [],
}

