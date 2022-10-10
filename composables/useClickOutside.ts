import { Ref, ShallowRef } from "nuxt/dist/app/compat/capi";

export default function useClickOutside<T extends HTMLElement>(ref: ShallowRef<T> | Ref<T>, cb: (e: MouseEvent) => void) {
    if (process.client) {
        // for SSR
        watchEffect((cleanUp) => {
            const target = ref.value;

            const handler = (e: MouseEvent) => {
                if (target == null || target.contains(e.target as Node | null)) return;

                cb(e);
            };

            document.addEventListener("click", handler);

            cleanUp(() => {
                document.removeEventListener("click", handler);
            });
        });
    }
}
