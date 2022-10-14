<script lang="ts" setup>
defineProps<{ count: number }>();
</script>

<template>
    <div :style="`--count: ${count}%`" :class="['container w-[53px] h-[53px]', $attrs.class]">
        <template v-for="i in count + 1" :key="i">
            <div :class="`up up-${i - 1} gradient-white-gray`">
                {{ count + 1 - i }}
            </div>
            <div :class="`down down-${i - 1}`">
                {{ count + 1 - i }}
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
$clockCountPadding: 10px;
$clockCountTotal: 200;
$clockCountHeight: 53px;
$radius: 3px;

$color: white;

@keyframes flip-up {
    from {
        transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
        transform: rotate3d(1, 0, 0, 180deg);
    }
}

@keyframes flip-up-back {
    from {
        transform: rotate3d(-1, 0, 0, 180deg);
    }
    to {
        transform: rotate3d(0, 0, 0, 0deg);
    }
}

.gradient-white-gray {
    background: linear-gradient(to bottom, $color 0%, rgb(240, 240, 240) 100%);
}

.container {
    * {
        box-sizing: border-box;
    }

    position: relative;
    padding: $clockCountPadding;
    perspective: 1000px;

    width: $clockCountHeight;
    height: $clockCountHeight;

    background-color: $color;
    border-radius: $radius;

    .up,
    .down {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        overflow: hidden;
        backface-visibility: hidden;
        animation-fill-mode: forwards;

        background-color: $color;
    }

    .up {
        top: 0;
        bottom: 50%;
        line-height: $clockCountHeight;
        transform-origin: 50% 100%;

        border-top-left-radius: $radius;
        border-top-right-radius: $radius;
    }

    .down {
        top: 50%;
        bottom: 0;
        line-height: 0;
        background-color: $color;
        transform-origin: 50% 0%;

        border-bottom-left-radius: $radius;
        border-bottom-right-radius: $radius;
    }

    @for $i from 1 through $clockCountTotal {
        .up-#{$i} {
            transform: rotate3d(-1, 0, 0, 180deg);
            animation: flip-up-back 1s 1;
            animation-delay: #{$i}s;
            animation-fill-mode: forwards;
            z-index: $i;
        }
    }

    @for $i from 0 through $clockCountTotal {
        .down-#{$i} {
            animation: flip-up 1s 1;
            animation-delay: #{$i + 1}s;
            animation-fill-mode: forwards;
            z-index: 100-$i;
        }
    }
}
</style>
