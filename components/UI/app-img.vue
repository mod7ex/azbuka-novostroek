<script lang="ts" setup>
type Numberish = string | number;

const props = defineProps<{ src: string; alt?: string; width?: Numberish; height?: Numberish; fill?: true }>();

// const config = useRuntimeConfig();
// const _src = `${config.public.baseURL}${props.src.replace("~/", "/")}`;
/**
 * Should be a fix
 */
</script>

<template>
    <img :src="src" :alt="alt" loading="lazy" decoding="async" :width="width" :height="height" :class="[$attrs.class, fill ? 'w-full h-full' : '']" />
</template>

<style scoped>
/*

img {
    object-position: bottom;
    object-fit: contain;
}

*/
</style>
