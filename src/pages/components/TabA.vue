<script setup lang="ts">
import { onActivated } from 'vue';
import { isIOS, reloadIOS } from '@where_is_mr_li/utils';
import { session } from '@where_is_mr_li/storage';
import { USER } from '@/constants/users';
import { getCode } from '@/utils/helper';

onActivated(() => {
  if (isIOS()) reloadIOS();

  if (import.meta.env.VITE_TEST_MODEL === '1') {
    session.set('USER', USER);
    session.set('USER_LOCAL', USER);
  }

  const user = session.get('USER');
  const code = session.get('CODE');
  // !!code: 是否授权
  // !!user: 是否登陆
  if (user) {
    // 获取数据
  } else {
    if (code) {
      // code 换 token
    } else {
      getCode();
    }
  }
});
</script>
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
