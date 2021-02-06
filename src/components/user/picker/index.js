import Dropdown from 'primevue/dropdown';
import throttle from 'lodash/throttle';

import { searchUsers } from '@/api/user';

export default {
  components: {
    Dropdown,
  },

  props: {
    placeholder: {
      type: String,
      default: 'Пользователь',
    },
  },

  data() {
    return {
      users: [],
    };
  },

  methods: {
    searchUsers: throttle(async function ({ value = '' } = {}) {
      try {
        this.users = await searchUsers(this.$axios, value);
      } catch (err) {}
    }, 300),
  },

  mounted() {
    this.searchUsers();
  },
};
