<script setup lang="ts">
defineProps<{ onScroll: () => void; left?: true }>();
</script>

<template>
    <button :class="['text-white w-[50px] h-[50px] z-10 bg-[#1DA958] rounded-[2px] shadow-lg', $attrs.class]" @click="onScroll">
        <app-i name="material-symbols:arrow-right-alt" :class="left ? 'rotate-180' : ''" />
    </button>
</template>
