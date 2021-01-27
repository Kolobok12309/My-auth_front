import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/index/index.vue'),
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import('@/pages/signIn/index.vue'),
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('@/pages/signUp/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

export default router;
