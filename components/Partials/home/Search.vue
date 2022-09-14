<script setup lang="ts">
const searchExpanded = ref(true);
</script>

<template>
  <section :class="['w-11/12 mx-auto mb-16 text-sm', $attrs.class]">
    <div class="rounded p-4 bg-white shadow-2xl mb-2">
      <ul class="flex divide-x divide-gray-300">
        <li class="search flex items-center justify-start flex-grow">
          <Icon name="heroicons-outline:search" class="cursor-pointer" />
          <input type="text" placeholder="Название новостройки или застройщика" class="ml-6 inline-block flex-grow outline-none p-1" />
        </li>

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
          <span class="flex items-center text-green-700 cursor-pointer" @click="searchExpanded = !searchExpanded" role="expand" aria-label="expand filter">
            <Icon name="heroicons-outline:adjustments" class="mr-2 rotate-90 transform" />
            <p class="font-bold">Все фильтры</p>
          </span>
        </li>
      </ul>
    </div>

    <Transition name="search-expand" :aria-expanded="searchExpanded">
      <ul class="grid gap-4 grid-cols-12 py-4 rounded p-4 bg-white shadow-2xl overflow-hidden hg-6" v-if="searchExpanded">
        <li class="col-span-4">
          <h4 class="h-12 font-bold uppercase">расположение</h4>
          <div>
            <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Регион</p>
            <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Город</p>
            <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Адм. район</p>
            <p class="px-3 h-12 flex items-center rounded bg-gray-100 mb-4 font-light text-gray-700">Народный район</p>
          </div>
        </li>

        <li class="col-span-4">
          <h4 class="h-12 font-bold uppercase">Дом</h4>
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
          <h4 class="h-12 font-bold uppercase">КВАРТИРА</h4>
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
