<script setup>
// --- || import vue lib              || ------------------------------- //
import SnbFrame from '@/components/layouts/SnbFrame.vue'
import GnbFrame from '@/components/layouts/GnbFrame.vue'

// --- || import design lib           || ------------------------------ //

// --- || import Opensource lib       || ------------------------------ //

// --- || import project constants    || ------------------------------ //

// --- || import Opensource lib       || ------------------------------ //
</script>

<template>
  <v-app>
    <!--    <v-layout class="rounded rounded-md">-->
    <v-app-bar title="Application bar">
      <gnb-frame />
    </v-app-bar>

    <snb-frame />

    <!--    <v-main class="d-flex align-center justify-center" style="min-height: 300px">-->
    <v-main>
      <slot />
    </v-main>
    <!--    </v-layout>-->
  </v-app>
</template>

<style scoped></style>
