// /** @type {import('tailwindcss').Config} */
// import daisyui from 'daisyui'
// export default {
//   darkMode: "class",
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui],
//   daisyui: {
//     themes: ["light", "synthwave"], 
//   }
// }

/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: "class", // Ensures class-based dark mode works
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#af4486", // Custom primary background
        textLight: "#ffffff", // Custom text color
        cardLight: "#f8e8f2", // Light mode card background
        cardDark: "#322c35", // Dark mode card background
        sectionColor: '#2d2da4'
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Keep it simple with light and dark themes
  },
};
