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

export default (store) => {
  const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes,
  });

  router.beforeEach((to, from, next) => {
    const isGuest = store.getters['user/isGuest'];

    if (to.meta.needAuth && isGuest) next('/');
    else next();
  });

  return router;
};
