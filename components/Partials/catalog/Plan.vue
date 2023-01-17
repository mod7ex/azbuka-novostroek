<script setup lang="ts">
import ApartmentPlan from "~/components/Partials/catalog/ApartmentPlan.vue";
import { apartments as getApartments, type Filter } from "~/services/gql/apartments";
import { debounce } from "~/utils";

const props = defineProps<{ home?: any; rooms?: { label: string; value: Numberish }[] }>();

const current = shallowRef(-1);

const currentHome = useCurrentHome();

const { result, error, loading, refetch, load } = getApartments({ page: 1, first: 2, home_id: currentHome.value });

let count = 0;

watch(
    [currentHome, current],
    debounce(([home_id, count_rooms], [old_home_id, old_count_rooms]) => {
        alert(count_rooms);

        if (!count) {
            count++;
            return load();
        }

        let _filter: Filter = {
            page: 1,
            first: 3,
            home_id,
        };
        if (count_rooms === 0) _filter.is_studio = true;
        else if (count_rooms > 0) _filter.count_rooms = [count_rooms];
        return refetch(_filter);
    }),
    {
        immediate: true,
    }
);

/*
const computeApartments = (payload, rooms = -1) => {
    return (
        payload
            ?.map(({ name: entrance, floors }) => {
                return floors?.map(({ number: floor, layout_url, apartments }) => {
                    let _apartments = apartments;

                    if (rooms == 0) _apartments = apartments?.filter(({ is_studio }) => is_studio);
                    else if (rooms > 0) _apartments = apartments?.filter(({ count_rooms }) => count_rooms == rooms);

                    return _apartments?.map(({ __typename, status, ...v }) => ({ entrance, layout_url, floor, status_name: status?.name, ...v }));
                });
            })
            ?.flat()
            ?.flat() ?? []
    );
};

const entrances = computed(() => {
    const _entrances = props.home?.entrances;

    const _rooms = current.value;

    return computeApartments(_entrances, _rooms);
});
*/
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px] md:pb-[53px]']">
            <template #head>
                <h1 class="text-[26px] md:text-[18px] font-bold md:font-extrabold leading-9 md:leading-[21px] font-[Raleway] text-[#131313] mb-4 md:mb-[17px]">Планировки</h1>
                <x-scroll-header :choices="rooms" v-model="current" class="mb-[28px]" buttons />
            </template>

            <pre>{{ result }}</pre>
            <!-- <apartment-plan v-for="item in entrances" :key="item?.id" :apartment="item" class="mb-[13px]" /> -->

            <template #foot>
                <!-- <div class="text-center">
                    <Button label="Загрузить еще" class="bg-[#E71F61] mb-[29px] md:mb-0" />
                </div> -->
                <dashed-devider class="md:hidden" />
            </template>
        </NuxtLayout>
    </div>
</template>
