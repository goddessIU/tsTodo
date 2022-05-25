<script lang="ts" setup>
import type { Card } from '@/types';
import { ref } from 'vue';
import type { PropType } from 'vue'
import { useShowStore } from '../stores/useShowStore'
import AddCard from './AddCard.vue'

const store = useShowStore()
const cards: Card[] = store.cards

const isOpen = ref<boolean>(false)
const addCard = () => {
    isOpen.value = !isOpen.value
}

</script>

<template>
    <ul class="show">
        <li class="show__card" v-for="card in cards">
            <h1>{{card.title}}</h1>
            tags: <p>{{card.tags}}</p>
            stars: <p>{{card.stars}}</p>
            description: <p>{{card.description}}</p>
        </li>

        <li class="show__card" @click="addCard">
            add
        </li>
    </ul>
    <AddCard :isOpend="isOpen" @close="isOpen = false"/>
</template>

<style scoped lang="scss">
    .show {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 3vw;

        display: flex;
        justify-content: flex-start;

        flex-wrap: wrap;


        &__card {
            width: 12vw;
            height: 15vw;
            background-color: #fff;

            margin-right: 3vw;
            margin-top: 2vw;
        }


    }
</style>

