import { mapGetters, mapState } from 'vuex';

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
    ...mapGetters('user', ['isAdmin', 'isDirector', 'hasGroup']),
    ...mapState('user', ['groupId', 'id']),

    canEditStatus() {
      if (this.isAdmin || this.isDirector) return true;

      if (!this.hasGroup) return false;
      if (this.groupId !== this.task.groupId) return false;
      if (this.task.userId && this.task.userId !== this.id) return false;

      return true;
    },
  },

  methods: {
    updateStatus(newVal) {
      this.$emit('updateStatus', newVal);
    },
  },
};
