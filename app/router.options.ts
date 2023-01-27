import type { RouterConfig } from "@nuxt/schema";

// https://dev.to/dimer191996/nuxt-js-smooth-scrolling-with-hash-links-94a

const findEl = async (hash: string, x = 0): Promise<Element | null> => {
    return (
        document.querySelector(hash) ||
        new Promise((resolve) => {
            if (x > 50) return resolve(null);

            setTimeout(() => {
                resolve(findEl(hash, ++x || 1));
            }, 100);
        })
    );
};

export default <RouterConfig>{
    scrollBehavior: async (to, _, savedPosition) => {
        if (savedPosition) return savedPosition;

        if (!to.hash) return { x: 0, y: 0 };

        let el = await findEl(to.hash);

        // @ts-ignore
        const top = el.offsetTop;

        if ("scrollBehavior" in document.documentElement.style) return window.scrollTo({ top, behavior: "smooth" });
        else return window.scrollTo(0, top);
    },
};
