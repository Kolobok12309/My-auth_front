import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "guest" */ '@/pages/index'),
    meta: {
      needAuth: false,
    },
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "guest" */ '@/pages/signIn'),
    meta: {
      needAuth: false,
    },
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "guest" */ '@/pages/signUp'),
    meta: {
      needAuth: false,
    },
  },
  {
    path: '/task',
    redirect: '/task/my',
    meta: {
      needAuth: true,
    },
  },
  {
    path: '/task/:type(my|group|all)',
    name: 'Tasks',
    component: () => import('@/pages/task'),
    meta: {
      needAuth: true,
    },
  },
];

export default (store) => {
  const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes,
  });

  router.beforeEach((to, from, next) => {
    const isGuest = store.getters['user/isGuest'];

    if (!Object.prototype.hasOwnProperty.call(to.meta, 'needAuth')) next();
    else if (to.meta.needAuth !== isGuest) {
      next();
    } else {
      next(isGuest ? '/' : '/task');
    }
  });

  return router;
};
