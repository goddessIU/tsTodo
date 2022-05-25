import type { Card } from '@/types'
import { defineStore } from 'pinia'

export const useShowStore = defineStore('show', {
    state: () => {
        return {
            cards: [{
                title: '你的名字',
                stars: 4,
                tags: '催泪',
                description: '感人至极'
            }] as Card[]
        }
    }
})
