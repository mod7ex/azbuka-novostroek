import { COMPLEX_ORDER } from "~/constants";

const options = Object.entries(COMPLEX_ORDER).map(([value, label]) => ({ value, label }));

export default () => {
    const order = useComplexOrderValue();

    const set = (v: string) => {
        order.value = v;
    };

    return {
        set,
        order,
        options,
        COMPLEX_ORDER,
    };
};
