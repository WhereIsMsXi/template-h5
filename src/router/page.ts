import { HOME_PATH, TabbarItemNameEnum } from '@/constants';

export default [
  {
    path: '/auth',
    name: 'auth',
    component: () =>
      import(/* webpackChunkName: "pages" */ '@/pages/AuthView.vue'),
  },
  {
    path: HOME_PATH,
    name: '首页',
    component: () =>
      import(/* webpackChunkName: "pages" */ '@/pages/IndexView.vue'),
    redirect: TabbarItemNameEnum.tabA,
    meta: {
      keepAlive: true,
    },
    children: [
      {
        path: TabbarItemNameEnum.tabA,
        component: () =>
          import(/* webpackChunkName: "pages" */ '@/pages/components/TabA.vue'),
        meta: {
          keepAlive: true,
        },
      },
      {
        path: TabbarItemNameEnum.tabB,
        component: () =>
          import(/* webpackChunkName: "pages" */ '@/pages/components/TabB.vue'),
        meta: {
          keepAlive: true,
        },
      },
      {
        path: TabbarItemNameEnum.tabC,
        component: () =>
          import(/* webpackChunkName: "pages" */ '@/pages/components/TabC.vue'),
        meta: {
          keepAlive: true,
        },
      },
      {
        path: TabbarItemNameEnum.tabD,
        component: () =>
          import(/* webpackChunkName: "pages" */ '@/pages/components/TabD.vue'),
        meta: {
          keepAlive: true,
        },
      },
    ],
  },
];
