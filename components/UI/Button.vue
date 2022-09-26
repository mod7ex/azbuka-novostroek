<script setup lang="ts">
withDefaults(
    defineProps<{
        label?: string | number;
        strength?: number;
        transparent?: true;
        id?: string;
        color?: "blue" | "green" | "pink" | "red" | "yellow";
    }>(),
    {
        label: "click",
        color: "pink",
        strength: 600,
    }
);
</script>

<template>
    <button :id="id" :class="['py-2 px-6 rounded shadow-md border-2 cursor-pointer', transparent ? 'text-black bg-transparent' : `text-white bg-${color}-${strength}`, `border-${color}-${strength - 200}`, $attrs.class]">
        <slot>{{ label }}</slot>
    </button>
</template>

<style scoped>
button {
    font-size: 13px;
    padding: 1.2em 3em;
}
</style>
