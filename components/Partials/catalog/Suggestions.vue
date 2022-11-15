<script setup lang="ts">
import BuildingSuggestions from "~/components/Partials/home/Suggestions.vue";
import Building from "~/components/Partials/Building.vue";
</script>

<template>
    <div :class="$attrs.class">
        <building-suggestions :count="4" class="md:hidden" />

        <div class="hidden md:block">
            <p class="text-left text-[38px] leading-[44px] font-extrabold text-[#131313] font-[Raleway] mb-3">Вам подойдет</p>
            <div class="md:flex buildings-gallery">
                <div class="relative left">
                    <button class="text-white w-[50px] h-[50px] top-0 bottom-0 my-auto absolute right-[-25px] z-50 bg-[#1DA958] rounded-[2px]">
                        <app-i name="material-symbols:arrow-right-alt-rounded" />
                    </button>
                    <div class="pl-[10px] pr-[20px] overflow-x-scroll no-scroll-thum py-14 flex gap-3 md:gap-[30px]">
                        <Building v-for="i in 8" :key="i" under-construction shadow class="min-w-[308px]" />
                    </div>
                </div>

                <div class="bridge-shadow relative z-50 climp right"></div>
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
