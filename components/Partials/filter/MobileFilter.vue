<script setup lang="ts">
const LazyRawMobileFilter = defineAsyncComponent(() => import("~/components/Partials/filter/RawMobileFilter.vue"));

const [isVisible, toggleVisibility] = useToggle(false);

const { filter } = useFilter();
</script>

<template>
    <app-width class="md:hidden">
        <!-- prettier-ignore -->
        <text-search
            v-model="filter.name"
            :class="['max-w-md mx-auto px-[18px] bg-white border border-[#3478f624] h-[50px] app-shadow', isVisible ? 'rounded-t border-b-0' : 'rounded']"
            @filter="() => toggleVisibility(true)"
        />

        <Transition name="slide-up-fade-out">
            <!-- prettier-ignore -->
            <Blurable
                tag="div"
                v-if="isVisible"
                @blured="() => toggleVisibility(false)"
                :class="['relative z-50']"
            >
                <lazy-raw-mobile-filter class="border-t-0 border border-[#3478f624] pt-3 px-[18px] pb-2 absolute left-0 right-0 bg-white rounded-b" />
            </Blurable>
        </Transition>
    </app-width>
</template>
