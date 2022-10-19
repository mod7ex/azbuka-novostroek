<script setup lang="ts"></script>

<template>
    <article :class="['bg-[#3478F6] rounded-[5px] card-container', $attrs.class]">
        <div class="rounded-t-[5px] md:rounded-t-none p-[21px] md:py-[40px] md:px-[30px] flex flex-col justify-between card-photo md:flex-grow">
            <div class="flex items-center justify-start gap-[6px] md:gap-[10px] md:items-end md:flex-col">
                <button class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#E71F61] rounded-full cursor-pointer">
                    <app-i class="absolute text-white w-3 h-3 md:w-5 md:h-5" name="ic:round-local-phone" />
                </button>
                <button class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#1DA958] rounded-full cursor-pointer">
                    <app-i class="absolute text-white w-3 h-3 md:w-5 md:h-5" name="zondicons:share-alt" />
                </button>
            </div>

            <div class="flex items-center justify-between md:flex-row-reverse">
                <button class="bg-[#FCBD00] text-white py-[7px] px-3 rounded-[60px] md:rounded-[3px] md:py-5 md:px-[30px] text-xs md:text-[15px] leading-[13px] md:leading-[17px] font-bold font-[Raleway]">Узнать об акциях</button>
                <ul class="flex items-center justify-center gap-[6px] md:gap-[10px]">
                    <ol>
                        <button class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#FAFCFE] border-[1.5px] border-[#1da95814] rounded-full cursor-pointer">
                            <app-i class="absolute text-[#3478F6] w-3 h-3 md:w-5 md:h-5" name="heroicons-outline:star" />
                        </button>
                    </ol>
                    <ol>
                        <button class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#FAFCFE] border-[1.5px] border-[#1da95814] rounded-full cursor-pointer">
                            <app-i class="absolute text-[#3478F6] w-3 h-3 md:w-5 md:h-5" name="ri:bar-chart-line" />
                        </button>
                    </ol>
                    <ol>
                        <button class="flex items-center justify-center w-[28px] h-[28px] md:w-[40px] md:h-[40px] relative bg-[#FAFCFE] border-[1.5px] border-[#1da95814] rounded-full cursor-pointer">
                            <app-i class="absolute text-[#3478F6] w-4 h-4" name="heroicons-outline:photograph" />
                        </button>
                    </ol>
                </ul>
            </div>
        </div>

        <div class="text-white p-[29px] pt-5 font-[Inter] md:pt-[41px] md:pl-[45px] md:pb-[35px] md:pr-[87px]">
            <h1 class="mb-[2px] md:mb-[7px] text-xl font-bold leading-[30px] md:text-[22px] md:leading-[26px]">Квартал “Любимов 23”</h1>
            <p class="flex items-center mb-[22px]">
                <app-i class="w-3 h-[15px] mr-[13px]" name="heroicons-outline:location-marker" />
                <span class="text-base leading-6 font-normal md:leading-[19px]">Ростов-на-Дону, Западный</span>
            </p>

            <ul class="text-[15px] md:text-base md:leading-[19px] font-medium leading-[18px]">
                <li class="mb-[17px]">Описание</li>
                <li class="mb-[17px]">Характеристики</li>
                <li class="mb-[17px]">
                    Квартиры
                    <b class="md:bg-[#1DA958] md:rounded-[2px] md:px-[6px] md:py-[3px] md:ml-[10px]"> <span class="md:hidden">(</span>69<span class="md:hidden">)</span></b>
                </li>
                <li class="mb-[17px]">
                    Ход строительства
                    <b class="md:bg-[#1DA958] md:rounded-[2px] md:px-[6px] md:py-[3px] md:ml-[10px]"> <span class="md:hidden">(</span>30.03.2021<span class="md:hidden">)</span></b>
                </li>
                <li class="mb-[17px]">Ипотека</li>
                <li class="mb-[17px]">Акции</li>
                <li class="mb-[17px]">
                    Отзывы
                    <b class="md:bg-[#1DA958] md:rounded-[2px] md:px-[6px] md:py-[3px] md:ml-[10px]"> <span class="md:hidden">(</span>31<span class="md:hidden">)</span></b>
                </li>
                <li class="mb-[17px]">
                    Вопрос-ответ
                    <b class="md:bg-[#1DA958] md:rounded-[2px] md:px-[6px] md:py-[3px] md:ml-[10px]"> <span class="md:hidden">(</span>26<span class="md:hidden">)</span></b>
                </li>
            </ul>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.card-container {
    .card-photo {
        height: 70vw;

        @include bg-img("catalog-building-md.png");

        @include break_point(768px) {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }

    @include break_point(965px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: stretch;
        justify-content: space-between;

        .card-photo {
            height: auto;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
}
</style>
