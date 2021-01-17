import axios from 'axios';

export default {
  install(app) {
    const axiosInstance = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });

    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$axios = axiosInstance;
  },
};
