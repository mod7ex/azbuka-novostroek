export const debounce = <T extends (...args: any[]) => any>(fn: T, duration: number) => {
    let timer: NodeJS.Timeout | undefined;

    return function (...args: Parameters<T>) {
        clearTimeout(timer);

        const ctx = this;

        timer = setTimeout(() => {
            fn.apply(ctx, args);
        }, duration);
    };
};

export const isFunction = (v: unknown): v is TFunc => typeof v === "function";
