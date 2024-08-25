<script setup lang="ts">
import { useRoute } from 'vue-router';
import TheTabbr from '@/pages/components/TheTabbar.vue';

const route = useRoute();
</script>
<template>
  <!-- second route -->
  <router-view v-slot="{ Component }" v-if="route.meta.keepAlive">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <router-view v-else />

  <!-- tabbar -->
  <the-tabbr></the-tabbr>
</template>
<style scope lang="scss"></style>
