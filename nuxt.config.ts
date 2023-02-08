import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    meta: {
        title: "Азбука Новостроек",
        /* titleTemplate: (title: string) => `Азбука - ${title}`, */
        meta: [
            { name: "author", content: "azbuka-novostroek.com" },
            { name: "viewport", content: "width=device-width, initial-scale=1.0" },
            { name: "description", content: "My amazing site." },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "./assets/favicon.ico" }],
    },

    runtimeConfig: {
        public: {
            // baseURL: process.env.NODE_ENV === "production" ? "WE STILL DON'T KNOW" : "http://localhost:3000/",
        },
    },

    modules: ["nuxt-icon", "@nuxtjs/apollo"],

    components: {
        global: true,
        dirs: ["~/components/UI"],
    },

    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },

    css: ["~/assets/scss/index.scss"],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/scss/_variables.scss";
                                     @import "@/assets/scss/_mixins.scss";
                                     @import "@/assets/scss/_reset.scss";`,
                },
            },
        },
    },

    apollo: {
        autoImports: true,
        clients: {
            default: {
                httpEndpoint: `${process.env.END_POINT}/graphql`,
            },
        },
    },
});

/*
  @import "@/assets/scss/_functions.scss";
  @import "@/assets/scss/_keyframes.scss";
*/
