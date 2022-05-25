<script setup lang="ts">
import type { Card } from '@/types';
import { reactive, ref } from 'vue';
import { useShowStore } from '@/stores/useShowStore';

const emit = defineEmits<{
    (e: 'close'): void
}>()

const props = defineProps({
    isOpend: {
        type: Boolean,
        required: true
    }
})

const newCard = reactive<Card>({
    title: '',
    tags: '催泪',
    stars: 5,
    description: ''
})

const store = useShowStore()

const pushCard = () => {
    store.$patch((state) => {
        state.cards.push({
            title: newCard.title,
            tags: newCard.tags,
            stars: newCard.stars,
            description: newCard.description
        })
    })
}

const closeAdd = () => {
    emit('close')
}



</script>

<template>
    <Teleport to="body">
        <div class="wholeBody" v-if="props.isOpend">
            <div class="addCard">
                <p>
                    title: <input type="text" v-model="newCard.title" />
                </p>
                <p>
                    tags: <input type="text" v-model="newCard.tags" />
                </p>
                <p>
                    des: <input type="text" v-model="newCard.description" />
                </p>
                <p>
                    stars: <input type="number" v-model="newCard.stars" />
                </p>

                <button @click.prevent="pushCard" class="pushCard">提交</button>

                <button @click.prevent="closeAdd" class="pushCard">关闭</button>
            </div>
        </div>

        
    </Teleport>
</template>

<style lang="scss" scoped>
.wholeBody {
    background-color: #0000008f;
    width: 100vw;
    height: 100vh;
    z-index: 9998;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    .addCard {
        width: 20vw;
        height: 30vw;

        background-color: #fff;
    }
}
</style>