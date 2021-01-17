/* eslint-disable no-param-reassign */
import axios from 'axios';

const initRequestHelpers = (instance) => {
  const methods = ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch'];

  methods.forEach((method) => {
    instance[`$${method}`] = function (...args) {
      return instance[method](...args)
        .then((res) => res && res.data);
    };
  });
};

export default {
  install(app) {
    const axiosInstance = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });

    initRequestHelpers(axiosInstance);

    app.config.globalProperties.$axios = axiosInstance;

    const store = app.config.globalProperties.$store;
    if (store) {
      store.$axios = axiosInstance;

      axiosInstance.interceptors.request.use((config) => {
        const token = store.state.user.accessToken;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      });
    }
  },
};
