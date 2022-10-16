<script setup lang="ts">
withDefaults(defineProps<{ count?: number; rating?: number }>(), {
    count: 5,
    rating: 1,
});
</script>

<template>
    <div :class="['star-rating', $attrs.class]">
        <app-i v-for="i in count" :key="i" :name="`ic:outline-star${i > rating ? '-border' : ''}`" class="text-[#FCBD00] w-4 h-4" />
    </div>
</template>
