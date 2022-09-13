/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.vue", "./{components,pages,layouts}/**/*.vue"],

  // safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : [], // no-purging-in-dev-mode : bad

  theme: {
    extend: {},
  },

  plugins: [],
};
