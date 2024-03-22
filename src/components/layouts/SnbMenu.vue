<script setup>
import { ref } from 'vue'

const items = ref([
  { icon: 'mdi-home', title: 't-1' },
  { icon: 'mdi-account', title: 't-2' },
  { icon: 'mdi-settings', title: 't-3' }
])
</script>

<template>
  <v-list>
    <v-list-item v-for="(item, i) in items" :key="i" color="primary" subtitle="subTitle~~" link>
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
