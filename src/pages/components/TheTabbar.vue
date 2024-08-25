<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import TabAIcon from '../images/tab-a@2x.png';
import TabACurIcon from '../images/tab-a-cur@2x.png';
import TabBIcon from '../images/tab-b@2x.png';
import TabBCurIcon from '../images/tab-b-cur@2x.png';
import TabCIcon from '../images/tab-c@2x.png';
import TabCCurIcon from '../images/tab-c-cur@2x.png';
import TabDIcon from '../images/tab-d@2x.png';
import TabDCurIcon from '../images/tab-d-cur@2x.png';
import { TabbarItemStatusEnum } from '../constants';
import { TabbarItemNameEnum } from '@/constants';

const router = useRouter();

const images = {
  TabAIcon,
  TabACurIcon,
  TabBIcon,
  TabBCurIcon,
  TabCIcon,
  TabCCurIcon,
  TabDIcon,
  TabDCurIcon,
};

const activePage = ref(TabbarItemNameEnum.tabA);
function handleChange(value: string) {
  router.push({ path: `/${value}` });
}
</script>
<template>
  <div class="the-tabbar">
    <van-tabbar v-model="activePage" @change="handleChange" placeholder>
      <van-tabbar-item :name="TabbarItemNameEnum.tabA">
        <span
          :class="[
            activePage === TabbarItemNameEnum.tabA
              ? TabbarItemStatusEnum.active
              : TabbarItemStatusEnum.inactive,
          ]"
          >{{ TabbarItemNameEnum.tabA }}</span
        >
        <template #icon="props">
          <img :src="props.active ? images.TabACurIcon : images.TabAIcon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item :name="TabbarItemNameEnum.tabB">
        <span
          :class="[
            activePage === TabbarItemNameEnum.tabB
              ? TabbarItemStatusEnum.active
              : TabbarItemStatusEnum.inactive,
          ]"
          >{{ TabbarItemNameEnum.tabB }}</span
        >
        <template #icon="props">
          <img :src="props.active ? images.TabBCurIcon : images.TabBIcon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item :name="TabbarItemNameEnum.tabC">
        <span
          :class="[
            activePage === TabbarItemNameEnum.tabC
              ? TabbarItemStatusEnum.active
              : TabbarItemStatusEnum.inactive,
          ]"
          >{{ TabbarItemNameEnum.tabC }}</span
        >
        <template #icon="props">
          <img :src="props.active ? images.TabCCurIcon : images.TabCIcon" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item :name="TabbarItemNameEnum.tabD">
        <span
          :class="[
            activePage === TabbarItemNameEnum.tabD
              ? TabbarItemStatusEnum.active
              : TabbarItemStatusEnum.inactive,
          ]"
          >{{ TabbarItemNameEnum.tabD }}</span
        >
        <template #icon="props">
          <img :src="props.active ? images.TabDCurIcon : images.TabDIcon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<style scoped lang="scss">
.active {
  color: #2bd2ff;
}
.inactive {
  color: #999999;
}
</style>
