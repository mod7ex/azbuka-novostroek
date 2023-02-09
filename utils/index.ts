import { isArray, isPlainObject } from "~/utils/types";

export const createDebounce = <T extends (...args: any[]) => any>(fn: T, duration: number = 1000) => {
    let timer: NodeJS.Timeout | undefined;

    const clear = () => {
        timer && clearTimeout(timer);
    };

    const debounce = function (...args: Parameters<T>) {
        clear();

        const ctx = this;

        timer = setTimeout(() => {
            fn.apply(ctx, args);
        }, duration);
    };

    return {
        debounce,
        clear,
    };
};

export const debounce = <T extends (...args: any[]) => any>(fn: T, duration: number = 1000) => {
    let timer: NodeJS.Timeout | undefined;

    return function (...args: Parameters<T>) {
        clearTimeout(timer);

        const ctx = this;

        timer = setTimeout(() => {
            fn.apply(ctx, args);
        }, duration);
    };
};

export const uuidGen = (() => {
    let rootState = 0;

    return (payload = "some-random-string") => {
        let state = 0;

        rootState++;

        return (inner_payload?: string) => {
            state++;

            /* return `uid-${Date.now()}-${state}-${rootState}-${inner_payload ?? payload}`; */
            return `uid-${state}-${rootState}-${inner_payload ?? payload}`;
        };
    };
})();

export const queuedLast = (fn: TFunc, timeout: number = 0) => {
    return setTimeout(fn, timeout);
};

function separateEach3BY(x: number, separator: string) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export const format_thousands = (n: number) => {
    return separateEach3BY(n, " ");

    /*
    let _n = "";

    let ch = n.toString();

    let len = ch.length;

    for (let i = 0; i < len; i++) {
        const j = len - 1 - i;

        _n = `${ch[j]}${i % 3 === 0 ? " " : ""}` + _n;
    }

    return _n.trim();
*/
};

export const stripHTMLPTag = (payload: string) => {
    return payload?.replace(/(<p>)/gi, "")?.replace(/(<\/p>)/gi, "");
};

export const firstFewWords = (payload: string, count = 13) => {
    return payload?.split(" ").slice(0, count).join(" ");
};

export const getNestedValue = <T>(target: T, keys: string[]) => {
    if (keys.length && isPlainObject(target)) {
        const [p, ..._keys] = keys;

        if (p in target) {
            return getNestedValue(target[p], _keys);
        }
    } else return target;
};

export const rawFilter = () => ({
    name: null,
    region_id: null,
    city_id: null,
    district_id: null,
    peoples_district_id: null,
    count_rooms: [],
    is_studio: null,
    quarter_end: null,
    year_end: null,
    price_from: null,
    price_to: null,
    area_total_from: null,
    area_total_to: null,
    home_class: [],
    home_type: [],
    count_floors_from: null,
    count_floors_to: null,
    lift: null,
    has_parking: null,
    has_offices: null,
    floor_from: null,
    floor_to: null,
    area_living_from: null,
    area_living_to: null,
    area_kitchen_from: null,
    area_kitchen_to: null,
    decors: [],
    balcony_types: [],
    bathrooms: [],
    deadline: null as IDeadline | null,
});

export const RawMortgageData = () => ({
    selected_percents: "percents",
    price: 0,
    advance: 0,
    credit_period: 15,
    home: undefined,
    room_count: undefined,
});

export const isAllBuilt = (countHomes: ICountHomes) => countHomes?.total === countHomes?.finished;

export const onlyFewBuilt = (countHomes: ICountHomes) => !isAllBuilt(countHomes) && countHomes?.finished > 0;

export const deadlineToLabel = (e: IDeadline) => `до ${e?.quarter_end} кв. ${e?.year_end}`;

export const computeDeadline = ({ stage, quarter_end, year_end }) => {
    if (stage?.name.toLocaleLowerCase() === "сдан") return "Сдан";
    else if (quarter_end && year_end) return `${quarter_end} квартал ${year_end}`;
};

export * from "~/utils/filter";
