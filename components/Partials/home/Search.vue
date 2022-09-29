<script setup lang="ts">
const [isCollaped, toggle] = useToggle(true);

const searchRef = ref<HTMLInputElement>();
onMounted(() => {
    searchRef.value.setAttribute("size", searchRef.value.getAttribute("placeholder").length.toString());
});
</script>

<template>
    <section :class="[$attrs.class]">
        <div class="search-container border-2 md:border-0 flex items-center border-gray-200 rounded h-[50px] px-[18px] md:px-5 bg-white mb-9">
            <ul :class="['search-area flex items-center justify-center flex-wrap']">
                <li :class="['search-input flex items-center flex-grow md:flex-grow-0']">
                    <app-i name="heroicons-outline:search" class="text-[#1DA958] mr-4 w-[17px] h-[17px] md:text-gray-500 cursor-pointer" />
                    <input ref="searchRef" type="text" placeholder="Название новостройки или застройщика" class="w-full sm:flex-grow md:flex-grow-0 md:inline-block outline-none py-2" />
                </li>

                <li class="search-options hidden md:block md:mt-4">
                    <ul class="flex divide-x divide-gray-300">
                        <li class="px-4 flex items-center">
                            <span class="font-bold cursor-pointer">Тип квартиры</span>
                        </li>

                        <li class="px-4 flex items-center">
                            <span class="font-bold cursor-pointer">Цена</span>
                        </li>

                        <li class="px-4 flex items-center">
                            <span class="font-bold cursor-pointer">Площадь</span>
                        </li>

                        <li class="px-4 flex items-center">
                            <span class="font-bold cursor-pointer">Срок аренды</span>
                        </li>

                        <li class="pl-4 flex items-center">
                            <button class="flex items-center text-green-700 cursor-pointer" @click="() => toggle()" role="expand" aria-label="expand filter">
                                <app-i name="heroicons-outline:adjustments" class="mr-2 rotate-90 transform" />
                                <p class="font-bold">Все фильтры</p>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <Transition name="search-expand" :aria-expanded="isCollaped">
            <ul class="grid gap-4 grid-cols-12 py-4 pb-8 rounded px-4 bg-white shadow-2xl overflow-hidden hg-6" v-if="!isCollaped">
                <li class="col-span-4">
                    <h4 class="h-12 font-bold uppercase flex items-center">расположение</h4>
                    <div>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Регион</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Город</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Адм. район</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Народный район</p>
                    </div>
                </li>

                <li class="col-span-4">
                    <h4 class="h-12 font-bold uppercase flex items-center">Дом</h4>
                    <div>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Класс недвижимости</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Материал стен</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Этажей в доме</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Паркинг</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Лифт</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Коммерция</p>
                    </div>
                </li>

                <li class="col-span-4">
                    <h4 class="h-12 font-bold uppercase flex items-center">КВАРТИРА</h4>
                    <div>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Этаж</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Отделка</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Общая площадь</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Плозадь жилья</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Площадь кухни</p>
                        <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Санузел</p>
                    </div>
                </li>
            </ul>
        </Transition>
    </section>
</template>

<style lang="scss" scoped>
.seach-container {
    box-shadow: $box-shadow;
}

.search-area {
    input::placeholder {
        font-family: Raleway;
        font-size: 13px;
        font-style: italic;
        font-weight: 300;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: left;
        color: #4f4f4f;
    }

    @include break_point(1015px) {
        flex-wrap: nowrap;

        .search-input {
            flex-grow: 1;
            input {
                width: 100%;
            }
        }
        .search-options {
            margin-top: 0;
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
