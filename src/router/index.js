import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

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
    path: '/restore',
    name: 'Restore',
    component: () => import(/* webpackChunkName: "guest" */ '@/pages/restore'),
    meta: {
      needAuth: false,
    },
  },
  {
    path: '/restore/:code',
    name: 'RestoreEnd',
    component: () => import(/* webpackChunkName: "guest" */ '@/pages/restore/_code'),
    meta: {
      needAuth: false,
    },
  },
  {
    path: '/task/new',
    name: 'TaskCreate',
    component: () => import(/* webpackChunkName: "tasks" */ '@/pages/task/new'),
    meta: {
      needAuth: true,
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
  {
    path: '/group/new',
    component: () => import(/* webpackChunkName: "group" */ '@/pages/group/new'),
    meta: {
      needAuth: true,
    },
  },
  {
    path: '/group/:id(\\d+)',
    component: () => import(/* webpackChunkName: "group" */ '@/pages/group'),
    meta: {
      needAuth: true,
    },
    props: ({ params }) => ({ id: Number(params.id) }),
    children: [
      {
        path: 'tasks',
        alias: '',
        name: 'GroupTasks',
        component: () => import(/* webpackChunkName: "group" */ '@/pages/group/tasks'),
      },
      {
        path: 'users',
        name: 'GroupUsers',
        component: () => import(/* webpackChunkName: "group" */ '@/pages/group/users'),
      },
      {
        path: 'edit',
        name: 'GroupEdit',
        component: () => import(/* webpackChunkName: "group" */ '@/pages/group/edit'),
      },
    ],
  },
  {
    path: '/all',
    component: () => import(/* webpackChunkName: "all" */ '@/pages/all'),
    meta: {
      needAuth: true,
    },
    children: [
      {
        path: 'tasks',
        name: 'AllTasks',
        component: () => import(/* webpackChunkName: "all" */ '@/pages/all/tasks'),
      },
      {
        path: 'groups',
        name: 'AllGroups',
        component: () => import(/* webpackChunkName: "all" */ '@/pages/all/groups'),
      },
      {
        path: 'users',
        name: 'AllUsers',
        component: () => import(/* webpackChunkName: "all" */ '@/pages/all/users'),
      },
    ],
  },
];

const getHistory = (mode = 'hash') => {
  switch (mode) {
    case 'history':
      return createWebHistory(process.env.VUE_APP_BASE_URL);
    case 'hash':
    default:
      return createWebHashHistory(process.env.VUE_APP_BASE_URL);
  }
};

export default (store) => {
  const router = createRouter({
    history: getHistory(process.env.VUE_APP_HISTORY_MODE),
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
