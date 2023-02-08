/* import { isPlainObject } from "~/utils/types"; */
import { rawFilter } from "~/utils";
import { isArray } from "@vue/shared";

import { DONE_DEADLINE } from "~/constants";
import { deadlineToLabel } from "~/utils";

const prepare = (f: ReturnType<typeof rawFilter>) => {
    const shallow_copy = { ...f, ...f.deadline };

    /*
    let payload = JSON.parse(JSON.stringify(f)); // deep copy

    if (isPlainObject(f.deadline)) payload = { ...payload, ...f.deadline };

    delete payload.deadline;

    return payload;
    */

    delete shallow_copy.deadline;

    return shallow_copy;
};

const useFilter = () => {
    const { apartments, ...left } = useFilterData();

    const filter = useRawFilter();

    const pingRef = useFilterPing();

    const ping = () => {
        pingRef.value = Date.now();
    };

    const dirty = computed(() => {
        let _filter = filter.value;
        for (let key in _filter) {
            const _value = _filter[key];
            if (isArray(_value)) {
                if (_value.length) return true;
            } else if (_value) return true;
        }
        return false;
    });

    const reset = () => {
        filter.value = rawFilter();
    };

    /* *********************************************************** */

    // Rooms Count
    const rooms_bullets = computed(() => {
        const _rooms_bullets = filter.value.count_rooms.map((value) => ({ value, label: `${value} комн.` }));
        if (filter.value.is_studio) _rooms_bullets.push({ value: -1, label: "Студии" });
        return _rooms_bullets;
    });
    const unpickRoomCount = (v: Numberish) => {
        if (v === -1) filter.value.is_studio = false;
        else filter.value.count_rooms = filter.value.count_rooms.filter((_v) => _v != v);
    };

    // Price
    const price_bullet = computed(() => {
        const { price_from, price_to } = filter.value;

        if (!price_from && !price_to) return undefined;

        const _from = Math.floor((price_from ?? apartments.value?.min_price) / 100000) / 10;
        const _to = Math.floor((price_to ?? apartments.value?.max_price) / 100000) / 10;

        return `Цена от ${_from}м до ${_to}м`;
    });
    const resetPrice = () => {
        filter.value.price_from = undefined;
        filter.value.price_to = undefined;
    };

    // Deadline
    const deadline_bullet = computed(() => {
        const { deadline } = filter.value;

        if (!deadline) return undefined;

        if (deadline.quarter_end == DONE_DEADLINE.quarter_end && deadline.year_end == DONE_DEADLINE.year_end) return "Сдан";

        return deadlineToLabel(deadline);
    });
    const resetDeadline = () => {
        filter.value.deadline = undefined;
    };

    // Area
    const area_bullet = computed(() => {
        const { area_total_to, area_total_from } = filter.value;

        if (!area_total_to && !area_total_from) return undefined;

        const _from = Math.floor(area_total_from ?? apartments.value?.min_area_total);
        const _to = Math.floor(area_total_to ?? apartments.value?.max_area_total);

        return `Площадь от ${_from}м² до ${_to}м²`;
    });
    const resetArea = () => {
        filter.value.area_total_to = undefined;
        filter.value.area_total_from = undefined;
    };

    /* *********************************************************** */

    return {
        prepare,
        filter,
        reset,
        ping,
        pingRef,
        dirty,
        rooms_bullets,
        unpickRoomCount,
        price_bullet,
        resetPrice,
        deadline_bullet,
        resetDeadline,
        area_bullet,
        resetArea,
        apartments,
        ...left,
    };
};

export default useFilter;
