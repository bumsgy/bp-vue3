<script setup>
// --- || import vue lib              || ------------------------------- //
import { onMounted, ref } from 'vue'

// --- || import design lib           || ------------------------------ //

// --- || import Opensource lib       || ------------------------------ //
import { storeToRefs } from 'pinia'

// --- || import project constants    || ------------------------------ //

// --- || import project lib          || ------------------------------ //

import useMenuStore from '@/stores/basis/useMenuStore.js'

// --- || Variable Setup              || ------------------------------ //
const menuStore = useMenuStore()

const { menus } = storeToRefs(menuStore)

// --- || Lifecycle Hook              || ------------------------------ //

onMounted(() => {
  console.log('mounted')
  menuStore.getMenus()
})

// --- || Methods                     || ------------------------------ //
/** 로그인 처리 */

/** Popup Methods */

/** Callback Methods */
</script>

<template>
  <v-list>
    <v-list-item v-for="(item, i) in menus" :key="i" color="primary" subtitle="subTitle~~" link>
      <v-icon :icon="item.icon" />{{ item.title }}
    </v-list-item>
  </v-list>
  <v-divider />
  sadf;lifjs;af

  <!--  <div>-->
  <!--    <h1>Home</h1>-->
  <!--    <nav>-->
  <!--      <RouterLink to="/">Home</RouterLink>-->
  <!--      <RouterLink to="/dataInput">데이터</RouterLink>-->
  <!--    </nav>-->
  <!--  </div>-->
</template>

<style scoped></style>
