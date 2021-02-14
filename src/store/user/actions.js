import {
  signIn, signUp, getSelf, signOut, refreshToken as refreshTokenApi,
} from '@/api/user';

const ACCESS_TOKEN_STORAGE = 'access_token';
const REFRESH_TOKEN_STORAGE = 'refresh_token';

export default {
  async signUp({ commit }, body) {
    const user = await signUp(this.$axios, body);
    const { accessToken, refreshToken } = await signIn(this.$axios, {
      login: body.email,
      password: body.password,
    });

    commit('setTokens', { accessToken, refreshToken });
    commit('setUser', user);
  },

  async signIn({ dispatch }, body) {
    const { accessToken, refreshToken } = await signIn(this.$axios, body);

    dispatch('setTokens', { accessToken, refreshToken });

    return dispatch('loadUser');
  },

  setTokens({ commit }, { accessToken, refreshToken } = {}) {
    commit('setTokens', { accessToken, refreshToken });

    if (accessToken) {
      window.localStorage.setItem(ACCESS_TOKEN_STORAGE, accessToken);
    } else {
      window.localStorage.removeItem(ACCESS_TOKEN_STORAGE);
    }

    if (refreshToken) {
      window.localStorage.setItem(REFRESH_TOKEN_STORAGE, refreshToken);
    } else {
      window.localStorage.removeItem(REFRESH_TOKEN_STORAGE);
    }
  },

  async loadUser({ commit }) {
    const user = await getSelf(this.$axios);

    commit('setUser', user);

    return user;
  },

  async init({ commit, dispatch }) {
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN_STORAGE);
    const refreshToken = window.localStorage.getItem(REFRESH_TOKEN_STORAGE);

    if (accessToken || refreshToken) {
      try {
        commit('setTokens', { accessToken, refreshToken });

        await dispatch('loadUser');
      } catch (err) {
        dispatch('setTokens');
      }
    }
  },

  async refreshToken({ state, dispatch }) {
    const { refreshToken } = state;

    const {
      accessToken,
      refreshToken: newRefreshToken,
    } = await refreshTokenApi(this.$axios, refreshToken);

    dispatch('setTokens', { accessToken, refreshToken: newRefreshToken });

    return { accessToken, refreshToken: newRefreshToken };
  },

  async quit({ dispatch, commit }) {
    await signOut(this.$axios);

    dispatch('setTokens');
    commit('setUser');
  },
};
