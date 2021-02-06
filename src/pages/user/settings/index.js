import flatry from 'flatry';
import Card from 'primevue/card';

import { getUserTokens, getTokens } from '@/api/user';

import TokensTable from './tokens-table';

export default {
  components: {
    Card,
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

  data() {
    return {
      tokens: [],
      tokensPending: true,

      settingsPending: false,
    };
  },

  computed: {

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
    },
  },

  async mounted() {
    await this.loadTokens();
  },
};
