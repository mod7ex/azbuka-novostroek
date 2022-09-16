<script setup lang="ts">
withDefaults(
    defineProps<{
        label?: string | number;
        transparent?: true;
        id?: string;
        color?: "blue" | "green" | "pink" | "red" | "yellow";
    }>(),
    {
        label: "click",
        color: "pink",
    }
);
</script>

<template>
    <button :id="id" :class="['py-2 px-6 rounded shadow-md border-2', transparent ? 'text-black bg-transparent' : `text-white bg-${color}-600`, `border-${color}-400`, $attrs.class]">
        <slot>{{ label }}</slot>
    </button>
</template>
