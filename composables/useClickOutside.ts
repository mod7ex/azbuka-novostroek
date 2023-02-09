import { Ref, ShallowRef } from "nuxt/dist/app/compat/capi";
import { queuedLast } from "~/utils";

/*
 *
 * make sure you want to use watchEffect because if the target keeps changing for example because of a v-if="x"
 * then the handler will keep being registered and cleared whenever x changes (because target.value changes)
 *
 * so you might want to use just a simple composable and clean up onScopeDispose to reduce the rate
 *
 */

/*

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

*/

export default function useClickOutside<T extends HTMLElement>(ref: ShallowRef<T> | Ref<T>, cb: (e: MouseEvent) => void, scope = true) {
    if (!process.client) return; // for SSR

    if (scope) {
        const handler = (e: MouseEvent) => {
            const target = ref.value;

            if (target == null || target.contains(e.target as Node | null)) return;

            cb(e);
        };

        queuedLast(() => {
            // console.log("listener registered"); /* this will happen once ;) */
            document.addEventListener("click", handler);
        });

        onScopeDispose(() => {
            // console.log("event cleared");
            /* this will happen once ;) */ document.removeEventListener("click", handler);
        });
    } else {
        // use this if target keeps changing (with v-if for example)
        watchEffect((cleanUp) => {
            const target = ref.value;

            const handler = (e: MouseEvent) => {
                if (target == null || target.contains(e.target as Node | null)) return;

                cb(e);
            };

            queuedLast(() => {
                // console.log("listener registered"); /* this will happen many times ;) */
                document.addEventListener("click", handler);
            });

            cleanUp(() => {
                // console.log("event cleared");
                /* this will happen many times ;) */ document.removeEventListener("click", handler);
            });
        });
    }
}

/*

interface User {
    name: string;
    age: number;
}

type Setter<T extends object> = { [K in keyof T & string as `set${Capitalize<K>}`]: (v: T[K]) => void };

type UserSetters = Setter<User>

*/
