<script lang="ts" setup>
defineEmits(["outClick"]);
</script>

<template>
    <div @click.self="() => $emit('outClick')" :class="['p-3 overlay h-[100vh] flex items-center justify-center sticky top-0 left-0 bottom-0 right-0 z-50 overflow-hidden', $attrs.class]">
        <slot>Content</slot>
    </div>
</template>

<style scoped lang="scss">
@keyframes overlay-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: #00000080;
    }
}

.overlay {
    background-color: #00000080;
    animation-name: overlay-animation;
    animation-duration: 600ms;
}
</style>
