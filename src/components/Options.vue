<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import router from "../router";


const props = defineProps({
    options: {
        type: Array as PropType<String[]>,
        required: true
    }
})

const clickedIndex = ref<number>(0)

const options = props.options

const goRouter = (option: String) => {
    if (option === '人物') {
        clickedIndex.value = 0
        router.push('/People')
    } else if (option === '动漫') {
        clickedIndex.value = 1
        router.push('/Show')
    }
}

</script>

<template>
    <ul class="options">
        <li class="options__option" v-for="(option, index) in options" @click="goRouter(option)"
            :class="{ 'options__option--isClicked': index === clickedIndex }">
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

        &--isClicked {
            color: black;
        }
    }

    &__option:hover {
        color: black;
    }


}
</style>
