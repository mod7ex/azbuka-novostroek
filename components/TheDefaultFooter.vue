<script setup lang="ts">
import Logo from "~/assets/svg/logo.svg";
</script>

<template>
    <footer class="py-7">
        <app-width class="border-b border-dashed flex items-center justify-between pb-7">
            <app-img :src="Logo" alt="" width="113" height="55" />
            <div>
                <h1 class="text-2xl font-bold">+7 (435) 985-22-41</h1>
                <a href="mailto:admin@admin.com">admin@admin.com</a>
            </div>
        </app-width>

        <app-width class="flex flex-col items-center">
            <div class="py-4">
                <p class="mb-3 text-center">Информация</p>
                <p class="mb-3 text-center">О проекте</p>
                <p class="mb-3 text-center">Адреса и телефоны</p>
                <p class="mb-3 text-center">Политика обработки персональных данных</p>
                <p class="mb-3 text-center">Пользовательское соглашение</p>
                <p class="mb-3 text-center">Реклама на сайте</p>
            </div>

            <p class="text-gray-400">&copy; 2011—2021</p>
        </app-width>
    </footer>
</template>

<style>
footer {
    background-color: #f4faff;
}
</style>
