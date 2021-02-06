import flatry from 'flatry';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import 'normalize.css';
import 'primevue/resources/themes/vela-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import App from './app/index.vue';
import getRouter from './router';
import store from './store';

// Plugins
import axiosPlugin from './plugins/axios';

const initApp = async () => {
  const app = createApp(App)
    .use(store)
    .use(axiosPlugin);

  await flatry(store.dispatch('init'));

  return app
    .use(getRouter(store))
    .use(PrimeVue, { ripple: true })
    .use(ToastService);
};

initApp()
  .then((app) => {
    window.app = app;

    app.mount('#app');
  });
