<script setup lang="ts">
import Logo from "~/assets/svg/logo.svg";
</script>

<template>
    <footer>
        <app-width class="py-7 md:flex md:items-center md:justify-center">
            <app-width class="border-b border-dashed md:border-0 flex items-center justify-between md:justify-start pb-7 mb-5" :padding="false">
                <app-img :src="Logo" alt="" class="w-28 h-14 md:w-44 md:h-20" />
                <div class="hidden md:block footer-devider md:w-4/12"></div>
                <div class="text-right md:text-left">
                    <h1 class="text-base md:text-sm font-black md:mb-2">+7 (435) 985-22-41</h1>
                    <a href="mailto:admin@admin.com" class="font-bold text-sm md:mb-2 md:block">admin@admin.com</a>
                    <p class="text-gray-500 hidden md:block md:text-sm">&copy; 2011—2021</p>
                </div>
            </app-width>

            <app-width class="flex flex-col items-center md:block" :padding="false">
                <div class="pb-4 md:flex md:justify-between md:items-center text-gray-500">
                    <div class="md:w-1/2">
                        <p class="mb-3 text-sm text-center md:text-left">Информация</p>
                        <p class="mb-3 text-sm text-center md:text-left">О проекте</p>
                        <p class="mb-3 text-sm text-center md:text-left">Адреса и телефоны</p>
                    </div>
                    <div class="md:w-1/2">
                        <p class="mb-3 text-sm text-center md:text-left">Политика обработки персональных данных</p>
                        <p class="mb-3 text-sm text-center md:text-left">Пользовательское соглашение</p>
                        <p class="mb-3 text-sm text-center md:text-left">Реклама на сайте</p>
                    </div>
                </div>
                <p class="text-gray-500 md:hidden font-semibold">&copy; 2011—2021</p>
            </app-width>
        </app-width>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #f4faff;
}
</style>
