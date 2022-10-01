<script setup lang="ts">
import Building from "~/components/Partials/Building.vue";

const [isCollapsed, toggle] = useToggle();
</script>

<template>
    <NuxtLayout name="app-section" class="search-result-section mb-[34px] md:mb-[85px] md:mt-[75px] bg-green-400">
        <template #head>
            <div class="sm:flex sm:items-center sm:justify-between flex-wrap relative z-10 mb-[18px] md:mb-[61px]">
                <p class="text-center text-[26px] md:text-[38px] md:leading-[44px] leading-9 font-bold md:font-extrabold text-[#131313] font-[Raleway] mb-4 sm:mb-0">Вам подойдет</p>

                <div class="relative filter-btn w-full" onclick="() => toggle()">
                    <button class="h-11 flex w-full items-center justify-between text-gray-900 border-2 border-[#f8f8f8] rounded-[5px] px-4">
                        <p class="text-[13px] md:text-[14px] font-[Raleway] font-extralight md:font-light leading-4 italic">Сортировать по:</p>
                        <span class="rounded-full relative ml-2 flex items-center justify-center h-5 w-5 bg-[#1DA958]">
                            <app-i name="zondicons:cheveron-down" class="absolute text-white w-6 h-4" />
                        </span>
                    </button>

                    <div v-if="!isCollapsed" class="border-2 absolute shadow bg-red-600 left-0 right-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, architecto nemo, corrupti eveniet fugiat officia dignissimos eaque id minima ab eum exercitationem quo. Quisquam at architecto, fuga ullam ipsa omnis.
                    </div>
                </div>
            </div>
        </template>

        <div class="buildings grid grid-cols-12 gap-3 md:gap-[30px] mb-[28px] md:mb-[61px]">
            <!-- 26 + 2 = 28 -->
            <Building v-for="i in 8" :key="i" />
        </div>

        <template #foot>
            <div class="flex justify-center">
                <Button label="Загрузить еще" class="mx-auto block md:inline bg-[#E71F61]" />
            </div>
        </template>
    </NuxtLayout>
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
