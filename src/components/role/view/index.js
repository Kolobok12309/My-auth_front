import { roles, ADMIN, USER } from '../config';

export default {
  props: {
    value: {
      type: Number,
      default: USER,
      validator: (v) =>
        v >= ADMIN && v <= USER,
    },
  },

  computed: {
    role() {
      return roles[this.value];
    },
  },
};
