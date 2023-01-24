import { Ref, ComputedRef } from "nuxt/dist/app/compat/capi";

type Props = {
    cb: IntersectionObserverCallback;
    options?: IntersectionObserverInit;
    target: Element;
};

const createObserver = ({ cb, target, options }: Props) => {
    const observer = new IntersectionObserver(cb, options);

    const observe = () => {
        observer.observe(target);
    };

    const unobserve = () => {
        observer.unobserve(target);
    };

    return {
        observer,
        observe,
        unobserve,
    };
};

export default function (cb: () => Promise<void>, condition: Ref<boolean>) {
    const container = ref();
    const target = ref();

    let handler: ReturnType<typeof createObserver>;

    watch([container, target], ([root, _target]) => {
        handler = createObserver({});
    });

    const observer = new IntersectionObserver(
        async ([entry]) => {
            if (!condition.value) return;

            if (!entry.isIntersecting) return;

            await cb();
        },
        {
            root: container.value,
            rootMargin: "0px",
            threshold: 1,
        }
    );

    const pixel = defineComponent({
        setup() {
            onMounted(() => {
                observer.observe(target.value);
            });

            return () =>
                h("div", {
                    class: "bg-transparent p-1",
                    ref: (v) => {
                        target.value = v;
                    },
                });
        },
    });

    return { target, container, pixel };
}
