export default () => {
    const state = useMobileFilterState();
    const toggle = (v?: boolean): void => {
        if (typeof v === "boolean") {
            state.value = v;
        } else {
            state.value = !state.value;
        }
    };

    return [state, toggle] as const;
};
