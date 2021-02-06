import flatry from 'flatry';
import { mapState, mapGetters } from 'vuex';

import { axiosInstance } from '@/plugins/axios';
import { getUser } from '@/api/user';

import components from './components';

export default {
  components,

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      user: null, // Async
      pending: true,
    };
  },

  computed: {
    ...mapState('user', {
      myId: 'id',
    }),

    ...mapGetters('user', ['isAdmin']),

    isMe() {
      return this.id === this.myId;
    },

    toolbarItems() {
      const { id } = this;

      return [
        {
          label: 'Профиль',
          icon: 'pi pi-user',
          to: `/user/${id}/profile`,
        },
        {
          label: 'Настройки',
          icon: 'pi pi-cog',
          to: `/user/${id}/settings`,
          visible: () => this.isMe || this.isAdmin,
        },
      ];
    },
  },

  methods: {
    async onUpdate() {
      const [err, user] = await flatry(getUser(axiosInstance, this.id));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка обновления информации о пользователе',
          life: 5000,
        });
        return;
      }

      this.user = user;
      if (this.isMe) this.$store.commit('user/setUser', user);
    },
  },

  async beforeRouteEnter(to, from, next) {
    const { id } = to.params;

    const [err, user] = await flatry(getUser(axiosInstance, id));

    if (err) {
      this.$toast.add({
        severity: 'error',
        summary: err.serverError || 'Ошибка получения пользователя',
        life: 5000,
      });

      return next(false);
    }

    next((vm) => {
      // eslint-disable-next-line no-param-reassign
      vm.user = user;
      // eslint-disable-next-line no-param-reassign
      vm.pending = false;
    });
  },

  async beforeRouteUpdate(to, from, next) {
    const { id } = to.params;

    if (id === from.params.id) return next();

    this.pending = true;
    const [err, user] = await flatry(getUser(axiosInstance, id));
    this.pending = false;

    if (err) {
      this.$toast.add({
        severity: 'error',
        summary: err.serverError || 'Ошибка получения пользователя',
        life: 5000,
      });

      next(false);
    } else {
      this.user = user;
      next();
    }
  },
};
