import mapSyncProps from '@/utils/map-sync-props';

import components from './components';

export default {
  name: 'UserFilter',

  components,

  props: {
    pending: {
      type: Boolean,
      default: false,
    },

    hideGroup: {
      type: Boolean,
      default: false,
    },

    // Filter
    username: {
      type: String,
      default: '',
    },

    email: {
      type: String,
      default: '',
    },

    role: {
      type: Number,
      default: null,
    },

    groupId: {
      type: Number,
      default: null,
    },
  },

  emits: ['submit', 'update:username', 'update:email', 'update:role', 'update:groupId'],

  computed: {
    ...mapSyncProps(['username', 'email', 'role', 'groupId']),
  },

  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
