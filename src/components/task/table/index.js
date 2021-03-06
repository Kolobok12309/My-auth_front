import components from './components';

export default {
  name: 'TasksTable',

  components,

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
