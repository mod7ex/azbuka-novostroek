export default (fn: TFunc, step: number) => {
    const timerRef = shallowRef<NodeJS.Timeout>();

    const set = () => {
        timerRef.value = setInterval(fn, step);
    };

    const clear = () => {
        timerRef.value && clearInterval(timerRef.value);
    };

    const reset = () => {
        clear();
        set();
    };

    set();

    onScopeDispose(clear);

    return { clear, reset };
};
