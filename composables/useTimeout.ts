export default (fn: TFunc, step: number) => {
    const timerRef = shallowRef<NodeJS.Timeout>();

    const set = () => {
        timerRef.value = setTimeout(fn, step);
    };

    const clear = () => {
        timerRef.value && clearTimeout(timerRef.value);
    };

    const reset = () => {
        clear();
        set();
    };

    set();

    onScopeDispose(clear);

    return { clear, reset };
};
