import { apartmentsData } from "~/services/gql/apartments";
import { homesData } from "~/services/gql/homes";
import { countRoomsGen, deadlineToLabel } from "~/utils";

export default () => {
    const { result: apartmentsResult, load: loadApartmentsData } = apartmentsData(); // [FIX] UNIQUE

    const { result: homesResult, load: loadHomesData } = homesData(); // [FIX] UNIQUE

    const apartments = computed(() => apartmentsResult.value?.apartmentsData);

    const homes = computed(() => homesResult.value?.homesData);

    const count_rooms = computed(() => countRoomsGen(apartments.value ?? {}));

    const deadlines = computed(() => {
        const _deadlines = (homes.value?.deadlines ?? []) as IDeadline[];

        return _deadlines.map((value) => ({ label: deadlineToLabel(value), value }));
    });

    const ready = computed(() => !!apartments && !!homes.value);

    const load = () => {
        loadApartmentsData();
        loadHomesData();
    };

    return { deadlines, count_rooms, ready, apartments, homes, load };
};
