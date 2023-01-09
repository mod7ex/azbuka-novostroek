const schedule_interval = (fn: TFunc, step: number) => {
    return setTimeout(() => {
        fn();
        schedule_interval(fn, step);
    }, step);
};

export default (fn: TFunc, step: number, { right_away = false, exact = false }) => {
    const timerRef = shallowRef<NodeJS.Timeout>();

    let _set: any = setInterval;
    let _clear: any = clearInterval;

    if (exact) {
        _set = schedule_interval;
        _clear = clearTimeout;
    }

    const set = () => {
        timerRef.value = _set(fn, step);
    };

    const clear = () => {
        timerRef.value && _clear(timerRef.value);
    };

    const reset = () => {
        clear();
        set();
    };

    if (right_away) fn();

    set();

    onScopeDispose(clear);

    return { clear, reset };
};
