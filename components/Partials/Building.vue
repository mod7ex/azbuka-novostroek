<script lang="ts" setup>
//
</script>

<template>
    <div :class="['building', $attrs.class]">
        <div class="relative img rounded-lg h-36 sm:h-44 md:h-52 lg:h-60 w-full bg-green-400">
            <app-img class="rounded-lg h-full w-full" src="~/assets/img/building.png" alt="" />
            <span class="absolute top-0 bottom-0 right-0 left-0 flex justify-between p-3">
                <span class="relative flex items-center justify-center h-8 w-8 bg-pink-600 rounded-full">
                    <app-i name="heroicons-solid:phone" class="text-white absolute w-4 h-4" />
                </span>
                <span>
                    <app-i name="heroicons-outline:star" class="text-white" />
                    <br />
                    <app-i name="ic:round-stacked-bar-chart" class="text-white" />
                </span>
            </span>
        </div>

        <div class="p-3">
            <h2 class="font-light uppercase text-gray-600">ТПУ «ДМИТРОВСКАЯ</h2>
            <h1 class="font-semibold">Жилой квартал «D1»</h1>
            <p class="text-blue-600">от 10 335 млн ₽</p>
        </div>
    </div>
</template>

<style lang="scss">
.building {
    // .img {
    //   @include bg-img("building.png");
    // }
}
</style>
