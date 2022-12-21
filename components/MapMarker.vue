<script setup lang="ts">
import { MAP_ZOOM } from "~/constants";

import { yandexMap as YandexMap, ymapMarker as YandexMarker } from "vue-yandex-maps";
import { settings, coordinates, controls } from "~/services/map";

const props = withDefaults(defineProps<{ coordinates?: { lat: number; lng: number } }>(), {
    coordinates: null,
});

const coords = props.coordinates ? [props.coordinates.lat, props.coordinates.lng] : coordinates.Russia;

const zoom = props.coordinates ? MAP_ZOOM.FOCUS : MAP_ZOOM.DEFAULT;
</script>

<template>
    <YandexMap :scroll-zoom="true" :coords="coords" :controls="controls" :settings="settings" :zoom="zoom">
        <YandexMarker marker-id="complex" :coords="coords" />
    </YandexMap>
</template>

<style lang="scss">
.ymap-container {
    height: 513px;
    @include break_point(768px) {
        height: 296px;
    }
}
</style>
