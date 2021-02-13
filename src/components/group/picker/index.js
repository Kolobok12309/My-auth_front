import Dropdown from 'primevue/dropdown';
import throttle from 'lodash/throttle';

import { searchGroups, getGroup } from '@/api/group';

export default {
  name: 'GroupPicker',

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
      group: null,
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

    allGroups() {
      const groups = this.groups
        .filter(({ id }) => id !== this.compValue);

      if (this.group) return [this.group, ...groups];

      return groups;
    },
  },

  watch: {
    async compValue(newVal) {
      if (newVal) {
        await this.checkAndLoadGroup();
      } else {
        this.group = null;
      }
    },
  },

  methods: {
    searchGroups: throttle(async function ({ value = null } = {}) {
      try {
        this.groups = await searchGroups(this.$axios, value);
      } catch (err) {}
    }, 300),

    async checkAndLoadGroup() {
      if (!this.compValue) return;

      const loaded = this.groups
        .find(({ id }) => id === this.compValue);

      if (loaded) {
        this.group = loaded;
      } else {
        try {
          const { id, name } = await getGroup(this.$axios, this.compValue);

          this.group = { id, name };
        } catch (err) {}
      }
    },
  },

  async created() {
    await this.searchGroups();
    await this.checkAndLoadGroup();
  },
};
