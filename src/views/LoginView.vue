<script setup>
// --- || import vue lib              || ------------------------------- //
import { onMounted, ref } from 'vue'

// --- || import design lib           || ------------------------------ //

// --- || import Opensource lib       || ------------------------------ //

// --- || import project constants    || ------------------------------ //

// --- || import project lib          || ------------------------------ //
import useLoginStore from '@/stores/login.js'

// --- || Variable Setup              || ------------------------------ //
const loginStore = useLoginStore()

const loginId = ref('')
const loginPwd = ref('')

// --- || Lifecycle Hook              || ------------------------------ //

onMounted(() => {
  console.log('mounted')
})

// --- || Methods                     || ------------------------------ //
/** 로그인 처리 */
const login = () => {
  loginStore.login(loginId.value, loginPwd.value)
}

/** Popup Methods */

/** Callback Methods */
</script>

<template>
  <div>
    <h1>로그인</h1>
    <h1>{{ loginId }}</h1>
    <input v-model="loginId" type="text" placeholder="아이디" />
    <input v-model="loginPwd" type="password" placeholder="비밀번호" @keydown.enter="login" />
    <button @click="login">로그인</button>
  </div>
</template>

<style scoped></style>
