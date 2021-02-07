import Sidebar from 'primevue/sidebar';
import Fieldset from 'primevue/fieldset';
import ScrollPanel from 'primevue/scrollpanel';

import File from '@/components/file';
import TaskStatus from '@/components/status/view';

export default {
  components: {
    File,
    TaskStatus,
    Sidebar,
    Fieldset,
    ScrollPanel,
  },

  props: {
    selected: {
      type: Object,
      default: null,
    },
  },
};
