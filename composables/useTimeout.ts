import { queuedLast } from "~/utils";

export default (fn: TFunc, step: number, auto = true) => {
    const timerRef = shallowRef<NodeJS.Timeout>();

    const set = () => {
        timerRef.value = queuedLast(fn, step);
    };

    const clear = () => {
        timerRef.value && clearTimeout(timerRef.value);
    };

    const reset = () => {
        clear();
        set();
    };

    if (auto) set();

    const scope = getCurrentScope();

    if (scope) onScopeDispose(clear);

    return { clear, reset };
};
