<script setup lang="ts">
import { useRouter } from 'vue-router';
import { session } from '@where_is_mr_li/storage';
import { getQuery } from '@where_is_mr_li/utils';

const router = useRouter();

const code = getQuery('code');
if (code) session.set('CODE', code);

if (import.meta.env.VITE_WECHAT_TOOL === '1') {
  // hack 微信开发者工具上测试的回退问题，最新版开发者工具是否有问题请自行测试
  window.history.go(-2);
} else {
  router.back();
}
</script>
<template>
  <div class="auth"></div>
</template>
<style scope lang="scss"></style>
