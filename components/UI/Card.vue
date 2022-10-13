<script setup lang="ts">
withDefaults(defineProps<{ shadow?: boolean }>(), {
    shadow: true,
});
</script>

<template>
    <div :class="['card', $attrs.class]">
        <slot name="header"></slot>

        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>
