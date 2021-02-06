import { mapGetters } from 'vuex';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

import GroupPicker from '@/components/group/picker';

const roles = [
  {
    id: 0,
    label: 'Админ',
  },
  {
    id: 1,
    label: 'Директор',
  },
  {
    id: 2,
    label: 'Пользователь',
  },
];

export default {
  components: {
    Card,
    InputText,
    GroupPicker,
    Dropdown,
    Button,
  },

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

    roles: () => roles,

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
