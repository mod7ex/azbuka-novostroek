type Props = { label: `${number} комн.`; value: Numberish }[];

// prettier-ignore
export const countRoomsGen = <T extends { count_rooms: number[] }>({ count_rooms }: T) => {
    return count_rooms
        ?.filter((e) => e > 0)
        ?.map((e) => ({ label: `${e} комн.`, value: e })) ?? []
}
