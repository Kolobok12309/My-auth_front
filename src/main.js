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
    .use(PrimeVue, {
      ripple: true,
      locale: {
        accept: 'Да',
        reject: 'Нет',
        choose: 'Выбрать',
        upload: 'Загрузить',
        cancel: 'Отмена',
        clear: 'Очистить',
        dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мрт', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Снт', 'Окт', 'Нбр'],
        today: 'Сегодня',
        weekHeader: 'Нд',
        firstDayOfWeek: 1,
        dateFormat: 'dd.mm.yy',
        weak: 'Слабый',
        medium: 'Средний',
        strong: 'Сильный',
        passwordPrompt: 'Введите пароль',
      },
    })
    .use(ToastService);
};

initApp()
  .then((app) => {
    window.app = app;

    app.mount('#app');
  });
