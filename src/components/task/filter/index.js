import mapSyncProps from '@/utils/map-sync-props';

import components from './components';

export default {
  name: 'TaskFilter',

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

    hideUser: {
      type: Boolean,
      default: false,
    },

    // Filter
    title: {
      type: String,
      default: '',
    },

    userId: {
      type: Number,
      default: null,
    },

    groupId: {
      type: Number,
      default: null,
    },

    status: {
      type: Number,
      default: null,
    },
  },

  emits: ['submit', 'update:title', 'update:status', 'update:userId', 'update:groupId'],

  computed: {
    ...mapSyncProps(['title', 'status', 'userId', 'groupId']),
  },

  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
