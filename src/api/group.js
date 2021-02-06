export const getGroups = ({ $get }, params = {}) =>
  $get('/group', { params });

export const searchGroups = ({ $get }, text = '') =>
  $get('/group/search', { params: { text } });

export const getGroup = ({ $get }, id) =>
  $get(`/group/${id}`);

export const createGroup = ({ $post }, body) =>
  $post('/group', body);

export const updateGroup = ({ $patch }, id, body) =>
  $patch(`/group/${id}`, body);

export const deleteGroup = ({ $delete }, id) =>
  $delete(`/group/${id}`);
