import Column from 'primevue/column';

import DataTable from '@/components/table';
import TaskStatus from '@/components/status';
import User from '@/components/user/view';
import Group from '@/components/group/view';

export default {
  components: {
    Column,
    DataTable,
    TaskStatus,
    User,
    Group,
  },

  props: {
    title: {
      type: String,
      default: 'Задачи',
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
    onRowSelect(task) {
      this.$router.push(`/task/${task.id}`);
    },
  },
};
