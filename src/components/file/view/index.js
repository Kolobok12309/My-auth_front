import Card from 'primevue/card';

export default {
  name: 'FileView',

  components: {
    Card,
  },

  props: {
    file: {
      type: Object,
      required: true,
    },

    canRemove: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['remove'],

  computed: {
    url() {
      return process.env.VUE_APP_STATIC_PATH + this.file.name;
    },
  },

  methods: {
    onRemove() {
      this.$emit('remove', this.file);
    },
  },
};
