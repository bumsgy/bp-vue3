<script setup>
// --- || import vue lib              || ------------------------------- //
import { onMounted } from 'vue'

// --- || import design lib           || ------------------------------ //

// --- || import Opensource lib       || ------------------------------ //

// --- || import project constants    || ------------------------------ //

// --- || import project lib          || ------------------------------ //
import useLoginStore from '@/stores/login.js'
import router from '@/router/index.js'

// --- || Variable Setup              || ------------------------------ //
const loginStore = useLoginStore()

// --- || Lifecycle Hook              || ------------------------------ //

onMounted(() => {
  console.log('mounted')
})

// --- || Methods                     || ------------------------------ //
/**  */
const logout = () => {
  loginStore.$reset()
  router.push({ name: 'login' })
}

/** Popup Methods */

/** Callback Methods */
</script>

<template>
  <div style="border: white">
    <h1>{{ loginStore.userInfo.accntId }} 님 환영합니다.</h1>
    <button @click="logout">로그아웃</button>
  </div>
</template>

<style scoped></style>
