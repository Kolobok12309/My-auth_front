import Dropdown from 'primevue/dropdown';

import { statuses } from '../config';

export default {
  components: {
    Dropdown,
  },

  computed: {
    statuses: () => statuses,
  },
};
