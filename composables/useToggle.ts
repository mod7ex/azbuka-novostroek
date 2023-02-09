import { isFunction } from "~/utils/types";

/**
 * @_init is by default true
 */
export default (_init = true) => {
    const payload = shallowRef(_init);

    const toggle = (v?: TFunc | boolean): void => {
        if (isFunction(v)) {
            payload.value = v(payload.value);
            return;
        }

        if (v != null) {
            payload.value = !!v;
            return;
        }

        payload.value = !payload.value;
    };

    return [payload, toggle] as const;
};
