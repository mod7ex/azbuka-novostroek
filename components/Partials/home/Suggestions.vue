<script setup lang="ts">
import Building from "~/components/Partials/Building.vue";

const [isCollapsed, toggle] = useToggle();
</script>

<template>
    <NuxtLayout name="app-section" class="search-result-section">
        <template #head>
            <div class="sm:flex sm:items-center sm:justify-between flex-wrap relative z-10">
                <p class="text-center text-4xl font-black mb-2 whitespace-nowrap">Вам подойдет</p>

                <div class="relative filter-btn w-full" onclick="() => toggle()">
                    <button class="flex w-full items-center justify-between text-gray-900 border-2 border-gray-200 py-2 px-3 rounded">
                        <p class="whitespace-nowrap lowercase">Сортировать по:</p>
                        <span class="rounded-full bg-green-600 p-3 relative ml-2 flex items-center justify-center">
                            <app-i name="zondicons:cheveron-down" class="absolute text-white w-6 h-6" />
                        </span>
                    </button>

                    <div v-if="!isCollapsed" class="border-2 absolute shadow bg-green-600 left-0 right-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, architecto nemo, corrupti eveniet fugiat officia dignissimos eaque id minima ab eum exercitationem quo. Quisquam at architecto, fuga ullam ipsa omnis.
                    </div>
                </div>
            </div>
        </template>

        <div class="buildings my-9 grid grid-cols-12 gap-3 md:gap-6">
            <Building v-for="i in 8" :key="i" />
        </div>

        <template #foot>
            <div class="flex justify-center">
                <Button label="Загрузить еще" class="mx-auto block md:inline" />
            </div>
        </template>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.search-result-section {
    @include break_point(640px) {
        .filter-btn {
            max-width: 262px;
        }
    }
}
</style>
