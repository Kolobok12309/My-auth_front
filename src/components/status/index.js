import Tag from 'primevue/tag';

export default {
  components: {
    Tag,
  },

  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    text() {
      switch (this.value) {
        case 0:
          return 'Выполнить';
        case 1:
          return 'На выполнении';
        case 2:
          return 'Выполнено';
        case 3:
          return 'Просрочено';
        default:
          return 'Неизвестно';
      }
    },
  },
};
