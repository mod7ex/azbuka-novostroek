<script setup lang="ts">
import TheDefaultFooter from "~/components/TheDefaultFooter.vue";
import TheDefaultHeader from "~/components/TheDefaultHeader.vue";
import ShowCase from "~/components/Partials/home/ShowCase.vue";
// import Search from "~/components/Partials/home/Search.vue";
import Logo from "~/assets/svg/logo.svg";

const LazySearch = defineAsyncComponent(() => import("~/components/Partials/home/Search.vue"));

const props = defineProps<{ inner?: true }>();

const [isCollaped, toggle] = useToggle();

const isMatch = useMediaQuery("(min-width: 768px)");
</script>

<template>
    <div :class="['z-0', inner ? 'inner' : '', $attrs.class]">
        <div class="show-case-container">
            <div :class="['show-case-overlay relative', inner ? 'md:mb-[60px]' : '']">
                <app-width tag="header">
                    <client-only>
                        <the-default-header @toggle="() => toggle()" />
                    </client-only>
                </app-width>

                <Transition name="slide-fade">
                    <Blurable @blured="() => toggle(true)" v-if="!isCollaped" class="mobile-nav absolute z-50 top-0 left-0 right-0 bg-white app-shadow pt-5 pb-[58px]">
                        <app-width tag="nav" v-if="!isCollaped">
                            <div class="flex justify-between items-center mb-[73px]">
                                <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-bold">
                                    <app-img :src="Logo" alt="" width="83" height="41" />
                                </NuxtLink>

                                <button @click="() => toggle()" class="cursor-pointer">
                                    <app-i class="w-5 h-5 text-[#BDBDBD]" name="material-symbols:close" />
                                </button>
                            </div>

                            <!-- 20 + 29 = 49 -->

                            <div class="pl-[29px]">
                                <ul class="mb-[59px]">
                                    <li class="mb-3">
                                        <NuxtLink :to="{ name: 'index' }" class="text-[#131313] uppercase text-base leading-[18px] font-extrabold font-[Raleway]"> Жилые комплексы </NuxtLink>
                                    </li>
                                    <li class="mb-3">
                                        <NuxtLink :to="{ name: 'index' }" class="text-[#131313] uppercase text-base leading-[18px] font-extrabold font-[Raleway]"> Квартиры </NuxtLink>
                                    </li>
                                    <li class="mb-3">
                                        <NuxtLink :to="{ name: 'index' }" class="text-[#131313] uppercase text-base leading-[18px] font-extrabold font-[Raleway]"> о нас </NuxtLink>
                                    </li>
                                    <li class="mb-3">
                                        <NuxtLink :to="{ name: 'index' }" class="text-[#131313] uppercase text-base leading-[18px] font-extrabold font-[Raleway]"> Контакты </NuxtLink>
                                    </li>
                                </ul>
                                <span class="flex items-center">
                                    <button class="flex items-center py-[10px] px-5 relative border-[1.6px] border-[#1da95814] bg-[#FAFCFE] rounded-full cursor-pointer">
                                        <app-i class="text-blue-500 w-3 h-[15px] mr-[9px]" name="heroicons-outline:location-marker" />
                                        <span class="font-normal text-[14px] leading-5 text-[#131313] font-[Inter]">Ростов-на-Дону</span>
                                    </button>
                                    <button class="flex items-center justify-center w-10 h-10 relative border-[1.6px] border-[#1da95814] bg-[#3478F6] rounded-full p-1 ml-[10px] sm:mx-2 cursor-pointer">
                                        <app-i class="absolute text-white w-3 h-[15px]" name="heroicons-outline:phone-incoming" />
                                    </button>
                                </span>
                            </div>
                        </app-width>
                    </Blurable>
                </Transition>

                <show-case v-if="!inner" />
            </div>
        </div>

        <client-only>
            <app-width class="max-w-[1199px] search z-1 relative mb-[31px] px-5 md:px-0" v-if="!inner || isMatch">
                <LazySearch />
            </app-width>
        </client-only>

        <main>
            <slot />
        </main>

        <the-default-footer />
    </div>
</template>

<style lang="scss" scoped>
.search {
    margin-top: -25px;

    @include break_point(768px) {
        margin-top: -95px;
    }
}

main {
    @include break_point(965px) {
        @include bg-img("about-cloud.png") {
            background-position: right -200px top 85%;
            background-size: 500px 800px;
        }
    }
}

.show-case-container {
    margin: 0 auto;

    @include bg-img("background.jpg");

    @include break_point(761px) {
        padding-bottom: 311.5px;
    }

    .show-case-overlay {
        background: linear-gradient(179.92deg, rgba(#edf5fe, 0.1) 14.39%, rgba(255, 255, 255, 0) 99.93%), rgba(#edf5fe, 0.3);
    }
}

.inner {
    // background-color: #e5e5e5;

    .show-case-container {
        background: transparent;
        // background: linear-gradient(179.92deg, rgba(229, 240, 252, 0.1) 14.39%, rgba(255, 255, 255, 0) 99.93%), rgba(229, 240, 252, 0.3);

        @include break_point(761px) {
            padding-bottom: 183px;
        }

        .show-case-overlay {
            background: transparent;
        }
    }

    .search {
        @include break_point(768px) {
            margin-top: -192px;
        }
    }

    main {
        background: none;
    }
}

.mobile-nav {
    @include bg-img("Vector.png");
    background-position: right bottom;
    background-size: 80% 75%;
}

/* ************************************ Transition ************************************ */
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
