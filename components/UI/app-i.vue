<script lang="ts" setup>
defineProps<{ name: string }>();
</script>

<template>
  <client-only>
    <Icon :name="name" :class="$attrs.class" />
  </client-only>
</template>
