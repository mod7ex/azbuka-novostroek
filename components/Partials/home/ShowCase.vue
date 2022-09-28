<script setup lang="ts">
import SVGGroup from "~/assets/svg/group.svg";
</script>

<template>
    <section :class="['md:flex md:items-end md:justify-between bg-green-700 pb-4']">
        <div class="mb-7">
            <div class="mb-6 text-center md:text-left">
                <h1 class="text-[32px] md:text-4xl font-extrabold leading-[42px] text-[#131313] mb-[6px]">
                    <p>База новостроек</p>
                    <p class="hidden md:block whitespace-nowrap">от застройщиков</p>
                </h1>
                <h4 class="text-base leading-6 font-normal text-[#8C8C8C]">Ростова-на-Дону и Ростовской области</h4>
            </div>
            <Button label="Подробнее" class="mx-auto block md:inline bg-[#E71F61]" />
        </div>

        <div class="svg-container relative md:h-80 border-red-700 border-2">
            <svg width="335" height="242" class="border border-blue-600 h-[248px] ml-[26px]" viewBox="0 0 335 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M37.9866 241.253C6.82935 205.454 -6.44829 155.021 2.98185 108.641C5.77318 94.9071 11.0541 80.7228 22.2193 72.1672C33.9127 63.2363 49.7554 62.0355 64.4664 62.711C79.1774 63.3114 94.2657 65.3377 108.449 61.4351C129.572 55.5813 144.736 38.0198 160.88 23.3102C177.025 8.67556 198.827 -4.38299 219.724 1.84609C235.341 6.49914 246.204 21.0587 251.862 36.3687C257.52 51.6037 259.029 68.0394 262.877 83.7998C266.724 99.6351 273.438 115.621 286.565 125.377C293.053 130.18 300.748 133.107 307.538 137.46C324.437 148.267 335.149 168.005 334.998 187.968C334.848 207.931 323.833 227.519 306.708 238.026"
                    fill="white"
                    fill-opacity="0.5"
                />
            </svg>
            <app-img class="absolute mx-auto border border-black" :src="SVGGroup" alt="" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.svg-container {
    img {
        left: 80px;
        top: 16px;
        width: 222px;
    }

    @include break_point(761px) {
        max-width: 30rem;

        img {
            top: 3.5rem;
            left: 0;
            height: 120%;
            width: 90%;
        }
    }
}
</style>
