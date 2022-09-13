<script setup lang="ts">
import TheDefaultHeader from "~/components/TheDefaultHeader.vue";
import ShowCase from "~/components/Partials/home/ShowCase.vue";
import Search from "~/components/Partials/home/Search.vue";
</script>

<template>
  <div>
    <div class="show-case-container relative">
      <div class="h-24"></div>

      <div class="show-case-img"></div>

      <div class="show-case-overlay absolute h-full top-0 w-full">
        <app-width tag="header">
          <the-default-header />
        </app-width>

        <app-width>
          <show-case />
        </app-width>
      </div>
    </div>

    <app-width class="-mt-7 z-50 relative">
      <Search />
    </app-width>

    <app-width tag="main">
      <slot />
    </app-width>
  </div>
</template>

<style lang="scss" scoped>
.show-case-container {
  .show-case-img {
    background-image: url("~/assets/img/background.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 80vh;
  }

  .show-case-overlay {
    background: linear-gradient(179.92deg, rgba(#edf5fe, 0.1) 14.39%, rgba(255, 255, 255, 0) 99.93%), rgba(#edf5fe, 0.3);
  }
}
</style>
