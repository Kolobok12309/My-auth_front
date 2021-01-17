import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import 'normalize.css';
import 'primevue/resources/themes/vela-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import App from './app/index.vue';
import router from './router';
import store from './store';

// Plugins
import axiosPlugin from './plugins/axios';

createApp(App)
  .use(store)
  .use(router)
  .use(axiosPlugin)
  .use(PrimeVue, { ripple: true })
  .use(ToastService)
  .mount('#app');
