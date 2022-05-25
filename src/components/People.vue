<script setup lang="ts">
import { ref } from 'vue';
import { usePeopleStore } from '../stores/usePeopleStore'
import type { Person } from '../types/index'

const store = usePeopleStore()
const people: Person[] = store.people

const isOpen = ref<boolean>(false)
const addCard = () => {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <ul class="show">
        <li class="show__card" v-for="person in people">
            <h1>{{ person.name }}</h1>
            description: <p>{{ person.description }}</p>
        </li>

        <li class="show__card" @click="addCard">
            add
        </li>
    </ul>
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
