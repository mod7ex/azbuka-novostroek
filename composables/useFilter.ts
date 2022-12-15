export const raw = () => ({
    name: "",
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
});

let filter: ReturnType<typeof reactive<ReturnType<typeof raw>>>;

const useFilter = () => {
    const reset = () => {
        filter = reactive(raw());
    };

    const clear = () => {
        filter = undefined;
    };

    if (!filter) reset();

    return {
        filter,
        reset,
        clear,
    };
};

export default useFilter;
