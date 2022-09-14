export default function useMediaQuery(mediaQuery: string) {
  const isMatch = shallowRef(false);

  if (process.client) {
    // for SSR
    const mediaQueryListRef = shallowRef<MediaQueryList>(window.matchMedia(mediaQuery));

    watch(
      mediaQueryListRef,
      () => {
        const list = window.matchMedia(mediaQuery);

        mediaQueryListRef.value = list;

        isMatch.value = list.matches;
      },
      { immediate: true }
    );

    useEventListener(
      "change",
      (e) => {
        isMatch.value = e.matches;
      },
      mediaQueryListRef
    );
  }

  return isMatch;
}
