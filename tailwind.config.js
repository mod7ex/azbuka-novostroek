/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./App.vue", "./{components,pages,layouts}/**/*.vue"],

    safelist: [
        // "bg-blue-600",
        // "bg-greeen-600",
        // "bg-pink-600",
        // "bg-red-600",
        // "bg-yellow-600",
        // /bg-blue-[1-9]00?/,
        // /bg-greeen-[1-9]00?/,
        // /bg-pink-[1-9]00?/,
        // /bg-red-[1-9]00?/,
        // /bg-yellow-[1-9]00?/,
        // /border-blue-[1-9]00?/,
        // /border-greeen-[1-9]00?/,
        // /border-pink-[1-9]00?/,
        // /border-red-[1-9]00?/,
        // /border-yellow-[1-9]00?/,
        // "border-blue-400",
        // "border-greeen-400",
        // "border-pink-400",
        // "border-red-400",
        // "border-yellow-400"
    ],

    theme: {
        extend: {
            screens: {
                header: "1314px", // => @media (min-width: 1314px) { ... }
            },
        },
    },

    plugins: [],
};
