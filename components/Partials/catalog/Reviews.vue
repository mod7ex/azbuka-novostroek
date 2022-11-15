<script setup lang="ts">
const current = shallowRef(0);

const options = ["Отзывы", "Вопрос - ответ"];
</script>

<template>
    <div class="md:bg-[#F9F9F9]">
        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 pb-[30px] md:px-[48px]']">
            <template #head>
                <x-scroll-header :choices="options" v-model="current" class="mb-[26px]" />
            </template>

            <Card class="bg-white rounded-[5px] px-[23px] pt-[26px] pb-[30px] mb-[22px]">
                <template #header>
                    <div>
                        <p class="font-bold text-[14px] leading-3 font-[Raleway] md:mb-2">Валентин</p>
                        <p class="font-normal text-[12px] leading-6 text-[#878787]">22 августа 2020</p>
                    </div>

                    <stars-rating class="my-[20px]" :rating="2" />
                </template>

                <p class="font-normal text-[13px] leading-6 font-[Inter] text-[#878787] mb-3">Отличный район, мне кажется, все близко, метро относительно недалеко. Есть поблизости несколько парковок, даже если своей не хватит, вполне можно найти где поставить машину.</p>

                <template #footer>
                    <div class="flex items-center justify-between">
                        <p class="font[Raleway] text-[13px] font-bold leading-3 text-[#E71F61] underline">Ответить</p>
                        <p class="flex items-center gap-4">
                            <span class="text-xs font-normal font-[Inter] leading-6 text-[#878787]">Полезный отзыв?</span>
                            <client-only>
                                <Votes :up="10" :down="0" class="inline" />
                            </client-only>
                        </p>
                    </div>
                </template>
            </Card>

            <template #foot>
                <div class="text-center md:text-left">
                    <Button label="Все отзывы" class="bg-[#E71F61]" />
                </div>
            </template>
        </NuxtLayout>

        <NuxtLayout name="app-section" :class="[$attrs.class, 'px-0 md:px-[48px]']">
            <template #head>
                <h1 class="text-[26px] font-bold leading-9 font-[Raleway] text-[#131313] mb-[22px] text-center md:text-left">Добавить отзыв</h1>
            </template>

            <!-- form -->
            <div class="form md:grid md:grid-cols-2 md:gap-4">
                <div class="form-section mb-[9px] md:col-span-1">
                    <input type="text" class="p-[15px] rounded-[5px] border border-[#3478f624] w-full" placeholder="Имя" />
                </div>

                <div class="form-section mb-[9px] md:col-span-1">
                    <input type="email" class="p-[15px] rounded-[5px] border border-[#3478f624] w-full" placeholder="Эл. адрес" />
                </div>

                <div class="form-section mb-[9px] md:col-span-1">
                    <button @click="() => {}" class="bg-white flex justify-between items-center p-[15px] rounded-[5px] border border-[#3478f624] w-full">
                        <p class="text-[14px] leading-[17ps] font-medium text-[#828282] font-[Inter]">Выберите плюсы ЖК</p>
                        <app-i name="ic:baseline-keyboard-arrow-down" :class="['text-[#3478F6] h-5 w-5 transition-transform duration-300', false ? 'rotate-180' : '']" />
                    </button>
                </div>

                <div class="form-section mb-[9px] md:col-span-1">
                    <button @click="() => {}" class="bg-white flex justify-between items-center p-[15px] rounded-[5px] border border-[#3478f624] w-full">
                        <p class="text-[14px] leading-[17ps] font-medium text-[#828282] font-[Inter]">Выберите минусы ЖК</p>
                        <app-i name="ic:baseline-keyboard-arrow-down" :class="['text-[#3478F6] h-5 w-5 transition-transform duration-300', false ? 'rotate-180' : '']" />
                    </button>
                </div>

                <div class="form-section md:col-span-2">
                    <textarea class="p-[15px] rounded-[5px] border border-[#3478f624] w-full h-[174px]" placeholder="Ваш отзыв" resize></textarea>
                </div>
            </div>
            <!-- ------------------------------- -->

            <template #foot>
                <div class="flex items-center justify-between mt-4">
                    <div class="md:flex md:items-center md:justify-between md:gap-4">
                        <p class="font-bold text-[14px] leading-3 font-[Raleway]">Оцените ЖК</p>
                        <stars-rating class="mt-3 md:mt-0" :rating="1" />
                    </div>
                    <Button label="Отправить" class="bg-[#FCBD00]" />
                </div>
            </template>
        </NuxtLayout>
    </div>
</template>

<style lang="scss" scoped>
.form {
    ::placeholder {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;

        color: #828282;
    }
}
</style>
