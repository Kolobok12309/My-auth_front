const roles = {
  0: {
    name: 'Администратор',
    icon: 'star',
  },
  1: {
    name: 'Директор',
    icon: 'tag',
  },
  2: {
    name: 'Пользователь',
    icon: 'user',
  },
};

export default {
  props: {
    value: {
      type: Number,
      default: 2,
      validator: (v) =>
        v >= 0 && v <= 2,
    },
  },

  computed: {
    role() {
      return roles[this.value];
    },
  },
};
