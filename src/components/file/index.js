import Card from 'primevue/card';

export default {
  components: {
    Card,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    url() {
      return process.env.VUE_APP_STATIC_PATH + this.name;
    },
  },
};
