<script setup lang="ts">
withDefaults(
  defineProps<{
    tag?: string;
  }>(),
  {
    tag: "div",
  }
);
</script>

<template>
  <component :class="['max-w-6xl mx-auto', $attrs.class]" :is="tag">
    <slot />
  </component>
</template>
