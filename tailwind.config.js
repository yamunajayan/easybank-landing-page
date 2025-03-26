/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
      backgroundImage: {
        "green-blue-gradient": "linear-gradient(to right, #33D35E, #2AB6D9)",
      },
      colors: {
        "custom-green": "#30C88F",
      },
    },
  },
  plugins: [],
};
