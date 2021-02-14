import { mapGetters } from 'vuex';

import components from './components';

export default {
  components,

  props: {
    user: {
      type: Object,
      required: true,
    },

    isMe: {
      type: Boolean,
      default: false,
    },

    pending: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['submit'],

  data() {
    return {
      userData: null,
    };
  },

  computed: {
    ...mapGetters('user', ['isAdmin']),

    userIsAdmin() {
      return this.user.role === 0;
    },

    showRoles() {
      return this.isAdmin && (this.isMe || !this.userIsAdmin);
    },
  },

  watch: {
    user: {
      handler: 'resetUserData',
      immediate: true,
    },
  },

  methods: {
    resetUserData() {
      const { email, groupId = null, role = 2 } = this.user;

      this.userData = {
        email,
        groupId,
        role,
      };
    },

    onSubmit() {
      const data = { ...this.userData };

      if (!this.showRoles) delete data.role;

      this.$emit('submit', data);
    },
  },
};
