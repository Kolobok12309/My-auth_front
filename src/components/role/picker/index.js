import Dropdown from 'primevue/dropdown';

import { roles } from '../config';

export default {
  components: {
    Dropdown,
  },

  computed: {
    roles: () => roles,
  },
};
