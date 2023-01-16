import { Ref } from "nuxt/dist/app/compat/capi";

type Props = { label: `${number} комн.`; value: number }[];

// prettier-ignore
export const countRoomsGen = <T extends { count_rooms: number[] }>(data: Ref<T>) => computed<Props>(() => 
    data.value?.count_rooms
        ?.filter((e) => e > 0)
        ?.map((e) => ({ label: `${e} комн.`, value: e })) ?? null
)
