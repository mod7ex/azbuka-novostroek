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

export const uuidGen = (payload = "some-random-string") => {
    let state = 0;

    return (inner_payload?: string) => {
        state++;
        return `uid-${Date.now()}-${state}-${inner_payload ?? payload}`;
    };
};

export const queuedLast = (fn: TFunc, timeout: number = 0) => {
    return setTimeout(fn, timeout);
};
