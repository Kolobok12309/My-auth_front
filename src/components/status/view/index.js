import Tag from 'primevue/tag';

import { statuses } from '../config';

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
      const found = statuses
        .find(({ id }) => id === this.value);

      if (!found) return 'Неизвестно';

      return found.label;
    },
  },
};
