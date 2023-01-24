export default () => {
    const img = useCurrentPreviewedImg();

    const clear = () => {
        img.value = undefined;
    };

    const preview = (v: string) => {
        img.value = v;
    };

    return {
        img,
        clear,
        preview,
    };
};
