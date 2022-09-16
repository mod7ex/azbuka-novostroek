export default function useMediaQuery(mediaQuery: string, initial = false) {
    const isMatch = shallowRef(initial);

    if (process.client) {
        // for SSR
        watchEffect((cleanUp) => {
            const list = window.matchMedia(mediaQuery);

            isMatch.value = list.matches;

            const onChange = () => {
                isMatch.value = list.matches;
            };

            list.addEventListener("change", onChange);

            cleanUp(() => {
                list.removeEventListener("change", onChange);
            });
        });
    }

    return isMatch;
}
