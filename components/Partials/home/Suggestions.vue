<script setup lang="ts">
import Building from "~/components/Partials/Building.vue";
import { complexes as getComplexes, GQL_FOR_LIST } from "~/services/gql/complexes";
import { debounce } from "~/utils";

const props = withDefaults(defineProps<{ id: string; sort?: true; count?: number }>(), {
    count: 8,
});

const { filter, prepare } = useFilter();

const { result, loading, error, fetchMore, refetch } = getComplexes(GQL_FOR_LIST, { page: 1, first: props.count, ...filter.value });

const complexes = computed(() => result.value?.complexes?.data ?? []);

const loadMore = () => {
    const page = (result.value?.complexes?.paginatorInfo?.currentPage ?? 0) + 1;

    return fetchMore({
        variables: { page, first: props.count, ...filter.value },
        updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) return previousResult;

            return {
                complexes: {
                    __typename: previousResult?.complexes?.__typename,
                    paginatorInfo: fetchMoreResult?.complexes?.paginatorInfo ?? previousResult?.complexes?.paginatorInfo,
                    data: [...previousResult?.complexes?.data, ...fetchMoreResult?.complexes?.data],
                },
            };
        },
    });
};

const [isFilterOpen] = useMobileFilter();

watch(
    [filter, isFilterOpen],
    ([v, _isFilterOpen]) => {
        if (_isFilterOpen) return;
        debounce(async () => {
            await refetch({ page: 1, first: props.count, ...prepare(v) });
        })();
    },
    { deep: true }
);
</script>

<template>
    <div :id="id">
        <NuxtLayout name="app-section" class="search-result-section mb-[34px] md:mb-[85px] md:mt-[75px]">
            <template #head>
                <div class="sm:flex sm:items-center sm:justify-between flex-wrap relative z-50 mb-[18px] md:mb-[61px]">
                    <p class="text-center text-[26px] md:text-[38px] md:leading-[44px] leading-9 font-bold md:font-extrabold text-[#131313] font-[Raleway] mb-4 sm:mb-0">Вам подойдет</p>

                    <complex-order v-if="sort" />
                </div>
            </template>

            <div>
                <div class="grid grid-cols-12 gap-3 md:gap-[30px] mb-[28px] md:mb-[61px]">
                    <!-- 26 + 2 = 28 -->
                    <Building v-for="complex in complexes" :key="complex.id" :complex="complex" under-construction shadow />
                </div>
            </div>

            <template #foot>
                <div class="flex justify-center">
                    <loader v-if="loading" />
                    <Button v-if="!loading && result?.complexes.paginatorInfo.hasMorePages" @click="loadMore" label="Загрузить еще" class="mx-auto block md:inline bg-[#E71F61]" :disabled="loading" />
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>

<style lang="scss" scoped>
.search-result-section {
    .filter-btn {
        @include break_point(640px) {
            max-width: 262px;
        }
    }
}
</style>
