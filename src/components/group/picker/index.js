import Dropdown from 'primevue/dropdown';
import throttle from 'lodash/throttle';

import { searchGroups } from '@/api/group';

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
    searchGroups: throttle(async function ({ value = '' } = {}) {
      try {
        this.groups = await searchGroups(this.$axios, value);
      } catch (err) {}
    }, 300),
  },

  mounted() {
    this.searchGroups();
  },
};
