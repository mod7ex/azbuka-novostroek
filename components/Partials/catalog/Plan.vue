<script setup lang="ts">
import ApartmentPlan from "~/components/Partials/catalog/ApartmentPlan.vue";
import { apartments as getApartments, type Filter } from "~/services/gql/apartments";
import { debounce } from "~/utils";

const props = defineProps<{ home?: any; rooms?: { label: string; value: Numberish }[] }>();

const current = shallowRef(-1);

const currentHome = useCurrentHome();

const { result, error, loading, refetch, load, fetchMore } = getApartments({ page: 1, first: 3, home_id: currentHome.value });

const apartments = computed(() => result.value?.apartments?.data ?? []);

let count = 0;

watch(
    [currentHome, current],
    debounce(([home_id, count_rooms] /* , [old_home_id, old_count_rooms] */) => {
        if (!count) {
            count++;
            return load();
        }

        let _filter: Filter = { page: 1, first: 3, home_id };
        if (count_rooms === 0) _filter.is_studio = true;
        else if (count_rooms > 0) _filter.count_rooms = [count_rooms];
        return refetch(_filter);
    }),
    {
        immediate: true,
    }
);

const loadMore = () => {
    const page = (result.value?.apartments?.paginatorInfo?.currentPage ?? 0) + 1;

    console.log(page);

    return fetchMore({
        variables: { page },
        updateQuery: (previousResult, { fetchMoreResult }) => {
            console.log("previousResult", previousResult.apartments.paginatorInfo);
            console.log("fetchMoreResult", fetchMoreResult.apartments.paginatorInfo);

            if (!fetchMoreResult) return previousResult;

            return {
                apartments: {
                    __typename: previousResult?.apartments?.__typename,
                    paginatorInfo: fetchMoreResult?.apartments?.paginatorInfo ?? previousResult?.apartments?.paginatorInfo,
                    data: [...previousResult?.apartments?.data, ...fetchMoreResult?.apartments?.data],
                },
            };
        },
    });
};

const elementRef = ref<HTMLDivElement>();
const rootRef = ref<HTMLDivElement>();

const condition = computed(() => result.value.apartments?.paginatorInfo?.hasMorePages);

useIntersectionObserver(elementRef, loadMore, {
    root: rootRef,
    condition,
});
</script>

<template>
    <div>
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[46px] md:pb-[53px]']">
            <template #head>
                <h1 class="text-[26px] md:text-[18px] font-bold md:font-extrabold leading-9 md:leading-[21px] font-[Raleway] text-[#131313] mb-4 md:mb-[17px]">Планировки</h1>
                <x-scroll-header :choices="rooms" v-model="current" class="mb-[28px]" buttons />
            </template>

            <div ref="rootRef" class="overflow-x-scroll mb-4 md:mb-[17px] no-scroll-thum">
                <div class="flex gap-3 w-fit">
                    <apartment-plan v-for="item in apartments" :key="item?.id" :apartment="item" class="mb-[13px]" />

                    <div ref="elementRef" class="w-3"></div>

                    <div v-if="loading" class="flex items-center justify-center">
                        <loader />
                    </div>
                </div>
            </div>

            <template #foot>
                <dashed-devider class="md:hidden" />
            </template>
        </NuxtLayout>
    </div>
</template>
