<script setup lang="ts">
import Building from "~/components/Partials/Building.vue";
import {
    complexes as getСomplexes,
    GQL_FOR_LIST,
} from "~/services/gql/complexes";

const props = withDefaults(defineProps<{ sort?: true; count?: number }>(), {
    count: 8,
});

const [isCollapsed, toggle] = useToggle();

const { result, loading, error } = getСomplexes(GQL_FOR_LIST, {
    page: 1,
    first: props.count,
});
const complexes = computed(() => result.value?.complexes ?? null);
console.log(complexes);
</script>

<template>
    <div>
        <NuxtLayout
            name="app-section"
            class="search-result-section mb-[34px] md:mb-[85px] md:mt-[75px]"
        >
            <template #head>
                <div
                    class="sm:flex sm:items-center sm:justify-between flex-wrap relative z-10 mb-[18px] md:mb-[61px]"
                >
                    <p
                        class="text-center text-[26px] md:text-[38px] md:leading-[44px] leading-9 font-bold md:font-extrabold text-[#131313] font-[Raleway] mb-4 sm:mb-0"
                    >
                        Вам подойдет
                    </p>

                    <div v-if="sort" class="relative filter-btn w-full">
                        <button
                            @click="() => toggle()"
                            class="mb-1 h-11 flex w-full items-center justify-between border-2 border-[#f8f8f8] rounded-[5px] p-4 md:px-[17px]"
                        >
                            <p
                                class="text-[#131313] text-[13px] md:text-[14px] font-[Raleway] font-extralight md:font-light leading-4 italic"
                            >
                                Сортировать по:
                            </p>
                            <span
                                class="rounded-full relative ml-2 flex items-center justify-center h-5 w-5 bg-[#1DA958]"
                            >
                                <app-i
                                    name="zondicons:cheveron-down"
                                    class="absolute text-white w-6 h-4"
                                />
                            </span>
                        </button>

                        <Transition name="fade">
                            <Blurable
                                v-if="!isCollapsed"
                                @blured="() => toggle(true)"
                                class="absolute shadow bg-white left-0 right-0 rounded-b-[5px] text-[#131313] text-[13px] md:text-[14px] font-[Raleway] font-extralight md:font-light leading-4"
                            >
                                <button
                                    class="block w-full text-left p-4 md:px-[17px] hover:bg-gray-100"
                                >
                                    по возрастанию цены
                                </button>
                                <button
                                    class="block w-full text-left p-4 md:px-[17px] hover:bg-gray-100"
                                >
                                    по убыванию цены
                                </button>
                                <button
                                    class="block w-full text-left p-4 md:px-[17px] hover:bg-gray-100"
                                >
                                    ближайшему сроку сдачи
                                </button>
                            </Blurable>
                        </Transition>
                    </div>
                </div>
            </template>

            <div
                class="grid grid-cols-12 gap-3 md:gap-[30px] mb-[28px] md:mb-[61px]"
            >
                <!-- 26 + 2 = 28 -->
                <Building
                    v-for="complex in complexes.data"
                    :key="complex.id"
                    :complex="complex"
                    under-construction
                    shadow
                />
            </div>

            <template #foot>
                <div class="flex justify-center">
                    <Button
                        label="Загрузить еще"
                        class="mx-auto block md:inline bg-[#E71F61]"
                    />
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
