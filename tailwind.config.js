/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        will1: { DEFAULT: "#48DEDB" },
        will2: { DEFAULT: "#B994F8" },
        will3: { DEFAULT: "#4DE5DF" },
      },
    },
  },
  plugins: [],
};
