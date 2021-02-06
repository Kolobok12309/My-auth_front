import { mapGetters, mapActions, mapState } from 'vuex';
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
    };
  },

  computed: {
    ...mapState('user', ['id']),

    ...mapGetters('user', ['isGuest']),

    navItems() {
      return [
        {
          label: 'Главная',
          to: '/',
        },
        {
          label: 'Профиль',
          to: `/user/${this.id}/profile`,
          visible: () => !this.isGuest,
        },
        {
          label: 'Настройки',
          to: `/user/${this.id}/settings`,
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
      ];
    },
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
};
