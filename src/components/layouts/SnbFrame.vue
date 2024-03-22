<script setup>
import SnbMenu from '@/components/layouts/SnbMenu.vue'
import SnbSetting from '@/components/layouts/SnbSetting.vue'
</script>

<template>
  <!--  <v-divider>&#45;&#45;&#45;&#45;</v-divider>-->
  <!--  <v-navigation-drawer>-->
  <!--    <v-list>-->
  <!--      <v-list-item v-for="(item, i) in items" :key="i" color="primary" subtitle="subTitle~~" link>-->
  <!--        <v-icon :icon="item.icon" />{{ item.title }}-->
  <!--      </v-list-item>-->
  <!--    </v-list>-->
  <!--  </v-navigation-drawer>-->
  <v-navigation-drawer>
    <snb-menu />
    <br />
    <br />
    <br />
    <br />
    <snb-setting />
  </v-navigation-drawer>
</template>

<style scoped></style>
