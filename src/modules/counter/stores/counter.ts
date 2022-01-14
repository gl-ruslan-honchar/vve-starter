import { acceptHMRUpdate, defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),

  actions: {
    increment() {
      this.count++
    },
  },
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
