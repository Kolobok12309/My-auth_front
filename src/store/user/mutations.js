export default {
  setToken(state, token = null) {
    state.accessToken = token;
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
