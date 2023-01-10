export default <T extends HTMLElement>() => {
    const targetRef = ref<T>();

    const scroll = (options: ScrollToOptions) => {
        targetRef.value.scrollBy({ behavior: "smooth", ...options });
    };

    return {
        targetRef,
        scroll,
    };
};
