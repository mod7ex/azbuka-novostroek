import { apartmentsData } from "~/services/gql/apartments";
import { homesData } from "~/services/gql/homes";
import type { IDeadline } from "~/types";
import { countRoomsGen } from "~/utils";

const deadlineToLabel = (e: IDeadline) => `до ${e?.quarter_end} кв. ${e?.year_end}`;

// [Fix] try to find better solution

export default () => {
    const data = useFilterStateData();

    const deadlines = computed(() => {
        const _deadlines = (data.value.homes?.deadlines ?? []) as IDeadline[];

        return _deadlines.map((value) => ({ label: deadlineToLabel(value), value }));
    });

    const count_rooms = computed(() => countRoomsGen(data.value.apartments ?? {}));

    if (!data.value.apartments) {
        // ApartmentsData
        const { result: apartmentsResult } = apartmentsData();

        // Deadlines
        const { result: homesResult } = homesData();

        watchEffect(() => {
            const apartments = apartmentsResult.value?.apartmentsData;
            const homes = homesResult.value?.homesData;

            data.value = {
                apartments,
                homes,
            };
        });
    }

    return { deadlines, data, count_rooms };
};
