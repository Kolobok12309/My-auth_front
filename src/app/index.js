import { mapGetters } from 'vuex';
import Toast from 'primevue/toast';
import Menubar from 'primevue/menubar';

export default {
  components: {
    Toast,
    Menubar,
  },

  data() {
    return {
      navItems: [
        {
          label: 'Главная',
          to: '/',
        },
        {
          label: 'Задачи',
          visible: () => !this.isGuest,
          items: [
            {
              label: 'Мои задачи',
            },
            {
              label: 'Задачи отдела',
            },
          ],
        },
        {
          label: 'Настройки',
          visible: () => !this.isGuest,
        },
        {
          label: 'Войти',
          to: '/signIn',
          visible: () => this.isGuest,
        },
      ],
    };
  },

  computed: {
    ...mapGetters('user', ['isGuest']),
  },

  created() {
    this.$store.dispatch('user/init');
  },
};
