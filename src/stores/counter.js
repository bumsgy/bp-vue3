import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // ref는 state가 됨.
  const count = ref(0)

  // computed는 getters가 됨.
  const doubleCount = computed(() => count.value * 2)

  // function은 actions가 됨.
  function increment() {
    console.log(`incrementing count from ${count.value} to ${count.value + 1}`);
    count.value++
  }

  return { count, doubleCount, increment }
})
