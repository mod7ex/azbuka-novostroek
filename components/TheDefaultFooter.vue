<script setup lang="ts">
import Logo from "~/assets/svg/logo.svg";
</script>

<template>
    <footer>
        <app-width class="pt-6">
            <div class="flex items-center justify-between md:justify-start">
                <app-img :src="Logo" alt="" class="w-[113px] h-[55px] md:w-44 md:h-20" />
                <div class="text-right text-[#131313] md:text-left">
                    <h1 class="text-[17px] leading-[20px] font-[Inter] font-bold mb-[2px]">+7 (435) 985-22-41</h1>
                    <a href="mailto:admin@admin.com" class="font-medium font-[Inter] leading-[20px] text-sm md:block">admin@admin.com</a>
                    <p class="text-gray-500 hidden md:block md:text-sm">&copy; 2011—2021</p>
                </div>
            </div>
        </app-width>

        <div class="border-b border-dashed border-[#00000014] mt-[19px] mb-[27px]"></div>

        <app-width class="flex flex-col items-center md:block pb-[39px]">
            <div class="mb-[27px] md:flex md:justify-between md:items-center text-[#4F4F4F]">
                <div class="md:w-1/2">
                    <p class="text-sm text-center leading-5 font-normal font-[Inter] mb-4 md:text-left">Информация</p>
                    <p class="text-sm text-center leading-5 font-normal font-[Inter] mb-4 md:text-left">О проекте</p>
                    <p class="text-sm text-center leading-5 font-normal font-[Inter] mb-4 md:text-left">Адреса и телефоны</p>
                </div>
                <div class="md:w-1/2">
                    <p class="text-sm text-center leading-5 font-normal font-[Inter] mb-4 md:text-left">Политика обработки персональных данных</p>
                    <p class="text-sm text-center leading-5 font-normal font-[Inter] mb-4 md:text-left">Пользовательское соглашение</p>
                    <p class="text-sm text-center leading-5 font-normal font-[Inter] mb-4 md:text-left">Реклама на сайте</p>
                </div>
            </div>
            <p class="text-[#BDBDBD] md:hidden font-medium text-base leading-5 font-[Inter] text-center">&copy; 2011—2021</p>
        </app-width>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #f4faff;
}
</style>
