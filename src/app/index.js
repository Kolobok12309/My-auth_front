import { mapGetters, mapActions, mapState } from 'vuex';
import flatry from 'flatry';
import Toast from 'primevue/toast';
import Menubar from 'primevue/menubar';

export default {
  components: {
    Toast,
    Menubar,
  },

  computed: {
    ...mapState('user', ['id', 'groupId']),

    ...mapGetters('user', ['isGuest', 'hasGroup', 'isDirector', 'isAdmin']),

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
          label: 'Мой отдел',
          to: `/group/${this.groupId}/tasks`,
          visible: () => !this.isGuest && this.hasGroup,
        },
        {
          label: 'Новая задача',
          to: '/task/new',
          visible: () => !this.isGuest,
        },
        {
          label: 'Новый отдел',
          to: '/group/new',
          visible: () => !this.isGuest && (this.isAdmin || this.isDirector),
        },
        {
          label: 'Сущности',
          to: '/all/tasks',
          visible: () => !this.isGuest && (this.isAdmin || this.isDirector),
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
