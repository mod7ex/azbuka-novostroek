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

    const reset = () => {
        filter.value = rawFilter();
    };

    return {
        prepare,
        filter,
        reset,
    };
};

export default useFilter;
