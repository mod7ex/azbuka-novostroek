<script setup lang="ts">
withDefaults(
    defineProps<{
        id?: string;
        tag?: string;
        padding?: boolean;
    }>(),
    {
        tag: "div",
        padding: true,
    }
);
</script>

<template>
    <component :id="id" :is="tag" :class="[$attrs.class, 'some-random']">
        <div :class="['body max-w-[1441px] w-full mx-auto', padding ? 'px-5 md:px-[60px]' : '']">
            <slot />
        </div>
    </component>
</template>

<style lang="scss">
.some-random {
    // border: 4px solid black;
}
</style>
