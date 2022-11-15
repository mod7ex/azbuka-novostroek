<script setup lang="ts">
import MobileFilter from "~/components/Partials/MobileFilter.vue";

const [isCollaped, toggle] = useToggle();

const [isVisible, toggleVisibility] = useToggle(false);
</script>

<template>
    <section :class="[$attrs.class]">
        <div class="search-container mx-auto border md:border-none flex items-center border-[#3478f624] rounded h-[50px] px-[18px] md:px-5 bg-white mb-[6px]">
            <ul :class="['search-area flex items-center justify-between w-full flex-wrap']">
                <li :class="['search-input flex items-center flex-grow']">
                    <app-i name="heroicons-outline:search" class="text-[#1DA958] mr-4 w-[17px] h-[17px] md:text-[#5F5F5F] cursor-pointer" />
                    <input type="text" placeholder="Название новостройки или застройщика" class="w-full sm:flex-grow md:flex-grow-0 md:inline-block outline-none py-2" />
                </li>

                <li class="search-options py-2">
                    <ul class="flex items-center divide-x divide-gray-300">
                        <li class="px-[27px] flex items-center">
                            <span class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Тип квартиры</span>
                        </li>

                        <li class="px-[27px] flex items-center">
                            <span class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Цена</span>
                        </li>

                        <li class="px-[27px] flex items-center">
                            <span class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Площадь</span>
                        </li>

                        <li class="px-[27px] flex items-center">
                            <span class="whitespace-nowrap font-bold text-[14px] leading-5 cursor-pointer text-[#50535A]">Срок аренды</span>
                        </li>

                        <li class="pl-[27px] flex items-center">
                            <button class="flex items-center text-[#1DA958] cursor-pointer" @click="() => toggle()" role="expand" aria-label="expand filter">
                                <app-i name="heroicons-outline:adjustments" class="mr-2 rotate-90 transform" />
                                <p class="whitespace-nowrap font-bold text-[14px] leading-5">Все фильтры</p>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <Transition name="search-expand" :aria-expanded="isCollaped">
            <Blurable tag="ul" @blured="() => toggle(true)" class="filter mx-auto grid gap-4 grid-cols-12 py-4 pb-8 rounded-[5px] px-5 bg-white overflow-hidden hg-6" v-if="!isCollaped">
                <li class="col-span-4">
                    <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">расположение</h4>
                    <div>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Регион</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Город</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Адм. район</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Народный район</button>
                    </div>
                </li>

                <li class="col-span-4">
                    <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">Дом</h4>
                    <div>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Класс недвижимости</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Материал стен</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Этажей в доме</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Паркинг</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Лифт</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Коммерция</button>
                    </div>
                </li>

                <li class="col-span-4">
                    <h4 class="mb-4 text-[#50535A] text-[14px] leading-4 font-extrabold font-[Raleway] h-12 uppercase flex items-center">КВАРТИРА</h4>
                    <div>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Этаж</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Отделка</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Общая площадь</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Плозадь жилья</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Площадь кухни</button>
                        <button class="border border-transparent focus:border-[#1DA958] w-full px-[14px] h-12 flex items-center mb-4 text-[14px] font-normal leading-5 font-[Inter] text-[#50535A] bg-[#f4f4f4] focus:bg-white rounded-[3px]">Санузел</button>
                    </div>
                </li>
            </Blurable>
        </Transition>

        <!-- Filter Mobile -->

        <button @click="() => toggleVisibility()" class="md:hidden mb-10 flex justify-center font-[Raleway] items-center gap-x-[14px] py-[15px] border-2 border-[#f8f8f8] rounded-[5px] w-full">
            <app-i name="carbon:settings-adjust" class="text-[#1DA958] h-5 w-5" />
            <p class="text-[13px] leading-[13px] font-bold text-[#131313]">Показать фильтры</p>
        </button>

        <Teleport to="body">
            <mobile-filter :open="isVisible" @close="toggleVisibility" />
        </Teleport>

        <!-- ****** -->
    </section>
</template>

<style lang="scss" scoped>
$w: 1160px;

.filter {
    max-width: $w;
    box-shadow: $md-box-shadow;
}

.search-container {
    max-width: $w;
    box-shadow: $box-shadow;

    .search-area {
        justify-content: center;
    }

    .search-options {
        display: none;
    }

    @include break_point(828px) {
        box-shadow: $md-box-shadow;
        height: auto;

        .search-input {
            flex-grow: 0;
            width: 37ch;
        }

        .search-options {
            display: block;
        }
    }

    @include break_point(1154px) {
        padding-left: 32px;
        padding-right: 32px;

        padding-top: 12px;
        padding-bottom: 12px;
        .search-options,
        .search-input {
            padding: 0;
        }

        .search-area {
            & > :not([hidden]) ~ :not([hidden]) {
                --tw-divide-x-reverse: 0;
                border-right-width: calc(1px * var(--tw-divide-x-reverse));
                border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
            }

            flex-wrap: nowrap;
            justify-content: space-between;

            .search-input {
                flex-grow: 1;
            }
        }
    }
}

// ************************************************
@mixin items($columns: 10) {
    @for $i from 1 through $columns {
        &.hg-#{$i} {
            height: ($i * (4rem)) + (2rem + 3rem + 1rem);
        }
    }
}

.search-expand-enter-active {
    transition: all 0.3s ease-out;
}
.search-expand-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.search-expand-enter-from,
.search-expand-leave-to {
    opacity: 0;
    height: 0;
}

.search-expand-enter-to {
    @include items;
}
.search-expand-leave-from {
    @include items;
}
</style>
