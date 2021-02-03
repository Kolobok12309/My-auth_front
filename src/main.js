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

const app = createApp(App)
  .use(store)
  .use(axiosPlugin)
  .use(getRouter(store))
  .use(PrimeVue, { ripple: true })
  .use(ToastService)
  .mount('#app');

window.app = app;
