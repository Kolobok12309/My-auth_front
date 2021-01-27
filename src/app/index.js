import { mapGetters, mapActions } from 'vuex';
import flatry from 'flatry';
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
          command: () => this.signOut(),
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

    async signOut() {
      const [err] = await flatry(this.quit());

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка при выходе',
          life: 5000,
        });
      } else {
        this.$router.push('/');
      }
    },
  },

  created() {
    this.$store.dispatch('user/init');
  },
};
