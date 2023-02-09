import { complexesData } from "~/services/gql/complexes";
import { debounce } from "~~/utils";

export default () => {
    const state = useFilterSummaryState();

    const summary = computed(() => state.value.summary);
    const loading = computed(() => state.value.loading);

    if (!state.value.listener && process.client) {
        const { filter, prepare } = useFilter();
        const { refetch, result } = complexesData(prepare(filter.value));

        state.value.listener = watch(
            filter,
            debounce(async (v) => {
                state.value.loading = true;

                // @ts-ignore
                await refetch(prepare(v));

                state.value.loading = false;

                state.value.summary = result.value?.complexesData;
            }),
            { deep: true, immediate: true }
        );
    }

    onScopeDispose(() => {
        const fn = state.value.listener;
        if (fn) {
            fn();
            state.value.listener = null;
        }
    });

    return {
        summary,
        loading,
    };
};
