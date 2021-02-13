import Column from 'primevue/column';

import DataTable from '@/components/table';
import DateView from '@/components/date';

export default {
  components: {
    Column,
    DataTable,
    DateView,
  },

  props: {
    tokens: {
      type: Array,
      default: () => [],
    },

    pending: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['delete'],

  methods: {
    onDelete(token) {
      this.$emit('delete', token);
    },
  },
};
