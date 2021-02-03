import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "guest" */ '@/pages/index'),
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
    path: '/task/:type(my|group|all)',
    name: 'Tasks',
    component: () => import('@/pages/task'),
    meta: {
      needAuth: true,
    },
  },
  {
    path: '/user/:id(\\d+)',
    component: () => import('@/pages/user'),
    meta: {
      needAuth: true,
    },
    props: ({ params }) => ({ id: Number(params.id) }),
    children: [
      {
        path: 'profile',
        alias: '',
        name: 'Profile',
        component: () => import('@/pages/user/profile'),
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/pages/user/settings'),
      },
    ],
  },
];

export default (store) => {
  const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes,
  });

  router.beforeEach((to, from, next) => {
    const { id, accessToken } = store.state.user;
    const isGuest = accessToken === null;

    if (!Object.prototype.hasOwnProperty.call(to.meta, 'needAuth')) next();
    else if (to.meta.needAuth !== isGuest) {
      next();
    } else {
      next(isGuest || !id ? '/' : `/user/${id}/profile`);
    }
  });

  return router;
};
