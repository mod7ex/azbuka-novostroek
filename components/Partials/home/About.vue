<script setup lang="ts">
import Video from "~/assets/img/video.png";
</script>

<template>
    <NuxtLayout name="app-section" class="about-section" body_class="md:flex md:flex-row-reverse md:justify-center md:items-center">
        <template #head>
            <h1 class="text-center text-2xl font-bold mb-3 md:hidden">О нас</h1>
        </template>

        <article class="mb-4 md:w-1/2 md:p-9">
            <h1 class="text-center text-2xl font-bold mb-3 hidden md:block">О нас</h1>
            <p class="text-center paragraph md:text-left mb-4">ЖК West Garden возводится в пойме реки Раменки на территории района Западного округа Москвы. Район застройки жилого комплекса отличает высокая транспортная доступность.</p>
            <p class="text-center paragraph md:text-left">Возводится в пойме реки Раменки на территории района Западного округа Москвы. Район застройки жилого комплекса отличает высокая транспортная доступность. Застройщиком выступает компания «Интеко».</p>
        </article>

        <div class="relative flex items-center h-56 md:h-96 justify-center md:w-1/2 md:p-9">
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

    .paragraph {
        font-size: 14px;
    }

    &::after {
        content: " ";
        position: absolute;
        width: 60%;
        height: 100%;
        top: -20%;
        right: -30%;
        z-index: -1;

        background-image: url("~/assets/svg/cloud.svg");
        background-repeat: no-repeat;
        transform: rotate(-90deg);
        background-position: 100% top;
        background-size: 100% 100%;

        @include break_point(768px) {
            width: 60%;
            height: 100%;
            top: 20%;
            right: -30%;
            z-index: -1;

            background-position: 100% top;
            background-size: 80% 100%;
        }
    }
}
</style>
