export default {
  setTokens(state, { accessToken = null, refreshToken = null } = {}) {
    state.accessToken = accessToken;
    state.refreshToken = refreshToken;
  },

  setUser(state, {
    id = null,
    username = null,
    email = null,
    groupId = null,
    role = null,
  } = {}) {
    state.id = id;
    state.username = username;
    state.email = email;
    state.groupId = groupId;
    state.role = role;
  },
};
