export const signIn = ({ $post }, body) =>
  $post('/signIn', body);

export const getSelf = ({ $get }) =>
  $get('/user/self');

export const signUp = ({ $post }, body) =>
  $post('/signUp', body);

export const signOut = ({ $post }) =>
  $post('/signOut');

export const revokeToken = ({ $delete }, tokenId) =>
  $delete(`/tokens/${tokenId}`);
