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

const isRefreshTokenExpired = (token) => {
  try {
    const [, encodedPayload] = token.split('.');

    const payload = JSON.parse(atob(encodedPayload));
    const now = Date.now();

    return payload.exp * 1000 < now;
  } catch (err) {
    return true;
  }
};

class MyAxios {
  instance;

  app;

  refreshPromise;

  constructor(options) {
    const instance = axios.create(options);

    initRequestHelpers(instance);

    instance.interceptors.response.use(null, this.onError.bind(this));
    instance.interceptors.request.use(this.beforeRequest.bind(this));

    this.instance = instance;
    this.app = null;
    this.refreshPromise = null;
  }

  setApp(app = null) {
    this.app = app;
  }

  beforeRequest(config) {
    const { $store } = this.app.config.globalProperties;

    if (!$store) return config;

    const token = $store.state.user.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }

  async onError(error) {
    if (isCancel(error)) return error;

    let serverError = null;
    const config = error.config || {};
    const response = error.response || {};
    const data = response.data || {};
    const { $store, $router } = this.app.config.globalProperties;

    if (typeof data.message === 'string') serverError = data.message;
    else if (Array.isArray(data.message)) serverError = data.message.join(', ');
    else if (data.error) serverError = data.error;

    if (response.status === 401) {
      if ($store) {
        const { refreshToken } = $store.state.user;

        if (!refreshToken || isRefreshTokenExpired(refreshToken)) {
          $store.dispatch('user/setTokens');
          $store.commit('user/setUser');
        } else {
          try {
            const { accessToken } = await this.refreshToken();

            config.headers.Authorization = `Bearer ${accessToken}`;

            return axios.request(config);
          } catch (err) {
            $store.dispatch('user/setTokens');
            $store.commit('user/setUser');
          }
        }
      }

      if ($router) {
        $router.push({ name: 'SignIn' });
      }
    }

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
  }

  async refreshToken() {
    if (this.refreshPromise) return this.refreshPromise;

    const { $store } = this.app.config.globalProperties;

    this.refreshPromise = $store.dispatch('user/refreshToken');

    return this.refreshPromise
      .finally(() => {
        this.refreshPromise = null;
      });
  }
}

const myAxios = new MyAxios({
  baseURL: process.env.VUE_APP_API_URL,
});

export const axiosInstance = myAxios.instance;

export default {
  install(app) {
    const { globalProperties } = app.config;
    const { $store } = globalProperties;

    myAxios.setApp(app);

    globalProperties.$axios = axiosInstance;

    if ($store) {
      $store.$axios = axiosInstance;
    }
  },
};
