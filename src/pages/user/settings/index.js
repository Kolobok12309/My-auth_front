import flatry from 'flatry';

import {
  getUserTokens, getTokens, revokeToken, updateUser, changePassword,
} from '@/api/user';

import SettingsForm from './settings-form';
import PasswordBlock from './password-block';
import TokensTable from './tokens-table';

export default {
  components: {
    SettingsForm,
    PasswordBlock,
    TokensTable,
  },

  props: {
    user: {
      type: Object,
      required: true,
    },

    isMe: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['update'],

  data() {
    return {
      tokens: [],
      tokensPending: true,

      settingsPending: false,

      passwordPending: false,
    };
  },

  methods: {
    async loadTokens() {
      const method = this.isMe ? getTokens : getUserTokens;

      this.tokensPending = true;
      const [err, tokens = []] = await flatry(method(this.$axios, this.user.id));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка загрузки токенов',
          life: 5000,
        });
        this.tokensPending = false;
        return;
      }

      this.tokens = tokens;
      this.tokensPending = false;
    },

    async onTokenDelete(token) {
      const { id } = token;

      this.tokensPending = true;
      const [err] = await flatry(revokeToken(this.$axios, id));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка при удалении токена',
          life: 5000,
        });
        this.tokensPending = false;
        return;
      }

      const tokenIndex = this.tokens.indexOf(token);
      if (~tokenIndex) {
        this.tokens.splice(tokenIndex, 1);
      }

      this.$toast.add({
        severity: 'success',
        summary: 'Токен успешно удалён',
        life: 5000,
      });
      this.tokensPending = false;
    },

    async onSettingsUpdate(data) {
      const { id } = this.user;

      this.settingsPending = true;
      const [err] = await flatry(updateUser(this.$axios, id, data));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка при изменении настроек',
          life: 5000,
        });
        this.settingsPending = false;
        return;
      }

      this.$toast.add({
        severity: 'success',
        summary: 'Настройки успешно изменены',
        life: 5000,
      });
      this.$emit('update');

      this.settingsPending = false;
    },

    async onPasswordUpdate({ password, oldPassword }) {
      const { id } = this.user;

      this.passwordPending = true;
      const [err] = await flatry(changePassword(this.$axios, id, password, oldPassword));

      if (err) {
        this.$toast.add({
          severity: 'error',
          summary: err.serverError || 'Ошибка при изменении пароля',
          life: 5000,
        });
        this.passwordPending = false;
        return;
      }

      this.$toast.add({
        severity: 'success',
        summary: 'Пароль успешно изменен',
        life: 5000,
      });
      this.passwordPending = false;
      this.$refs.password.clear();
    },
  },

  async mounted() {
    await this.loadTokens();
  },
};
