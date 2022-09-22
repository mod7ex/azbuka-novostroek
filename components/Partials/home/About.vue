<script setup lang="ts">
import Video from "~/assets/img/video.png";
</script>

<template>
    <NuxtLayout name="app-section" class="about-section">
        <template #head>
            <h1 class="text-center text-2xl font-bold mb-3">О нас</h1>
        </template>

        <div class="mb-4">
            <p class="text-center mb-4">ЖК West Garden возводится в пойме реки Раменки на территории района Западного округа Москвы. Район застройки жилого комплекса отличает высокая транспортная доступность.</p>
            <p class="text-center">Возводится в пойме реки Раменки на территории района Западного округа Москвы. Район застройки жилого комплекса отличает высокая транспортная доступность. Застройщиком выступает компания «Интеко».</p>
        </div>

        <div class="relative flex items-center justify-center">
            <app-img :src="Video" class="w-full" />
            <span class="border-2 border-white rounded-full absolute w-8 h-8 flex items-center justify-center">
                <app-i name="material-symbols:play-arrow" class="text-white absolute" />
            </span>
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
.about-section {
    // background-color: green;
    background-image: url("~/assets/svg/cloud.svg");
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 80% 100%;
    @include break_point(400px) {
        background-size: 90% 62%;
    }
}
</style>
