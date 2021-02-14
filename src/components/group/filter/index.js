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

    // Filter
    name: {
      type: String,
      default: '',
    },
  },

  emits: ['submit', 'update:name'],

  computed: {
    ...mapSyncProps(['name']),
  },

  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
