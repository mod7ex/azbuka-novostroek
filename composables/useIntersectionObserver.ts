import { type Ref, type ToRefs } from "nuxt/dist/app/compat/capi";

interface Args extends IntersectionObserverInit {
    condition?: boolean;
}

export default function (target: Ref<Element>, exploit: () => any | Promise<any>, options?: ToRefs<Args>) {
    if (!process.client) return;

    // for SSR
    watchEffect((cleanUp) => {
        let _target = target.value;

        if (!_target) return;

        let root = options?.root?.value ?? null;
        let condition = options?.condition?.value ?? true;
        let rootMargin = options?.rootMargin?.value ?? "0%";
        let threshold = options?.threshold?.value ?? 0;

        console.log("root", root);

        const observer = new IntersectionObserver(
            async ([entry]) => {
                if (!condition) return;

                if (!entry.isIntersecting) return;

                await exploit();
            },
            {
                root,
                rootMargin,
                threshold,
            }
        );

        observer.observe(target.value);

        cleanUp(() => observer.disconnect());
    });
}
