import { signIn, getSelf } from '@/api/user';

const ACCESS_TOKEN_STORAGE = 'access_token';

export default {
  async signIn({ dispatch }, { login, password }) {
    console.log(this.$axios);
    const { accessToken } = await signIn(this.$axios, { login, password });

    dispatch('setToken', accessToken);

    await dispatch('loadUser');
  },

  setToken({ commit }, token) {
    commit('setToken', token);
    window.localStorage.setItem(ACCESS_TOKEN_STORAGE, token);
  },

  async loadUser({ commit }) {
    const user = await getSelf(this.$axios);

    console.log(user);
    commit('setUser', user);

    return user;
  },

  async init({ commit, dispatch }) {
    const token = window.localStorage.getItem(ACCESS_TOKEN_STORAGE);

    if (token) {
      commit('setToken', token);

      await dispatch('loadUser');
    }
  },
};
