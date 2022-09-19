<script lang="ts" setup>
const isMatch = useMediaQuery("(max-width: 397px)");
</script>

<template>
    <div :class="['building md:shadow-lg hover:shadow-none transition-all duration-300 md:rounded', $attrs.class]">
        <!-- <div :class="['building md:shadow-lg hover:shadow-none transition-all duration-300 hover:border-yellow-400 md:border-2 md:rounded', $attrs.class]"> -->
        <div class="relative img rounded-lg md:rounded-none md:rounded-t sm:h-44 md:h-48 w-full" :class="[isMatch ? 'h-52' : 'h-36']">
            <app-img class="rounded-lg md:rounded-none md:rounded-t h-full w-full" src="~/assets/img/building.png" alt="" />
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

        <div class="p-4 text-sm">
            <div class="flex justify-between flex-wrap">
                <h2 class="font-light uppercase text-gray-600">ТПУ «ДМИТРОВСКАЯ</h2>
                <p class="text-green-600">Строится</p>
            </div>

            <h1 class="font-semibold my-2">Жилой квартал «D1»</h1>
            <!-- mobile -->
            <p class="text-blue-600 md:hidden">от 10 335 млн ₽</p>
            <!-- desktop -->
            <p class="items-center justify-start hidden md:flex">
                <app-i class="text-green-600 h-5 w-5 mr-2" name="heroicons-solid:location-marker" />
                <span>Ростов-на-Дону</span>
            </p>

            <!-- devider -->
            <div class="my-3 hidden md:block"><hr /></div>

            <div class="hidden md:block">
                <p class="flex items-center justify-between flex-wrap"><span class="text-gray-500">1-комн. от 27 м²</span> <span>10 233 450 ₽</span></p>
                <p class="flex items-center justify-between flex-wrap my-2"><span class="text-gray-500">2-комн. от 55 м²</span> <span>14 233 450 ₽</span></p>
                <p class="flex items-center justify-between flex-wrap"><span class="text-gray-500">3-комн. от 63 м²</span> <span>19 233 450 ₽</span></p>
            </div>
        </div>

        <div class="p-4 bg-blue-50 text-sm hidden md:block">
            <p class="mb-3 flex items-center justify-between flex-wrap text-blue-600">
                <b>65 квартир</b>
                <span>от 64 335 ₽/мес</span>
            </p>
            <Button transparent color="yellow" class="w-full building-see-details transition-all duration-300">
                <b>Подробнее</b>
            </Button>
        </div>
    </div>
</template>

<style lang="scss">
.building {
    padding-left: 2px;

    // .img {
    //   @include bg-img("building.png");
    // }

    @include border-anm;

    &:hover {
        .building-see-details {
            --tw-bg-opacity: 1;
            background-color: rgba(251, 191, 36, var(--tw-bg-opacity));
            color: white;
        }
    }
}
</style>
