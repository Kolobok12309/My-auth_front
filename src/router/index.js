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
    path: '/task/:id(\\d+)',
    name: 'Task',
    component: () => import(/* webpackChunkName: "tasks" */ '@/pages/task'),
    meta: {
      needAuth: true,
    },
    props: ({ params }) => ({ id: Number(params.id) }),
  },
  {
    path: '/task/:id(\\d+)/edit',
    name: 'TaskEdit',
    component: () => import(/* webpackChunkName: "tasks" */ '@/pages/task/edit'),
    meta: {
      needAuth: true,
    },
    props: ({ params }) => ({ id: Number(params.id) }),
  },
  {
    path: '/user/:id(\\d+)',
    component: () => import(/* webpackChunkName: "profile" */ '@/pages/user'),
    meta: {
      needAuth: true,
    },
    props: ({ params }) => ({ id: Number(params.id) }),
    children: [
      {
        path: 'profile',
        alias: '',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ '@/pages/user/profile'),
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "profile" */ '@/pages/user/settings'),
      },
    ],
  },
];

export default (store) => {
  const router = createRouter({
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    routes,
  });

  router.beforeEach(async (to, from, next) => {
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
