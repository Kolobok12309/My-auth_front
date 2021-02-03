import Column from 'primevue/column';

import Table from '@/components/table';
import TaskStatus from '@/components/status';

export default {
  components: {
    Column,
    Table,
    TaskStatus,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    tasks: {
      type: Array,
      default: () => [],
    },

    pending: {
      type: Boolean,
      default: false,
    },

    page: {
      type: Number,
      default: 1,
    },

    perPage: {
      type: Number,
      default: 20,
    },

    totalCount: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    onEdit(task) {
      this.$emit('edit', task);
    },

    onDelete(task) {
      this.$emit('delete', task);
    },
  },
};
