<script setup lang="ts"></script>

<template>
  <div class="flex items-center py-3 mb-6">
    <img src="~/assets/svg/logo.svg" alt="" />

    <ul class="ml-9 flex items-center">
      <li class="flex items-center justify-center w-9 h-9 relative border border-blue-50 bg-white rounded-full p-1 star cursor-pointer">
        <Icon class="absolute text-blue-500 w-4 h-4" name="heroicons-outline:star" />
      </li>

      <li class="flex items-center justify-center w-9 h-9 relative border border-blue-50 bg-white rounded-full p-1 mx-2 chart cursor-pointer">
        <Icon class="absolute text-blue-500 w-4 h-4" name="ri:bar-chart-line" />
      </li>

      <li class="h-9 px-3 relative border border-blue-50 bg-white rounded-full p-1 location cursor-pointer">
        <span class="flex items-center">
          <Icon class="text-blue-500 w-4 h-4 mr-2" name="heroicons-outline:location-marker" />
          <span>Ростов-на-Дону</span>
        </span>
      </li>
    </ul>

    <ul class="ml-auto flex items-center">
      <li class="mx-2">
        <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-bold">Жилые комплексы</NuxtLink>
      </li>
      <li class="mx-2">
        <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-bold">Квартиры</NuxtLink>
      </li>
      <li class="mx-2">
        <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-bold">о нас</NuxtLink>
      </li>
      <li class="mx-2">
        <NuxtLink :to="{ name: 'index' }" class="uppercase text-sm font-bold">Контакты</NuxtLink>
      </li>
    </ul>

    <span class="ml-9 flex items-center justify-center w-9 h-9 relative border border-blue-50 bg-white rounded-full p-1 cursor-pointer">
      <Icon class="absolute text-blue-500 w-4 h-4" name="heroicons-outline:phone-incoming" />
    </span>
  </div>
</template>
