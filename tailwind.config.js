/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: {
          100: "151414"
        },
        accent: {
          900: "DB162F"
        }
      },
      fontFamily: {
        "overused" : '"Overused Grotesk"'
      }
    },
  },
  plugins: [],
}

