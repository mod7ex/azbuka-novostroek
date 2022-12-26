<script lang="ts" setup>
import { uuidGen } from "~/utils";

const props = withDefaults(defineProps<{ max?: number; min?: number; uni?: true; step?: number; last_range?: number; first_range?: number }>(), {
    step: 1,
    last_range: 0,
    first_range: 0,
});

const emit = defineEmits(["update:last_range", "update:first_range"]);

const uuid = uuidGen("range-selector");

const uuids = [uuid(), uuid()];

const width = computed(() => {
    return 100 * (1 - props.last_range / (props.max - props.min));
});

const handelInput = (e: Event, item: "last" | "first") => {
    emit(`update:${item}_range`, (e.target as HTMLInputElement).value);
};
</script>

<template>
    <div :class="['ranger', $attrs.class, uni ? 'one-range' : '']">
        <input :id="uuids[0]" :value="first_range" type="range" :min="min" :max="max" :step="step" @input="(e) => handelInput(e, 'first')" v-if="!uni" />
        <input :id="uuids[1]" :value="last_range" type="range" :min="min" :max="max" :step="step" @input="(e) => handelInput(e, 'last')" :style="`--width: ${width}%`" />
    </div>
</template>

<style lang="scss" scoped>
$h: 6px;
$height: 1.4px;
$height-md: 1.6px;

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
    background-color: black;

    height: $height;
    @include break_point(768px) {
        height: $height-md;
    }

    input[type="range"] {
        grid-column: 1;
        grid-row: 2;
        height: $height;

        @include break_point(768px) {
            height: $height-md;
        }
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
        &::after,
        &::before {
            content: " ";
            position: absolute;
            height: $height;
            @include break_point(768px) {
                height: $height-md;
            }
        }

        &::before {
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

@mixin thumb-md() {
    background-color: #1da958 !important;
    border: 2 * $height-md solid white;
    border-radius: 50%;
    width: calc(17px + $height-md);
    height: calc(17px + $height-md);
    position: relative;
    z-index: 1;

    // @include shadow($blur: 0, $spread: $height-md, $color: #000000);
    box-shadow: 0 0 0 $height-md #1da958 !important;
}

.one-range {
    @include break_point(768px) {
        background-color: transparent !important;

        input[type="range"] {
            &::before {
                background-color: transparent !important;
            }

            &::after {
                background-color: #1da958;
                left: 0;
            }

            &::-webkit-slider-thumb {
                @include thumb-md;
            }

            &::-moz-range-thumb {
                @include thumb-md;
            }
        }
    }
}
</style>

<style>
.ranger input[type="range"]::before {
    width: var(--width);
}

.one-range input[type="range"]::after {
    width: calc(100% - var(--width));
}
</style>
