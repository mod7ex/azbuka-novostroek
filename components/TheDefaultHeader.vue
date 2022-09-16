<script setup lang="ts">
const isMatch = useMediaQuery("(min-width: 983px)");
</script>

<template>
  <div class="flex items-center mb-6" v-if="isMatch">
    <img src="~/assets/svg/logo.svg" alt="" width="123" height="60" />

    <ul class="ml-9 flex items-center">
      <li class="flex items-center justify-center w-9 h-9 relative border border-blue-50 bg-white rounded-full p-1 star cursor-pointer">
        <app-i class="absolute text-blue-500 md:w-4 md:h-4 w-3 h-3" name="heroicons-outline:star" />
      </li>

      <li class="flex items-center justify-center w-9 h-9 relative border border-blue-50 bg-white rounded-full p-1 mx-2 chart cursor-pointer">
        <app-i class="absolute text-blue-500 md:w-4 md:h-4 w-3 h-3" name="ri:bar-chart-line" />
      </li>

      <li class="h-9 px-3 relative border border-blue-50 bg-white rounded-full p-1 location cursor-pointer">
        <span class="flex items-center">
          <app-i class="text-blue-500 md:w-4 md:h-4 w-3 h-3 mr-2" name="heroicons-outline:location-marker" />
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
      <app-i class="absolute text-blue-500 md:w-4 md:h-4 w-3 h-3" name="heroicons-outline:phone-incoming" />
    </span>
  </div>

  <div v-else class="head flex justify-between items-center py-3 mb-6 text-sm">
    <span class="head-left flex items-center justify-center">
      <img src="~/assets/svg/logo.svg" alt="" width="57" height="28" />

      <span class="flex items-center h-9 cursor-pointer ml-3 md:ml-6 location">
        <app-i class="w-4 h-4 mr-2 text-blue-500" name="heroicons-outline:location-marker" />
        <p>Ростов-на-Дону</p>
      </span>
    </span>

    <ul class="head-right flex items-center text-sm">
      <li class="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 relative border border-blue-50 bg-white rounded-full p-1 star cursor-pointer">
        <app-i class="absolute text-blue-500 md:w-4 md:h-4 w-3 h-3" name="heroicons-outline:star" />
      </li>

      <li class="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 relative border border-blue-50 bg-white rounded-full p-1 mx-1 sm:mx-2 chart cursor-pointer">
        <app-i class="absolute text-blue-500 md:w-4 md:h-4 w-3 h-3" name="ri:bar-chart-line" />
      </li>

      <li class="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 relative border border-blue-50 bg-blue-500 rounded-full p-1 mx-1 sm:mx-2 chart cursor-pointer">
        <app-i class="absolute text-white md:w-4 md:h-4 w-3 h-3" name="heroicons-outline:phone-incoming" />
      </li>

      <li class="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 relative border border-transparent p-1 menu cursor-pointer">
        <app-i class="absolute text-black w-6 h-6 transform rotate-180" name="heroicons-solid:menu-alt-1" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@media screen and (max-width: 320px) {
  .head {
    flex-wrap: wrap;
    justify-content: center;

    .head-left {
      margin-bottom: 1em;
    }
  }
}
</style>
