<script setup lang="ts">
import Logo from "~/assets/svg/logo.svg";
</script>

<template>
    <footer>
        <app-width class="py-7 md:flex md:items-center md:justify-center">
            <app-width class="border-b border-dashed md:border-0 flex items-center justify-between md:justify-start pb-7">
                <app-img :src="Logo" alt="" width="113" height="55" />
                <div class="hidden md:block footer-devider md:w-4/12"></div>
                <div>
                    <h1 class="text-2xl md:text-sm font-bold">+7 (435) 985-22-41</h1>
                    <a href="mailto:admin@admin.com" class="font-bold text-sm">admin@admin.com</a>
                    <p class="text-gray-400 hidden md:block md:text-sm">&copy; 2011—2021</p>
                </div>
            </app-width>

            <app-width class="flex flex-col items-center md:block">
                <div class="py-4 md:flex md:justify-between md:items-center">
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
                <p class="text-gray-400 md:hidden">&copy; 2011—2021</p>
            </app-width>
        </app-width>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #f4faff;
}
</style>
