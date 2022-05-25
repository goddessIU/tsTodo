<script setup lang="ts">
import type { PropType } from "vue";


const props = defineProps({
    options: {
        type: Array as PropType<String[]>,
        required: true
    }
})

const options = props.options


</script>

<template>
  <ul class="options">
      <li class="options__option" v-for="option in options">
          {{ option }}
      </li>
  </ul>
</template>

<style scoped lang="scss">
    .options {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        &__option {
            width: 100%;
            height: 5vw;
            background-color: #a1a1e9;

            box-sizing: border-box;

            text-align: center;
            line-height: 5vw;
            color: #fff;
            font-weight: bold;
            font-size: 2rem;

            overflow: hidden;

            margin-bottom: 0.3rem;
        }

        &__option:hover {
            color: black;
        }
    }
</style>
