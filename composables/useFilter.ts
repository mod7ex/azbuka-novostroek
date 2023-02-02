import { isPlainObject } from "~/utils/types";
import { rawFilter } from "~/utils";

const prepare = (f: ReturnType<typeof rawFilter>) => {
    let payload = JSON.parse(JSON.stringify(f)); // deep copy

    if (isPlainObject(f.deadline)) payload = { ...payload, ...f.deadline };

    delete payload.deadline;

    return payload;
};

const useFilter = () => {
    const filter = useRawFilter();

    const pingRef = useFilterPing();

    const ping = () => {
        pingRef.value = Date.now();
    };

    // const dirty = computed(() => JSON.stringify(rawFilter()) !== JSON.stringify(filter.value));

    const reset = () => {
        filter.value = rawFilter();
    };

    return {
        prepare,
        filter,
        reset,
        ping,
        pingRef,
    };
};

export default useFilter;
