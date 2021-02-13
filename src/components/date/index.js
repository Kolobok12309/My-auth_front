export default {
  props: {
    value: {
      type: [Number, String, Date],
      default: null,
    },
  },

  computed: {
    text() {
      if (!this.value) return 'Не указана';

      const date = new Date(this.value);

      return date.toLocaleString();
    },
  },
};
