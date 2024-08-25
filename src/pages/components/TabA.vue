<script setup lang="ts"></script>
<template>
  <div class="tab-a">
    <span>prev</span>
    <span>next</span>
  </div>
</template>
<style scoped lang="scss">
.tab-a {
  @include flex-row(space-between, center);
  width: 100%;
  height: 200px;
}
</style>
