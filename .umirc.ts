import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mountElementId: 'app',
  dva: {
    hmr: true,
  },
  locale: {
    antd: false,
    title: false,
    default: 'vi-VN',
    baseNavigator: false,
    baseSeparator: '-',
  },
  hash: false,
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/a',
      component: '@/pages/a',
    },
    {
      path: '/b',
      component: '@/pages/b',
    },
  ],
  fastRefresh: {},
});
