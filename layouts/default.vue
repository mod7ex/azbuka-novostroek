<script setup lang="ts">
import TheDefaultFooter from "~/components/TheDefaultFooter.vue";
import TheDefaultHeader from "~/components/TheDefaultHeader.vue";
import ShowCase from "~/components/Partials/home/ShowCase.vue";
import Search from "~/components/Partials/home/Search.vue";
import Logo from "~/assets/svg/logo.svg";

const [isCollaped, toggle] = useToggle();
</script>

<template>
    <div>
        <div class="show-case-container">
            <div class="show-case-overlay relative">
                <app-width tag="header" class="py-1 md:py-3">
                    <client-only>
                        <the-default-header @toggle="() => toggle()" />
                    </client-only>
                </app-width>

                <Transition name="slide-fade">
                    <nav v-if="!isCollaped" class="mobile-nav absolute z-50 top-0 left-0 right-0 bg-white p-3 shadow-lg pb-9">
                        <div class="flex justify-between items-center">
                            <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-bold">
                                <app-img :src="Logo" alt="" width="57" height="28" />
                            </NuxtLink>

                            <button @click="() => toggle()" class="flex items-center h-9 cursor-pointer ml-3 md:ml-6 location">
                                <app-i class="w-6 h-6 mr-2 text-gray-500" name="material-symbols:close" />
                            </button>
                        </div>
                        <div class="pl-5">
                            <ul class="my-6 mb-9">
                                <li class="mb-3">
                                    <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-bold">Жилые комплексы</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-bold">Квартиры</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-bold">о нас</NuxtLink>
                                </li>
                                <li class="mb-3">
                                    <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-bold">Контакты</NuxtLink>
                                </li>
                            </ul>
                            <span class="flex items-center">
                                <button class="flex items-center h-9 px-3 relative border border-blue-50 bg-white rounded-full p-1 location cursor-pointer">
                                    <app-i class="text-blue-500 md:w-4 md:h-4 w-3 h-3 mr-2" name="heroicons-outline:location-marker" />
                                    <span>Ростов-на-Дону</span>
                                </button>
                                <button class="flex items-center justify-center w-9 h-9 md:w-9 md:h-9 relative border border-blue-50 bg-blue-500 rounded-full p-1 mx-1 sm:mx-2 chart cursor-pointer">
                                    <app-i class="absolute text-white md:w-4 md:h-4 w-3 h-3" name="heroicons-outline:phone-incoming" />
                                </button>
                            </span>
                        </div>
                    </nav>
                </Transition>

                <app-width>
                    <show-case />
                </app-width>
            </div>
        </div>

        <app-width class="md:-mt-20 -mt-7 z-50 relative">
            <Search />
        </app-width>

        <app-width tag="main">
            <slot />
        </app-width>

        <the-default-footer />
    </div>
</template>

<style lang="scss" scoped>
.show-case-container {
    max-width: 1500px;
    margin: 0 auto;

    @include bg-img("background.jpg");

    @media screen and (min-width: 761px) {
        padding-bottom: 15rem;
    }

    .show-case-overlay {
        background: linear-gradient(179.92deg, rgba(#edf5fe, 0.1) 14.39%, rgba(255, 255, 255, 0) 99.93%), rgba(#edf5fe, 0.3);
    }
}

nav.mobile-nav {
    @include bg-img("Vector.png");
    background-position: right bottom;
    background-size: 80% 75%;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-500px);
}
</style>
