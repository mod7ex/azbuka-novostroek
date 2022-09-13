/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.vue", "./{components,pages,layouts}/**/*.vue"],

  options: {
    safelist: ["bg-blue-600", "bg-greeen-600", "bg-pink-600", "bg-red-600", "border-blue-400", "border-greeen-400", "border-pink-400", "border-red-400"],
  },

  // safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : [], // no-purging-in-dev-mode : bad

  theme: {
    extend: {},
  },

  plugins: [],
};
