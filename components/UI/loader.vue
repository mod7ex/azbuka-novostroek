<template>
    <span :class="[$attrs.class]">
        <svg fill="#f1f2f300" :class="['h-11 w-11']" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="#0062ff" stroke-width="8" r="37" stroke-dasharray="174.35839227423352 60.119464091411174">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.78125s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
        </svg>
    </span>
</template>
