/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: { max: "950px" },
        mobile: { max: "600px" },
      },

      colors: {
        teal: "#008080",
        darkTeal: "#004c4c",
        lightTeal: "#b2d8d8",
        midTeal: "#66b2b2",
        peach: "#ffb8a7",
        pink: "#ff6da2",
        hotPink: "#f92672",
      },

      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
      },

      icons: {
        github: "fa-brands fa-github",
        browse: "fa-regular fa-globe",
      }
    },
  },
  plugins: [],
};

{/* <FontAwesomeIcon icon="fa-brands fa-github" />; */}
{/* <FontAwesomeIcon icon="fa-regular fa-globe" />; */}