import Dropdown from 'primevue/dropdown';
import throttle from 'lodash/throttle';

import { searchGroup } from '@/api/group';

export default {
  components: {
    Dropdown,
  },

  data() {
    return {
      groups: [],
    };
  },

  methods: {
    searchGroup: throttle(async function ({ value = '' } = {}) {
      try {
        this.groups = await searchGroup(this.$axios, value);
      } catch (err) {}
    }, 300),
  },

  mounted() {
    this.searchGroup();
  },
};
