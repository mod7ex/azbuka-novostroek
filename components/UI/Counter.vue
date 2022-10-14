<template>
    <div :class="['container w-[53px] h-[53px]', $attrs.class]">
        <!-- <div class="up up-59 gradient-white-gray">59</div> -->
        <!-- <div class="down down-59">59</div> -->

        <template v-for="i in 60" :key="i">
            <div :class="`up up-${i - 1} gradient-white-gray`">{{ i - 1 }}</div>
            <div :class="`down down-${i - 1}`">{{ i - 1 }}</div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
$clockCountPadding: 10px;
$clockCountTotal: 59;
$clockCountHeight: 53px;

$color: black;

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

@keyframes fade {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    75% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.gradient-white-gray {
    background: linear-gradient(to bottom, #000000 0%, #111 100%);
}

.container {
    color: #e74c3c;
    position: relative;
    background: $color;
    padding: $clockCountPadding;
    perspective: 1000px;

    .up,
    .down {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        overflow: hidden;
        backface-visibility: hidden;
        animation-fill-mode: forwards;
        font-size: 53px - $clockCountPadding;
    }

    .up {
        top: 0;
        bottom: 50%;
        transform-origin: 50% 100%;
        line-height: $clockCountHeight + 1px;
    }

    .down {
        top: 50%;
        bottom: 0;
        background: $color;
        transform-origin: 50% 0%;
        line-height: 0px;
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

    @for $i from 0 through $clockCountTotal - 1 {
        .down-#{$i} {
            animation: flip-up 1s 1;
            animation-delay: #{$i + 1}s;
            animation-fill-mode: forwards;
            z-index: 100-$i;
        }
    }
}
</style>
