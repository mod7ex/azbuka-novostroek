<script setup lang="ts">
import Building from "~/assets/img/catalog-building.png";
import BuildingA from "~/assets/img/gallery-building_a.png";
import BuildingB from "~/assets/img/gallery-building_b.png";
</script>

<template>
    <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0']">
        <template #head>
            <h1 class="text-[26px] font-bold leading-9 font-[Raleway]">Описание жилого комплекса</h1>
        </template>

        <div class="gallery mb-[25px] mt-[20px]">
            <app-img :src="Building" class="rounded" />

            <ul class="flex items-center justify-between mt-3">
                <li>
                    <button><b>&lt;</b></button>
                </li>
                <li>
                    <button><app-img :src="Building" class="w-9 rounded" /></button>
                </li>
                <li>
                    <button><app-img :src="BuildingA" class="w-9 rounded" /></button>
                </li>
                <li>
                    <button><app-img :src="BuildingB" class="w-9 rounded" /></button>
                </li>
                <li>
                    <button><b>&gt;</b></button>
                </li>
            </ul>
        </div>

        <template #foot>
            <div class="text-[13px]">
                <p class="leading-6 font-normal font-[Inter] text-[#666666] mb-[17px]">
                    ЖК West Garden возводится в пойме реки Раменки на территории района Западного округа Москвы. Район застройки жилого комплекса отличает высокая транспортная доступность. Застройщиком выступает компания «Интеко».
                </p>
                <a href="" class="text-[#3478F6] leading-3 flex items-start justify-start">
                    <span class="mr-[10px]">Читать подробнее </span>
                    <span class="text-[30px] -mt-[7px]">&#8964;</span>
                </a>
            </div>
        </template>
    </NuxtLayout>
</template>

<style lang="scss">
.gallery {
    ul {
        li {
            cursor: pointer;
            color: #8c8c8c;
            max-width: 93px;
            img {
                width: 100%;
            }
        }
    }
}
</style>
