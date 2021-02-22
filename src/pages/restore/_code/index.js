import flatry from 'flatry';
import { mapActions } from 'vuex';
import Card from 'primevue/card';
import ProgressSpinner from 'primevue/progressspinner';

import { restoreEnd } from '@/api/user';

export default {
  components: {
    Card,
    ProgressSpinner,
  },

  computed: {
    code() {
      return this.$route.params.code;
    },
  },

  methods: {
    ...mapActions('user', ['setTokens', 'loadUser']),
  },

  async created() {
    if (!this.code) return this.$router.push('/');

    {
      const [err, { refreshToken, accessToken } = {}] = await flatry(restoreEnd(this.$axios, this.code));

      if (err) {
        return this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка восстановления пароля',
          life: 5000,
        });
      }

      this.setTokens({
        refreshToken,
        accessToken,
      });
    }
    {
      const [err, { id } = {}] = await this.loadUser();

      if (err) {
        return this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка получения профиля',
          life: 5000,
        });
      }

      this.$router.push(`/user/${id}/profile`);
      this.$toast.add({
        severity: 'success',
        summary: 'Пароль успешно восстановлен',
        life: 5000,
      });
    }
  },
};
