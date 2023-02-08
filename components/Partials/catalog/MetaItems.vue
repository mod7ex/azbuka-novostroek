<script setup lang="ts">
const props = defineProps<{ description?: string; title?: string }>();

useHead({
    title: `ЖК ${props.title}`,
    meta: [{ name: "description", content: props.description }],
});
</script>

<template>
    <Head>
        <Script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript" />
    </Head>
</template>
