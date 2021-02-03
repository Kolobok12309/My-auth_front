import {
  signIn, signUp, getSelf, signOut,
} from '@/api/user';

const ACCESS_TOKEN_STORAGE = 'access_token';

export default {
  async signUp({ commit }, body) {
    const user = await signUp(this.$axios, body);
    const { accessToken } = await signIn(this.$axios, {
      login: body.email,
      passowrd: body.password,
    });

    commit('setToken', accessToken);
    commit('setUser', user);
  },

  async signIn({ dispatch }, body) {
    const { accessToken } = await signIn(this.$axios, body);

    dispatch('setToken', accessToken);

    return dispatch('loadUser');
  },

  setToken({ commit }, token) {
    commit('setToken', token);
    window.localStorage.setItem(ACCESS_TOKEN_STORAGE, token || '');
  },

  async loadUser({ commit }) {
    const user = await getSelf(this.$axios);

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

  async quit({ dispatch, commit }) {
    await signOut(this.$axios);

    dispatch('setToken', null);
    commit('setUser');
  },
};
