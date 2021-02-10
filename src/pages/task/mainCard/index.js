import { mapGetters } from 'vuex';

import components from './components';

export default {
  components,

  props: {
    pending: {
      type: Boolean,
      default: false,
    },

    task: {
      type: Object,
      default: null,
    },
  },

  emits: ['updateStatus'],

  computed: {
    ...mapGetters('user', ['isAdmin', 'isDirector']),
  },

  methods: {
    updateStatus(newVal) {
      this.$emit('updateStatus', newVal);
    },
  },
};
