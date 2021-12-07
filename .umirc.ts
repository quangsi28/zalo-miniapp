import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
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
