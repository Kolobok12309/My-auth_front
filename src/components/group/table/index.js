import components from './components';

export default {
  name: 'GroupsTable',

  components,

  props: {
    title: {
      type: String,
      default: 'Отделы',
    },

    groups: {
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
    onRowSelect(group) {
      this.$router.push(`/group/${group.id}/tasks`);
    },
  },
};
