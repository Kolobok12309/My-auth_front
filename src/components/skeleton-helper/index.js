import Skeleton from 'primevue/skeleton';

export default {
  inheritAttrs: false,

  components: {
    Skeleton,
  },

  props: {
    pending: {
      type: Boolean,
      default: false,
    },
  },
};
