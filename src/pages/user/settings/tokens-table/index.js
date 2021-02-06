import Column from 'primevue/column';

import DataTable from '@/components/table';

export default {
  components: {
    Column,
    DataTable,
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
