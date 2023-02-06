<script setup lang="ts">
import Complex from "~~/components/Partials/Complex.vue";
import { similarComplexes } from "~/services/gql/complexes";

const props = defineProps<{ complex_id?: Numberish }>();

// complex
const { result, loading, error } = similarComplexes(props.complex_id as string);
const complexes = computed(() => result.value?.similarComplexes?.data ?? []);

const { scroll, targetRef } = useScroll();
</script>

<template>
    <div :class="$attrs.class" v-if="!loading">
        <div class="hidden md:block">
            <p class="text-left text-[38px] leading-[44px] font-extrabold text-[#131313] font-[Raleway] mb-3">Вам подойдет</p>
            <div class="md:flex buildings-gallery">
                <div class="relative left">
                    <scroll-button v-if="complexes.length" class="shadow-lg top-0 bottom-0 my-auto absolute right-[-25px]" :on-scroll="() => scroll({ left: 300 })" />
                    <scroll-button left v-if="complexes.length" class="shadow-lg top-0 bottom-0 my-auto absolute left-[-25px]" :on-scroll="() => scroll({ left: -300 })" />

                    <div ref="targetRef" class="pl-[10px] pr-[20px] overflow-x-scroll no-scroll-thum py-14 flex gap-3 md:gap-[30px]">
                        <Complex v-for="complex in complexes" :key="complex.id" :complex="complex" under-construction shadow class="md:min-w-[300px]" />
                    </div>
                </div>

                <div class="bridge-shadow relative z-50 climp right"></div>
            </div>
        </div>

        <div class="md:hidden">
            <p class="text-center text-[26px] leading-[36px] font-bold text-[#131313] font-[Raleway] mb-7">Вам подойдет</p>

            <div class="grid grid-cols-12 gap-3 md:gap-[30px] mb-[28px] md:mb-[61px] px-5">
                <Complex v-for="complex in complexes" :key="complex.id" :complex="complex" under-construction shadow class="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.buildings-gallery {
    .left {
        width: 95%;
    }

    .right {
        width: 5%;
    }

    .bridge-shadow {
        @include shadow($x: -20px, $y: 0, $blur: 17px, $spread: -20px, $color: rgba(0, 0, 0, 0.5));
    }

    .climp {
        clip-path: inset(0 100% 0 -40px);
    }
}
</style>
