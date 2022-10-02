<script setup lang="ts">
import Video from "~/assets/img/video.png";
</script>

<template>
    <NuxtLayout name="app-section" class="about-section mb-[65px] md:mb-[200px]" body_class="md:flex md:flex-row-reverse md:justify-center md:items-center md:gap-[74px]">
        <template #head>
            <h1 class="text-center text-[26px] leading-9 font-bold text-[#131313] font-[Raleway] md:hidden">О нас</h1>
        </template>

        <article class="md:w-1/2 mb-9">
            <h1 class="text-left text-[38px] leading-[44px] font-extrabold text-[#131313] font-[Raleway] hidden md:block mb-[30px]">О нас</h1>
            <p class="text-[#666666] text-center text-[14px] leading-6 font-normal font-[Inter] md:text-left mb-4 md:mb-8">ЖК West Garden возводится в пойме реки Раменки на территории района Западного округа Москвы. Район застройки жилого комплекса отличает высокая транспортная доступность.</p>
            <p class="text-[#666666] text-center text-[14px] leading-6 font-normal font-[Inter] md:text-left">
                Возводится в пойме реки Раменки на территории района Западного округа Москвы. Район застройки жилого комплекса отличает высокая транспортная доступность. Застройщиком выступает компания «Интеко».
            </p>
        </article>

        <div class="relative flex items-center h-[220px] md:h-[405px] justify-center md:w-1/2">
            <app-img :src="Video" class="h-full" />
            <span class="border-2 border-white rounded-full absolute w-8 h-8 flex items-center justify-center">
                <app-i name="material-symbols:play-arrow" class="text-white absolute" />
            </span>
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.about-section {
    position: relative;
    overflow: hidden;

    background-image: url("~/assets/img/about-cloud.png");
    background-repeat: no-repeat;
    background-position: 100% 67%;
    background-size: 70% 75%;

    @include break_point(965px) {
        background-image: none;
    }
}
</style>
