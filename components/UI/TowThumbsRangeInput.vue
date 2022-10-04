<script lang="ts" setup>
import { uuidGen } from "~/utils";

const uuid = uuidGen("range-selector");

const uuids = [uuid(), uuid()];

const max = 50;
const min = 0;

const first_range = shallowRef(0);
const last_range = shallowRef(30);

const width = computed(() => {
    return 100 * (1 - last_range.value / (max - min));
});
</script>

<template>
    <div :class="['ranger', $attrs.class]">
        <input :id="uuids[0]" v-model="first_range" type="range" :min="min" :max="max" />
        <input :id="uuids[1]" :style="`--width: ${width}%`" v-model="last_range" type="range" :min="min" :max="max" />
    </div>
</template>

<style lang="scss">
$h: 6px;
$height: 1.4px;

@mixin track() {
    background: none; /* get rid of Firefox track background */
    height: 100%;
    width: 100%;
}

@mixin thumb() {
    background-color: currentcolor;
    border: none; /* get rid of Firefox thumb border */
    border-radius: 50%; /* get rid of Firefox corner rounding */
    pointer-events: auto; /* catch clicks */

    width: $h;
    height: $h;

    position: relative;
    z-index: 1;
}

.ranger {
    display: grid;
    grid-template-rows: max-content $h;
    height: $height;
    background-color: black;

    input[type="range"] {
        grid-column: 1;
        grid-row: 2;

        // border: 1px solid red;

        height: $height;
        display: flex;
        align-items: center;

        &::-webkit-slider-runnable-track,
        &::-webkit-slider-thumb,
        & {
            -webkit-appearance: none;
        }

        /* same as before */
        background: none; /* get rid of white Chrome background */
        color: #3478f6;
        font: inherit; /* fix too small font-size in both Chrome & Firefox */
        pointer-events: none; /* let clicks pass through */

        &::-webkit-slider-runnable-track {
            @include track;
        }

        &::-webkit-slider-thumb {
            @include thumb;
        }

        &::-moz-range-track {
            @include track;
        }

        &::-moz-range-thumb {
            @include thumb;
        }

        //********** project specific

        position: relative;
        &::before {
            content: " ";
            position: absolute;
            height: $height;
            background-color: #3478f6;
            right: 0;
        }

        &:first-of-type {
            &::-webkit-slider-thumb {
                background-color: black;
            }
            &::-moz-range-thumb {
                background-color: black;
            }
        }

        &:last-of-type {
            &::-webkit-slider-thumb {
                @include shadow($blur: 0, $spread: 5px, $color: rgba(#3478f6, 0.08));
            }
            &::-moz-range-thumb {
                @include shadow($blur: 0, $spread: 5px, $color: rgba(#3478f6, 0.08));
            }
        }
    }
}
</style>

<style>
.ranger input[type="range"]::before {
    width: var(--width);
}
</style>
