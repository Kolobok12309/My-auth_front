import Tag from 'primevue/tag';

import { statuses, TODO } from '../config';

export default {
  components: {
    Tag,
  },

  props: {
    value: {
      type: Number,
      default: TODO,
    },
  },

  computed: {
    text() {
      const found = statuses
        .find(({ id }) => id === this.value);

      if (!found) return 'Неизвестно';

      return found.label;
    },
  },
};
