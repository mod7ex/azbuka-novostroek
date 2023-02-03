import { isPlainObject } from "~/utils/types";
import { rawFilter } from "~/utils";
import { isArray } from "@vue/shared";

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

    const dirty = computed(() => {
        let _filter = filter.value;
        for (let key in _filter) {
            const _value = _filter[key];
            if (isArray(_value)) {
                if (_value.length) return true;
            } else if (_value) return true;
        }
        return false;
    });

    const reset = () => {
        filter.value = rawFilter();
    };

    return {
        prepare,
        filter,
        reset,
        ping,
        pingRef,
        dirty,
    };
};

export default useFilter;
