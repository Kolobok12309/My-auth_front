import components from './components';

export default {
  name: 'UsersTable',

  components,

  props: {
    title: {
      type: String,
      default: 'Задачи',
    },

    users: {
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
    onRowSelect(user) {
      this.$router.push(`/user/${user.id}/profile`);
    },
  },
};
