const useSpinner = (count: number) => {
    const current = shallowRef(0);

    const pick = (v: number) => {
        current.value = v;
    };

    const next = () => {
        pick((current.value + 1) % count);
    };

    const previous = () => {
        pick((count + current.value - 1) % count);
    };

    return { current, next, previous, pick };
};

export default useSpinner;
