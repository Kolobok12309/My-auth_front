import Dropdown from 'primevue/dropdown';
import throttle from 'lodash/throttle';

import { searchGroups, getGroup } from '@/api/group';

export default {
  components: {
    Dropdown,
  },

  props: {
    modelValue: {
      type: Number,
      default: null,
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      groups: [],
    };
  },

  computed: {
    compValue: {
      get() {
        return this.modelValue;
      },

      set(newVal) {
        this.$emit('update:modelValue', newVal);
      },
    },
  },

  methods: {
    searchGroups: throttle(async function ({ value = '' } = {}) {
      try {
        this.groups = await searchGroups(this.$axios, value);
      } catch (err) {}
    }, 300),
  },

  async mounted() {
    await this.searchGroups();

    if (this.compValue) {
      const isLoaded = this.groups.some(({ id }) => id === this.compValue);

      if (!isLoaded) {
        try {
          const { id, name } = await getGroup(this.$axios, this.compValue);

          this.groups.unshift({ id, name });
        } catch (err) {}
      }
    }
  },
};
