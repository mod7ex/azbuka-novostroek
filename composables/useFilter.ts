import { rawFilter } from "~/utils";

const useFilter = () => {
    const filter = useRawFilter();

    const reset = () => {
        filter.value = rawFilter();
    };

    return {
        filter,
        reset,
    };
};

export default useFilter;
