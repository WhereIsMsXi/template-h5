<script setup lang="ts">
import { useRoute } from 'vue-router';
import TheTabbr from '@/pages/components/TheTabbar.vue';

const route = useRoute();
</script>
<template>
  <div class="view">
    <!-- second route -->
    <router-view v-slot="{ Component }" v-if="route.meta.keepAlive">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <router-view v-else />
  </div>

  <!-- tabbar -->
  <the-tabbr></the-tabbr>
</template>
<style scope lang="scss">
.view {
  height: calc(100vh - 50px);
}
</style>
