export const getTasks = ({ $get }, params = {}) =>
  $get('/task', { params });

export const getTask = ({ $get }, id) =>
  $get(`/task/${id}`);

export const createTask = ({ $post }, body) =>
  $post('/task', body);

export const updateTask = ({ $patch }, id, body) =>
  $patch(`/task/${id}`, body);

export const deleteTask = ({ $delete }, id) =>
  $delete(`/task/${id}`);

export const addFiles = ({ $post }, files) => {
  const formData = new FormData();

  files.forEach((file) => formData.append('file', file));

  return $post('/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const removeFile = ({ $delete }, id) =>
  $delete(`/files/${id}`);
