import Spinner from 'primevue/progressspinner';

export default {
  inheritAttrs: false,

  components: {
    Spinner,
  },

  props: {
    pending: {
      type: Boolean,
      default: false,
    },
  },
};
