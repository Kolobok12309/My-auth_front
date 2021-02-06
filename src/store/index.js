import { createStore } from 'vuex';

import user from './user';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async init({ dispatch }) {
      await Promise.all([
        dispatch('user/init', null, { root: true }),
      ]);
    },
  },
  modules: {
    user,
  },
});
