import Dropdown from 'primevue/dropdown';
import throttle from 'lodash/throttle';

import { searchUsers, getUser } from '@/api/user';

export default {
  name: 'UserPicker',

  components: {
    Dropdown,
  },

  props: {
    modelValue: {
      type: Number,
      default: null,
    },

    placeholder: {
      type: String,
      default: 'Пользователь',
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      users: [],
      user: null,
    };
  },

  computed: {
    compValue: {
      get() {
        return this.modelValue;
      },

      set(newVal) {
        this.$emit('update:modelValue', newVal);
      },
    },

    allUsers() {
      const users = this.users
        .filter(({ id }) => id !== this.compValue);

      if (this.user) return [this.user, ...users];

      return users;
    },
  },

  watch: {
    async compValue(newVal) {
      if (newVal) {
        await this.checkAndLoadUser();
      } else {
        this.user = null;
      }
    },
  },

  methods: {
    searchUsers: throttle(async function ({ value = null } = {}) {
      try {
        this.users = await searchUsers(this.$axios, value);
      } catch (err) {}
    }, 300),

    async checkAndLoadUser() {
      const loaded = this.users
        .find(({ id }) => id === this.compValue);

      if (loaded) {
        this.user = loaded;
      } else {
        try {
          const { id, username } = await getUser(this.$axios, this.compValue);

          this.user = { id, username };
        } catch (err) {}
      }
    },
  },

  async created() {
    await this.searchUsers();
    await this.checkAndLoadUser();
  },
};
