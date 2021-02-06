import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import GroupPicker from '@/components/group/picker';
import UserPicker from '@/components/user/picker';

import mapSyncProps from '@/utils/map-sync-props';

export default {
  components: {
    Card,
    InputText,
    Button,
    GroupPicker,
    UserPicker,
  },

  props: {
    pending: {
      type: Boolean,
      default: false,
    },

    hideGroup: {
      type: Boolean,
      default: false,
    },

    hideUser: {
      type: Boolean,
      default: false,
    },

    // Filter
    text: {
      type: String,
      default: '',
    },

    userId: {
      type: Number,
      default: null,
    },

    groupId: {
      type: Number,
      default: null,
    },
  },

  emits: ['submit', 'update:text', 'update:userId', 'update:groupId'],

  computed: {
    ...mapSyncProps(['text', 'userId', 'groupId']),
  },

  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
