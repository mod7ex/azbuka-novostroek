<script setup lang="ts">
withDefaults(defineProps<{ color: string }>(), {
    color: "#3478F6",
});
</script>

<template>
    <svg :class="$attrs.class" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.399902" y="8.68213" width="1.01205" height="2.47059" rx="0.506024" :fill="color" />
        <rect x="3.5625" y="3.74121" width="1.01205" height="7.41176" rx="0.506024" :fill="color" />
        <rect x="6.7251" y="0.652832" width="1.01205" height="10.5" rx="0.506024" :fill="color" />
        <rect x="9.88818" y="6.21191" width="1.01205" height="4.94118" rx="0.506024" :fill="color" />
    </svg>
</template>
