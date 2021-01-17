export const signIn = ({ $post }, { login, password }) =>
  $post('/signIn', { login, password });

export const getSelf = ({ $get }) =>
  $get('/user/self');
