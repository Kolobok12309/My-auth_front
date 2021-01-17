/* eslint-disable no-param-reassign */
import axios, { isCancel } from 'axios';

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
    const onError = (error) => {
      if (isCancel(error)) return error;

      let serverError = null;
      const config = error.config || {};
      const response = error.response || {};
      const data = response.data || {};

      if (typeof data.message === 'string') serverError = data.message;
      else if (Array.isArray(data.message)) serverError = data.message.join(', ');
      else if (data.error) serverError = data.error;

      const info = {
        path: config.url,
        method: config.method,
        requestData: config.data,
        statusCode: response.status,
        statusText: response.statusText,
        serverError,
        data,
      };

      return Promise.reject(info);
    };

    initRequestHelpers(axiosInstance);

    axiosInstance.interceptors.response.use(null, onError);

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
