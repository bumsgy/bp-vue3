<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import useCounterStore from '@/stores/counter.js'
import useLoginStore from '@/stores/basis/useLoginStore.js'

onMounted(() => {
  console.log('mounted')
})

// export default {
//   const route = useRoute()
const counterStore = useCounterStore()
const loginStore = useLoginStore()

const { count } = storeToRefs(counterStore)
const { accntId, userInfo } = storeToRefs(loginStore)

const increment = () => {
  console.log('asefsaf')
  counterStore.increment()
}

const decrement = () => {
  counterStore.decrement()
}

const login = () => {
  loginStore.login()
}

// }
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>dfdfdf : {{ counterStore.count }}</h2>
    <h2>dfdfdf : {{ count }}</h2>
    <br />
    <h3>loginId : {{ accntId }}</h3>
    <br />
    <h3>loginId : {{ userInfo.accntId }}</h3>
    <button @click="increment">Increment</button>
    <button @click="login">login</button>
  </div>
</template>

<script></script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
