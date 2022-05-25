import type { Card, Person } from '@/types'
import { defineStore } from 'pinia'

export const usePeopleStore = defineStore('people', {
    state: () => {
        return {
            people: [{
                name: '三叶',
                description: '可是我不喜欢'
            }] as Person[]
        }
    }
})
