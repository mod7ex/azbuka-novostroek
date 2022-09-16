<script lang="ts" setup>
import Building from "~/components/Partials/Building.vue";

const isMatch = useMediaQuery("(max-width: 397px)");

const show = shallowRef(false);
</script>

<template>
    <NuxtLayout name="app-section" class="search-result-section h-96">
        <template #head>
            <div class="sm:flex sm:items-center sm:justify-between flex-wrap">
                <p class="text-center text-4xl font-black mb-2 whitespace-nowrap">Вам подойдет</p>

                <div class="relative filter-btn w-full" onclick="show = !show">
                    <button class="flex w-full items-center justify-between text-gray-900 border-2 border-gray-200 py-2 px-3 rounded">
                        <p class="whitespace-nowrap lowercase">Сортировать по:</p>
                        <span class="rounded-full bg-green-600 p-3 relative ml-2 flex items-center justify-center">
                            <app-i name="zondicons:cheveron-down" class="absolute text-white w-6 h-6" />
                        </span>
                    </button>

                    <div v-if="show" class="border-2 absolute shadow bg-green-600 left-0 right-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, architecto nemo, corrupti eveniet fugiat officia dignissimos eaque id minima ab eum exercitationem quo. Quisquam at architecto, fuga ullam ipsa omnis.
                    </div>
                </div>
            </div>
        </template>

        <div class="my-9 grid grid-cols-12 gap-3 md:gap-6">
            <Building v-for="i in 10" :key="i" :class="['sm:col-span-4 md:col-span-3', isMatch ? 'col-span-12' : 'col-span-6']" />
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.search-result-section {
    @media (min-width: 640px) {
        .filter-btn {
            max-width: 262px;
        }
    }
}
</style>
