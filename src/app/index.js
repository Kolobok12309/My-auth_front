import Toast from 'primevue/toast';
import Menubar from 'primevue/menubar';

import { navItems } from './config';

export default {
  components: {
    Toast,
    Menubar,
  },

  data() {
    return {
      navItems,
    };
  },

  computed: {
  },
};
