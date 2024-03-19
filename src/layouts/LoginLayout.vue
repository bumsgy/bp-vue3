<script setup>
// --- || import vue lib              || ------------------------------- //
import { ref } from 'vue'
import SnbFrame from '@/components/layouts/SnbFrame.vue'
import GnbFrame from '@/components/layouts/GnbFrame.vue'
import { RouterView } from 'vue-router'

// --- || import design lib           || ------------------------------ //

// --- || import Opensource lib       || ------------------------------ //

// --- || import project constants    || ------------------------------ //

// --- || import Opensource lib       || ------------------------------ //
</script>

<template>
  <div>
    <h1>로그인 상태 레이아웃</h1>
    <header>
      <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

      <!--    <div class="wrapper">-->
      <!--      <HelloWorld msg="You did it!" />-->

      <!--      <nav>-->
      <!--        <RouterLink to="/">Home</RouterLink>-->
      <!--        <RouterLink to="/about">About</RouterLink>-->
      <!--      </nav>-->
      <!--    </div>-->
      <gnb-frame />
    </header>

    <snb>
      <snb-frame />
    </snb>
    <slot />
  </div>
</template>

<style scoped>

</style>