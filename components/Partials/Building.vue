<script lang="ts" setup>
//
</script>

<template>
  <div :class="['building', $attrs.class]">
    <div class="img rounded-md h-36 w-full"></div>

    <div>
      <h2 class="font-light uppercase text-gray-600">ТПУ «ДМИТРОВСКАЯ</h2>
      <h1>Жилой квартал «D1»</h1>
      <p>от 10 335 млн ₽</p>
    </div>
  </div>
</template>

<style lang="scss">
.building {
  .img {
    @include bg-img("building.png");
  }
}
</style>
