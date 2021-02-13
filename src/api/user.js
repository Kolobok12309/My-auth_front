export const signIn = ({ $post }, body) =>
  $post('/signIn', body);

export const signUp = ({ $post }, body) =>
  $post('/signUp', body);

export const signOut = ({ $post }) =>
  $post('/signOut');

export const refreshToken = ({ $post }) =>
  $post('/refresh');

export const getTokens = ({ $get }) =>
  $get('/tokens');

export const getUserTokens = ({ $get }, userId) =>
  $get(`/tokens/${userId}`);

export const revokeToken = ({ $delete }, tokenId) =>
  $delete(`/tokens/${tokenId}`);

export const getUsers = ({ $get }, params) =>
  $get('/user', { params });

export const searchUsers = ({ $get }, text = '', filter = {}) =>
  $get('/user/search', { params: { text, ...filter } });

export const getSelf = ({ $get }) =>
  $get('/user/self');

export const getUser = ({ $get }, id) =>
  $get(`/user/${id}`);

export const updateUser = ({ $patch }, id, body) =>
  $patch(`/user/${id}`, body);

export const deleteUser = ({ $delete }, id) =>
  $delete(`/user/${id}`);
