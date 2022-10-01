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
    <div id="foo" :class="[$attrs.class, '']">
        <!-- <component :id="id" :is="tag" :class="$attrs.class"> -->
        <div :class="['max-w-[1441px] w-full mx-auto', padding ? 'px-5 md:px-[60px]' : '']">
            <slot />
        </div>
        <!-- </component> -->
    </div>
</template>

<style lang="scss">
#foo {
    border: 4px solid black;
}
</style>
