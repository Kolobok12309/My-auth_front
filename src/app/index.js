import { mapGetters, mapActions } from 'vuex';
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
        {
          label: 'Выход',
          command: () => this.quit(),
          visible: () => !this.isGuest,
        },
      ],
    };
  },

  computed: {
    ...mapGetters('user', ['isGuest']),
  },

  methods: {
    ...mapActions('user', ['quit']),
  },

  created() {
    this.$store.dispatch('user/init');
  },
};
