<script setup lang="ts">
import { MAP_ZOOM } from "~/constants";
// import { yandexMap as YandexMap, ymapMarker as YandexMarker } from "vue-yandex-maps";
import { settings, coordinates as cords, controls } from "~/services/map";

const props = withDefaults(defineProps<{ coordinates?: { lat: number; lng: number }; label?: string }>(), {
    coordinates: null,
});

const coords = props.coordinates ? [props.coordinates.lat, props.coordinates.lng] : cords.Russia;

const zoom = props.coordinates ? MAP_ZOOM.FOCUS : MAP_ZOOM.DEFAULT;

// https://yandex.com/dev/maps/jsapi/doc/2.1/quick-start/index.html?from=techmapsmain

// @ts-ignore
ymaps.ready(function init() {
    // @ts-ignore
    var myMap = new ymaps.Map("map", {
        center: coords,

        // Zoom level. Acceptable values: from 0 (the entire world) to 19.
        zoom,

        controls,
    });

    // @ts-ignore
    myMap.geoObjects.add(new ymaps.Placemark(coords, { balloonContent: props.label }));
});
</script>

<template>
    <div class="ymap-container" :data-coords="coordinates">
        <div id="map"></div>
    </div>
</template>

<style lang="scss">
.ymap-container,
#map {
    height: 513px;
    @include break_point(768px) {
        height: 296px;
    }
}
</style>
