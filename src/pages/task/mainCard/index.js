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

  methods: {

  },
};
