<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string | number;
    color?: "blue" | "green" | "pink" | "red";
  }>(),
  {
    label: "click",
    color: "pink",
  }
);
</script>

<template>
  <button :class="['py-2 px-6 rounded shadow-md border-2 text-white', `bg-${color}-600 border-${color}-400`, $attrs.class]">
    <slot>{{ label }}</slot>
  </button>
</template>
