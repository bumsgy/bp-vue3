<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <!--  <v-app>-->
  <!--    <v-main>-->
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
  <!--    </v-main>-->
  <!--  </v-app>-->
</template>

<style scoped></style>
