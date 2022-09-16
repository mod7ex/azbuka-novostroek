<script lang="ts" setup>
type Numberish = string | number;

const props = defineProps<{ src: string; alt?: string; width?: Numberish; height?: Numberish }>();

const config = useRuntimeConfig();

const _src = `${config.public.baseURL}${props.src.replace("~/", "")}`;
</script>

<template>
    <img :src="_src" :alt="alt" :width="width" :height="height" :class="$attrs.class" />
</template>
