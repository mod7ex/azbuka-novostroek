/** @type {import('tailwindcss').Config} */

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === "production",
        // content: ["./App.vue", "components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue"],
        content: ["./App.vue", "./{components,pages,layouts}/**/*.vue"],

        options: {
            safelist: [
                "bg-blue-600",
                "bg-greeen-600",
                "bg-pink-600",
                "bg-red-600",
                "bg-yellow-600",

                "border-blue-400",
                "border-greeen-400",
                "border-pink-400",
                "border-red-400",
                "border-yellow-400"
            ],
        },
    },

    theme: {
        extend: {},
    },

    plugins: [],
};
