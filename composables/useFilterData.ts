import { apartmentsData } from "~/services/gql/apartments";
import { homesData } from "~/services/gql/homes";
import { countRoomsGen, deadlineToLabel } from "~/utils";

export default () => {
    const data = useFilterRawData(); // [FIX] UNIQUE

    const apartments = computed(() => data.value?.apartments);

    const homes = computed(() => data.value?.homes);

    const count_rooms = computed(() => countRoomsGen(data.value?.apartments ?? {}));

    const deadlines = computed(() => {
        const _deadlines = (data.value?.homes?.deadlines ?? []) as IDeadline[];

        return _deadlines.map((value) => ({ label: deadlineToLabel(value), value }));
    });

    const ready = computed(() => !!data.value.apartments && !!data.value.homes);

    if (!ready.value) {
        /* BAD PRACTICE */
        const { result: apartmentsResult } = apartmentsData();

        const { result: homesResult } = homesData();

        watch([apartmentsResult, homesResult], ([_apartments, _homes]) => {
            data.value = {
                apartments: _apartments?.apartmentsData,
                homes: _homes?.homesData,
            };
        });
    }

    return { deadlines, count_rooms, ready, apartments, homes };
};
